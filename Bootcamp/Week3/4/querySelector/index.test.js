// Running npm install for the JSDOM library
require("child_process").execSync("npm install");

// Grabbing the HTML doc in it's vanilla state
const path = require("path");
const htmlLocation = path.join(__dirname, "./index.html")
const html = require("fs").readFileSync(htmlLocation);

// Creating a virtual DOM
const { JSDOM } = require("jsdom");
const dom = new JSDOM(html);

// Inserting the virtual DOM into the global so that the tests can run
global.window = dom.window;
global.document = dom.window.document;

// Normal unit test syntax can continue here
const { h1 } = require("./index.js");

test("check h1 contents", () => {
  expect(h1.innerHTML).toBe("Selecting DOM Elements");
});

// Normal unit test syntax can continue here
const { container } = require("./index.js");

test("check div classname", () => {
  expect(container.className).toBe("flexbox");
});

// Normal unit test syntax can continue here
const { flexChild2 } = require("./index.js");

test("check div classname and id", () => {
  expect(flexChild2.className).toBe("flexChild");
  expect(flexChild2.id).toBe("item2");
});
