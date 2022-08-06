"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _amountToUsd = _interopRequireDefault(require("./amountToUsd"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Search {
  constructor(data) {
    this.data = data;
  }

  byToken(token) {
    console.log("this data");
    console.log(this.data);
    let result = this.data.filter(a => {
      return a.token === token;
    });
    let obj = Object.assign({}, ...result);
    console.log(`Asset ${obj.token}:`, obj);
  }

  async byData(date) {
    // parameter to number
    let result = this.data.filter(a => {
      let dateA = a.timestamp;
      return dateA === date;
    });
    let obj = Object.assign({}, ...result);
    let amount_usd = await (0, _amountToUsd.default)(obj.token);
    let amount_token = Number(obj.amount);
    let amount_to_fixed = amount_token * amount_usd;
    obj = { ...obj,
      amount: amount_to_fixed.toFixed(2)
    };

    if (obj.amount === "NaN") {
      console.log("No porfolio record found");
      process.exit();
    }

    console.log(`Asset At ${date}:`, obj);
  } //search latest transaction by symbol


  async searchBySymbol(arg1) {
    let parameter = arg1;
    let symbol = parameter.toUpperCase();
    let amount_usd = await (0, _amountToUsd.default)(symbol);
    let result = transaction.filter(a => {
      return a.token === symbol;
    }); // get the latest transaction

    let latestTransaction = result.sort((a, b) => {
      let dateA = new Date(a.timestamp);
      let dateB = new Date(b.timestamp);
      return dateB.getTime() - dateA.getTime();
    })[0];
    let amount_token = latestTransaction.amount;
    let amount_to_fixed = amount_token * amount_usd;
    latestTransaction = { ...latestTransaction,
      amount: amount_to_fixed.toFixed(2)
    };
    console.log(`latest ${symbol}:`, latestTransaction);
  } //search transaction by date and symbol


  async searchByDateAndSymbol(arg1, arg2) {
    let date = arg2;
    let symbol = arg1.toUpperCase();
    let result = transaction.filter(a => {
      return a.timestamp === date && a.token === symbol;
    });
    let obj = Object.assign({}, ...result);
    let amount_usd = await (0, _amountToUsd.default)(obj.token);
    let amount_token = Number(obj.amount);
    let amount_to_fixed = amount_token * amount_usd;
    obj = { ...obj,
      amount: amount_to_fixed.toFixed(2)
    };

    if (obj.amount === "NaN") {
      console.log("No porfolio record found");
      process.exit();
    }

    console.log(`Asset ${obj.token} at ${obj.timestamp}:`, obj);
  }

}

var _default = Search;
exports.default = _default;