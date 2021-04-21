'use strict';

// Lesson 29. Действия с элементами на странице

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      wrapper = document.querySelector('.wrapper'),
      hearts = wrapper.querySelectorAll('.heart'),
      oneHeart = wrapper.querySelector('.heart');

// box.style.backgroundColor = 'blue';
// box.style.width = '400px';

box.style.cssText = `background-color: blue; width: 400px`;

btns[1].style.borderRadius = '35%';
circles[1].style.backgroundColor = 'green';
circles[2].style.backgroundColor = 'yellow';

// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'blue';
// }

hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
});

const div = document.createElement('div');
// const text = document.createTextNode('Тут был я');

div.classList.add('black');

wrapper.append(div);
// wrapper.appendChild(div);

// wrapper.prepend(div);

// hearts[1].before(div);
// hearts[1].after(div);

// wrapper.insertBefore(div, hearts[1]);

// circles[0].remove();
// wrapper.removeChild(hearts[1]);

circles[1].replaceWith(hearts[0]);
// wrapper.replaceChild(btns[1], hearts[0]);

div.innerHTML = '<h1>Hello World</h1>';
div.style.cssText = 'width: auto; color: blue';

// div.textContent = '<h1>Hello World</h1>';
div.insertAdjacentHTML('afterend', '<h2>Hello</h2>');