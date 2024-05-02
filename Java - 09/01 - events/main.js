const main = document.getElementById('main');

// document.addEventListener('keyup', function (emriParametrit)
document.addEventListener('keyup', function (e) {
  //   console.log(e);
  main.innerHTML = '';

  const pressedKey = {
    key: e.key === ' ' ? 'Space' : e.key,
    keyCode: e.keyCode,
    code: e.code,
  };

  for (const key in pressedKey) {
    const div = document.createElement('div');
    div.className = 'box';

    const p = document.createElement('p');
    const pText = document.createTextNode(key);
    p.appendChild(pText);

    const h1 = document.createElement('h1');
    const h1Text = document.createTextNode(pressedKey[key]);
    h1.appendChild(h1Text);

    div.append(p, h1);

    main.appendChild(div);
  }
});
