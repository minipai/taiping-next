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
        <div key={index} className={css.videoBlock}>
          <RichText render={artist.primary.title} />
          <RichText render={artist.primary.description} />
          {artist.fields.map((field, index) => (
            <div
              key={index}
              dangerouslySetInnerHTML={{
                __html: field.video_src.html,
              }}
            />
          ))}
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
              body {
                __typename
                ... on ArtistBodyVideo_highlights {
                  type
                  label
                  primary {
                    title
                    description
                  }
                  fields {
                    video_src
                    video_title
                  }
                }
              }
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
        artists: data.allArtists.edges
          .map((edge) => edge.node.body?.[0])
          .filter((_) => _),
      },
    },
  }
}
