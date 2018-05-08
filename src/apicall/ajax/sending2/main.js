const form = document.forms['todo'];
form.addEventListener('submit', addTask, false);

function addTask(event) {
    event.preventDefault();
    const task = new FormData(form);
    const url = `http://echo.jsontest.com/id/1/title/${form.task.value}`;
    const headers = new Headers({
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    });
    const request = new Request(url, {
        method: 'POST',
        mode: 'cors',
        header: headers,
        body: JSON.stringify(task)
    })
    fetch(request)
        .then(response => response.json())
        .then(data => console.log(`${data.title} saved with an id of ${data.id}`))
        .catch(error => console.log('There was an error:', error))
}