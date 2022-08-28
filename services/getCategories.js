import { request, gql } from "graphql-request";
const graphqlAPI =
  process.env.REACT_APP_NEXT_GRAPHCMS_ENDPOINT;

const getCategories = async () => {
  const query = gql`
    query getCategories {
      categories {
        name
        id
        slug
        createdAt
      }
    }
  `;
  const result = await request(graphqlAPI, query);
  return result.categories;
};

export default getCategories;
