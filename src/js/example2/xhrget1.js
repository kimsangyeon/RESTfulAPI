// $ curl -X GET http://localhost:5000/todos

const xhrGet1 = new XMLHttpRequest();
xhrGet1.open('GET', 'http://localhost:3000/todos');
xhrGet1.send();

xhrGet1.onreadystatechange = function (e) {
  if (xhrGet1.readyState !== XMLHttpRequest.DONE) return;

  if (xhrGet1.status === 200) {
    console.log('GET: ', xhrGet1.responseText);
  } else {
    console.log('ERROR');
  }
}