'use strict';

const button = document.getElementById('request_button');
const text = document.getElementById('request_text');

button.addEventListener('click', () => {
  console.log('click');

  text.firstChild.nodeValue = '123';
}, false);
