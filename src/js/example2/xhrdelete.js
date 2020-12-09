// $ curl -X DELETE http://localhost:5000/todos/4

const xhrPost = new XMLHttpRequest();
xhrPost.open('DELETE', 'http://localhost:3000/todos/4');
xhrPost.send();

xhrPost.onreadystatechange = function (e) {
  if (xhrPost.readyState !== XMLHttpRequest.DONE) return;

  if (xhrPost.status === 200) {
    console.log('DELETE: ', xhrPost.responseText);
  } else {
    console.log('ERROR');
  }
}