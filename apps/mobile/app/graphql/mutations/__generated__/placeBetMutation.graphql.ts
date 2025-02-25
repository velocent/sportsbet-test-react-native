/**
 * @generated SignedSource<<45b696f29001ac7e90d3b56fbf0f3496>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type placeBetMutation$variables = {
  currency: string;
  outcomes: string;
  userId: string;
  wagerAmount: number;
};
export type placeBetMutation$data = {
  readonly placeBet: {
    readonly currency: string | null | undefined;
    readonly id: number | null | undefined;
    readonly outcomes: string | null | undefined;
    readonly status: string | null | undefined;
    readonly userId: string | null | undefined;
    readonly wagerAmount: number | null | undefined;
  } | null | undefined;
};
export type placeBetMutation = {
  response: placeBetMutation$data;
  variables: placeBetMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "currency"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "outcomes"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "userId"
},
v3 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "wagerAmount"
},
v4 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "currency",
        "variableName": "currency"
      },
      {
        "kind": "Variable",
        "name": "outcomes",
        "variableName": "outcomes"
      },
      {
        "kind": "Variable",
        "name": "userId",
        "variableName": "userId"
      },
      {
        "kind": "Variable",
        "name": "wagerAmount",
        "variableName": "wagerAmount"
      }
    ],
    "concreteType": "Bet",
    "kind": "LinkedField",
    "name": "placeBet",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "userId",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "outcomes",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "wagerAmount",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "currency",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "status",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/),
      (v3/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "placeBetMutation",
    "selections": (v4/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v2/*: any*/),
      (v1/*: any*/),
      (v3/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "placeBetMutation",
    "selections": (v4/*: any*/)
  },
  "params": {
    "cacheID": "57d219187d129d07234600ec87c9d2fe",
    "id": null,
    "metadata": {},
    "name": "placeBetMutation",
    "operationKind": "mutation",
    "text": "mutation placeBetMutation(\n  $userId: String!\n  $outcomes: String!\n  $wagerAmount: Float!\n  $currency: String!\n) {\n  placeBet(userId: $userId, outcomes: $outcomes, wagerAmount: $wagerAmount, currency: $currency) {\n    id\n    userId\n    outcomes\n    wagerAmount\n    currency\n    status\n  }\n}\n"
  }
};
})();

(node as any).hash = "da7658ecba682b15fa6f41dd72a91567";

export default node;
