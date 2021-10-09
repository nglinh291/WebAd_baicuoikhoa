let accounts; //Tạo biến để chứa các danh sách accounts
if(localStorage.getItem("accounts") != null){
    accounts = JSON.parse(localStorage.getItem("accounts"));
} else {
    accounts = []
}

function store(event){ //lưu thông tin
    event.preventDefault();

    var email = document.getElementById('email');
    var name = document.getElementById('name');
    var pw = document.getElementById('pw');
    const login = document.querySelector("#sign_up");

    // kiểm tra kiểu dữ liệu có đạt yêu cầu không
    if(name.value.length == 0){
        alert('Please fill in username');

    }else if(pw.value.length == 0){
        alert('Please fill in password');

    }else if(email.value.length == 0){
        alert('Please fill in email');

    }else if(name.value.length == 0 && pw.value.length == 0 && email.value.length == 0){
        alert('Please fill in information');

    }else if(name.value.length > 8){
        alert('Username max 8 letters');

    }else{ //tạo 1 object chứa biến
        const data = {
            email: email.value,
            name: name.value,
            pw: pw.value
        };

    // vòng lặp để check
    let data = JSON.parse(localStorage.getItem("account")) || []
    let exist = data.length
    let loginSuccess = false;
    let index;
    for (let i = 0; i< accounts.length; i++){
        if (
            accounts[i].name == name && accounts[i].pw == pw
        ) {
            loginSuccess = true;
            index = i;
        }
    }

    if (!exist && !loginSuccess) {
        alert("Account exists"); // check tài khoản tồn tại
    } else {
        accounts.push(account);
        localStorage.setItem("accounts", JSON.stringify(accounts));
        location.href = "contact.html";
    }
    e.preventDefault();
    }}

