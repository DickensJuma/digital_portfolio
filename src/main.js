#!/usr/bin/env node


import App from "./app.mjs";


//entry point
function main() {
  const app = new App();
  app.start()
}

main();
