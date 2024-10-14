const textEditor = {
  document: ["H", "i", ",", " ", "W", "o", "r", "l", "d"],
  history: [],
  // Define your methods here
  save: function () {
    this.history.push(this.document.slice());
  },
  restore: function (i) {
    this.document = this.history[i].slice();
  },
};

textEditor.save();
textEditor.restore(0);
console.log(textEditor.document);
