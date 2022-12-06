const puzzleInput = `    [D]    
[N] [C]    
[Z] [M] [P]
 1   2   3 

move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2`;

let cols = puzzleInput.split("\n\n")[0].split("\n");
let colsArrays = new Array(cols.length - 1);
for (let i = 0; i < cols.length - 1; i++) {
  colsArrays[i] = [];
}

let instructions = puzzleInput.split("\n\n")[1].split("\n");
let digitInstructions = [];

for (let i = 0; i < instructions.length; i++) {
  let numberToMove = Number(instructions[i].charAt(5));
  let location = Number(instructions[i].charAt(12));
  let target = Number(instructions[i].charAt(17));

  digitInstructions[i] = [numberToMove, location, target];
}

let numberOfColumns = Number(
  cols[cols.length - 1]
    .replace(/\s/g, "")
    .charAt(cols[cols.length - 1].replace(/\s/g, "").length - 1)
);

// for (let i = 0; i < cols.length - 1; i++) {
//   if (cols[i].charAt(1) !== " ") {
//     colsArrays[0].unshift(cols[i].charAt(1));
//   }

//   if (cols[i].charAt(5) !== " ") {
//     colsArrays[1].unshift(cols[i].charAt(5));
//   }

//   if (cols[i].charAt(9) !== " ") {
//     colsArrays[2].unshift(cols[i].charAt(9));
//   }
// }

// sorts columns into arrays
for (let i = 0; i < cols.length - 1; i++) {
  for (let j = 0; j < numberOfColumns; j++) {
    let func = 4 * j + 1;

    if (cols[i].charAt(func) !== " ") {
      colsArrays[j].unshift(cols[i].charAt(func));
    }
  }
}

for (let i = 0; i < digitInstructions.length; i++) {
  let numberToMove = digitInstructions[i][0];
  let from = digitInstructions[i][1] - 1;
  let target = digitInstructions[i][2] - 1;

  for (let j = 0; j < numberToMove; j++) {
    colsArrays[target].push(colsArrays[from][colsArrays[from].length - 1]);
    colsArrays[from].pop();
  }
}

function getLastItem(arr) {
  let final: string = "";
  arr.forEach((a) => {
    final += a[a.length - 1];
  });
  return final;
}

console.log(digitInstructions);
console.log(colsArrays);
console.log(getLastItem(colsArrays));
