const sum = (num1, num2) => num1 + num2;

num1 = 2;
num2 = 3;

const substract = (num1, num2) => num1 - num2;

const multiply = (num1, num2) => num1 * num2;

// Another comment adding some more comments
// Testing the function
console.log(`The result of ${num1} + ${num2} is: ${sum(num1, num2)}`);

const sayHi = (name) => console.log(`Hi ${name}, how's it going?`);

const formatText = (text) => {
  text = `${text.toLocaleUpperCase()} - formatted`;
  console.log('hello world');
  return `The new string is: ${text}`;
}
