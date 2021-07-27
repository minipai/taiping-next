import { ApolloClient, InMemoryCache } from "@apollo/client";
import { PrismicLink } from 'apollo-link-prismic';

const client = new ApolloClient({
    link: PrismicLink({
        uri: "https://minipai.cdn.prismic.io/graphql",
        accessToken: "MC5XN3dXMVJJQUFDazdtWlpT.77-9GQXvv70377-977-977-977-977-9SwZd77-9P--_ve-_ve-_ve-_ve-_ve-_vWEN77-977-977-9Ag7vv71n77-9MA",
      }),
    cache: new InMemoryCache(),
});

export default client;