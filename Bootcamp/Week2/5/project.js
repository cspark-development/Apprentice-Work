/*
there are a collection of functions which provide functionality for a cash register to be used by a point-of-sale system. Your task is to complete the functions by writing the logic to meet the specifications below:

Level 1:
removeItem(name, drawer): Removes a single item from the drawer
addItem(name, drawer): Adds a single item to the drawer
Level 2:
countCoins(drawer): Counts how many coins are in the drawer
countNotes(drawer): Counts how many notes/bills are in the drawer
Level 3:
sumDrawer(drawer): Calculates the total amount of money in the drawer as a string formatted in dollars (see example below)
Level 4:
canMakeAmount(target, drawer): Determines whether it is possible to create a specific cash amount from the items in the drawer.
Level 5:
transaction(cost, paid, drawer): Calculates the change required from a transaction and removes it from the drawer if possible.
*/

const drawer = [
  { name: "penny", value: 1, quantity: 72 },
  { name: "nickel", value: 5, quantity: 41 },
  { name: "dime", value: 10, quantity: 31 },
  { name: "quarter", value: 25, quantity: 17 },
  { name: "one", value: 100, quantity: 90 },
  { name: "five", value: 500, quantity: 11 },
  { name: "ten", value: 1_000, quantity: 2 },
  { name: "twenty", value: 2_000, quantity: 3 },
  { name: "hundred", value: 10_000, quantity: 1 },
];

const drawer2 = [
  { name: "penny", value: 1, quantity: 2 },
  { name: "nickel", value: 5, quantity: 0 },
  { name: "dime", value: 10, quantity: 0 },
  { name: "quarter", value: 25, quantity: 3 },
  { name: "one", value: 100, quantity: 2 },
  { name: "five", value: 500, quantity: 1 },
  { name: "ten", value: 1000, quantity: 1 },
];

function removeItem(name, drawer) {
  for (element of drawer) {
    if (element.name === name && element.quantity < 0) {
      element.quantity--;
    }
  }
  return drawer;
}

function addItem(name, drawer) {
  for (element of drawer) {
    if (element.name === name) {
      element.quantity++;
    }
  }
  return drawer;
}

function countCoins(drawer) {
  let coinCount = 0;
  for (element of drawer) {
    switch (element.name) {
      case "penny":
      case "nickel":
      case "dime":
      case "quarter":
        coinCount += element.quantity;
      default:
        continue;
    }
  }
  return coinCount;
}

function countNotes(drawer) {
  let noteCount = 0;
  for (element of drawer) {
    switch (element.name) {
      case "one":
      case "five":
      case "ten":
      case "twenty":
      case "hundred":
        noteCount += element.quantity;
      default:
        continue;
    }
  }
  return noteCount;
}

function sumDrawer(drawer) {
  let sum = 0;
  for (element of drawer) {
    sum += (element.value * element.quantity) / 100;
  }
  return `\$${sum.toFixed(2)}`;
}

function canMakeAmount(target, drawer) {
  for (let i = drawer.length - 1; i >= 0; i--) {
    const divisor = Math.floor(target / drawer[i].value);
    if (divisor >= 1) {
      if (divisor <= drawer[i].quantity) {
        target -= divisor * drawer[i].value;
      } else {
        target -= drawer[i].quantity * drawer[i].value;
      }
    }
  }

  if (target === 0) {
    return true;
  } else {
    return false;
  }
}

function transaction(cost, paid, drawer) {
  if (cost > paid) {
    return drawer;
  }

  let inboundTarget = paid;
  for (let i = drawer.length - 1; i >= 0; i--) {
    const divisor = Math.floor(inboundTarget / drawer[i].value);
    if (divisor >= 1) {
      inboundTarget -= divisor * drawer[i].value;
      drawer[i].quantity += divisor;
    }
  }

  let outboundTarget = paid - cost;
  for (let i = drawer.length - 1; i >= 0; i--) {
    const divisor = Math.floor(outboundTarget / drawer[i].value);
    if (divisor >= 1) {
      if (divisor <= drawer[i].quantity) {
        outboundTarget -= divisor * drawer[i].value;
        drawer[i].quantity -= divisor;
      } else {
        outboundTarget -= drawer[i].quantity * drawer[i].value;
        drawer[i].quantity = 0;
      }
    }
  }

  return drawer;
}

/*
console.log(countCoins(drawer));
console.log(countNotes(drawer));
console.log(sumDrawer(drawer));
console.log(addItem("penny", drawer));
*/

console.log(canMakeAmount(613, drawer2));
console.log(canMakeAmount(1651, drawer2));

console.log(transaction(450, 1000, drawer2));
