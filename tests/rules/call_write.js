/**
 * @fileoverview Test for call_write rule
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
eslintTester.addRuleTest("lib/rules/call_write", {
  valid: [
    { code: "document.write" }
  ],    // Examples of code that should trigger the rule
  invalid: [

    {
      code: "document.write('test')",
      errors: [
        { message: "The function write can be unsafe" }
      ]
    },
  ]
});  // auto-generated from scanjs rules.json
