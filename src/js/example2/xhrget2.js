// $ curl -X GET http://localhost:5000/todos/1

const xhrGet2 = new XMLHttpRequest();
xhrGet2.open('GET', 'http://localhost:3000/todos/1');
xhrGet2.send();

xhrGet2.onreadystatechange = function (e) {
  if (xhrGet2.readyState !== XMLHttpRequest.DONE) return;

  if (xhrGet2.status === 200) {
    console.log('GET: ', xhrGet2.responseText);
  } else {
    console.log('ERROR');
  }
}