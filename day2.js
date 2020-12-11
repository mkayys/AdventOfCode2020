const fs = require("fs");

let data = fs.readFileSync("./day2_mish.txt", { encoding: "utf8" });

data = data.split("\n"); 

// PART 1

function validPW(data){
  let total = 0;

  // el = [ "13-14 f: ffff " ]
  for (let i = 0; i < data.length; i++) {
    let currString = data[i];
    let lines = currString.split(" "); //[ ["13-14"], ["f:"], ["ffff"]]
    let range = lines[0].split("-");
    let letter = lines[1][0];
    let count = 0;
      for(let j = 0; j < lines[2].length; j ++ ){
        if(lines[2][j] === letter) count ++;
      }

    if (count <= Number(range[1]) && count >= Number(range[0])) total++;
  }
  return total; 
}

// console.log(validPW(data));

// PART 2

function validPW2(data) {
  let total = 0;

  // el = [ "13-14 f: ffff " ]
  for (let i = 0; i < data.length; i++) {
    let currString = data[i];
    let lines = currString.split(" "); //[ ["13-14"], ["f:"], ["ffff"]]
    let range = lines[0].split("-");
    let letter = lines[1][0];
    let count = 0;
    
    if(lines[2][range[0]-1] === letter) count ++;
    if(lines[2][range[1]-1] === letter) count ++;
    if (count === 1) total ++;
  }
  return total;
}

console.log(validPW2(data));

