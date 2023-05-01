// // The commented code below 👇🏻 is a simple callaback toggle

// const toggle = (e) => {
//   e.target.classList.toggle('danger');
// }

// function toggle(e) {
//   e.target.classList.toggle('danger');
// }

// // toggle is passed into the event listener as a callback 👇🏻
// document.querySelector('button').addEventListener('click', toggle);

// The below 👇🏻 contains setTimeouts only to mimic a fetch request in terms of timing
// The purpose is that in this case getPosts resolves before createPosts meaning that only the first two posts appear until getPosts is made a callback of createPosts.

const posts = [
  { title: 'Post One', body: 'This is post one' },
  { title: 'Post Two', body: 'This is post two' }
];

const getPosts = () => {
  setTimeout(() => {
    posts.forEach(function (post) {
      const div = document.createElement('div');
      div.innerHTML = `<strong>${post.title}</strong> - ${post.body}`;
      document.querySelector('#posts').appendChild(div);
    });
  }, 1000);
}

// The below 👇🏻 function takes a callback so that getPosts is called AFTER createPosts resolves
const createPost = (post, callback) => {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 2000);
}

createPost({ title: 'Post Three', body: 'This is post three' }, getPosts);

// getPosts(); // 👈🏻 no longer needed as getPosts is now a callback