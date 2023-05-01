// anonymous fnction with callback
setTimeout(() => {
  console.log('Hello from callback');
}, 2500);

console.log('Hello from global scope');

// named function with callback
const changeText = () => {
  document.querySelector('h1').textContent = 'Hello from callback';
};

setTimeout(changeText, 2000);

// named function with callback and named setTimeout function
const changeTextAgain = () => {
  document.querySelector('h1').textContent = "I'm another message";
};

const timerId = setTimeout(changeTextAgain, 5000); // NOTE that this runs even as it is set to a const since it is given the necessary args

// code to cancel the timeout - which cancels the code that would run
document.querySelector('#cancel').addEventListener('click', () => {
  console.log(timerId)
  clearTimeout(timerId);
  console.log('Timer cancelled');
})
