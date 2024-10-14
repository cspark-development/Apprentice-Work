/*
Define a function addRow(sheet, data) that adds new data to the end of the sheet. Return the modified array.
*/

// DO NOT EDIT
const accounts = [
  ["client", "invoice", "discount", "payable", "paid"],
  ["ace footwear", 10200, 0.1, 9180, false],
  ["bling.com", 4000, 0.05, null, true],
  ["chasm", 20000, 0.15, 17000, true],
];

// Write your code here
function addRow(sheet, data) {
  sheet[sheet.length] = data;
  return sheet;
}

addRow(accounts, ["Test", 200, 500, 400, false]);
console.log(accounts);
