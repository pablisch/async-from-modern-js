function getData(endpoint) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', endpoint);

    xhr.onreadystatechange = function () {
      if (this.readyState === 4) {
        if (this.status === 200) {
          resolve(JSON.parse(this.responseText));
        } else {
          reject('Something went wrong')
        }
      }
    };

    setTimeout(() => {
      xhr.send();
    }, Math.floor(Math.random() * 1000) + 500);

  });
}

getData('./movies.json')
  .then((movies) => {
    movies.forEach(film => console.log(film));
    return getData('./actors.json');
  })
  .then((actors) => {
    actors.forEach(actor => console.log(actor));
    return getData('./directors.json');
  })
  .then((directors) => {
    directors.forEach(director => console.log(director));
  })
  .catch((error) => console.log(error));

