// code to log date every second and stop using button with clear
// const myCallback = () => {
//   console.log(Date.now());
// }

// const stopChange = () => {
//   clearInterval(intervalId);
// }

// const intervalId = setInterval(myCallback, 1000);

// document.getElementById('stop').addEventListener('click', stopChange);

let intervalId;

// changes from black to white
// const changeColour = () => {
//   if (document.body.style.backgroundColor !== 'black') {
//     document.body.style.backgroundColor = 'black';
//     document.body.style.color = 'white';
//   } else {
//     document.body.style.backgroundColor = 'white';
//     document.body.style.color = 'black';
//   }
// }

const changeRandomColour = () => {
  const randomColour = Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.color = `#${randomColour}`;
  const randomBackgroundColour = Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = `#${randomBackgroundColour}`;
}

const startChange = () => {
  if (!intervalId) {
    intervalId = setInterval(changeRandomColour, 500);
  }
}

const stopChange = () => {
  clearInterval(intervalId);
  intervalId = null; // set intervalId to null - allows the buttons to be clicked more than once.
}

document.getElementById('start').addEventListener('click', startChange);
document.getElementById('stop').addEventListener('click', stopChange);


