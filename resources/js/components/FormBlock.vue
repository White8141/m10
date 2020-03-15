<template>
    <div>
        <div class="container">
            <div class="row route-list" :class="routeList.length">
                <div class="col-6 col-md-3" v-for="routeItem in routeSortedList">
                    <div class="card route-item" @click="changeRoute(routeItem)">
                        <div class="card-header">
                            {{ routeItem.CityFrom }} - {{ routeItem.CityTo }}
                        </div>
                        <div class="card-body">
                            В пути {{ routeItem.DistanceTime }}
                        </div>
                    </div>
                </div>
            </div>
            <div class="form-title">
                <p class="route-name hidden-layer">
                    <transition name="fade-0" mode="out-in">
                        <span :key="cityFrom">{{ cityFrom }} - {{ cityTo }}</span>
                    </transition>
                </p>
                <!--p class="route-change" v-on:click="changeRoute()"><img src="//img/icon0.jpg">сменить направление</p-->
            </div>
            <form action="http://bilet.m10.by/booking/register-s1" method="post">
                <input type="hidden" name="tripID" :value="currTripId"/>
                <input type="hidden" name="currencyCode" value="BYN"/>
                <input type="hidden" name="fromCityID" :value="fromPlaceID"/>
                <input type="hidden" name="toCityID" :value="toPlaceID"/>
                <input type="hidden" name="fromCityName" :value="cityFrom"/>
                <input type="hidden" name="fromCityDescription" :value="cityFromPlace"/>
                <input type="hidden" name="fromTimeString" :value="fromTime"/>
                <input type="hidden" name="toCityName" :value="cityTo"/>
                <input type="hidden" name="toCityDescription" :value="cityToPlace"/>
                <input type="hidden" name="toTimeString" :value="toTime"/>

                <div class="row indicator-row">
                    <div class="indicator-layer"></div>
                    <div class="d-flex justify-content-between">
                        <div class="indicator-point"></div>
                        <div class="indicator-point"></div>
                        <div class="indicator-point"></div>
                        <div class="indicator-point"></div>
                    </div>
                </div>
                <div class="row input-row">
                    <div class="col-12 col-md-3">
                        <div class="form-group ">
                            <label for="cityFrom" class="hidden-layer">
                                <transition name="fade-1" mode="out-in">
                                    <span :key="cityFrom">{{ cityFrom }}</span>
                                </transition>
                            </label>
                            <select class="form-control" name="from" id="cityFrom" v-model="cityFromValue" v-on:change="selectParams(0)">
                                <option value='' selected disabled>Откуда</option>
                                <option v-for="currPlace in currPlacesFromArray" :value="currPlace.value">{{ currPlace.name }}</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-12 col-md-3">
                        <div class="form-group ">
                            <label for="cityTo" class="hidden-layer">
                                <transition name="fade-2" mode="out-in">
                                    <span :key="cityTo">{{ cityTo }}</span>
                                </transition>
                            </label>
                            <select class="form-control" name="to" id="cityTo" v-model="cityToValue" v-on:change="selectParams(1)" :disabled="input1Disabled">
                                <option value="" selected disabled>Куда</option>
                                <option v-for="currPlace in currPlacesToArray" :value="currPlace.value">{{ currPlace.name }}</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-12 col-md-3">
                        <div class="form-group">
                            <input type="hidden" name="date" :value="dateValue"/>
                            <label for="dateToggle"><span>Дата поездки</span></label>
                            <button id="dateToggle" type="button" class="btn label-button" :class="{ enabled: !input2Disabled }" :data-toggle="dateToggle" data-target="#collapseDate" aria-expanded="false" aria-controls="collapseDate">
                                <template class="hidden-layer">{{ dateValue | dateFilter }} {{ time | timeFilter }}</template>
                            </button>
                            <div class="collapse" id="collapseDate">
                                <div class="label-body">
                                    <div class="date-time-container">
                                        <div class="date-container">
                                            <div class="date-body" id="travelDate"></div>
                                        </div>
                                        <div class="time-body">
                                            <img src="/img/icon1.jpg" @click='showDate()' class="back-arrow" alt="Назад">
                                            <p class="time-body-title">Выберите время:</p>
                                            <div class="time-body-content d-flex flex-wrap">
                                                <div class="time-body-item justify-content-between" v-for="tripListItem in tripList" @click='selectTime(tripListItem)'>{{ tripListItem[0] }}<span class="time-minutes">{{ tripListItem[1] }}</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!--input class="form-control" type="text" id="travelDate" name="date" :disabled="input2Disabled" placeholder="Когда?" readonly/-->
                        </div>
                    </div>
                    <div class="col-12 col-md-3">
                        <div class="form-group ">
                            <input type="hidden" name="placeCount" :value="placeValue"/>
                            <label for="passToggle"><span>Число пассажиров</span></label>
                            <button id="passToggle" type="button" class="btn label-button" :class="{ enabled: !input3Disabled }" :data-toggle="passToggle" data-target="#collapsePass" aria-expanded="false" aria-controls="collapsePass">
                                <template class="hidden-layer">{{ placeValue | placeFilter }}</template>
                            </button>
                            <div class="collapse" id="collapsePass">
                                <div class="pass-container" :key="currPassHover">
                                    <div class="row">
                                        <div class="col-4">
                                            <img :class="{selected: passSelectArray[0], hovered: passHoveredArray[0]}" @mouseover='hoverPassenger(0)' @mouseleave='clearPassenger()' @click='selectPassenger(0)' src="/img/passenger.jpg">
                                        </div>
                                        <div class="col-4">
                                            <img :class="{selected: passSelectArray[1], hovered: passHoveredArray[1]}" @mouseover='hoverPassenger(1)' @mouseleave='clearPassenger()' @click='selectPassenger(1)' src="/img/passenger.jpg">
                                        </div>
                                        <div class="col-4">
                                            <img :class="{selected: passSelectArray[2], hovered: passHoveredArray[2]}" @mouseover='hoverPassenger(2)' @mouseleave='clearPassenger()' @click='selectPassenger(2)' src="/img/passenger.jpg">
                                        </div>
                                    </div>
                                    <div class="pass-text">
                                        <p>Для заказа более 3 мест <a class="modal-link" data-toggle="modal" href="#phoneCall" aria-expanded="false" aria-controls="phoneCall">позвоните</a> оператору</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row button-row">

                    <div class="offset-0 offset-md-9 col-12 col-md-3 add-info" :class="{enabled : isInfoLoaded}">
                        <!--button id="infoToggle" type="button" class="btn label-button" :class="{ enabled: isInfoLoaded }" :data-toggle="infoToggle" data-target="#collapseInfo" aria-expanded="false" aria-controls="collapseInfo">
                            Дополнительная информация
                        </button-->
                        <a class="small-letter" :data-toggle="infoToggle" href="#tripInfo" aria-expanded="false" aria-controls="tripInfo">Дополнительная информация</a>
                    </div>

                    <button type="submit" class="order-button" :class="{active : !submitButtonDisabled}" :disabled="submitButtonDisabled">Заказать</button>
                </div>
            </form>
        </div>
        <div class="modal fade" id="tripInfo" tabindex="-1" role="dialog" aria-labelledby="tripInfo" aria-hidden="true">
            <div class="modal-dialog modal-xl modal-dialog-scrollable" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Остановки в пути</h5>
                    </div>
                    <div class="modal-body">
                        <div class="card card-body">
                            <div class="info-container">
                                <ul class="info-muster">
                                    <li class="row" v-for="tripData in tripDataArray.muster">
                                        <div class="col-6 content-right">{{ tripData.Description }}</div>
                                        <!--div class="col-6 content-left">{{ tripData.MusterTime | musterTimeFilter }}</div-->
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Закрыть</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style></style>
<script>
    //import OtherComponent from './components/other.vue'
    export default{
        data(){
            return{
                postString: postString,
                post: {},
                ////////
                routeList: [],
                routeSortedList: [],
                routePriceList: {
                    '2a989739-f20c-4f64-b8a3-3c95724133c3': 6,
                    '05f79540-2bf6-4bad-a174-bfd18b98dfa9': 5,   //речица мозырь
                    'd1f40a36-5bad-41d6-b792-92c1af0c1fa6': 8,  //бобруйск мозырь
                    '77b24933-4316-4c49-a2ef-dd90cb910cf0': 5,  //мозырь речица
                    '52348c68-ede0-41a5-b191-74d59bb4516a': 15, //киев мозырь
                    '3862f0b6-672c-40e5-a232-ff04ffb10c3d': 15, //мозырь киев
                    'ed254dcc-2a8f-443a-855b-f0303836016d': 6,  //гомель мозырь
                    '40ee9e38-bcae-4cf0-b18a-516107ced671': 8   //мозырь бобруйск
                },
                //routePrice: 6,
                cityFrom: 'Мозырь',
                cityTo: 'Гомель',
                routeId: '2a989739-f20c-4f64-b8a3-3c95724133c3',
                date: '0',
                time: '0',
                fromTime: '',
                toTime: '',
                /////////
                tripList: {},
                currTripId: '',
                /////////
                placesArray: {},
                currPlacesFromArray: {},
                currPlacesToArray: {},
                musterTimeArray: {
                    '2a989739-f20c-4f64-b8a3-3c95724133c3': [2,1,2,1,1,2,1,1,2,3,1,1,1,1,1,1,1,1,8,10,5,2,4,2,8,9,12,3,5,55],
                    'ed254dcc-2a8f-443a-855b-f0303836016d': [3,1,1,1,1,1,1,1,12,1,1,1,5,23,2,5,20,7,43]
                },
                fromPlaceID: '',
                toPlaceID: '',
                //currMusterTime: [],
                tripDataArray: {},
                input1Disabled: true,
                input2Disabled: true,
                input3Disabled: true,
                //submitButtonDisabled: true,
                dateToggle: 'false',
                passToggle: 'false',
                infoToggle: 'false',
                passSelectArray: [false, false, false],
                passHoveredArray: [false, false, false],
                currPassHover: 4,
                cityFromValue: '',
                cityToValue: '',
                placeValue: 0,
                currDate: new Date(),
                ///////////////////
                isPreloaderVisible: false,
                isListEmpty: false,
                isInfoLoaded: false,
                responceData: [],
                currrPlaceList: [],
                requestString: ''
            }
        },
        mounted: function () {

            if (this.postString) {
                this.postString = this.postString.split('&');
                this.postString.map(function (item) {
                    item = item.split('=>');
                    this.post[item[0]] = item[1];
                }, this);
                this.postString = null;

                if ('routeId' in this.post) this.routeId = this.post.routeId;
                if ('tripId' in this.post) this.currTripId = this.post.tripId;
                if ('cityFrom' in this.post) this.cityFrom = this.post.cityFrom;
                if ('cityTo' in this.post) this.cityTo = this.post.cityTo;
                if ('tripList' in this.post) {
                    this.tripList = this.post.tripList.split(';');
                    this.tripList = this.tripList.map(item => item.split(','));
                } else  {
                    this.tripList[0] = ['6', '30', 'asdfasdf-sdfgwert-21341234', '14'];
                    this.tripList[1] = ['7', '0', 'asdfasdf-sdfgwert-21341234', '15'];
                }
                if ('date' in this.post) {
                    this.date = this.post.date;
                    var tempArr = this.date.split('-');
                    if (tempArr.length == 3) {
                        tempArr[1] ++;
                        if (tempArr[1] < 10) {
                            tempArr[1] = '0' + tempArr[1];
                        }
                        if (tempArr[2] < 10) {
                            tempArr[2] = '0' + tempArr[2];
                        }
                    }
                    this.date = tempArr.join('-');
                }
                if ('time' in this.post) this.time = this.post.time;
            }/* else {
                console.log ('POST empty');
            }*/

            $('#travelDate').datepicker({
                // Можно выбрать тольо даты, идущие за сегодняшним днем, включая сегодня, максимум на 2 недели вперед
                minDate: new Date(),
                maxDate: new Date (+this.currDate.getFullYear(),  +this.currDate.getMonth(), 14 + this.currDate.getDate()),
                onSelect: this.selectDate,
                todayButton: new Date()
            });

            $('#collapseDate').on('show.bs.collapse', function () {
                $('#collapsePass').collapse('hide');
            });
            /*$('#collapseDate').on('hidden.bs.collapse', function () {
             //$('form .label-body .date-time-container').css('top', '0px');
             });*/
            $('#collapsePass').on('show.bs.collapse', function () {
                $('#collapseDate').collapse('hide');
            });

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

            $('.content-form .hidden-layer').removeClass('hidden-layer');

            this.sendRequest('routes');
            //console.log ('Смонтировано');
        },
        methods: {
            changeRoute: function (routeItem) {
                this.cityFrom = routeItem.CityFrom;
                this.cityTo = routeItem.CityTo;
                this.routeId = routeItem.ID;
                if (this.routeId in this.placesArray) {
                    //console.log ('Есть массив остановок');
                    this.currPlacesFromArray = this.placesArray[this.routeId].musterArray;
                    this.currPlacesToArray = this.placesArray[this.routeId].destinationArray;
                } else {
                    //console.log ('Надо качать массив остановок');
                    this.sendRequest('musters');
                }

                if (this.date != '0') this.sendRequest('trips');

                this.currTripId = '';
                this.fromTime = '';

                this.cityFromValue = '';
                this.cityToValue = '';
                for (var i = 0; i < 3; i++) {
                    this.passSelectArray[i] = false;
                    this.passHoveredArray[i] = false;
                };
                this.placeValue = 0;
                //this.routePrice = this.routePriceList[this.routeId];

                this.input1Disabled = true;
                this.input2Disabled = true;
                this.input3Disabled = true;
                this.addButtonEnabled = false;
                this.isInfoLoaded = false;
                this.dateToggle = false;
                this.passToggle = false;
                this.infoToggle = 'false';

                $('form .indicator-layer').css('width', '30px');
                $('form .label-body .date-time-container').css('top', '0px');
                $('#collapseDate').collapse('hide');
                $('#collapsePass').collapse('hide');
            },
            selectParams: function (val) {
                //console.log ('поменялся параметр ' + val);
                switch (val) {
                    case 0: //выбран пункт отправления (остановка в текущем городе)
                        var tempArray = this.placesArray[this.routeId]['musterArray'];
                        if (tempArray != undefined) {
                            var tempItem = tempArray.find(function (item, i) {
                                return this.cityFromValue == item['value'];
                            }, this);
                            this.fromPlaceID = tempItem.ID;
                            //console.log ('ID места посадки найден' + tempItem.ID);
                            //toPlaceID
                        };

                        if (this.input1Disabled == true) {
                            $('form .indicator-layer').css('width', '40%');
                            this.input1Disabled = false;

                            if (this.currPlacesToArray.length == 1) {
                                this.cityToValue = this.currPlacesToArray[0].value;
                                var timer = setTimeout(this.selectParams, 1000, 1);
                                //console.log ('Можно пункт назначения добавить автоматически');
                            }/* else {
                             //console.log ('Нельзя пункт назначения добавить автоматически');
                             }*/
                            //TODO нужно подкорректировать название города (для Калинкович)
                        }
                        break;
                    case 1: //выбран пункт назначения
                        var tempArray = this.placesArray[this.routeId]['destinationArray'];
                        if (tempArray != undefined) {
                            var tempItem = tempArray.find(function (item, i) {
                                return this.cityToValue == item['value'];
                            }, this);
                            if (tempArray != undefined) {
                                this.toPlaceID = tempItem.ID;
                                //console.log ('ID места высадки найден ' + tempItem.ID);
                            }
                        };

                        $('form .indicator-layer').css('width', '69%');
                        var timer = setTimeout(this.selectParams, 1000, 2);
                        break;
                    case 2:
                        this.input2Disabled = false;
                        this.dateToggle = 'collapse';
                        if (this.date != '0' && this.time != '0') {
                            var tempStr = this.date + ' ' + this.time + ':00';
                            var tempDate = new Date(tempStr);
                            //$('#travelDate').datepicker().data('datepicker').selectDate(tempDate);
                            //$('#dateToggle')[0].innerHTML = this.date + ', ' + this.time;
                            if (document.documentElement.clientWidth > 767.98) $('form .indicator-layer').css('width', '99.5%')
                            else $('form .indicator-layer').css('width', '99%');
                            var timer = setTimeout(this.selectParams, 1000, 3);
                            //console.log ('date: ' + tempStr);
                        } else {
                            if (this.date != '0' && this.time == '0') $('form .label-body .date-time-container').css('top', '-279px');
                            $('#collapseDate').collapse('show');
                            //console.log ('empty');
                        }
                        break;
                    case 3:
                        this.input3Disabled = false;
                        this.passToggle = 'collapse';
                        $('#collapsePass').collapse('show');
                        break;
                    case 4:
                        //this.submitButtonDisabled = false;
                        //$('button.order-button').addClass('active');
                        break;
                }

            },
            selectDate: function (fd, dt, inst) {
                this.currTripId = '';
                this.time = '0';
                this.fromTime = '';
                this.addButtonEnabled = false;
                this.isInfoLoaded = false;
                this.infoToggle = 'false';

                if (dt != '') {
                    var tempArray = [
                        '' + dt.getFullYear(),
                        '0' + (dt.getMonth() + 1),
                        '0' + dt.getDate()
                    ].map(function (item) {
                        if (item.length > 3) return item;
                        return item.slice(-2);
                    });
                    this.date = tempArray.join('-');

                    $('form .label-body .date-time-container').css('top', '-279px');
                    /*if (this.input3Disabled) {
                     if (document.documentElement.clientWidth > 767.98) $('form .indicator-layer').css('width', '99.5%')
                     else $('form .indicator-layer').css('width', '99%');
                     var timer = setTimeout(this.selectParams, 1000, 3);
                     }
                     $('#collapseDate').collapse('hide');*/

                    this.sendRequest('trips');
                }
                //console.log ('нужно показать время для выбора, ' + dt.toString());
            },
            showDate: function () {
                $('form .label-body .date-time-container').css('top', '0px');
            },
            selectTime: function (tripListItem) {
                //console.log ('Выбрано время');
                this.currTripId = tripListItem[2];
                this.fromTime = tripListItem[4].slice(-8, -3);
                this.addButtonEnabled = true;

                if (tripListItem[1].length < 2) {tripListItem[1] = '0' + tripListItem[1]};
                //if (tripListItem[1] < 10) {tripListItem[1] = '0' + tripListItem[1]};
                //console.log ('Выбрано ' + tripListItem[0] + ' часов, ' + tripListItem[1] + ' минут');
                this.time = tripListItem[0] + ':' + tripListItem[1];

                $('#collapseDate').collapse('hide');

                if (this.input3Disabled) {
                    if (document.documentElement.clientWidth > 767.98) $('form .indicator-layer').css('width', '99.5%')
                    else $('form .indicator-layer').css('width', '99%');
                    var timer = setTimeout(this.selectParams, 1000, 3);
                }
            },
            hoverPassenger: function (val) {
                //console.log ('Курсор над ' + val);
                /*for (var i = 0; i < 3; i++) {
                 this.passHoveredArray[i] = false;
                 };*/
                for (var i = 0; i < val + 1; i++) {
                    this.passHoveredArray[i] = true;
                };
                this.currPassHover = val;
            },
            selectPassenger: function (val) {
                //console.log ('Выбран пассажир ' + val);
                for (var i = 0; i < 3; i++) {
                    this.passSelectArray[i] = false;
                    this.passHoveredArray[i] = false;
                };
                for (i = 0; i < val + 1; i++) {
                    this.passSelectArray[i] = true;
                };
                this.currPassHover = 3;
                this.placeValue = val + 1;
                $('#collapsePass').collapse('hide');
                this.selectParams(4);
            },
            clearPassenger: function () {
                for (var i = 0; i < 3; i++) {
                    this.passHoveredArray[i] = false;
                };
                this.currPassHover = 4;
            },
            ////////////////////////////////
            sendRequest: function (target) {
                switch (target) {
                    case 'routes':
                        this.requestString = 'http://93.84.84.168:9494/BiletionApiService/routes?apikey=56tRR980oPkbx';
                        axios.get(this.requestString)
                                .then(this.parseRoutes);
                        break;
                    case 'musters':
                        //console.log('Получить остановки. Сначала завтрашние маршруты');
                        var tempDate = new Date (this.currDate.toString());
                        tempDate.setDate(tempDate.getDate() + 1);
                        tempDate = tempDate.toLocaleString().substr(0, 10);
                        this.requestString = 'http://93.84.84.168:9494/BiletionApiService/trips/filter3/' + tempDate + ' 00:00:00/' + tempDate + ' 23:59:59/' + this.routeId + '/00000000-0000-0000-0000-000000000000/00000000-0000-0000-0000-000000000000/True?apikey=56tRR980oPkbx';
                        axios.get(this.requestString)
                                .then(this.getDefaultTrips);
                        break;
                    case 'trips':
                        //console.log('Получить маршруты данного направления');
                        this.requestString = 'http://93.84.84.168:9494/BiletionApiService/trips/filter3/' + this.dateValue + ' 00:00:00/' + this.dateValue + ' 23:59:59/' + this.routeId + '/00000000-0000-0000-0000-000000000000/00000000-0000-0000-0000-000000000000/True?apikey=56tRR980oPkbx';
                        this.isPreloaderVisible = true;
                        axios.get(this.requestString)
                                .then(this.parseTrips)
                                .finally(() => (this.isPreloaderVisible = false));
                        break;
                    case 'info':
                        //console.log('Получить подробную информацию маршрута');
                        this.requestString = 'http://93.84.84.168:9494/BiletionApiService/trip/' + this.currTripId + '?apikey=56tRR980oPkbx';
                        //this.isPreloaderVisible = true;
                        axios.get(this.requestString)
                                .then(this.parseInfo)
                                .finally(() => (this.isPreloaderVisible = false));
                        break;
                }
            },
            parseRoutes: function (responce) {
                this.responceData = responce.data;

                /*this.routeList.forEach(function (item, i) {
                    //console.log ('Надо добавить цену маршруту ' + item.CityFrom + ' - ' + item.CityTo);
                    if (item.ID in this.routePriceList) {
                        item.Price = this.routePriceList[item.ID];
                    } else {
                        item.Price = 0;
                    }
                }, this);*/

                this.responceData.forEach(function(item) {
                    this.routeList.push(item);
                }, this);

                this.routeList = this.routeList.sort(function (a, b) {
                    if (+a['Name'] > +b['Name']) {
                        return 1;
                    } else {
                        return -1;
                    }
                });

                this.routeList.map(function(item) {
                    if (item['CityFrom'] == 'Мозырь') {
                        this.routeSortedList.push(item);
                        var tempVar = this.routeList.find(function (routeItem) {
                            return routeItem['CityFrom'] == item['CityTo'];
                        }, this);
                        if (tempVar != undefined) this.routeSortedList.push(tempVar);
                    }
                }, this);

                this.sendRequest('musters');
            },
            getDefaultTrips: function (responce) {
                //console.log('Обработать маршруты, и получить данные первого доступного');
                if (responce.data.length > 0) {
                    console.log('Есть маршруты, ' + responce.data.length + ' шт. Можно получить остановки');
                    this.requestString = 'http://93.84.84.168:9494/BiletionApiService/trip/' + responce.data[0].ID + '?apikey=56tRR980oPkbx';
                    axios.get(this.requestString)
                            .then(this.getCurrPlaces);
                } else {
                    //console.log('Нет маршрутов на этот день, попробуем на 2 недели вперед');
                    var startDate = new Date (this.currDate.toString());
                    startDate = startDate.toLocaleString().substr(0, 10);
                    var endDate = new Date (this.currDate.toString());
                    endDate.setDate(endDate.getDate() + 14);
                    endDate = endDate.toLocaleString().substr(0, 10);
                    this.requestString = 'http://93.84.84.168:9494/BiletionApiService/trips/filter3/' + startDate + ' 00:00:00/' + endDate + ' 23:59:59/' + this.routeId + '/00000000-0000-0000-0000-000000000000/00000000-0000-0000-0000-000000000000/True?apikey=56tRR980oPkbx';
                    axios.get(this.requestString)
                            .then(this.getWeekTrips);
                }
            },
            getWeekTrips: function (responce) {
                if (responce.data.length > 0) {
                    console.log('Есть ' + responce.data.length + ' шт.');
                    this.requestString = 'http://93.84.84.168:9494/BiletionApiService/trip/' + responce.data[0].ID + '?apikey=56tRR980oPkbx';
                    axios.get(this.requestString)
                            .then(this.getCurrPlaces);
                } else {
                    //console.log('Маршрутов нет даже на 2 недели вперед, надо самому добавлять');
                    this.placesArray[this.routeId] = {};
                    this.placesArray[this.routeId].musterArray = this.currPlacesFromArray = [{'name': this.cityFrom, 'value': this.cityFrom}];
                    this.placesArray[this.routeId].destinationArray = this.currPlacesToArray = [{'name': this.cityTo, 'value': this.cityTo}];
                }

            },
            getCurrPlaces: function (responce) {
                //console.log('Теперь нужно заполнить массив остановок маршрута по умолчанию');
                this.placesArray[this.routeId] = {};
                this.placesArray[this.routeId].musterArray = this.currPlacesFromArray = responce.data.MusterRouteItems;
                this.placesArray[this.routeId].destinationArray = this.currPlacesToArray = responce.data.RouteDestinations;
                this.placesArray[this.routeId].musterArray.map(function (item, i) {
                    if (item['Description'] == null) {
                        item['Description'] = item['value'] = item['Name'];
                    } else {
                        item['value'] = item['Name'] + ' (' + item['Description'] + ')';
                    }
                    item['name'] = item['Description'];
                }, this);
                this.placesArray[this.routeId].destinationArray.map(function (item, i) {
                    if (item['Direction'] == null) {
                        item['Direction'] = item['value'] = item['Name'];
                    } else {
                        item['value'] = item['Name'] + ' (' + item['Direction'] + ')';
                    }
                    item['name'] = item['Direction'];

                }, this);
            },
            parseTrips: function (responce) {
                this.responceData = responce.data;
                this.tripList = [];

                this.responceData.forEach(function(item, i) {
                    var tripDate = new Date(item.TripDateUniverse);

                    /*if (+tripDate.getHours() == 6) {
                     //console.log ('Рейс на 6 утра, ID: ' + item.ID);
                     }*/

                    if (item.SeatsCount == 0) item.SeatsCount = 17;

                    if (tripDate.getMinutes() == 0) this.tripList[i] = [tripDate.getHours(), '00', item.ID, (item.SeatsCount - item.SeatsBusyCount), item.TripStartDateUniverse]
                    else this.tripList[i] = [tripDate.getHours(), tripDate.getMinutes(), item.ID, (item.SeatsCount - item.SeatsBusyCount), item.TripStartDateUniverse];


                }, this);

                this.tripList = this.tripList.filter(item => item[3] > 0);

                this.tripList.sort(function(a, b) {
                    if (+a[0] > +b[0]) {
                        return 1;
                    } else {
                        if (+a[0] == +b[0]) {
                            if (+a[1] > +b[1]) {
                                return 1;
                            } else {
                                return -1;
                            }
                        } else {
                            return -1;
                        }
                    }
                });

                if (this.tripList.length > 0) {
                    this.isListEmpty = false;
                } else {
                    this.isListEmpty = true;
                }
                //console.log ('Массив поездок обновлен');

                if (this.time != '0') {
                    if (this.tripList.length > 0) {
                        var tempArray = this.tripList.filter(function (item) {
                            return this.time == item[0] + ':' + item[1];
                        }, this);

                        if (tempArray.length > 0) {
                            this.currTripId = tempArray[0][2];
                        } else {
                            this.currTripId = '';
                            this.time = '0';
                            $('form .label-body .date-time-container').css('top', '-279px');
                            //console.log ('На такое время в этот день поездок нет');
                        }
                    }


                }
            },
            parseInfo: function (responce) {
                //console.log ('Данные маршрута обновленны');
                this.responceData = responce.data;
                this.tripDataArray['muster'] = this.responceData.MusterRouteItems;
                this.tripDataArray['busColor'] = this.responceData.BusColor;
                this.tripDataArray['busName'] = this.responceData.BusName;
                this.tripDataArray['distanceTime'] = this.responceData.DistanceTime;
                this.tripDataArray['tripStartDateUniverse'] = this.responceData.TripStartDateUniverse;
                this.tripDataArray['muster'].sort(function(a, b) {
                    if (+a.Position > +b.Position) {
                        return 1;
                    } else {
                        return -1;
                    }
                });

                //this.tripDataArray['tripStartDateUniverse'].slice(-5);

                var musterDate = new Date(this.tripDataArray['tripStartDateUniverse']);
                this.tripDataArray['muster'].map(function (item, i) {
                    //console.log (item.Description + ': ' + musterDate.getHours() + ':' + musterDate.getMinutes());
                    item['MusterTime'] = musterDate.getHours() + ':' + musterDate.getMinutes();
                    musterDate.setMinutes(musterDate.getMinutes() + this.currMusterTime[i]);
                }, this);

                this.isInfoLoaded = true;
                this.infoToggle = 'modal';
                //console.log ('Массив данных поездки обновлен');
            }
        },
        computed: {
            dateValue: function () {
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
            routePrice: function () {
                if (this.placeValue == 0) return this.routePriceList[this.routeId]
                else return this.routePriceList[this.routeId] * this.placeValue
            },
            cityFromPlace: function () {
                return this.cityFromValue.slice((1 + this.cityFromValue.indexOf('(')), -1);
            },
            cityToPlace: function () {
                return this.cityToValue.slice((1 + this.cityToValue.indexOf('(')), -1);
            }
        },
        watch: {
            currTripId: function (val, oldVal) {
                this.isInfoLoaded = false;
                this.infoToggle = 'false';
                if (val != '') this.sendRequest('info');
                //console.log('tripId: ' + val);
            }
        },
        filters: {
            placeFilter: function (val) {
                if (val == 0) return 'Сколько пассажиров?'
                if (val == 1) return '1 пассажир'
                return val + ' пассажира'
            },
            costFilter: function (val) {
                if (val == 0) return ''
                return val + ' руб.'
            },
            dateFilter: function (val) {
                if (val == 0) return 'Когда?'
                return val
            },
            timeFilter: function (val) {
                if (val == 0) return ''
                return ', ' + val
            },
            musterTimeFilter: function (val) {
                var tempArray = val.split(':');
                if (tempArray[1] < 10) tempArray[1] = '0' + tempArray[1];
                return tempArray.join(':');
            }
        }
    }
</script>
