// const nums = [1,2,3];
// const nums1 = [4,5,6];
// const nums2 = [...nums , ...nums1]

// console.log(nums2);

// const nums = [1, 2, 3];
// const sum = (a, b, c) => {
//   console.log(a + b + c);
// };

// sum(...nums);

// const str = "abc";

// const chars = [...str];

// console.log(chars);

let obj1 = {
  name: "PW Skills",
  course: "Full Stack Web Dev",
};

let obj2 = {
  rating: 5,
    reviews: 2000,
  name: 'pw',
};

const obj = {
  ...obj1,
  ...obj2,
};
console.log(obj);
