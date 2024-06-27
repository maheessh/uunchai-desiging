const studentMarks = [85, 87, 98, 93, 88, 89, 80, 79];

let sum =0;
for (let sumM of studentMarks) {
    sum = sum + sumM;
}

console.log("Total Score of After Add all marks = " , sum);
let avg = sum/ studentMarks.length
console.log("Avergage class mark is = " + avg);

