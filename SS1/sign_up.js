// function store(){

//     var email = document.getElementById('email');
//     var name = document.getElementById('name');
//     var pw = document.getElementById('pw');
//     const login = document.querySelector("#sign_up");

//     if(name.value.length == 0){
//         alert('Please fill in username');

//     }else if(pw.value.length == 0){
//         alert('Please fill in password');

//     }else if(email.value.length == 0){
//         alert('Please fill in email');

//     }else if(name.value.length == 0 && pw.value.length == 0 && email.value.length == 0){
//         alert('Please fill in information');

//     }else if(name.value.length > 8){
//         alert('Username max 8 letters');

//     }else{
//         localStorage.setItem('email', email.value);
//         localStorage.setItem('name', name.value);
//         localStorage.setItem('pw', pw.value);
//         // alert('Your account has been created');
//         // login.onclick = () => {
//         window.location.href = "contact.html"//move to log in page
        
        
//     }
// }


const account_details = [
    {
    email: "linh@gmail.com",
    name: "linh",
    pw: 123456
    },
    {
    email: "email: ngoc@gmail.com",
    name: "ngoc",
    pw: 987643
    }
];


let account;

if (localStorage.getItem("email") !== null && localStorage.getItem("name") !== null && localStorage.getItem("pw") !== null){
    account = localStorage.getItem("account_details");
    // account = localStorage.getItem("name");
    // account = localStorage.getItem("pw");
    account = JSON.parse(account)
} else {
    account = [];
}
console.log(
    "Sign up successfully!",
    account
);