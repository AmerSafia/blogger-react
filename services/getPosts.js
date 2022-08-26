import { request, gql } from "graphql-request";

const graphqlAPI = process.env.REACT_APP_NEXT_GRAPHCMS_ENDPOINT
const getPosts = async () => {
  const query = gql` 
        query MyQuery {
        postsConnection {
          edges {
            node {
              author {
                name
                id
                photo {
                  url
                }
                bio
              }
              slug
              title
              image {
                url
              }
              createdAt
              excerpt
              categories {
                name
                slug
              }
            }
          }
        }
      }
      `
  const result = await request(graphqlAPI, query)
  return result.postsConnection.edges
}

export default getPosts