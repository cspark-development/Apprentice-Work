/*
Directions: An accounts spreadsheet has been created in the editor for you already. It contains some financial data for your company.

Define a function editValue(sheet, i, j, newVal) that sets the value in sheet at row i and column j to newVal and returns the modified sheet.
*/

// DO NOT EDIT
const accounts = [
  ["client", "invoice", "discount", "payable", "paid"],
  ["ace footwear", 10200, 0.1, 9180, false],
  ["bling.com", 4000, 0.05, null, true],
  ["chasm", 20000, 0.15, 17000, true],
];

// Write your code here
function editValue(sheet, i, j, newVal) {
  sheet[i][j] = newVal;
  return sheet;
}
