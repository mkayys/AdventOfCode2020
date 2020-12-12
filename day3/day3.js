// Part 1

const fs = require('fs');

const data = fs.readFileSync('./day3_mish.txt', { encoding: 'utf8' });

// traversal patter - right 3, down 1

function treeHitting(data) {
    let slopes = data.split("\n");
    // console.log(data);
    let trees = 0;
    let rightMoves = slopes[0].length;
    let downMoves = slopes.length;
    let right = 0;
    let down = 0;
    while (down < downMoves - 1) {
        if (right === (rightMoves - 1)) {
            right = -1;
        } else if (right === (rightMoves - 2)) {
            right = -2;
        } else if (right === (rightMoves - 3)) {
            right = -3;
        }
        right += 3;
        down += 1;
        if (slopes[down][right] === "#") trees += 1;
    }
    return trees;
}

// console.log(treeHitting(data));


// PART 2
const patterns = [[1, 1], [3, 1], [5,1], [7, 1], [1, 2]];

function treeHittingFun(data, patterns) {
    let slopes = data.split("\n");
    let rightMoves = slopes[0].length;
    let downMoves = slopes.length;
    let allTreesHit = [];
    for (let i = 0; i < patterns.length; i ++) {
        let moveRight = patterns[i][0];
        let moveDown = patterns[i][1];
        let right = 0;
        let down = 0;
        let trees = 0;

        while (down < downMoves - moveDown) {
            right += moveRight;
            if (right >= rightMoves) right %= rightMoves;
            down += moveDown;
            if (slopes[down][right] === "#") trees += 1;
        }
        allTreesHit.push(trees);
    }
    // console.log(allTreesHit)
    return allTreesHit.reduce(((acc, ele) => acc * ele));
}

console.log(treeHittingFun(data, patterns));