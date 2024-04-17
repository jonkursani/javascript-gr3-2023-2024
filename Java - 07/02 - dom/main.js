const todoList = document.getElementById('todo-list');
// const todoList = document.querySelector('#todo-list');
// itemi i pare i listes ne poziten [0]
// const todoList = document.getElementsByTagName('ul')[0];

const firstLi = document.getElementById('one');

// console.log(todoList);
// console.log(firstLi);
// console.log(firstLi.innerHTML);
// console.log(firstLi.innerText);
// console.log(firstLi.textContent);

const listItems = document.getElementsByClassName('done');
console.log(listItems);
for (const item of listItems) {
  item.style.color = 'green';
}

const secondLi = document.getElementById('two');
secondLi.textContent = 'Second changed';
// secondLi.textContent = '<strong>Second</strong> changed';
// secondLi.innerHTML = '<em>Second</em> changed';
// secondLi.innerHTML = `
//     <ul>
//         <li>Nested ul</li>
//     </ul>
// `;
