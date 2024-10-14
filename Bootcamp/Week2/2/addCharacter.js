const textEditor = {
  document: ["H", "i", ",", " ", "W", "o", "r", "l", "d"],
  // Define your method here
  addCharacter: function (char) {
    this.document.push(char);
  },
};

textEditor.addCharacter("!");
console.log(textEditor.document);
