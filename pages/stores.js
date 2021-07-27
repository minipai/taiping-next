import React from 'react'
import client from '../apollo-client'
import { gql } from '@apollo/client'
import { truncate } from 'lodash'
import Postbox from 'components/Postbox'
import BlogGrid from 'components/layouts/BlogGrid'
import { queryHomepage } from 'api/graphql'

export default function Stores(props) {
  const { homepage, stores = [] } = props.data

  return (
    <BlogGrid title="商家介紹" data={homepage}>
      {stores.map((a) => (
        <Postbox
          key={a._meta.id}
          title={a.title[0].text}
          photo={a.photo.r360.url}
          content={truncate(a.content?.[0].text)}
          link={`/stores/${a._meta.id}`}
        />
      ))}
    </BlogGrid>
  )
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query {
        allStores {
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
        stores: data.allStores.edges.map((edge) => edge.node),
      },
    },
  }
}
