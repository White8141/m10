<template>
<nav class="navbar">
    <div class="container">
        <div class="row d-flex justify-content-between">
            <a href="/">
                <img src="/img/logo.png">
            </a>
            <div class="block">
                <div id="user-menu" v-if="isAuth" class="btn-group">
                    <button id="private-button" type="button" class="app-button dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        {{ userName }}
                    </button>
                    <div class="dropdown-menu dropdown-menu-right">
                        <form action="/cancel" method="post">
                            <input type="hidden" name="id" :value="userId">
                            <input type="hidden" :name="tokenKey" :value="token">
                            <button class="dropdown-item" type="submit">Отменить бронирование</button>
                        </form>
                        <form action="/history" method="post">
                            <input type="hidden" name="id" :value="userId">
                            <input type="hidden" :name="tokenKey" :value="token">
                            <button class="dropdown-item" type="submit">История поездок</button>
                        </form>
                        <form action="/user/logout" method="post">
                            <input type="hidden" name="id" :value="userId">
                            <input type="hidden" :name="tokenKey" :value="token">
                            <button class="dropdown-item" type="submit">Выйти</button>
                        </form>

                        <!--button class="dropdown-item" type="button" id="logout-button">Выйти</button-->
                    </div>
                </div>
                <a id="guest-menu" v-else class="text-link" data-toggle="modal" href="#login" aria-expanded="false" aria-controls="login">
                    Вход
                </a>
            </div>
        </div>
    </div>
</nav>
</template>
<style></style>
<script>
    export default{
        data(){
            return {}
        },
        props: {
            token: {
                type: String,
                required: true
            },
            tokenKey: {
                type: String,
                required: true
            },
            isAuth: Boolean,
            userName: String,
            userId: String
        }
    }
</script>
