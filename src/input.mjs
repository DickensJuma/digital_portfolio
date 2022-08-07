import inquirer from "inquirer";
import { transactionOptions, filters } from "./data/options.mjs";

class Input {
  async getOption() {
    const prompts = await inquirer.prompt([
      {
        name: "choices",
        message: "Please select an option",
        type: "list",
        choices: transactionOptions,
      },
    ]);
    return prompts.choices;
  }
  
  async getFilter() {
    const option = await this.getOption();
    let questions = [];
    switch (transactionOptions.indexOf(option)) {
      case 0:
        return null;
      case 1:
        questions.push(filters[0]);
        break;
      case 2:
        questions.push(filters[1]);
        break;
      case 3:
        questions = filters;
        break;
      default:
        return null;
    }
    const prompts = await inquirer.prompt(questions);
    return prompts;
  }
}
export default Input;
