import axios from 'axios';
require('dotenv').config()

//API KEY
let API_KEY = process.env.API_KEY;
// amount to usd
async function amountToUsd(token) {
  
    try {
        let URI = `https://min-api.cryptocompare.com/data/price?fsym=${token}&tsyms=USD&api_key=${API_KEY}`;

        const { data } = await axios.get(URI);
       
        return data.USD;

    } catch (error) {
        console.log(error);
    }

}


export default amountToUsd;