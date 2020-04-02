//обработка поля ввода телефона
document.getElementById('phoneInput').oninput = function (event) {
    //при воде любого значения убрать индикатор неправильно заполненного поля
    this.classList.remove('input-wrong');

    //оставить в поле ввода только менее 15 цифр
    var str = event.target.value;
    str = str.match(/\d/g) || [];
    str =str.join('');
    if (str.length > 15) str = str.substr(0, 15);
    
    document.getElementById('phoneInput').value = str;
}

//обработка поля ввода пароля
document.getElementById('passwordInput').oninput = function (event) {
    //при воде любого значения убрать индикатор пустого поля пароля
    this.classList.remove('input-wrong');
}

//обработка нажатия конопки входа
/*document.getElementById('login-button').onclick = function (event) {
    this.blur();

    var trigger = true;
    
    //проверить, все ли поля формы заполнены, при необходимости пометить пустые, запретить посылать запрос
    var inputFields = document.querySelectorAll('.form-input');
    for (var i = 0; i < inputFields.length; i++) {
        if (inputFields[i].value == 0 || inputFields[i].value == '') {
            inputFields[i].classList.add('input-wrong');
            trigger = false;
        }
    }

    if (trigger) {
        console.log('login');
        document.getElementById('alert-message').innerHTML = '';

        var tempForm = document.forms.login;

        axios({
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            data: {
                [tempForm.tokenKey.value]: tempForm.token.value,
                phone: tempForm.phone.value,
                password: tempForm.password.value
            },
            url: '/api/user/login'
        })
        .then(parseLogin);
    }
    console.log ('JQuery disabled');
}*/

/*function parseLogin(responce) {
    
}*/

//обработка нажатия конопки выхода
/*document.getElementById('logout-button').onclick = function (event) {
    this.blur();
    var tempForm = document.forms.login;

    axios({
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        data: {
            [tempForm.tokenKey.value]: tempForm.token.value
        },
        url: '/api/user/logout'
    })
    .then(parseLogout);
}*/

/*function parseLogout(responce) {
    if (responce.data == 'OK') {
        //console.log('Нужно переключать меню');
        document.getElementById('guest-menu').classList.remove('invisible');
        document.getElementById('user-menu').classList.add('invisible');
        document.getElementById('login-button').innerHTML = 'Личный кабинет';
    }
}*/

