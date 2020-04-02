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
        <div class="tbody">
            <div class="trow row" v-for="history in historyList" :key="history.ID">
                <div class="col-12 col-md-2">{{ history.CollectDateUniverse | dateTimeFilter}}</div>
                <div class="col-12 col-md-2">{{ history.RouteName  | routeNameFilter}}</div>
                <div class="col-12 col-md-2">{{ history.BusName + ' ' + history.BusRegNumber | busNameFilter}}</div>
                <div class="col-12 col-md-1">{{ history.Count | countFilter}}</div>
                <div class="col-12 col-md-2">{{ history.PassengerStateID | statusFilter}}</div>
                <div class="d-none d-md-block col-3">{{ history.Comment }}</div>
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
                historyList: []
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
                try {
                    this.responceData = JSON.parse(responce.data);

                    /*this.routeList.forEach(function (item, i) {
                     //console.log ('Надо добавить цену маршруту ' + item.CityFrom + ' - ' + item.CityTo);
                     if (item.ID in this.routePriceList) {
                     item.Price = this.routePriceList[item.ID];
                     } else {
                     item.Price = 0;
                     }
                     }, this);*/

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

            /*dateValue: function () {
                return this.date.split('-').reverse().join('.');
            },
            submitButtonDisabled: function () {
                if (this.time == '0' || this.placeValue == 0) return true;
                return false;
            },
            currMusterTime: function () {
                if (this.routeId in this.musterTimeArray) {
                    //console.log('Есть такой элемент');
                    return this.musterTimeArray[this.routeId];
                } else {
                    //console.log('Нет такого элемента');
                    return [5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5];

                }
            },
            cityFromPlace: function () {
                return this.cityFromValue.slice((1 + this.cityFromValue.indexOf('(')), -1);
            },
            cityToPlace: function () {
                return this.cityToValue.slice((1 + this.cityToValue.indexOf('(')), -1);
            }*/
        },
        watch: {
            currTripId: function (val, oldVal) {

            }
        },
        filters: {
            dateTimeFilter: function (val) {
                return val.substr(11, 5) + " " + val.substr(8, 2) + '.' + val.substr(5, 2) + '.' + val.substr(0, 4)
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
