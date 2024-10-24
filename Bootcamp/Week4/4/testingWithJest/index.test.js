const Page = require("./index.js");
const { describe, it, test, expect } = require("@jest/globals");

// write your tests here
test("Ensure title gets assigned properly", () => {
	const page = new Page("newtitle", "new content");
	expect(page.title).toBe("newtitle");
})

test("Ensure content gets assigned properly", () => {
	const page = new Page("newtitle", "new content");
	expect(page.content).toBe("new content");
})

test("Ensure word count function returns correct value", () => {
	const page = new Page("newtitle", "new content");
	expect(page.wordCount()).toBe(2);
})
