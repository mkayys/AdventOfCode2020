// Part 1

const fs = require('fs'); 

const data = fs.readFileSync('./day1_mish.txt', {encoding: 'utf8'});

// BRUTE FORCE SOLUTION (Time: O(n^2))
// function reportRepair(data){
//   let arr = data.split("\n");
//     // console.log(arr);
//   for(let i = 0; i < arr.length; i ++ ){
//     let input1 = Number(arr[i]);

//     for(let j = i + 1; j < arr.length; j ++ ){
//       let input2 = Number(arr[j]);
//       if(input1 + input2 === 2020) return input1 * input2
//     }
//   }
// }

//HASH WAY (Time: O(n))
function reportRepair(data){
  let arr = data.split("\n");
  let hash = {};

  for(let i = 0; i < arr.length; i ++ ){
    let num = Number[arr[i]];
    
  }

}


// console.log(reportRepair(data))

// Part 2

function reportRepairAgain(data) {
    let arr = data.split("\n");
    // console.log(arr);
    for (let i = 0; i < arr.length; i++) {
        let input1 = Number(arr[i]);

        for (let j = i + 1; j < arr.length; j++) {
            let input2 = Number(arr[j]);
            
            for(let k = j + 1; k < arr.length; k++) {
                let input3 = Number(arr[k]);

                if((input1 + input2 + input3) === 2020 ) return input1 * input2 * input3;
            }
        }
    }
}

console.log(reportRepairAgain(data));