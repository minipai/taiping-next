import React from 'react'
import client from '../apollo-client'
import { gql } from '@apollo/client'
import { truncate } from 'lodash'
import BlogGrid from 'components/layouts/BlogGrid'
import Postbox from '../components/Postbox'
import { queryHomepage } from 'api/graphql'

export default function Uniques(props) {
  const { homepage, uniques = [] } = props.data

  return (
    <BlogGrid title="地方特色" data={homepage}>
      {uniques.map((a) => (
        <Postbox
          key={a._meta.id}
          title={a.title[0].text}
          photo={a.photo.r360.url}
          content={truncate(a.content?.[0].text)}
          link={`/uniques/${a._meta.id}`}
        />
      ))}
    </BlogGrid>
  )
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query {
        allUniques {
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
  })
  const homepage = await queryHomepage()

  return {
    props: {
      data: {
        homepage,
        uniques: data.allUniques.edges.map((edge) => edge.node),
      },
    },
  }
}
