const inpTodo = document.getElementById('inp-todo');
const btnSave = document.getElementById('btn-save');
const ulTodo = document.getElementById('todo-list');

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

function addTodo() {
  const inpTodoValue = inpTodo.value.trim();

  // valido inpTodo: inpTodoValue === '' // false  !false = true
  if (!inpTodoValue) {
    alert('Shkruaj nje todo');
    return;
  }

  const li = createHtmlElement('li', inpTodoValue, 'list-group-item d-flex justify-content-between');
  const span = document.createElement('span');
  const btnDone = createHtmlElement('button', 'Done', 'btn btn-outline-success');
  btnDone.addEventListener('click', () => {
    li.classList.toggle('done');
  });

  const btnDelete = createHtmlElement('button', 'Delete', 'btn btn-outline-danger ms-1');
  btnDelete.addEventListener('click', () => {
    // li.remove();
    ulTodo.removeChild(li);
  });

  //   span.appendChild(btnDone);
  //   span.appendChild(btnDelete);
  span.append(btnDone, btnDelete);

  li.appendChild(span);
  ulTodo.appendChild(li);

  inpTodo.value = '';
}

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
