import data from "../data/transactions";
import amountToUsd from "../utils/amount_to_usd";

let transaction = data.data;

class Portfolio {
  main = () => {
    let token = ["btc", "eth", "xrp"];
    let arr = [];

    // sort latest transaction by symbol
    let latestTransaction = transaction.sort((a, b) => {
      return b.timestamp - a.timestamp;
    });
    

    token.forEach((a) => {
      const latestToken = latestTransaction.find(
        (b) => b.token == a.toUpperCase()
      );
      arr.push(latestToken);
    });
 


    arr = arr.map(async (a) => {
        
      let amount_usd = await amountToUsd(a.token);
      let amount_token = Number(a.amount);
      
      let amount_usd_total = amount_usd * amount_token;
      a.amount = amount_usd_total.toFixed(2);

       console.log(a)
    
    });
   
  };

  //search transaction by date
  searchByDate = async (arg1) => {
    let date = arg1;
    // parameter to number
  
console.log("first")
    let result = transaction.filter((a) => {
      let dateA = a.timestamp;
      return dateA === date;
    });
    let obj = Object.assign({}, ...result);

    let amount_usd = await amountToUsd(obj.token);

    let amount_token = Number(obj.amount);

    let amount_to_fixed = amount_token * amount_usd;

    obj = {
      ...obj,
      amount: amount_to_fixed.toFixed(2),
    };
    console.log(`Asset At ${date}:`, obj);
  };

  //search latest transaction by symbol
  searchBySymbol = async (arg1) => {
    let parameter = arg1;

    let symbol = parameter.toUpperCase();
    let amount_usd = await amountToUsd(symbol);

    let result = transaction.filter((a) => {
      return a.token === symbol;
    });

    // get the latest transaction
    let latestTransaction = result.sort((a, b) => {
      let dateA = new Date(a.timestamp);
      let dateB = new Date(b.timestamp);
      return dateB.getTime() - dateA.getTime();
    })[0];

    let amount_token = latestTransaction.amount;
    let amount_to_fixed = amount_token * amount_usd;
    latestTransaction = {
      ...latestTransaction,
      amount: amount_to_fixed.toFixed(2),
    };
    console.log(`latest ${symbol}:`, latestTransaction);
  };

  //search transaction by date and symbol
  searchByDateAndSymbol = async (arg1, arg2) => {
    let date = arg2;

    let symbol = arg1.toUpperCase();

    let result = transaction.filter((a) => {
      return a.timestamp === date && a.token === symbol;
    });
    let obj = Object.assign({}, ...result);

    let amount_usd = await amountToUsd(obj.token);

    let amount_token = Number(obj.amount);

    let amount_to_fixed = amount_token * amount_usd;

    obj = {
      ...obj,
      amount: amount_to_fixed.toFixed(2),
    };
    console.log(`Asset ${obj.token} at ${obj.timestamp}:`, obj);
  };
}


export default Portfolio;