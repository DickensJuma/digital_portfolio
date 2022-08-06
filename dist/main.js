#!/usr/bin/env node
"use strict";

var _app = _interopRequireDefault(require("./app"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function main() {
  const app = new _app.default();
  app.start();
}

main();