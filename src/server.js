#!/usr/bin/env node

import Portfolio from "./services/portfolio";

//get args from command line
const args = process.argv.slice(2);

//main function

let portfolioInstance = new Portfolio();
async function main() {
  try {
    portfolioInstance.main();
  } catch (error) {}
}

//search transaction by date
function searchByDate(arg1) {
  try {
    portfolioInstance.searchByDate(arg1);
  } catch (error) {
    console.log(error);
  }
}

//function search latest transaction by symbol
function searchBySymbol(arg1) {
  try {
    portfolioInstance.searchBySymbol(arg1);
  } catch (error) {
    console.log(error);
  }
}

//function search transaction by symbol and date
function searchBySymbolAndDate(arg1, arg2) {
  try {
    portfolioInstance.searchByDateAndSymbol(arg1, arg2);
  } catch (error) {
    console.log(error);
  }
}

function symbol_or_date() {
  function validateDate(date) {
    // parameter to number
    let dateNumber = Number(date);

    let valid = new Date(dateNumber).getTime() > 0;
    return valid;
  }

  let parameter = args[0];
  let dateNumber = Number(parameter);

  if (validateDate(parameter)) {
    
    searchByDate(dateNumber);
  }

  //validate symbol
  function validateSymbol(symbol) {
    let crypo = ["btc", "eth", "xrp"];

    //symbol to lowercase
    symbol = symbol.toLowerCase();

    return crypo.includes(symbol);
  }

  if (validateSymbol(parameter)) {
    searchBySymbol(parameter);
  }
}
let parameter1 = args[0];

let parameter2 = args[1];
let dateNumber = Number(parameter2);

let argLength = args.length;

switch (argLength) {
  case 0:
    main()
    break;
  case 1:
    symbol_or_date();
    break;
 
  case 2:
  searchBySymbolAndDate(parameter1, dateNumber);
    break;

  default:
    break;
}


