function fizzBuzz(n) {
  const result = [];
  for (let i = 1; i <= n; i++) {
    let value = "";
    if (i % 3 === 0) {
      value += "Fizz";
    }
    if (i % 5 === 0) {
      value += "Buzz";
    }
    if (value === "") {
      value = i.toString();
    }
    result.push(value);
  }
  return result;
}

const n = 15;
const result = fizzBuzz(n);
console.log(result);
