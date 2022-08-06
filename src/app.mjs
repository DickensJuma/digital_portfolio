import Input from "./input.mjs";
import DataClump from "./data/transactions.mjs";
import Search from "./search.mjs";

class App {
  async start() {
      const data = DataClump.data;
    const search = new Search(data);
    let userInput = await new Input().getFilter();

    const userInputs = userInput ? Object.keys(userInput) : [];

    switch (true) {
      case userInputs.includes("token") && userInputs.includes("date"):
        search.byTokenAndDate(userInput.token.toUpperCase(), Number(userInput.date));
        break;
      case userInputs.includes("token"):
        
        search.byToken(userInput.token.toUpperCase());
        break;

      case userInputs.includes("date"):
        search.byDate(Number(userInput.date));
        break;

      default:
         search.byLatest();
        break;
    }
  }
}

export default App;
