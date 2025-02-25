import { graphql, commitMutation } from "react-relay";
import { relayEnvironment } from "../../relay/relayEnvironment";

const mutation = graphql`
  mutation placeBetMutation(
    $userId: String!
    $outcomes: String!
    $wagerAmount: Float!
    $currency: String!
  ) {
    placeBet(
      userId: $userId
      outcomes: $outcomes
      wagerAmount: $wagerAmount
      currency: $currency
    ) {
      uid
      userId
      outcomes
      wagerAmount
      currency
      status
    }
  }
`;

export const placeBet = (
  userId: string,
  outcomes: string,
  wagerAmount: number,
  currency: string,
  onCompleted: () => void,
  onError: (error: any) => void
) => {
  commitMutation(relayEnvironment, {
    mutation,
    variables: { userId, outcomes, wagerAmount, currency },
    onCompleted,
    onError,
    updater: (store) => {
      const payload = store.getRootField("placeBet");
      console.log(payload)
      if (!payload) return;

      const root = store.getRoot();
      const existingBets = root.getLinkedRecords("getUserBets") || [];
      root.setLinkedRecords([...existingBets, payload], "getUserBets");
    },
  });
};
