/**
 * @fileoverview Rule property_sessionStorage
 * @author ScanJS contributors
 * @copyright 2015 Mozilla Corporation. All rights reserved.
 */
"use strict";

module.exports = function (context) {

  return {
    "MemberExpression": function (node) {
      if (node.property.name == 'sessionStorage') {
        context.report(node, "sessionStorage can be unsafe");

      }
    }
  }

}
