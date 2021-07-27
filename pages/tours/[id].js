import React from 'react'
import client from '../../apollo-client'
import { gql } from '@apollo/client'
import Post from 'components/Post'
import Postside from 'components/Postside'
import { queryHomepage } from 'api/graphql'
import BlogPost from 'components/layouts/BlogPost'

export default function PostPage(props) {
  const { tours = [], page, homepage } = props.data

  const sidebar = tours.map((a) => (
    <Postside
      key={a._meta.id}
      title={a.title[0].text}
      photo={a.photo.s60.url}
      link={`/tours/${a._meta.id}`}
    />
  ))
  return (
    <BlogPost
      title={page.title[0].text}
      sidebarTitle="景點介紹"
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
        allTours {
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

        tour: allTours(id: $id) {
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
        tours: data.allTours.edges.map((edge) => edge.node),
        page: data.tour.edges[0].node,
      },
    },
  }
}

export async function getStaticPaths() {
  const { data } = await client.query({
    query: gql`
      query {
        allTours {
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
    paths: data.allTours.edges.map((edge) => ({
      params: { id: edge.node._meta.id },
    })),
    fallback: false,
  }
}
