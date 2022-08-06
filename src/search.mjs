import amountToUsd from './amountToUsd.mjs';

class Search {

  constructor(data) {
    this.data = data;
  }

 async byLatest() {
    let token = ["BTC", "ETH", "XRP"];
    let latestData = [];

    // sort latest transaction by symbol
    let latestTransactions = await Promise.all(this.data.sort((a, b) => {
      return b.timestamp - a.timestamp;
    }));

    token.forEach((item) => {
      const latestToken = latestTransactions.find(
        (latestTransaction) => latestTransaction.token == item
      );
      latestData.push(latestToken);
    });

     latestData = latestData.map(async (item) => {
        
      let amount_usd = await amountToUsd(item.token);
      let amount_token = Number(item.amount);
      
      let amount_usd_total = amount_usd * amount_token;
      item.amount = amount_usd_total.toFixed(2);

       console.log(item)
    
    });
   
  };


  byToken(token) {
    
    let result = this.data.filter((a) => {
      return a.token === token;
    });
    let obj = Object.assign({}, ...result);
    console.log(`Asset ${obj.token}:`, obj);

  }

  async byDate(date) {
  
    // parameter to numbe
  // console.log(data)
    let result = this.data.filter((a) => {
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
    if(obj.amount === "NaN"){
      console.log("No porfolio record found")
      process.exit();
    }
    console.log(`Asset At ${date}:`, obj);
  }

 

  //search transaction by date and symbol
  async byTokenAndDate (token, date) {

    let result = this.data.filter((a) => {
      return a.timestamp === date && a.token === token;
    });
    let obj = Object.assign({}, ...result);

    let amount_usd = await amountToUsd(obj.token);

    let amount_token = Number(obj.amount);

    let amount_to_fixed = amount_token * amount_usd;

    obj = {
      ...obj,
      amount: amount_to_fixed.toFixed(2),
    };
    if(obj.amount === "NaN"){
      console.log("No porfolio record found")
      process.exit();
    }
    console.log(`Asset ${obj.token} at ${obj.timestamp}:`, obj);
  }
}

export default Search;