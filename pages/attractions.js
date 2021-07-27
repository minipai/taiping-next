import React from 'react'
import client from '../apollo-client'
import { gql } from '@apollo/client'
import { truncate } from 'lodash'
import Postbox from 'components/Postbox'
import BlogGrid from 'components/layouts/BlogGrid'
import { queryHomepage } from 'api/graphql'

export default function Attractions(props) {
  const { homepage, attractions = [] } = props.data

  return (
    <BlogGrid title="景點介紹" data={homepage}>
      {attractions.map((a) => (
        <Postbox
          key={a._meta.id}
          title={a.title[0].text}
          photo={a.photo.r360.url}
          content={truncate(a.content?.[0].text)}
          link={`/attractions/${a._meta.id}`}
        />
      ))}
    </BlogGrid>
  )
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query {
        allAttractions {
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
        attractions: data.allAttractions.edges.map((edge) => edge.node),
      },
    },
  }
}
