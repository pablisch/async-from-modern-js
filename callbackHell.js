function getData(endpoint, cb) {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', endpoint);

  xhr.onreadystatechange = function () {
    if ((this.readyState === 4) & (this.status === 200)) {
      cb(JSON.parse(this.responseText));
    }
  };

  setTimeout(() => {
    xhr.send();
  }, Math.floor(Math.random() * 1000) + 500);
}

getData('./movies.json', (data) => {
  data.forEach(film => console.log(film))
  getData('./actors.json', (data) => {
    data.forEach(actor => console.log(actor))
    getData('./directors.json', (data) => {
      data.forEach(director => console.log(director))
    });
  });
});
