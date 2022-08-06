"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('dotenv').config(); //API KEY


let API_KEY = process.env.API_KEY; // amount to usd

async function amountToUsd(token) {
  try {
    let URI = `https://min-api.cryptocompare.com/data/price?fsym=${token}&tsyms=USD&api_key=${API_KEY}`;
    const {
      data
    } = await _axios.default.get(URI);
    return data.USD;
  } catch (error) {
    console.log(error);
  }
}

var _default = amountToUsd;
exports.default = _default;