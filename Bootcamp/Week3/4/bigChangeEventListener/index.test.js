// Running npm install for the JSDOM library
require("child_process").execSync("npm install");

// Grabbing the HTML doc in it's vanilla state
const path = require('path')
const htmlFilePath = path.join(__dirname, 'index.html');
const html = require("fs").readFileSync(htmlFilePath);

// Creating a virtual DOM
const { JSDOM } = require("jsdom");
const dom = new JSDOM(html);

// Inserting the virtual DOM into the global so that the tests can run
global.window = dom.window;
global.document = dom.window.document;

const {
    button,
    firstParagraph,
    specialParagraph,
    secondListItem,
} = require("./index.js");

afterEach(() => {
    // Reset the first paragraph to its initial state.
    firstParagraph.className = "";
    firstParagraph.innerHTML = "This is a paragraph.";

    // Reset the special paragraph to its initial state.
    specialParagraph.className = "special";
    specialParagraph.innerHTML = "This is a special paragraph.";

    // Reset the second list item to its initial state.
    secondListItem.innerHTML = "Item 2";

    // Reset the button to its initial state.
    button.innerHTML = "Click me";
});

test("checks if button is stored and initial values of paragraphs are correct", () => {
    expect(button.id).toBe("btn");
    expect(button.innerHTML).toBe("Click me");

    // Check first paragraph
    expect(firstParagraph.className).toBe("");
    expect(firstParagraph.innerHTML).toBe("This is a paragraph.");

    // Check special paragraph
    expect(specialParagraph.className).toBe("special");
    expect(specialParagraph.innerHTML).toBe("This is a special paragraph.");

    // Check second list item
    expect(secondListItem.innerHTML).toBe("Item 2");
});

test("checks if paragraph value changes", () => {
    button.click();
    expect(firstParagraph.innerHTML).toBe("Hello world!");
});

test("checks if special paragraph background color changes", () => {
    button.click();
    expect(specialParagraph.classList.contains("highlight")).toBe(true);
});

test("checks if second list item value changes", () => {
    button.click();
    expect(secondListItem.innerHTML).toBe("New item");
});

test("checks if the button value changes", () => {
    button.click();
    expect(button.innerHTML).toBe("Clicked!");
});
