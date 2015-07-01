/**
 * @fileoverview Test for call_getDeviceStorage_crashes rule
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
eslintTester.addRuleTest("lib/rules/call_getDeviceStorage_crashes", {
  valid: [
    { code: "foo()" } // XXX no need to test for code that does not trigger.
  ],    // Examples of code that should trigger the rule
  invalid: [

    {
      code: "crashes = navigator.getDeviceStorage('crashes')",
      errors: [
        { message: "The function getDeviceStorage with parameter crashes can be unsafe" }
      ]
    },
  ]
});  // auto-generated from scanjs rules.json
