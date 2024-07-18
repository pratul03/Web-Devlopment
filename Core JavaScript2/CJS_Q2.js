/**
 * 2. The following is an array of 10 students ages:
    => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
    Sort the array and find the min and max age.
    Find the median age (one middle item or two middle items divided by two)
    Find the average age (all items divided by number of items)
    Find the range of the ages (max minus min)
    Compare the value of (min - average) and (max - average), use abs() method
 */

// Sorting

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
ages.sort((a, b) => a - b);
console.log(`Sorted array${ages}`);

// Solution 1

const minAge = ages[0];
const maxAge = ages[ages.length - 1];
console.log(`minimum age is ${minAge} & maximum age is ${maxAge}`);

//Solution 2

let medianAge;
if (ages.length % 2 === 0) {
  const mid1 = ages[Math.floor(ages.length / 2)];
  const mid2 = ages[Math.floor(ages.length / 2)];
  medianAge = mid1 + mid2;
  console.log(`Median age of the array is ${medianAge}`);
} else {
  medianAge = ages[Math.floor(ages.length / 2)];
  console.log(`Median age of the array is ${medianAge}`);
}

// Solution 3

let sum = 0;
for (let i = 0; i < ages.length; i++) {
  sum += ages[i];
}
const num = ages.length;
const avgAge = sum / num;
console.log(`The average age is ${avgAge}`);

// Solution 4

const ageRange = maxAge - minAge;
console.log(`Range of of the ages ${ageRange} `);

//Solution 5

const absMinAge = Math.abs(minAge - avgAge);
const absMaxAge = Math.abs(maxAge - avgAge);
console.log(
  `Comparison of minimumAge - avgAge is = ${absMinAge} & maximumAge - avgAge is = ${absMaxAge}`
);
