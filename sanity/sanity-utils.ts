import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

export async function getProjects() {
  const client = new ApolloClient({
    uri: "YOUR_GRAPHQL_API_ENDPOINT",
    cache: new InMemoryCache(),
  });

  const query = gql`
    query GetProjects {
      projects {
        _id
        _createdAt
        name
        slug
        image
        url
        content
      }
    }
  `;

  const { data } = await client.query({ query });
  return data.projects;
}
