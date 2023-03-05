// const logInForm = document.getElementById("login-form");
// const loginInput = logInForm.querySelector("input");
// const loginButton = logInForm.querySelector("button");
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");


// const loginButton = document.querySelector("#login-form button");

    // function onLogInClick (){
    // const username = loginInput.value;
    // if (username === ""){
    //     alert("Please write your name");
    // } else if(username.length > 15) {
    //     alert("Your name is too long.")

    // }
    // javascript에서 구현하는 대신 할 수 있다면 HTML의 기본 속성을 최대한 이용하기
    // console.log(username);
    // };


//  클릭 했을 때 form을 없애고 싶다
// 1. HTML요소를 업애기
// 2. CSS를 이용해서 숨기기


//local storage가 비어있으면 form부터 보여주면서 하면 되지만
// local storage가 존재하면 form을 보여주면 안됨 h1을 보여줘야함
// -> local storage에 유저 정보가 있는지 확인