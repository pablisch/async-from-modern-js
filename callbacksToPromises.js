const posts = [
  { title: 'Post One', body: 'This is post one' },
  { title: 'Post Two', body: 'This is post two' }
];

// The below 👇🏻 function takes a callback so that getPosts is called AFTER createPosts resolves
const createPost = (post) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let error = false // mimics NO error arising from a request
      // let error = true // mimics an error arising from a request

      if (!error) {
        posts.push(post);
        resolve();
      } else {
        reject('Something went wrong')
      }

    }, 2000);
  }); 
}

const showError = (error) => {
  const h3 = document.createElement('h3');
  h3.innerHTML = `<strong>${error}</strong>`;
  document.getElementById('posts').appendChild(h3);
}

const getPosts = () => {
  setTimeout(() => {
    posts.forEach(function (post) {
      const div = document.createElement('div');
      div.innerHTML = `<strong>${post.title}</strong> - ${post.body}`;
      document.querySelector('#posts').appendChild(div);
    });
  }, 1000);
}

createPost({ title: 'Post Three', body: 'This is post three' })
  .then(getPosts)
  .catch(showError);
