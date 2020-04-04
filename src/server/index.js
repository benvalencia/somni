const { ApolloServer }  = require('apollo-server');
const gql = require('graphql-tag');

const typeDefs = gql`
        type Query {
            sayHi: String!
        } 
`;

const resolvers = {
    Query: {
        sayHi: () => 'Hello World!'
    }
};

const server =  new ApolloServer({
    typeDefs,
    resolvers
});

server.listen({ port: 3333}).then(res => console.log(`Server Running at ${res.url}`));