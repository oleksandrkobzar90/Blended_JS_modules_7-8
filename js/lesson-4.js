//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//! Завдання: 1
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 1 - отримай body елемент і виведи його в консоль;
const body = document.body;
console.log(body);

// 2 - отримай елемент id="title" і виведи його в консоль;
const titleL = document.querySelector('#title');
console.log(titleL);

// 3 - отримай елемент class="list" і виведи його в консоль;
const elemClassList = document.querySelector('.list');
console.log(elemClassList);

// 4 - отримай всі елементи з атрибутом data-topic і виведи їх в консоль;
const elemDataTopic = document.querySelectorAll('[data-topic]');
console.log(elemDataTopic);

// 5 - отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
const elemDataTopicFirst = document.querySelector('[data-topic]');
console.log(elemDataTopicFirst);

const elemDataTopicFirstIndex = document.querySelectorAll('[data-topic]');
console.log(elemDataTopicFirstIndex[0]);

// 6 - отримай останній елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
const elemDataTopicLast =
  elemDataTopicFirstIndex[elemDataTopicFirstIndex.length - 1];
console.log(elemDataTopicLast);

// 7 - який елемент є сусідом для h1? Знайти і виведи його в консоль;
const h1 = document.querySelector('h1');
const siblingh1 = h1.nextElementSibling;
console.log(siblingh1);

// 8 - по тегу h3 знайти всі заголовки та виведи їх у консоль;
const h3 = document.querySelectorAll('h3');
h3.forEach(h => console.log(h.textContent));

// 9 - для кожного елмента h3 додай class="active", який змінить колір заголовка на червоний колір
h3.forEach(h => h.classList.add('active'));

// 10 - знайти елемент li який має атрибут data-topic з значенням "navigation" і виведи його в консоль;
const elemDataTopicNavigate = document.querySelector(
  '[data-topic = "navigation"]'
);
console.log(elemDataTopicNavigate);

// 11 - додай для знайденого елемента data-topic="navigation" атрибут style і зроби його backgroundColor жовтим
elemDataTopicNavigate.setAttribute('style', 'background-color: yellow');

// 12 - у елемента data-topic="navigation" знайди елемент р і зміни його текст на "Я змінив тут текст!".
const p = elemDataTopicNavigate.querySelector('p');
p.textContent = 'Я змінив тут текст!';

// 13 - створи const currentTopic = "manipulation"; після цього знайди елемент у якогоо атрибут data-topic має значення, яке зберігається у змінній currentTopic і виведи його в консоль;
const currentTopic = 'manipulation';
const elemCurrentTopic = document.querySelector(`[data-topic=${currentTopic}]`);
console.log(elemCurrentTopic);

// 14 - додай до знайденого елемента атрибут style і зроби його backgroundColor блакитним;
elemCurrentTopic.style.backgroundColor = 'blue';

// 15 - знайти в документі заголовок, який має class="completed" і виведи його в консоль;
const hCompleted = document.querySelector('.completed');
console.log(hCompleted);

// 16 - видали елемент li в якому знаходиться заголовок, який має class="completed"
const liHCompleted = hCompleted.parentNode;
liHCompleted.remove();

// 17 - після заголовка h1 (перед списком) додай новий елемент p і задай йому наступний текст: "Об'єктна модель документа (Document Object Model)"
const elemh1 = document.querySelector('h1');
const p = document.createElement('p');
p.textContent = "Об'єктна модель документа (Document Object Model)";
elemh1.insertAdjacentElement('afterend', p);

// 18 - додай новий елемент списку у кінець списка, його заголовок це - "Властивість innerHTML" а опис (р) - "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу". тобто, потрібно створити елемент LI потім наповнити H3 та P і готову LI закинути у кінець списку;
const ul = document.querySelector('ul');
const li = document.createElement('li');
const elemh3 = document.createElement('h3');
elemh3.textContent = 'Властивість innerHTML';
const elemp = document.createElement('p');
elemp.textContent =
  'Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу". тобто, потрібно створити елемент LI потім наповнити H3 та P і готову LI закинути у кінець списку.';
li.append(elemh3, elemp);
ul.append(li);

// 19 - зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()

const markup = `<li>
          <h3>Властивість innerHTML</h3>
          <p>
            Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу". тобто, потрібно створити елемент LI потім наповнити H3 та P і готову LI закинути у кінець списку.
          </p>`;

ul.insertAdjacentHTML('beforeend', markup);
// 20 - очисти список
ul.innerHTML = '';

//##################################
//! Завдання 2:
//##################################
// Створіть контейнер div (з класом number-container) в HTML-документі
// та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними
// числами від 1 до 100 і додайте їх до контейнера div(numberContainer).
// Парні числа повинні мати зелений фон (додати клас even),
// Непарні числа - жовтий фон (додати клас odd).

// const randomNumber = () => Math.floor(Math.random() * 100) + 1;

const numberContainer = document.createElement('div');
numberContainer.classList.add('number-container');
ul.insertAdjacentElement('afterend', numberContainer);

for (let i = 0; i < 100; i++) {
  const numberBlock = document.createElement('div');
  numberBlock.classList.add('number');

  const randomNumber = () => Math.floor(Math.random() * 100) + 1;
  const number = randomNumber();

  numberBlock.textContent = number;

  if (number % 2 === 0) {
    numberBlock.classList.add('even');
  } else {
    numberBlock.classList.add('odd');
  }

  numberContainer.append(numberBlock);
}

//##################################
//! Завдання 3:
//##################################
// Form Events, Input, Focus, Blur and Submit.

// Використовуй шаблон форми з файлу html.

// 1 - При події `input`, якщо користувач ввів в поле більше
// 6 символів то додати клас `success`. Якщо ж символів менше аніж 6,
// то клас `error`

// const input = document.querySelector('input');

// input.addEventListener('input', () => {
//   const inputLength = input.value.length;

//   if (inputLength > 6) {
//     input.classList.add('success');
//     input.classList.remove('error');
//   } else {
//     input.classList.add('error');
//     input.classList.remove('success');
//   }
// });

// 2 - При події `focus` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid green'`

// input.addEventListener('focus', () => {
//   const inputLength = input.value.length;

//   if (inputLength === 0) {
//     input.style.outline = '3px solid red';
//   } else {
//     input.style.outline = '3px solid green';
//   }
// });

// 3 - При події `blur` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid lime'`

// input.addEventListener('blur', () => {
//   const inputLength = input.value.length;

//   if (inputLength === 0) {
//     input.style.outline = '3px solid red';
//   } else {
//     input.style.outline = '3px solid lime';
//   }
// });

// 4 - При події `submit`. Відміни поведінку браузера по змовчуванню.
// Дістань данні з інпуту і чек боксу, зроби перевірку,
// що інпут не порожній, також, що нажатий чек бокс у положення true,
// якщо користувач все виконав вірно, збери данні (userName)
// у обьект і виведи у консоль. У разі, якщо користувач не виконав
// одну із умов, виведи повідомлення. Також при події інпут реалізуй додавання
// ім`я користувача у span, замість слова "Anonymous".
// Якщо користувач ввів ім`я, а потім видалив, зроби так,
// щоб на місце повернулось дефолтне знаяення "Anonymous".
// При відправці форми, очисти інпут, верни чек бокс у положення
// false, верни дефолтне значення "Anonymous" у span.

const form = document.querySelector('.js-contact-form');
const inputText = document.querySelector('.js-username-input');
const output = document.querySelector('.js-username-output');

inputText.addEventListener('input', handleInput);
function handleInput(event) {
  const value = event.currentTarget.value.trim();
  output.textContent = value === '' ? 'Anonymous' : value;
}

form.addEventListener('submit', handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;

  const input = form.elements.userName.value.trim();
  const checkbox = form.elements.accept.checked;

  if (input === '' || checkbox === false) {
    return alert(
      'Поле повинно бути заповнено, а в чекбоксі повинна бути відмітка!'
    );
  }

  const inputs = {
    userName: input,
  };

  console.log(inputs);

  event.target.reset();
}

//##################################
//! Завдання 4:
//##################################
// Використовуй шаблон розмітки з файлу html та напиши наступний функціонал:
// При кліку на кнопку "Зменшити" квадрат стає меньшим на 20 пікселів,
// При кліку на кнопку "Збільшити" - квадрат стає більшим на 20 пікселів.

const box = document.querySelector('.box');
const decreaseBtn = document.querySelector('.js-decrease');
const increaseBtn = document.querySelector('.js-increase');

let width = box.offsetWidth;
let height = box.offsetHeight;

decreaseBtn.addEventListener('click', handleCklickdecreaseBtn);
function handleCklickdecreaseBtn() {
  width -= 10;
  height -= 10;

  box.style.width = `${width}px`;
  box.style.height = `${height}px`;
}

increaseBtn.addEventListener('click', handleCklickincreaseBtn);
function handleCklickincreaseBtn() {
  width += 10;
  height += 10;

  box.style.width = `${width}px`;
  box.style.height = `${height}px`;
}
