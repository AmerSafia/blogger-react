import { request, gql } from "graphql-request";
const graphqlAPI = process.env.REACT_APP_NEXT_GRAPHCMS_ENDPOINT || ' https://api-eu-central-1.hygraph.com/v2/cl73af9v53edk01uj7sm3hz0l/master'

const getRecentPosts = async () => {
  const query = gql`
    query GetPostDetails() {
      posts(
        orderBy: createdAt_ASC
        last: 3
      ) {
        title
        image {
          url
        }
        createdAt
        slug
      }
    }
  `;
  const result = await request(graphqlAPI, query)
  return result.posts;
};
export default getRecentPosts

