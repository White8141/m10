<template>
<div class="container">
    <h1>История поездок</h1>
    <table class="table">
        <thead>
        <tr>
            <th scope="col">Дата</th>
            <th scope="col">Маршрут</th>
            <th scope="col">Откуда</th>
            <th scope="col">Куда</th>
            <th scope="col">Статус</th>
            <th scope="col">Комментарии</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="history in historyList" :key="history.ID">
            <th scope="row">{{ history.CollectDateUniverse | dateTimeFilter}}</th>
            <td>{{ history.RouteName  | routeNameFilter}}</td>
            <td>{{ history.MusterRouteItemName }}</td>
            <td>{{ history.RouteDestinationName}}</td>
            <td>{{ history.PassengerStateID | statusFilter}}</td>
            <td>{{ history.Comment }}</td>
        </tr>
        </tbody>
    </table>
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
                return val.substr(0, 10) + ' ' + val.substr(11, 5)
            },
            routeNameFilter: function (val) {
                return val.substr(1)
            },
            statusFilter: function (val) {
                switch (val) {
                    case 1:
                        return "Зарегистрирован"
                        break;
                    default:
                        return "Отменён"
                        break;
                }
            }
        }
    }
</script>
