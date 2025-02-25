import { graphql, fetchQuery } from "react-relay";
import { relayEnvironment } from "../../relay/relayEnvironment";

const query = graphql`
  query getUserBetsQuery($userId: String!) {
    getUserBets(userId: $userId) {
      uid
      outcomes
      wagerAmount
      currency
      status
    }
  }
`;

export const getUserBets = async (userId: string) => {
  return await fetchQuery(relayEnvironment, query, { userId }).toPromise();
};
