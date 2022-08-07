import amountToUsd from './amountToUsd.mjs';

class Search {

  constructor(data) {
    this.data = data;
  }

  async amountInUsd(filteredArray) {

    let filteredTransactions = Object.assign({}, ...filteredArray);
    
    let amountUsd = await amountToUsd(filteredTransactions.token);

    let amountToFixed = (Number(filteredTransactions.amount)* amountUsd).toFixed(2);

    filteredTransactions.amount = amountToFixed;

    return filteredTransactions;
  }


 async byLatest() {
    let token = ["BTC", "ETH", "XRP"];
    let latestData = [];

    // sort latest transaction by timestamp
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
        
      let amountUsd = await amountToUsd(item.token);
      
      let amountUsdTotal = (amountUsd * Number(item.amount)).toFixed(2);
      item.amount = amountUsdTotal;

       console.log(item)
    
    });
   
  };

//search transaction by token
  async byToken(token) {
    
    let filteredTransactions = this.data.filter((transaction) => {
      return transaction.token === token;
    });

   // fet the latest transaction by token
    let latestTransaction = await Promise.all(filteredTransactions.sort((a, b) => {
      return b.timestamp - a.timestamp;
    }));
  
    let theLatestTransaction = latestTransaction[0];
  
    let amountUsd = await amountToUsd(theLatestTransaction.token);
  
    let amountToFixed = (Number(theLatestTransaction.amount)* amountUsd).toFixed(2);
   
    theLatestTransaction.amount = amountToFixed;
    
   console.log(`Asset ${token}:`,theLatestTransaction);

  }

  //search transaction by date
  async byDate(date) {

    let result = this.data.filter((transaction) => {
      let transactionDate = transaction.timestamp;
      return transactionDate  === date;
    });
   
  let filteredTransactions = await this.amountInUsd(result);
    
   
    if(filteredTransactions.amount === "NaN"){
      console.log("No porfolio record found")
      process.exit();
    }
    console.log(`Asset At ${date}:`, filteredTransactions);
  }

 

  //search transaction by date and symbol
  async byTokenAndDate (token, date) {

    let filteredTransactions = this.data.filter((transaction) => {
      return transaction.timestamp === date && transaction.token === token;
    });
    let filteredTransactionAmountUsd = await this.amountInUsd(filteredTransactions);
    if(filteredTransactionAmountUsd.amount === "NaN"){
      console.log("No porfolio record found")
      process.exit();
    }
    console.log(`Asset ${filteredTransactionAmountUsd.token} at ${filteredTransactionAmountUsd.timestamp}:`, filteredTransactionAmountUsd);
  }
}

export default Search;