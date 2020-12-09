// $ curl -X PUT http://localhost:5000/todos/4 -H "Content-Type: application/json" -d '{"id": 4, "content": "React", "completed": false}'

const xhrPost = new XMLHttpRequest();
xhrPost.open('PUT', 'http://localhost:3000/todos/4');
xhrPost.setRequestHeader('Content-type', 'application/json');
xhrPost.send(JSON.stringify({id: 4, content: 'Redux', completed: false}));

xhrPost.onreadystatechange = function (e) {
  if (xhrPost.readyState !== XMLHttpRequest.DONE) return;

  if (xhrPost.status === 200) {
    console.log('PUT: ', xhrPost.responseText);
  } else {
    console.log('ERROR');
  }
}