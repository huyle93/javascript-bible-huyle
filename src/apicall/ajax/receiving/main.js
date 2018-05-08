const textButton = document.getElementById('number');
const apiButton = document.getElementById('chuck');
const outputDiv = document.getElementById('output');

const textURL = 'http://numbersapi.com/random';
const apiURL = 'https://api.chucknorris.io/jokes/random';

textButton.addEventListener('click', () => {
    fetch(textURL)
    .then(response => {
        outputDiv.innerHTML = 'Waiting for response...';
        if (response.ok) {
            return response;
        }
        throw Error(response.statusText);
    })
    .then(response => response.text())
    .then(text => outputDiv.innerText = text)
    .catch(error => console.log('There was an error:', error))
}, false);

apiButton.addEventListener('click', () => {
    fetch(apiURL)
    .then(response => {
        outputDiv.innerHTML = 'Waiting for response...';
        if (response.ok) {
            return response;
        }
        throw Error(response.statusText);
    })
    .then(response => response.json())
    .then(data => outputDiv.innerText = data.value)
    .catch(error => console.log('There was an error:', error))
}, false);