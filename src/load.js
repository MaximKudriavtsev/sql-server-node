const button = document.getElementById('request_button');
const text = document.getElementById('request_text');

button.addEventListener('click', () => {
  console.log('click');

  fetch('http://localhost:3000/get', { method: 'GET' })
    .then((res) => {
      return JSON.parse(res);
  }).then((result) => {
    text.firstChild.nodeValue = result;
  }).catch( alert );

  text.firstChild.nodeValue = 'Loading...';
}, false);


console.log('load');