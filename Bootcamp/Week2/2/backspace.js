const textEditor = {
  document: ["H", "i", ",", " ", "W", "o", "r", "l", "d"],
  // Define your method here
  backspace: function () {
    this.document.pop();
  },
};

textEditor.backspace();
console.log(textEditor.document);
