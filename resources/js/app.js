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
        isAuth: false
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
        parseLogin: function (responce) {
            //console.log('user get');
            //console.log('responce: ' + responce.data);

            try {
                var nameArray = responce.data.name.split(' ');
                this.userName = nameArray[1];
                this.userId = responce.data.biletionId;
                this.isAuth = true;

                $('#login').modal('hide');
            } catch (err) {
                /*console.log('Login Error');
                 console.log('Name ' + err.name);
                 console.log('Message ' + err.message);
                 console.log('Stack ' + err.stack);*/
                switch (responce.data) {
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
        }
    }
});

/*$(document).ready(function() {

});*/
