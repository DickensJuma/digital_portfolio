"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _transactions = _interopRequireDefault(require("./data/transactions"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class DataClump {
  data() {
    let token = ["btc", "eth", "xrp"];
    let arr = []; // sort latest transaction by symbol

    let latestTransaction = _transactions.default.data.sort((a, b) => {
      return b.timestamp - a.timestamp;
    });

    token.forEach(a => {
      const latestToken = latestTransaction.find(b => b.token == a.toUpperCase());
      arr.push(latestToken);
    }); //   arr = arr.map(async (a) => {
    //     let amount_usd = await amountToUsd(a.token);
    //     let amount_token = Number(a.amount);
    //     let amount_usd_total = amount_usd * amount_token;
    //     a.amount = amount_usd_total.toFixed(2);
    //      console.log(a)
    //   });

    return arr;
  }

}

var _default = DataClump;
exports.default = _default;