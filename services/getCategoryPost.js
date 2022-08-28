
import { request, gql } from "graphql-request";
const graphqlAPI =
  process.env.REACT_APP_NEXT_GRAPHCMS_ENDPOINT;

const getCategoryPost = async (slug) => {
  const query = gql`
      query GetCategoryPost($slug: String!) {
        postsConnection(where: {categories_some: {slug: $slug}}) {
          edges {
            cursor
            node {
              author {
                bio
                name
                id
                photo {
                  url
                }
              }
              createdAt
              slug
              title
              excerpt
              image {
                url
              }
              categories {
                name
                slug
              }
            }
          }
        }
      }
    `;

  const result = await request(graphqlAPI, query, { slug });

  return result.postsConnection.edges;
};
export default getCategoryPost