// const logInForm = document.getElementById("login-form");
// const loginInput = logInForm.querySelector("input");
// const loginButton = logInForm.querySelector("button");
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
// string만 포함된 변수는 대문자 사용하고 string을 저장하고 싶을 때 사용
// 중요한 정보를 담은게 아니라서 대문자로 작성
// 본인이 생성한 string이 반복될 경우에 대문자 변수설정하여 오류가 나도 발견할 수 있게 하면 좋다.

function onLogInSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value ;
    // greeting.innerText = "Hello!" + username;
    localStorage.setItem("USERNAME_KEY",username);
    
    //'', "" 이 아니라 `` 백틱기호 ~표있는 키 
    // ` Hello ${username} nice to meet you.`
    
    paintGreetings();

    //localstorage는 브라우저가 가지고 있는 작은 DB같은 API
    // localStorage.setItem("username","mimi");
    //저장 
    // localStorage.getItem("username");
    //값을 불러오기
    // localStorage.removeItem("username");
    //삭제
}

// function이 하나의 argument를 받도록하고 js에 넘겨주고 있음.
// js는 onLogInSubmit함수의 첫번째 argument로 발생한 일에 대해 네가 필요로 할만한 정보를 줌

function paintGreetings(username){
    greeting.innerText = `Hello! ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit",onLogInSubmit);


// submit event가 발생하게 되면 브라우저가 알아서 function을 실행해주는것이 아니라,
// ()에 어떠한 argument를 넣어주고 실행되는 것
// argument는 무엇인가??? -> 그게 바로 event
// 공간만 할당해주면 공간에 알아서 정보를 채워줌. (지금 막 벌어진 상황에 대한 정보)
// event안에 preventDefault가 있음.
//preventDefault함수는 event의 기본 행동이 발생하지 않도록 막는 것
//기본행동 : 어떤 function에 대해 브라우저가 기본적으로 수행하는 동작
//여기서는 form을 submit하는데 submit할 경우 브라우저는 기본적으로 페이지를 새로고침을 하는데 이를 막아줌.



// addEventListener안에 있는 함수는 직접 실행하지 않는다!!

const savedUsername = localStorage.getItem("USERNAME_KEY");
console.log(savedUsername);

if (savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLogInSubmit);
    //show the form
} else {
    paintGreetings();
    //show the greeting
}



