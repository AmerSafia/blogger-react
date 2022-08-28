import { request, gql } from "graphql-request";
const graphqlAPI =
  process.env.REACT_APP_NEXT_GRAPHCMS_ENDPOINT ||
  "https://api-eu-central-1.hygraph.com/v2/cl73af9v53edk01uj7sm3hz0l/master";

const getFeaturedPosts = async () => {
  const query = gql`
      query GetCategoryPost() {
        posts(where: {featuredpost: true}) {
          author {
            name
            photo {
            url
          }
          }
          image {
          url
        }
          title
          slug
          createdAt
        }
      }   
    `;
  const result = await request(graphqlAPI, query);
  return result.posts;
};
export default getFeaturedPosts;
