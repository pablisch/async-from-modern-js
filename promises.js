// Create a promise
const promise = new Promise((resolve, reject) => {
  // 👇🏻 simulates an async task
  setTimeout(() => {
    console.log('Async task complete');
    resolve();
  }, 1000);
});

promise.then(() => {
  console.log('Promise resolved..')
});

console.log('Hello from global scope');

// Create a promise
const promise2 = new Promise((resolve, reject) => {
  // 👇🏻 simulates an async task
  setTimeout(() => {
    resolve({ name: 'Sabina', age: 30 });
  }, 2000);
}).then((user) => console.log(user));

promise2.then(() => {
  console.log('Promise2 resolved..')
});

// Create a promise
const getUser = new Promise((resolve, reject) => {
  // 👇🏻 simulates an async task
  setTimeout(() => {
    let error = false; // mocks NO ERROR
    // let error = true; // mocks ERROR

    if (!error) {
      resolve({ name: 'Pablo', age: 40 });
    } else {
      reject('Something went wrong');
    }    
  }, 3000);
});

getUser
  .then((user) => console.log(user))
  .catch((error) => console.log(error))
  .finally(() => console.log('The promise has been resolved or rejected..'));

  



