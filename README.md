<h4 align="center">
  

📟 Digital Asset Portfolio Node.js CLI applications.

 
</h4>



# about-project 
- Write a command line program that does the following

```sh
- Given no parameters, return the latest portfolio value per token in USD
- Given a token, return the latest portfolio value for that token in USD
- Given a date, return the portfolio value per token in USD on that date
- Given a date and a token, return the portfolio value of that token in USD on that date
```




<br>

[📟][repo]

## Install

```sh
# Recommended.
git clone repo

```
- Download transactions logged on [[CSV file]()] and convert to json on [[mango-is](https://mango-is.com/tools/csv-to-json/)]
- copy the coverted json to digital_portfolio/src/data transaction.js file


```sh
# transaction.js structure
export default {
    "data": [ {
            "timestamp":90229767,
            "transaction_type":"WITHDRAWAL",
            "token":"BTC",
            "amount":0.545123
            },
            {...}
    ]
}
        

The CSV file has the following columns

timestamp: Integer number of seconds since the Epoch
transaction_type: Either a DEPOSIT or a WITHDRAWAL
token: The token symbol
amount: The amount transacted
````

- create account on [[crytocompare](https://min-api.cryptocompare.com/)] and add the API_KEY  to .env 

<br>

[⚙️][repo]

## Usage
1. Install packages
```sh
npm install


```
 
2. Run the CLI using

```sh
npm start

#test
npm run test

```

_Then answer the following questions to generate a Node.js CLI._

```sh
npm start?  :latest portfolio value per token in USD
npm start token?   :latest portfolio value for that token in USD
npm start timestamp?  portfolio value per token in USD on that date
npm start token timestamp?  :portfolio value of that token in USD on that date

```
<br>

    
<br>

#### BASIC USAGE
# argument example
```sh
- token [btc, eth, xrp]
- timestamp [90229622,90229750,90229767]
```


#### COMMANDS

```sh
npm start
npm start <token>
npm start <timestamp>
npm start <token timestamp>
```


<br>

    
<br>

## workflow
<a href="#">
        <img src="./src/assets/workflow.png" alt="create-node-cli" />
    </a>

[📃][repo]

## License & Conduct

- MIT © [Dickens Juma]()
- Thanks to cryptocompare and mango-is


<br>





