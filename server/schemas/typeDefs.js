const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        id: ID!
        username: String!
        firstName: String!
        lastName: String!
        dob: String
        purchaseHistory: PurchaseHistory!
    }
    type PurchaseHistory {
        january: [Int!],
        february: [Int!],
        march: [Int!],
        april: [Int!],
        may: [Int!],
        june: [Int!],
        july: [Int!],
        august: [Int!],
        september: [Int!],
        october: [Int!],
        november: [Int!],
        december: [Int!],
    }
    type Query {
        users: [User!]!
    }
`;

module.exports = typeDefs;