num1 = 2;
num2 = 3;

const multiply = (num1, num2) => {
  console.log('Calculating...');
  return num1 * num2;
}

// Another comment adding some more comments edited comment here
// Testing the function edit comment here too
console.log(`The result of ${num1} + ${num2} is: ${sum(num1, num2)}`);

const sayHi = (name) => console.log(`Hi ${name}, how's it going?`);

const formatText = (text) => {
  console.log('Another print here')
  text = `${text.toLocaleUpperCase()} - formatted`;
  console.log('hello world');
  return `The new string is: ${text}`;
}
