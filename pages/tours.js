import React from 'react'
import client from '../apollo-client'
import { gql } from '@apollo/client'
import { truncate } from 'lodash'
import Postbox from '../components/Postbox'
import BlogGrid from 'components/layouts/BlogGrid'
import { queryHomepage } from 'api/graphql'

export default function Tours(props) {
  const { homepage, tours = [] } = props.data

  return (
    <BlogGrid title="旅遊行程" data={homepage}>
      {tours.map((a) => (
        <Postbox
          key={a._meta.id}
          title={a.title[0].text}
          photo={a.photo.r360.url}
          content={truncate(a.content?.[0].text)}
          link={`/tours/${a._meta.id}`}
        />
      ))}
    </BlogGrid>
  )
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query {
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
      }
    `,
  })
  const homepage = await queryHomepage()

  return {
    props: {
      data: {
        homepage,
        tours: data.allTours.edges.map((edge) => edge.node),
      },
    },
  }
}
