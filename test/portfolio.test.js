import Portfolio from "../src/services/portfolio";

//test for the portfolio class
describe("Portfolio", () => {
  it("should be a function", () => {
    let instance = new Portfolio();
    expect(typeof instance).toBe("object");
  });
});

//test method main
describe("main", () => {
  it("should be a function", () => {
    let instance = new Portfolio();
    expect(typeof instance.main).toBe("function");
  });
});

//test method searchByDate
describe("searchByDate", () => {
  it("should be a function", () => {
    let instance = new Portfolio();
    expect(typeof instance.searchByDate).toBe("function");
  });
 
});

//test method searchBySymbol
describe("searchBySymbol", () => {
  it("should be a function", () => {
    let instance = new Portfolio();
    expect(typeof instance.searchBySymbol).toBe("function");
  });
  it("should return an array", () => {
    let instance = new Portfolio();
    let result = instance.searchBySymbol();
    expect(typeof result === 'object').toBe(true);
});
});

//test method searchBySymbolAndDate

describe("searchBySymbolAndDate", () => {
  it("should be a function", () => {
    let instance = new Portfolio();
    expect(typeof instance.searchByDateAndSymbol).toBe("function");
  });
  it("should return an array", () => {
    let instance = new Portfolio();
    let result = instance.searchByDateAndSymbol();
    expect(typeof result === 'object').toBe(true);
});
});




