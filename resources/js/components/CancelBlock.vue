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
            <div class="tbody">
                <div class="trow row" v-for="history in historyList" :key="history.ID">
                    <div class="col-12 col-md-2">{{ history.CollectDateUniverse | dateTimeFilter}}</div>
                    <div class="col-12 col-md-3">{{ history.RouteName  | routeNameFilter}}</div>
                    <div class="col-12 col-md-3">{{ history.BusName + ' ' + history.BusRegNumber | busNameFilter}}</div>
                    <div class="col-12 col-md-2">{{ history.Count | countFilter}}</div>
                    <div class="col-12 col-md-2">
                        <button class="app-button">Отменить</button>
                    </div>

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
                //mounthNameArray: ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декбря']
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
            id: {
                type: String,
                required: true
            }
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

            this.sendRequest('get');
            //console.log ('Смонтировано');
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
                                url: '/api/history/getTrips'
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

                    this.historyList = this.responceData.filter(function (item, i) {
                        return item['PassengerStateID'] == 1;
                    });

                    /*this.responceData.forEach(function(item) {
                        this.historyList.push(item);
                    }, this);*/

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
