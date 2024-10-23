const Book = require("./index.js");

describe("A Book", () => {
  const book = new Book("The Shining", "Stephen King");

  it("has a title", () => {
    expect(book.title).toBe("The Shining");
  });

  it("has an author", () => {
    expect(book.author).toBe("Stephen King");
  });
});

describe("addRating", () => {
  const book = new Book("The Shining", "Stephen King");

  it("Can add rating", () => {
    book.addRating(2);
    book.addRating(3);
    expect(book.ratings).toEqual([2, 3]);
  });
});

describe("Average rating", () => {
  const book = new Book("The Shining", "Stephen King");

  it("calculates the average rating", () => {
    book.addRating(2);
    book.addRating(3);
    expect(book.averageRating()).toBe(2.5);
  });
});
