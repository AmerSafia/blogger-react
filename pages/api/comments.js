import { gql, GraphQLClient } from "graphql-request"

const graphqlAPI = process.env.REACT_APP_NEXT_GRAPHCMS_ENDPOINT || 'https://api-eu-central-1.hygraph.com/v2/cl73af9v53edk01uj7sm3hz0l/master'

const comment = async (req, res) => {
    const grapgQlClient = new GraphQLClient(graphqlAPI, {
        headers: {
            authorization: process.env.REACT_APP_NEXT_GRAPHCMS_TOKEN
        }
    })
    const query = gql`
    mutation CreateComment($name: String!, $email: String!, $comment: String!, $slug: String!) {
      createComment(data: {name: $name, email: $email, comment: $comment, post: {connect: {slug: $slug}}}) { id }
    }
  `;
    const result = await grapgQlClient.request(query, req.body)
    return res.status(200).send(result)
}

export default comment