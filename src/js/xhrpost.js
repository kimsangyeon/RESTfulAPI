
const elXhrPostJsonBtn = document.getElementById('xhrPostJsonBtn');
elXhrPostJsonBtn.addEventListener('click', () => {
    const xhr = new XMLHttpRequest();
    const jsonData = {
        name: 'sanji',
        birth: 2019
    };

    xhr.onload = () => {
        if (xhr.status === 200 || xhr.status === 201) { // 201 created, 자원이 성공적으로 생성되었다.
            console.log(xhr.responseText);
        } else {
            console.log(xhr.responseText);
        }
    };

    xhr.open('POST', `http://localhost:8080/post/json`);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(jsonData));
});