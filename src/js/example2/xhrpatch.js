// $ curl -X PATCH http://localhost:5000/todos/4 -H "Content-Type: application/json" -d '{"completed": true}'

const xhrPost = new XMLHttpRequest();
xhrPost.open('PATCH', 'http://localhost:3000/todos/4');
xhrPost.setRequestHeader('Content-type', 'application/json');
xhrPost.send(JSON.stringify({completed: true}));

xhrPost.onreadystatechange = function (e) {
  if (xhrPost.readyState !== XMLHttpRequest.DONE) return;

  if (xhrPost.status === 200) {
    console.log('PATCH: ', xhrPost.responseText);
  } else {
    console.log('ERROR');
  }
}