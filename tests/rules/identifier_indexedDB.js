/**
 * @fileoverview Test for identifier_indexedDB rule
 * @author ScanJS contributors
 * @copyright 2015 Mozilla Corporation. All rights reserved
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var eslint = require("eslint"),
  ESLintTester = require("eslint-tester");

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var eslintTester = new ESLintTester(eslint.linter);
eslintTester.addRuleTest("lib/rules/identifier_indexedDB", {
  valid: [
    { code: " 'indexeddb'" }
  ],    // Examples of code that should trigger the rule
  invalid: [

    {
      code: "indexedDB.open('MyTestDatabase')",
      errors: [
        { message: "indexedDB can be unsafe" }
      ]
    },
  ]
});  // auto-generated from scanjs rules.json
