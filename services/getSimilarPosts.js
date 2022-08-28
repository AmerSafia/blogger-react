import { request, gql } from "graphql-request";
const graphqlAPI =
  process.env.REACT_APP_NEXT_GRAPHCMS_ENDPOINT;
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