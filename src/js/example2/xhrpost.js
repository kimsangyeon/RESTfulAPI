// $ curl -X POST http://localhost:5000/todos -H "Content-Type: application/json" -d '{"id": 4, "content": "Angular", "completed": true}'

const xhrPost = new XMLHttpRequest();
xhrPost.open('POST', 'http://localhost:3000/todos');
xhrPost.setRequestHeader('Content-type', 'application/json');
xhrPost.send(JSON.stringify({id: 4, content: 'React', completed: true}));

xhrPost.onreadystatechange = function (e) {
  if (xhrPost.readyState !== XMLHttpRequest.DONE) return;

  if (xhrPost.status === 201) {
    console.log('POST: ', xhrPost.responseText);
  } else {
    console.log('ERROR');
  }
}