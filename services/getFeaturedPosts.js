import { request, gql } from "graphql-request";
const graphqlAPI =
  process.env.REACT_APP_NEXT_GRAPHCMS_ENDPOINT;

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
