import { ApolloClient, InMemoryCache, gql } from '@apollo/client'
import { PrismicLink } from 'apollo-link-prismic'
import config from 'config'
const client = new ApolloClient({
  link: PrismicLink(config.prismicLink),
  cache: new InMemoryCache(),
})

export const queryHomepage = async () => {
  const { data } = await client.query({
    query: gql`
      query {
        allHomepages {
          edges {
            node {
              hero_image
              title
              logo
              contact
            }
          }
        }
      }
    `,
  })

  return data.allHomepages.edges[0].node
}

export default client
