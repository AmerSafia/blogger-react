import { request, gql } from "graphql-request";
const graphqlAPI =
  process.env.REACT_APP_NEXT_GRAPHCMS_ENDPOINT;

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
