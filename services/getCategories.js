import { request, gql } from "graphql-request";
const graphqlAPI =
  process.env.REACT_APP_NEXT_GRAPHCMS_ENDPOINT ||
  "https://api-eu-central-1.hygraph.com/v2/cl73af9v53edk01uj7sm3hz0l/master";

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
