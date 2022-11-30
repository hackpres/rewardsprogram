import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
    query Query {
        users { 
            id
            username
            firstName
            lastName
            purchaseHistory {
                january
                february
                march
                april
                may
                june
                july
                august
                september
                october
                november
                december
            }
        }
    }
`;

export const QUERY_USER = gql`
    query Query($userId: ID!) {
        user(id: $userId) {
            id
            username
            firstName
            lastName
            dob
            purchaseHistory {
                january
                february
                march
                april
                may
                june
                july
                august
                september
                october
                november
                december
            }
        }
    }
`;