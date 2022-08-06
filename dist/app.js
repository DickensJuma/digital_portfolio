"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _input = _interopRequireDefault(require("./input"));

var _dataClump = _interopRequireDefault(require("./dataClump"));

var _search = _interopRequireDefault(require("./search"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class App {
  start() {
    const data = new _dataClump.default().data();
    const search = new _search.default(data);
    let userInput = new _input.default().getFilter(); //  console.log("data",data);
    //console.log("search",search);

    console.log("userInput", userInput);

    switch (userInput) {
      case 1:
        search.byToken(userInput.token);
        break;

      case 2:
        search.byDate(userInput.date);
        break;

      case 3:
        search.byTokenAndDate(userInput.token, userInput.date);
        break;

      default:
        break;
    }
  }

}

var _default = App;
exports.default = _default;