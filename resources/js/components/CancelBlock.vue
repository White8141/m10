<template>
    <div class="container">
        <h1>Отмена поездки</h1>
        <div class="table table-bordered">
            <div class="d-none d-md-flex thead row">
                <div class="col-2">Дата</div>
                <div class="col-3">Маршрут</div>
                <div class="col-3">Автобус</div>
                <div class="col-2">Мест</div>
                <div class="col-2"></div>
            </div>
            <div class="tbody" v-if="isOrderEmpty">
                <div class="trow">
                    <p class="message">Список заявок пуст</p>
                </div>
            </div>
            <div class="tbody" v-else>
                <transition-group name="order" tag="div" class="order">
                    <div class="trow row order-item" v-for="history in historyList" :key="history.ID">
                        <div class="col-12 col-md-2">
                            <p class="time">{{ history.CollectDateUniverse | timeFilter}}</p>
                            <p class="date">{{ history.CollectDateUniverse | dateFilter}}</p>
                        </div>
                        <div class="col-8  col-md-3 route-name">{{ history.RouteName  | routeNameFilter}}</div>
                        <div class="col-12 col-md-3">{{ history.BusName + ' ' + history.BusRegNumber | busNameFilter}}</div>
                        <div class="col-12 col-md-2 order-count">{{ history.Count | countFilter}}</div>
                        <div class="col-12 col-md-2">
                            <button class="app-button" @click="cancelTrip(history.ID)">Отменить</button>
                        </div>
                    </div>
                </transition-group>
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
                orderId: '',
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
            userId: {
                type: String,
                required: true
            }
        },
        mounted: function () {
            this.sendRequest('get');
        },
        methods: {
            sendRequest: function (target) {
                switch (target) {
                    case 'get':
                        if (this.userId != '') {
                            axios({
                                method: 'POST',
                                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                                data: {
                                    [this.tokenKey]: this.token,
                                    id: this.userId
                                },
                                url: '/api/orders/history'
                            })
                                    .then(this.parseTrips);
                        } else {
                            console.log ('Need Auth');
                        }

                        break;
                    case 'cancel':
                        //console.log ('Need cancel');
                        this.isPreloadVisible = true;

                        if (this.orderId != '') {
                            axios({
                                method: 'POST',
                                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                                data: {
                                    [this.tokenKey]: this.token,
                                    id: this.orderId
                                },
                                url: '/api/orders/cancel'
                            })
                            .then(this.parseCancel);
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

                    this.historyList = this.responceData.filter(function (item, i) {
                        return item['PassengerStateID'] == 1;
                    });

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
            },
            cancelTrip: function (id) {
                //console.log ('Need cancel ' + id);
                this.orderId = id;
                this.sendRequest('cancel');
            },
            parseCancel: function (responce) {
                //console.log ('Need parse cancel');
                this.isPreloadVisible = false;
                try {
                    this.responceData = (responce.data);
                    //console.log ('Need delete order ' + this.responceData.id);

                    this.historyList = this.historyList.filter(function (item) {
                        return item['ID'] != this.responceData.id;
                    }, this);

                    //console.log ('Order deleted');

                    /*this.routeList.forEach(function (item, i) {
                     //console.log ('Надо добавить цену маршруту ' + item.CityFrom + ' - ' + item.CityTo);
                     if (item.ID in this.routePriceList) {
                     item.Price = this.routePriceList[item.ID];
                     } else {
                     item.Price = 0;
                     }
                     }, this);*/
                } catch (err) {
                    console.log ('Cancel Order Error:');
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
