function findDuplicates(array) {
  let count = 0;
  let visited = [];

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (i === j || visited.includes(array[i])) {
        continue;
      }
      if (array[i] === array[j]) {
        count++;
        visited.push(array[i]);
      }
    }
  }
  return count;
}

const names = ["Sofia", "Muhammed", "Sofia"];

console.log(findDuplicates(names));
