
const elXhrgetBtn = document.getElementById('xhrGetBtn');
const name = 'sanji';
elXhrgetBtn.addEventListener('click', () => {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if (xhr.readyState === xhr.DONE) {
            if (xhr.status === 200) { // 200 : 정상적으로 응답이 처리
                console.log(xhr.responseText);
            } else {
                console.log(xhr.responseText);
            }
        }

        if (xhr.readyState === xhr.UNSENT) {
            console.log('unsent');
        } else if (xhr.readyState === xhr.OPENED) {
            console.log('opened');
        } else if (xhr.readyState === xhr.HEADERS_RECEIVED) {
            console.log('headers received');
        } else if (xhr.readyState === xhr.LOADING) {
            console.log('loading');
        }
    };

    xhr.onload = () => {
        // onload는 readyState DONE 상태에서 호출
        if (xhr.readyState === xhr.DONE) {
            if (xhr.status === 200) { // 200 : 정상적으로 응답이 처리
                console.log(xhr.responseText);
            } else {
                console.log(xhr.responseText);
            }
        }
    };

    xhr.open('GET', `http://localhost:8080/get/cats?name=${name}`);
    xhr.send();
});
