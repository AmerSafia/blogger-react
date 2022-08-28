import { request, gql } from "graphql-request";
const graphqlAPI =
  process.env.REACT_APP_NEXT_GRAPHCMS_ENDPOINT ||
  "https://api-eu-central-1.hygraph.com/v2/cl73af9v53edk01uj7sm3hz0l/master";

const getComments = async (slug) => {
  const query = gql`
    query getComments($slug: String!) {
      comments(where: { post: { slug: $slug } }) {
        name
        id
        createdAt
        comment
        email
      }
    }
  `;
  const result = await request(graphqlAPI, query,{slug});
  return result.comments;
};

export default getComments;
