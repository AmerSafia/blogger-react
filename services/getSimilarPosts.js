import { request, gql } from "graphql-request";

const graphqlAPI =
    process.env.REACT_APP_NEXT_GRAPHCMS_ENDPOINT ||'https://api-eu-central-1.hygraph.com/v2/cl73af9v53edk01uj7sm3hz0l/master';
const getSimilarPosts = async (categories, slug) => {
    const query = gql`
      query GetPostDetails($slug: String!, $categories: [String!]) {
        posts(
          where: {slug_not: $slug, AND: {categories_some: {slug_in: $categories}}}
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
    const result = await request(graphqlAPI , query, { slug, categories });
    return result.posts;
};

export default getSimilarPosts