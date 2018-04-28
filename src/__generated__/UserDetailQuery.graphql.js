/**
 * @flow
 * @relayHash 48f3e1041160331c79bc29d91b764800
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type UserDetail_query$ref = any;
export type UserDetailQueryVariables = {|
  id: string,
|};
export type UserDetailQueryResponse = {|
  +$fragmentRefs: UserDetail_query$ref,
|};
*/


/*
query UserDetailQuery(
  $id: ID!
) {
  ...UserDetail_query
}

fragment UserDetail_query on Query {
  user(id: $id) {
    id
    name
    email
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "id",
    "type": "ID!",
    "defaultValue": null
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "UserDetailQuery",
  "id": null,
  "text": "query UserDetailQuery(\n  $id: ID!\n) {\n  ...UserDetail_query\n}\n\nfragment UserDetail_query on Query {\n  user(id: $id) {\n    id\n    name\n    email\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "UserDetailQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "UserDetail_query",
        "args": null
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "UserDetailQuery",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "user",
        "storageKey": null,
        "args": [
          {
            "kind": "Variable",
            "name": "id",
            "variableName": "id",
            "type": "ID!"
          }
        ],
        "concreteType": "User",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "name",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "email",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
};
})();
(node/*: any*/).hash = '1bb6bc3c721b176c9600ed82a49f8993';
module.exports = node;
