/**
 * @generated SignedSource<<e1cafc5e9d06a84891147358017b32e2>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type getUserBetsQuery$variables = {
  userId: string;
};
export type getUserBetsQuery$data = {
  readonly getUserBets: ReadonlyArray<{
    readonly currency: string | null | undefined;
    readonly outcomes: string | null | undefined;
    readonly status: string | null | undefined;
    readonly uid: number | null | undefined;
    readonly wagerAmount: number | null | undefined;
  } | null | undefined> | null | undefined;
};
export type getUserBetsQuery = {
  response: getUserBetsQuery$data;
  variables: getUserBetsQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "userId"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "userId",
        "variableName": "userId"
      }
    ],
    "concreteType": "Bet",
    "kind": "LinkedField",
    "name": "getUserBets",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "uid",
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "getUserBetsQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "getUserBetsQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "04f53ba37351f91fb0d0863d8b658e19",
    "id": null,
    "metadata": {},
    "name": "getUserBetsQuery",
    "operationKind": "query",
    "text": "query getUserBetsQuery(\n  $userId: String!\n) {\n  getUserBets(userId: $userId) {\n    uid\n    outcomes\n    wagerAmount\n    currency\n    status\n  }\n}\n"
  }
};
})();

(node as any).hash = "a43672609f87286345545b62a726c30d";

export default node;
