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
console.log(colsArrays);

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

for (let i = 0; i < cols.length - 1; i++) {
  for (let j = 0; j < numberOfColumns; j++) {
    let func = 4 * j + 1;

    if (cols[i].charAt(func) !== " ") {
      colsArrays[j].unshift(cols[i].charAt(func));
    }
  }
}

// for (let i = 0; i < numberOfColumns; i++) {
//   // Got to work out how to maintain the column structure
//   // but parse into separate arrays.
//   colsArrays[i] = [];
// }

console.log(colsArrays);
