import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
    query Query {
        users {
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