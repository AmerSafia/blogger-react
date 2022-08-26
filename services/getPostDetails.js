import { request, gql } from "graphql-request";

const graphqlAPI = process.env.REACT_APP_NEXT_GRAPHCMS_ENDPOINT;
const getPostDetails = async (slug) => {
    const query = gql`
    query MyQuery($slug: String!) {
      post(where: { slug: $slug }) {
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
        content{
            raw
        }
      }
    }
  `;
    const result = await request(graphqlAPI, query, { slug });
    return result.post;
};

export default getPostDetails;
