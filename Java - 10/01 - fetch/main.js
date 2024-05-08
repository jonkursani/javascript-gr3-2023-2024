function changeText() {
  document.querySelector('.heading').textContent = 'Text changed after 3 seconds';
}

// 3000ms = 3s
// setTimeout(changeText, 3000);

let timeoutId = setTimeout(changeText, 3000);
function stopTimeout() {
  clearTimeout(timeoutId);
}
document.querySelector('.btn-stop').addEventListener('click', stopTimeout);

// setInterval
let intervalId;
function startInterval() {
  if (!intervalId) {
    intervalId = setInterval(changeColor, 2000);
  }
}

function changeColor() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = '#' + randomColor;
}

function stopInterval() {
  clearInterval(intervalId);
}

document.querySelector('.btn-start').addEventListener('click', startInterval);
document.querySelector('.btn-stop-i').addEventListener('click', stopInterval);

// Promises
// Promise eshte objekt
// Promise states pending, resolved (fulfilled), rejected
new Promise((resolve, reject) => {
  console.log(1);

  resolve(2); // e dergon kodin te metoda then
  //   reject('Error'); // e dergon kodin te metoda catch
})
  .then((num) => {
    console.log(num);
  })
  .catch((err) => {
    console.log(err);
  });

console.log(3);

// fetch

const fetchValue = fetch('./posts.json');

fetchValue
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log('Error:', err);
  });

//  menyra e shkurte e shkrimit te arrow function
// fetchValue
//     .then((response) => response.json())
//     .then((data) => console.log(data));

function fetchPosts() {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      //   console.log(data);
      displayPosts(data);
    })
    .catch((error) => {
      console.log(error);
    });
}

function displayPosts(posts) {
  const ulPosts = document.getElementById('posts');
  posts.forEach((post) => {
    ulPosts.innerHTML += `<li>Id: ${post.id} Title: ${post.title}</li>`;
  });
}

fetchPosts();
