/**
 * @flow
 * @relayHash f732b2d1c9f57497fc8c710e9cc9923d
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type RegisterEmailMutationVariables = {|
  input: {
    name: string,
    email: string,
    password: string,
    clientMutationId?: ?string,
  },
|};
export type RegisterEmailMutationResponse = {|
  +RegisterEmail: ?{|
    +error: ?string,
    +token: ?string,
  |},
|};
*/


/*
mutation RegisterEmailMutation(
  $input: RegisterEmailInput!
) {
  RegisterEmail(input: $input) {
    error
    token
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "RegisterEmailInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "RegisterEmail",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "RegisterEmailInput!"
      }
    ],
    "concreteType": "RegisterEmailPayload",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "error",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "token",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "RegisterEmailMutation",
  "id": null,
  "text": "mutation RegisterEmailMutation(\n  $input: RegisterEmailInput!\n) {\n  RegisterEmail(input: $input) {\n    error\n    token\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "RegisterEmailMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "RegisterEmailMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
(node/*: any*/).hash = '5942bb5a1e2d5e59b447537ae70247ce';
module.exports = node;
