import React from 'react'
import client from '../../apollo-client'
import { gql } from '@apollo/client'
import Post from 'components/Post'
import Postside from 'components/Postside'
import BlogPost from 'components/layouts/BlogPost'
import { queryHomepage } from 'api/graphql'

export default function PostPage(props) {
  const { stays = [], page, homepage } = props.data

  const sidebar = stays.map((a) => (
    <Postside
      key={a._meta.id}
      title={a.title[0].text}
      photo={a.photo.s60.url}
      link={`/stays/${a._meta.id}`}
    />
  ))
  return (
    <BlogPost
      title={page.title[0].text}
      sidebarTitle="地方特色"
      sidebar={sidebar}
      data={homepage}
    >
      <Post title={page.title} photo={page.photo.url} content={page.content} />
    </BlogPost>
  )
}

export async function getStaticProps(context) {
  const { params } = context
  const { data } = await client.query({
    query: gql`
      query ($id: String) {
        allStays {
          edges {
            node {
              _meta {
                id
              }
              title
              photo
              content
            }
          }
        }

        stay: allStays(id: $id) {
          edges {
            node {
              _meta {
                id
              }
              title
              photo
              content
            }
          }
        }
      }
    `,
    variables: {
      id: params.id,
    },
  })

  const homepage = await queryHomepage()

  return {
    props: {
      data: {
        homepage,
        stays: data.allStays.edges.map((edge) => edge.node),
        page: data.stay.edges[0].node,
      },
    },
  }
}

export async function getStaticPaths() {
  const { data } = await client.query({
    query: gql`
      query {
        allStays {
          edges {
            node {
              _meta {
                id
              }
            }
          }
        }
      }
    `,
  })

  return {
    paths: data.allStays.edges.map((edge) => ({
      params: { id: edge.node._meta.id },
    })),
    fallback: false,
  }
}
