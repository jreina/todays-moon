const moon = require('ridiculous-moon-event');
const randYear = () => Math.floor(Math.random() * 5000);

const nameElement = document.getElementById('moon-name');
const yearElement = document.getElementById('moon-next-year');
const articleElement = document.getElementById('article');
const anotherButton = document.getElementById('another');


const setValues = () => {
  const generatedName = moon();
  const generatedYear = randYear();
  const article = /^[aeiou]/i.test(generatedName) ? 'an' : 'a';

  articleElement.innerText = article;
  nameElement.innerText = generatedName;
  yearElement.innerText = generatedYear;
};

setValues();

anotherButton.onclick = setValues;

