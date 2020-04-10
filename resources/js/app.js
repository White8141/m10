Vue.component('nav-block',     require('./components/NavBlock.vue').default);
Vue.component('form-block',    require('./components/FormBlock.vue').default);
Vue.component('history-block', require('./components/HistoryBlock.vue').default);
Vue.component('cancel-block',  require('./components/CancelBlock.vue').default);

var vm = new Vue({
    el: '#app',
    data: {
        userData: userData,
        userId: '',
        userName: '',
        isAuth: false,
        isModalPreloadVisible: false
    },
    created: function () {
        if (this.userData && this.userData.split(',')) {
            this.userData = this.userData.split(',');
            if (this.userData[0] == 'true') {
                this.isAuth = true;
                this.userName = this.userData[1];
                this.userId = this.userData[2];
            }
        }
        this.userData = null;
        //console.log ('Создано');
    },
    mounted: function () {

        //выпадающее сверху основное меню
        var st = $(this).scrollTop();
        var lastScrollTop = st - 1;
        var isLinkPanelVisible = true;
        //спрятать панель, если экран уже прокручен
        if (st > 0) {
            $("nav.navbar").css('top', '-80px');
            isLinkPanelVisible = false;
        }
        $(window).scroll(function(event){
            st = $(this).scrollTop();
            if (st > lastScrollTop){
                if (isLinkPanelVisible) {
                    //console.log ("Спрятать панель");
                    $("nav.navbar").css('top', '-80px');
                    isLinkPanelVisible = false;
                }
            } else {
                if (!isLinkPanelVisible) {
                    //console.log ("Показать панель");
                    $("nav.navbar").css('top', '0px');
                    isLinkPanelVisible = true;
                }
            }
            lastScrollTop = st;
        });

        $('#login').on('hidden.bs.modal', function (e) {
            document.getElementById('phoneInput').classList.remove('input-wrong');
            document.getElementById('passwordInput').classList.remove('input-wrong');
            document.getElementById('alert-message').innerHTML = '';
        })

        //console.log ('Смонтировано');
    },
    methods: {
        loginUser: function () {
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
                 this.isModalPreloadVisible = true;

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
                 .then(this.parseLogin);
             }
        },
        parseLogin: function (response) {
            //console.log('user get');
            //console.log('response: ' + response.data);
            this.isModalPreloadVisible = false;

            try {
                var nameArray = response.data.name.split(' ');
                this.userName = nameArray[1];
                this.userId = response.data.biletionId;
                this.isAuth = true;

                $('#login').modal('hide');
            } catch (err) {
                /*console.log('Login Error');
                 console.log('Name ' + err.name);
                 console.log('Message ' + err.message);
                 console.log('Stack ' + err.stack);*/
                switch (response.data) {
                    case 'Wrong Data':
                        console.log('Неверные данные');
                        document.getElementById('alert-message').innerHTML = 'Неверные данные.';
                        break;
                    case 'User Unauthorized':
                        console.log('Неверные данные пользователя');
                        document.getElementById('alert-message').innerHTML = 'Неверные данные пользователя';
                        break;
                    case 'Access denied':
                        console.log('Не прошёл проверку на безопасность'); //
                        document.getElementById('alert-message').innerHTML = 'Ошибка связи с сервером. Обновите страницу.';
                        break;
                    default :
                        document.getElementById('alert-message').innerHTML = 'Ошибка. Попробуйте повторить попытку позже.';
                        break;
                }
            }
        },
        recoveryPassword: function () {
            console.log ('Recovery Pass');

            if (document.getElementById('phoneInput').value.length > 10) {
                document.getElementById('alert-message').innerHTML = '';
                this.isModalPreloadVisible = true;

                var tempForm = document.forms.login;

                axios({
                    method: 'POST',
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                    data: {
                        [tempForm.tokenKey.value]: tempForm.token.value,
                        phone: tempForm.phone.value,
                        password: tempForm.password.value
                    },
                    url: '/api/user/recovery'
                })
                .then(this.parseRecovery);
            } else {
                document.getElementById('phoneInput').classList.add('input-wrong');
            }


        },
        parseRecovery: function (response) {
            this.isModalPreloadVisible = false;
            try {
                document.getElementById('alert-message').innerHTML = response.data.Description;
                //var code = response.data.Code
                //console.log('Code: ' + code);
                /*switch (code) {
                    case 'OK':
                        console.log('Успешно: ' + response.data.Description);
                        break;
                    case 'ERROR':
                        console.log('Ошибка: ' + response.data.Description);
                        break;
                    default:
                        console.log('Ответ: ' + response.data.Description);
                        break;
                }*/
            } catch (err) {
                console.log ('Recovery Error:');
                console.log ('Name: ' + err.name);
                console.log ('Message: ' + err.message);
            }

        },
        confirmPhone: function () {
            //при воде любого значения убрать индикатор неправильно заполненного поля
            document.getElementById('phoneInput').classList.remove('input-wrong');

            //оставить в поле ввода не более 15 цифр
            var str = document.getElementById('phoneInput').value;
            str = str.match(/\d/g) || [];
            str =str.join('');
            if (str.length > 15) str = str.substr(0, 15);

            document.getElementById('phoneInput').value = str;
        },
        confirmPass: function () {
            document.getElementById('passwordInput').classList.remove('input-wrong');
        }
    }
});

/*$(document).ready(function() {

});*/
