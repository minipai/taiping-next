import React from 'react'
import client from '../apollo-client'
import { gql } from '@apollo/client'
import BlogGrid from 'components/layouts/BlogGrid'
import { queryHomepage } from 'api/graphql'
import { RichText } from 'prismic-reactjs'
import css from './artist.module.css'

export default function Artists(props) {
  const { homepage, artists = [] } = props.data

  return (
    <BlogGrid title="文環夜學" data={homepage}>
      {artists.map((artist, index) => (
        <div key={index} className={css.gridBlock}>
          <RichText render={artist.title} />
          <RichText render={artist.file} />
          {artist.name && <img src={artist.name.url} alt={artist.name.alt} />}
        </div>
      ))}
    </BlogGrid>
  )
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query {
        allArtists {
          edges {
            node {
              name
              title
              file
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
        artists: data.allArtists.edges.map((edge) => edge.node),
      },
    },
  }
}
