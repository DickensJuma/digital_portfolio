const tokens = ["ETH", "ERP", "XRP", "BTC"];
export const transactionOptions = [
  "get latest transactions per token",
  "Get latest transactions by token",
  "Get transactions by time",
  "Get transactions by token and time",
];

export const filters = [
  {
    name: "token",
    message: "Please enter token: ",
    validate: function (input) {
      const done = this.async();
      if (!tokens.includes(input.toUpperCase())) {
        return done("The token is not valid");
      }
      return done(null, true);
    },
  },
  {
    name: "date",
    message: "Enter transaction time (Epoch): ",
    validate: function (input) {
      const done = this.async();
      if (new Date(Number(input)).toString() === "Invalid Date") {
        return done("Please enter a valid timestamp");
      }
      return done(null, true);
    },
  },
];
