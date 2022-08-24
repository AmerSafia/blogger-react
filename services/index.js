import { request, gql } from "graphql-request";

const graphqlApi = process.env.NEXT_GRAPHCMS_ENDPOINT

export const getPosts = async () => {
  const query = gql` 
        query MyQuery {
        postsConnection {
          edges {
            node {
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
            }
          }
        }
      }
      `

  const result = await request(graphqlApi, query)
  return result.postsConnection.edges
}

export const getRecentPosts = async () => {
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
  const result = await request(' https://api-eu-central-1.hygraph.com/v2/cl73af9v53edk01uj7sm3hz0l/master', query);
  return result.posts;
};

export const getSimilarPosts = async (categories, slug) => {
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
  const result = await request(graphqlApi, query, { slug, categories });
  return result.posts;
};
