async function fetchPostsAsync() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts'); // promise

    if (!response.ok) {
      throw new Error('Error while fetching posts');
    }

    const data = await response.json();
    // displayPostsWithTable(data);
    displayPostsWithCard(data);
    // console.log(data);
  } catch (e) {
    console.log('Test', e);
  } finally {
  }
}

function displayPostsWithTable(posts) {
  const tblPosts = document.getElementById('tbl-posts');

  // posts.forEach(function (post) {});
  posts.forEach((post) => {
    // tblPosts.innerHTML += `
    //     <tr>
    //         <td>${post.id}</td>
    //         <td>${post.title}</td>
    //         <td>${post.body}</td>
    //         <td>${post.userId}</td>
    //     </tr>
    // `;

    const tr = document.createElement('tr');
    const td1 = document.createElement('td');
    td1.textContent = post.id;
    const td2 = document.createElement('td');
    td2.textContent = post.title;
    const td3 = document.createElement('td');
    td3.textContent = post.body;
    const td4 = document.createElement('td');
    td4.textContent = post.userId;

    tr.append(td1, td2, td3, td4);
    tblPosts.appendChild(tr);
  });
}

function displayPostsWithCard(posts) {
  const postsCard = document.getElementById('posts-card');

  posts.forEach((post) => {
    postsCard.innerHTML += `
        <div class="card display-inline" style="width: 20rem;">
            <div class="card-body">
                <h5 class="card-title">${post.id} - ${post.title}</h5>
                <h6 class="card-subtitle mb-2 text-body-secondary">
                    <strong>User id:</strong> ${post.userId}
                </h6>
                <p class="card-text">${post.body}</p>
            </div>
        </div>
    `;
  });
}

fetchPostsAsync();
