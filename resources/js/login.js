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
document.getElementById('login-button').onclick = function (event) {
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
        //console.log('login');
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
}

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

function parseLogin(responce) {
    /*console.log('user get');
    console.log('responce: ' + responce.data);*/

    try {
        var nameArray = responce.data.name.split(' ');
        document.getElementById('private-button').innerHTML = nameArray[1];

        document.getElementById('user-menu').classList.remove('invisible');
        document.getElementById('guest-menu').classList.add('invisible');

        $('#login').modal('hide');
    } catch (err) {
        /*console.log('Login Error');
        console.log('Name ' + err.name);
        console.log('Message ' + err.message);
        console.log('Stack ' + err.stack);*/
        switch (responce.data) {
            case 'Wrong Data':
                console.log('Неверные данные');
                document.getElementById('alert-message').innerHTML = 'Неверные данные';
                break;
            case 'Access denied':
                console.log('Не прошёл проверку на безопасность'); //
                document.getElementById('alert-message').innerHTML = 'Ошибка связи с сервером. Обновите страницу.';
                break;
            default :
                document.getElementById('alert-message').innerHTML = 'Неверные данные. Будьте внимательней!';
                break;
        }
    }
}

/*function parseLogout(responce) {
    if (responce.data == 'OK') {
        //console.log('Нужно переключать меню');
        document.getElementById('guest-menu').classList.remove('invisible');
        document.getElementById('user-menu').classList.add('invisible');
        document.getElementById('login-button').innerHTML = 'Личный кабинет';
    }
}*/

