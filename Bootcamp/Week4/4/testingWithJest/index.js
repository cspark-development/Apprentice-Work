/*
A class has been created in index.js for you.

1. Write some tests which check:
    - That the `title` property gets assigned properly
    - That the `content` field gets assigned properly
    - That the `wordCount()` method calculates and returns the number of words in the `content` field.
2. Click “Test” to see if your tests work! If you have done this correctly, you should see that all the tests are passed in your console.
*/
// don't change this file
class Page {
  constructor(title, content) {
    this.title = title;
    this.content = content;
  }

  wordCount() {
    return this.content.split(" ").length;
  }
}

module.exports = Page;
