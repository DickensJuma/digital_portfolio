"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _inquirer = _interopRequireDefault(require("inquirer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const transactionOptions = ['get latest transactions per token', 'Get latest transactions by token', 'Get transactions by time', 'Get transactions by token and time'];
const tokens = ['ETH', 'ERP', 'XRP', 'BTC'];
const filters = [{
  name: 'token',
  message: 'Please enter token: ',
  validate: function (input) {
    const done = this.async();

    if (!tokens.includes(input.toUpperCase())) {
      return done('The token is not valid');
    }

    return done(null, true);
  }
}, {
  name: 'date',
  message: 'Enter transaction time (Epoch): ',
  validate: function (input) {
    const done = this.async();
    console.log(new Date(input));

    if (new Date(input).toString() === 'Invalid Date') {
      return done('Please enter a valid timestamp');
    }

    return done(null, true);
  }
}];

class Input {
  async getOption() {
    const arr = [];
    transactionOptions.forEach(option => {
      arr.push(option);
      arr.push(new _inquirer.default.Separator());
    });
    const prompts = await _inquirer.default.prompt([{
      name: 'choices',
      message: 'Please select an option',
      type: 'list',
      choices: arr
    }]);
    return prompts.choices;
  }

  async getFilter() {
    const option = await this.getOption();
    let questions = [];

    switch (transactionOptions.indexOf(option)) {
      case 0:
        return null;

      case 1:
        questions.push(filters[0]);
        break;

      case 2:
        questions.push(filters[1]);
        break;

      case 3:
        questions = filters;
        break;

      default:
        return null;
    }

    const prompts = await _inquirer.default.prompt(questions);
    return prompts;
  }

}

var _default = Input; // class Input {
// // get input from user
//     #searchOptions = {
//       1: 'Search by token',
//       2: 'Search by date',
//       3: 'Search by token and date',
//     }
//     get() {
//      return  this.#_getSearchInput( this.#_getOption());
//     }
//     #_getOption() {
//       console.log(`
//       Please select an option:
//         1) ${this.#searchOptions[1]}
//         2) ${this.#searchOptions[2]}
//         3) ${this.#searchOptions[3]}
//         press [1, 2, 3] to select an option
//       `)
//       return this.#_validateSelectedOption(process.argv.slice(2));
//     }
//     #_searchParams(option) {
//       console.log('Please enter your search parameters:');
//       const searchParams = { option };
//       switch (option) {
//         case 1:
//           searchParams.token = this.#_getSearchInput("Enter token: ");
//           break;
//         case 2:
//           searchParams.token = this.#_getSearchInput("Enter token: ");
//           break;
//         case 3:
//           searchParams.token = this.#_getSearchInput("Enter token: ");
//           searchParams.date = this.#_getSearchInput("Enter date: ");
//           break;
//         default:
//           break;
//       }
//       return searchParams;
//     }
//     // #_validateSelectedOption(option) {
//     //   if (!Number.isNaN(option) || ![1, 2, 3].includes(option)) throw new Error("Invalid input");
//     //   return option;
//     // }
//     #_getSearchInput(message) {
//       console.log(message)
//       return process.argv.slice(2);
//     }
//   }
//   export default Input;

exports.default = _default;