const getBtn = document.getElementById('btn-get');
const postBtn = document.getElementById('btn-post');

const getData = () => {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://reqres.in/api/users');

    xhr.onload = (res) => {
        const data  = JSON.parse(xhr.response);
        console.log(data);
    }

    xhr.send();
}

const sendData = () => {

}

getBtn.addEventListener('click', getData)
postBtn.addEventListener('click', sendData)