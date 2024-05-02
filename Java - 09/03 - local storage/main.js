const inpTodo = document.getElementById('inp-todo');
const btnSave = document.getElementById('btn-save');
const ulTodo = document.getElementById('todo-list');
const btnClear = document.getElementById('btn-clear');
const inpFilter = document.getElementById('inp-filter');

function createHtmlElement(elementToCreate, text, classes) {
  const element = document.createElement(elementToCreate);
  // <li></li>
  // li.textContent = inpTodoValue;
  const elementText = document.createTextNode(text);
  element.appendChild(elementText);
  // <li>Tekstin e userit</li>
  element.className = classes;
  // li.classList.add(classes);
  // <li class='list-group-item'>Tekstin e userit</li>

  return element;
}

function addToDom(itemText) {
  const li = createHtmlElement('li', itemText, 'list-group-item d-flex justify-content-between');
  const span = document.createElement('span');
  const btnDone = createHtmlElement('button', 'Done', 'btn btn-outline-success');
  btnDone.addEventListener('click', () => {
    li.classList.toggle('done');
  });

  const btnDelete = createHtmlElement('button', 'Delete', 'btn btn-outline-danger ms-1');
  btnDelete.addEventListener('click', () => {
    // li.remove();
    ulTodo.removeChild(li);
    removeFromStorage(li.firstChild.textContent);
  });

  //   span.appendChild(btnDone);
  //   span.appendChild(btnDelete);
  span.append(btnDone, btnDelete);

  li.appendChild(span);
  ulTodo.appendChild(li);
}

function checkIfTodoExist(todo) {
  const todosFromStorage = getFromStorage();
  if (todosFromStorage.includes(todo)) {
    return true;
  } else {
    return false;
  }
}

function addTodo() {
  const inpTodoValue = inpTodo.value.trim();

  // valido inpTodo: inpTodoValue === '' // false  !false = true
  if (!inpTodoValue) {
    alert('Shkruaj nje todo');
    return;
  }

  if (checkIfTodoExist(inpTodoValue)) {
    alert('Kjo todo ekziston');
    return;
  }

  addToDom(inpTodoValue);
  addToStorage(inpTodoValue);

  inpTodo.value = '';
}

function clearAll() {
  //   ulTodo.innerHTML = '';

  while (ulTodo.firstChild) {
    ulTodo.removeChild(ulTodo.firstChild);
  }

  localStorage.removeItem('todos');
}

function filterTodos() {
  const listItems = document.querySelectorAll('li');

  listItems.forEach((item) => {
    // console.log(item);
    const itemText = item.firstChild.textContent.toLowerCase();
    const inputValue = inpFilter.value.trim().toLowerCase();

    if (itemText.includes(inputValue)) {
      item.classList.remove('d-none');
    } else {
      item.classList.add('d-none');
    }
  });
}

function getFromStorage() {
  let todosFromStorage;

  // localStorage.getItem('todos') === ''
  if (!localStorage.getItem('todos')) {
    todosFromStorage = [];
  } else {
    // '['a', 'b']'
    todosFromStorage = JSON.parse(localStorage.getItem('todos'));
    // ['a', 'b']
  }

  return todosFromStorage;
}

function addToStorage(item) {
  const todosFromStorage = getFromStorage();
  todosFromStorage.push(item);
  localStorage.setItem('todos', JSON.stringify(todosFromStorage));
}

function removeFromStorage(todoToRemove) {
  let todosFromStorage = getFromStorage();
  todosFromStorage = todosFromStorage.filter((item) => item !== todoToRemove);
  localStorage.setItem('todos', JSON.stringify(todosFromStorage));
}

function displayTodos() {
  const todosFromStorage = getFromStorage();
  todosFromStorage.forEach((todo) => addToDom(todo));
}

// Evente listeners
// btnSave.addEventListener('click', function() {})
// btnSave.addEventListener('click', () => {});
btnSave.addEventListener('click', addTodo);
// inpTodo.addEventListener('keypress', (emriParametrit) => {})
inpTodo.addEventListener('keypress', (e) => {
  // "parametri" tregon ma shume info per eventin qe ka ndodh
  //  console.log(e);
  if (e.key === 'Enter') {
    addTodo();
  }
});
btnClear.addEventListener('click', clearAll);
inpFilter.addEventListener('keyup', filterTodos);
document.addEventListener('DOMContentLoaded', displayTodos);

// local storage methods
// localStorage.setItem('name', 'Adnan');
// console.log(localStorage.getItem('name'));
// localStorage.removeItem('name');
// localStorage.clear();
