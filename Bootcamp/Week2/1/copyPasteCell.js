/*
Define a function copyPasteCell(sheet, i, j, k, l) that copies the value stored in row i, column j and pastes it into row k, column l. Return the modified array.
*/

const accounts = [
  ["client", "invoice", "discount", "payable", "paid"],
  ["ace footwear", 10200, 0.1, 9180, false],
  ["bling.com", 4000, 0.05, null, true],
  ["chasm", 20000, 0.15, 17000, true],
];

// Write your code here
function copyPasteCell(sheet, i, j, k, l) {
  sheet[k][l] = sheet[i][j];
  return sheet;
}
