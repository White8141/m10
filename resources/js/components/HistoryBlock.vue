<template>
    <div class="container">
        <h1>История поездок</h1>
        <div class="table table-bordered">
            <div class="d-none d-md-flex thead row">
                <div class="col-2">Дата</div>
                <div class="col-2">Маршрут</div>
                <div class="col-2">Автобус</div>
                <div class="col-1">Мест</div>
                <div class="col-2">Статус</div>
                <div class="col-3">Комментарии</div>
            </div>
            <div class="tbody" v-if="isOrderEmpty">
                <div class="trow">
                    <p class="message">Список поездок пуст</p>
                </div>
            </div>
            <div class="tbody" v-else>
                <div class="trow row" v-for="history in historyList" :key="history.ID">
                    <div class="col-12 col-md-2">
                        <p class="time">{{ history.CollectDateUniverse | timeFilter}}</p>
                        <p class="date">{{ history.CollectDateUniverse | dateFilter}}</p>
                    </div>
                    <div class="col-12 col-md-2 route-name">{{ history.RouteName  | routeNameFilter}}</div>
                    <div class="col-12 col-md-2">{{ history.BusName + ' ' + history.BusRegNumber | busNameFilter}}</div>
                    <div class="col-12 col-md-1 order-count">{{ history.Count | countFilter}}</div>
                    <div class="col-12 col-md-2 route-status">{{ history.PassengerStateID | statusFilter}}</div>
                    <div class="d-none d-md-block col-3 order-comment">{{ history.Comment }}</div>
                </div>
            </div>
            <div class="table-preloader" v-if="isPreloadVisible">
                <div class="spinner-border" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style></style>
<script>
    export default{
        data(){
            return{
                historyList: [],
                isPreloadVisible: true
            }
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
            id: String
        },
        mounted: function () {
            this.sendRequest('get');
        },
        methods: {
            sendRequest: function (target) {
                switch (target) {
                    case 'get':
                        if (this.id != '') {
                            axios({
                                method: 'POST',
                                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                                data: {
                                    [this.tokenKey]: this.token,
                                    id: this.id
                                },
                                url: '/api/orders/history'
                            })
                            .then(this.parseTrips);
                        } else {
                            console.log ('Need Auth');
                        }

                        break;
                }
            },
            parseTrips: function (responce) {
                this.isPreloadVisible = false;
                try {
                    this.responceData = JSON.parse(responce.data);

                    this.responceData.forEach(function(item) {
                        this.historyList.push(item);
                    }, this);

                    this.historyList = this.historyList.sort(function (a, b) {
                        if (+a['CollectDate'] > +b['CollectDate']) {
                            return -1;
                        } else {
                            return 1;
                        }
                    });

                } catch (err) {
                    console.log ('History Trips Error:');
                    console.log ('Name: ' + err.name);
                    console.log ('Message: ' + err.message);
                }
            }
        },
        computed: {
            isOrderEmpty: function () {
                return this.historyList.length < 1
            }
        },
        filters: {
            timeFilter: function (val) {
                return val.substr(11, 5)
            },
            dateFilter: function (val) {
                return val.substr(8, 2) + '.' + val.substr(5, 2) + '.' + val.substr(0, 4)
            },
            routeNameFilter: function (val) {
                return val.substr(1)
            },
            busNameFilter: function (val) {
                if (val.includes('null')) return ''; else return val;
            },
            statusFilter: function (val) {
                switch (val) {
                    case 1:
                        return "Зарегистрирован"
                        break;
                    case 5:
                        return "Отменён"
                        break;
                    default:
                        return "Завершён"
                        break;
                }
            },
            countFilter: function (val) {
                switch (val) {
                    case 1:
                        return '1 место';
                    break;
                    case ( 2 || 3 || 4):
                        return val + ' места';
                        break;
                    default:
                        return val + ' мест';
                        break;

                }
            }
        }
    }
</script>
