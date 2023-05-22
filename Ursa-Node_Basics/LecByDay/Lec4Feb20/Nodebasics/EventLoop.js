// Given 2 objects  (Implementation)
// const obj1 = {a: 1, b: 2, c: 50, d: 60};
// const obj2 = {b: 2, d: 60, c: 60, f: 20};

// Return an object with common keys having same values
// Output: {b: 2, d: 60}

const obj1 = { a: 1, b: 2, c: 50, d: 60 };
const obj2 = { b: 2, d: 60, c: 60, f: 20 };

function CommonKey(obj1, obj2) {
  const commonKeys = Object.keys(obj1).filter((key) =>
    obj2.hasOwnProperty(key)
  );
  const result = {};

  commonKeys.forEach((key) => {
    if (obj1[key] === obj2[key]) {
      result[key] = obj1[key];
    }
  });

  return result;
}

const output = CommonKey(obj1, obj2);
console.log(output);

//problem 2
// Implement a compose function which can take any combination of these 3 functions 
// let’s say trim(), removeSpecialCharacters() & reverse() in any order and based on that modifies the string 
// - “Qu^&ick;:@#$%Brown/?Fox” (Implementation)
