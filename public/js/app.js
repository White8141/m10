/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FormBlock.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FormBlock.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//import OtherComponent from './components/other.vue'
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      postString: postString,
      post: {},
      ////////
      routeList: [],
      routeSortedList: [],
      routePriceList: {
        '2a989739-f20c-4f64-b8a3-3c95724133c3': 6,
        '05f79540-2bf6-4bad-a174-bfd18b98dfa9': 5,
        //речица мозырь
        'd1f40a36-5bad-41d6-b792-92c1af0c1fa6': 8,
        //бобруйск мозырь
        '77b24933-4316-4c49-a2ef-dd90cb910cf0': 5,
        //мозырь речица
        '52348c68-ede0-41a5-b191-74d59bb4516a': 15,
        //киев мозырь
        '3862f0b6-672c-40e5-a232-ff04ffb10c3d': 15,
        //мозырь киев
        'ed254dcc-2a8f-443a-855b-f0303836016d': 6,
        //гомель мозырь
        '40ee9e38-bcae-4cf0-b18a-516107ced671': 8 //мозырь бобруйск

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
        '2a989739-f20c-4f64-b8a3-3c95724133c3': [2, 1, 2, 1, 1, 2, 1, 1, 2, 3, 1, 1, 1, 1, 1, 1, 1, 1, 8, 10, 5, 2, 4, 2, 8, 9, 12, 3, 5, 55],
        'ed254dcc-2a8f-443a-855b-f0303836016d': [3, 1, 1, 1, 1, 1, 1, 1, 12, 1, 1, 1, 5, 23, 2, 5, 20, 7, 43]
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
    };
  },
  mounted: function mounted() {
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
        this.tripList = this.tripList.map(function (item) {
          return item.split(',');
        });
      } else {
        this.tripList[0] = ['6', '30', 'asdfasdf-sdfgwert-21341234', '14'];
        this.tripList[1] = ['7', '0', 'asdfasdf-sdfgwert-21341234', '15'];
      }

      if ('date' in this.post) {
        this.date = this.post.date;
        var tempArr = this.date.split('-');

        if (tempArr.length == 3) {
          tempArr[1]++;

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
    }
    /* else {
       console.log ('POST empty');
    }*/


    $('#travelDate').datepicker({
      // Можно выбрать тольо даты, идущие за сегодняшним днем, включая сегодня, максимум на 2 недели вперед
      minDate: new Date(),
      maxDate: new Date(+this.currDate.getFullYear(), +this.currDate.getMonth(), 14 + this.currDate.getDate()),
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
    }); //выпадающее сверху основное меню

    var st = $(this).scrollTop();
    var lastScrollTop = st - 1;
    var isLinkPanelVisible = true; //спрятать панель, если экран уже прокручен

    if (st > 0) {
      $("nav.navbar").css('top', '-80px');
      isLinkPanelVisible = false;
    }

    $(window).scroll(function (event) {
      st = $(this).scrollTop();

      if (st > lastScrollTop) {
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
    this.sendRequest('routes'); //console.log ('Смонтировано');
  },
  methods: {
    changeRoute: function changeRoute(routeItem) {
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
      }

      ;
      this.placeValue = 0; //this.routePrice = this.routePriceList[this.routeId];

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
    selectParams: function selectParams(val) {
      //console.log ('поменялся параметр ' + val);
      switch (val) {
        case 0:
          //выбран пункт отправления (остановка в текущем городе)
          var tempArray = this.placesArray[this.routeId]['musterArray'];

          if (tempArray != undefined) {
            var tempItem = tempArray.find(function (item, i) {
              return this.cityFromValue == item['value'];
            }, this);
            this.fromPlaceID = tempItem.ID; //console.log ('ID места посадки найден' + tempItem.ID);
            //toPlaceID
          }

          ;

          if (this.input1Disabled == true) {
            $('form .indicator-layer').css('width', '40%');
            this.input1Disabled = false;

            if (this.currPlacesToArray.length == 1) {
              this.cityToValue = this.currPlacesToArray[0].value;
              var timer = setTimeout(this.selectParams, 1000, 1); //console.log ('Можно пункт назначения добавить автоматически');
            }
            /* else {
            //console.log ('Нельзя пункт назначения добавить автоматически');
            }*/
            //TODO нужно подкорректировать название города (для Калинкович)

          }

          break;

        case 1:
          //выбран пункт назначения
          var tempArray = this.placesArray[this.routeId]['destinationArray'];

          if (tempArray != undefined) {
            var tempItem = tempArray.find(function (item, i) {
              return this.cityToValue == item['value'];
            }, this);

            if (tempArray != undefined) {
              this.toPlaceID = tempItem.ID; //console.log ('ID места высадки найден ' + tempItem.ID);
            }
          }

          ;
          $('form .indicator-layer').css('width', '69%');
          var timer = setTimeout(this.selectParams, 1000, 2);
          break;

        case 2:
          this.input2Disabled = false;
          this.dateToggle = 'collapse';

          if (this.date != '0' && this.time != '0') {
            var tempStr = this.date + ' ' + this.time + ':00';
            var tempDate = new Date(tempStr); //$('#travelDate').datepicker().data('datepicker').selectDate(tempDate);
            //$('#dateToggle')[0].innerHTML = this.date + ', ' + this.time;

            if (document.documentElement.clientWidth > 767.98) $('form .indicator-layer').css('width', '99.5%');else $('form .indicator-layer').css('width', '99%');
            var timer = setTimeout(this.selectParams, 1000, 3); //console.log ('date: ' + tempStr);
          } else {
            if (this.date != '0' && this.time == '0') $('form .label-body .date-time-container').css('top', '-279px');
            $('#collapseDate').collapse('show'); //console.log ('empty');
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
    selectDate: function selectDate(fd, dt, inst) {
      this.currTripId = '';
      this.time = '0';
      this.fromTime = '';
      this.addButtonEnabled = false;
      this.isInfoLoaded = false;
      this.infoToggle = 'false';

      if (dt != '') {
        var tempArray = ['' + dt.getFullYear(), '0' + (dt.getMonth() + 1), '0' + dt.getDate()].map(function (item) {
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
      } //console.log ('нужно показать время для выбора, ' + dt.toString());

    },
    showDate: function showDate() {
      $('form .label-body .date-time-container').css('top', '0px');
    },
    selectTime: function selectTime(tripListItem) {
      //console.log ('Выбрано время');
      this.currTripId = tripListItem[2];
      this.fromTime = tripListItem[4].slice(-8, -3);
      this.addButtonEnabled = true;

      if (tripListItem[1].length < 2) {
        tripListItem[1] = '0' + tripListItem[1];
      }

      ; //if (tripListItem[1] < 10) {tripListItem[1] = '0' + tripListItem[1]};
      //console.log ('Выбрано ' + tripListItem[0] + ' часов, ' + tripListItem[1] + ' минут');

      this.time = tripListItem[0] + ':' + tripListItem[1];
      $('#collapseDate').collapse('hide');

      if (this.input3Disabled) {
        if (document.documentElement.clientWidth > 767.98) $('form .indicator-layer').css('width', '99.5%');else $('form .indicator-layer').css('width', '99%');
        var timer = setTimeout(this.selectParams, 1000, 3);
      }
    },
    hoverPassenger: function hoverPassenger(val) {
      //console.log ('Курсор над ' + val);

      /*for (var i = 0; i < 3; i++) {
       this.passHoveredArray[i] = false;
       };*/
      for (var i = 0; i < val + 1; i++) {
        this.passHoveredArray[i] = true;
      }

      ;
      this.currPassHover = val;
    },
    selectPassenger: function selectPassenger(val) {
      //console.log ('Выбран пассажир ' + val);
      for (var i = 0; i < 3; i++) {
        this.passSelectArray[i] = false;
        this.passHoveredArray[i] = false;
      }

      ;

      for (i = 0; i < val + 1; i++) {
        this.passSelectArray[i] = true;
      }

      ;
      this.currPassHover = 3;
      this.placeValue = val + 1;
      $('#collapsePass').collapse('hide');
      this.selectParams(4);
    },
    clearPassenger: function clearPassenger() {
      for (var i = 0; i < 3; i++) {
        this.passHoveredArray[i] = false;
      }

      ;
      this.currPassHover = 4;
    },
    ////////////////////////////////
    sendRequest: function sendRequest(target) {
      var _this = this;

      switch (target) {
        case 'routes':
          this.requestString = 'http://93.84.84.168:9494/BiletionApiService/routes?apikey=56tRR980oPkbx';
          axios.get(this.requestString).then(this.parseRoutes);
          break;

        case 'musters':
          //console.log('Получить остановки. Сначала завтрашние маршруты');
          var tempDate = new Date(this.currDate.toString());
          tempDate.setDate(tempDate.getDate() + 1);
          tempDate = tempDate.toLocaleString().substr(0, 10);
          this.requestString = 'http://93.84.84.168:9494/BiletionApiService/trips/filter3/' + tempDate + ' 00:00:00/' + tempDate + ' 23:59:59/' + this.routeId + '/00000000-0000-0000-0000-000000000000/00000000-0000-0000-0000-000000000000/True?apikey=56tRR980oPkbx';
          axios.get(this.requestString).then(this.getDefaultTrips);
          break;

        case 'trips':
          //console.log('Получить маршруты данного направления');
          this.requestString = 'http://93.84.84.168:9494/BiletionApiService/trips/filter3/' + this.dateValue + ' 00:00:00/' + this.dateValue + ' 23:59:59/' + this.routeId + '/00000000-0000-0000-0000-000000000000/00000000-0000-0000-0000-000000000000/True?apikey=56tRR980oPkbx';
          this.isPreloaderVisible = true;
          axios.get(this.requestString).then(this.parseTrips)["finally"](function () {
            return _this.isPreloaderVisible = false;
          });
          break;

        case 'info':
          //console.log('Получить подробную информацию маршрута');
          this.requestString = 'http://93.84.84.168:9494/BiletionApiService/trip/' + this.currTripId + '?apikey=56tRR980oPkbx'; //this.isPreloaderVisible = true;

          axios.get(this.requestString).then(this.parseInfo)["finally"](function () {
            return _this.isPreloaderVisible = false;
          });
          break;
      }
    },
    parseRoutes: function parseRoutes(responce) {
      this.responceData = responce.data;
      /*this.routeList.forEach(function (item, i) {
          //console.log ('Надо добавить цену маршруту ' + item.CityFrom + ' - ' + item.CityTo);
          if (item.ID in this.routePriceList) {
              item.Price = this.routePriceList[item.ID];
          } else {
              item.Price = 0;
          }
      }, this);*/

      this.responceData.forEach(function (item) {
        this.routeList.push(item);
      }, this);
      this.routeList = this.routeList.sort(function (a, b) {
        if (+a['Name'] > +b['Name']) {
          return 1;
        } else {
          return -1;
        }
      });
      this.routeList.map(function (item) {
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
    getDefaultTrips: function getDefaultTrips(responce) {
      //console.log('Обработать маршруты, и получить данные первого доступного');
      if (responce.data.length > 0) {
        console.log('Есть маршруты, ' + responce.data.length + ' шт. Можно получить остановки');
        this.requestString = 'http://93.84.84.168:9494/BiletionApiService/trip/' + responce.data[0].ID + '?apikey=56tRR980oPkbx';
        axios.get(this.requestString).then(this.getCurrPlaces);
      } else {
        //console.log('Нет маршрутов на этот день, попробуем на 2 недели вперед');
        var startDate = new Date(this.currDate.toString());
        startDate = startDate.toLocaleString().substr(0, 10);
        var endDate = new Date(this.currDate.toString());
        endDate.setDate(endDate.getDate() + 14);
        endDate = endDate.toLocaleString().substr(0, 10);
        this.requestString = 'http://93.84.84.168:9494/BiletionApiService/trips/filter3/' + startDate + ' 00:00:00/' + endDate + ' 23:59:59/' + this.routeId + '/00000000-0000-0000-0000-000000000000/00000000-0000-0000-0000-000000000000/True?apikey=56tRR980oPkbx';
        axios.get(this.requestString).then(this.getWeekTrips);
      }
    },
    getWeekTrips: function getWeekTrips(responce) {
      if (responce.data.length > 0) {
        console.log('Есть ' + responce.data.length + ' шт.');
        this.requestString = 'http://93.84.84.168:9494/BiletionApiService/trip/' + responce.data[0].ID + '?apikey=56tRR980oPkbx';
        axios.get(this.requestString).then(this.getCurrPlaces);
      } else {
        //console.log('Маршрутов нет даже на 2 недели вперед, надо самому добавлять');
        this.placesArray[this.routeId] = {};
        this.placesArray[this.routeId].musterArray = this.currPlacesFromArray = [{
          'name': this.cityFrom,
          'value': this.cityFrom
        }];
        this.placesArray[this.routeId].destinationArray = this.currPlacesToArray = [{
          'name': this.cityTo,
          'value': this.cityTo
        }];
      }
    },
    getCurrPlaces: function getCurrPlaces(responce) {
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
    parseTrips: function parseTrips(responce) {
      this.responceData = responce.data;
      this.tripList = [];
      this.responceData.forEach(function (item, i) {
        var tripDate = new Date(item.TripDateUniverse);
        /*if (+tripDate.getHours() == 6) {
         //console.log ('Рейс на 6 утра, ID: ' + item.ID);
         }*/

        if (item.SeatsCount == 0) item.SeatsCount = 17;
        if (tripDate.getMinutes() == 0) this.tripList[i] = [tripDate.getHours(), '00', item.ID, item.SeatsCount - item.SeatsBusyCount, item.TripStartDateUniverse];else this.tripList[i] = [tripDate.getHours(), tripDate.getMinutes(), item.ID, item.SeatsCount - item.SeatsBusyCount, item.TripStartDateUniverse];
      }, this);
      this.tripList = this.tripList.filter(function (item) {
        return item[3] > 0;
      });
      this.tripList.sort(function (a, b) {
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
      } //console.log ('Массив поездок обновлен');


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
            $('form .label-body .date-time-container').css('top', '-279px'); //console.log ('На такое время в этот день поездок нет');
          }
        }
      }
    },
    parseInfo: function parseInfo(responce) {
      //console.log ('Данные маршрута обновленны');
      this.responceData = responce.data;
      this.tripDataArray['muster'] = this.responceData.MusterRouteItems;
      this.tripDataArray['busColor'] = this.responceData.BusColor;
      this.tripDataArray['busName'] = this.responceData.BusName;
      this.tripDataArray['distanceTime'] = this.responceData.DistanceTime;
      this.tripDataArray['tripStartDateUniverse'] = this.responceData.TripStartDateUniverse;
      this.tripDataArray['muster'].sort(function (a, b) {
        if (+a.Position > +b.Position) {
          return 1;
        } else {
          return -1;
        }
      }); //this.tripDataArray['tripStartDateUniverse'].slice(-5);

      var musterDate = new Date(this.tripDataArray['tripStartDateUniverse']);
      this.tripDataArray['muster'].map(function (item, i) {
        //console.log (item.Description + ': ' + musterDate.getHours() + ':' + musterDate.getMinutes());
        item['MusterTime'] = musterDate.getHours() + ':' + musterDate.getMinutes();
        musterDate.setMinutes(musterDate.getMinutes() + this.currMusterTime[i]);
      }, this);
      this.isInfoLoaded = true;
      this.infoToggle = 'modal'; //console.log ('Массив данных поездки обновлен');
    }
  },
  computed: {
    dateValue: function dateValue() {
      return this.date.split('-').reverse().join('.');
    },
    submitButtonDisabled: function submitButtonDisabled() {
      if (this.time == '0' || this.placeValue == 0) return true;
      return false;
    },
    currMusterTime: function currMusterTime() {
      if (this.routeId in this.musterTimeArray) {
        //console.log('Есть такой элемент');
        return this.musterTimeArray[this.routeId];
      } else {
        //console.log('Нет такого элемента');
        return [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5];
      }
    },
    routePrice: function routePrice() {
      if (this.placeValue == 0) return this.routePriceList[this.routeId];else return this.routePriceList[this.routeId] * this.placeValue;
    },
    cityFromPlace: function cityFromPlace() {
      return this.cityFromValue.slice(1 + this.cityFromValue.indexOf('('), -1);
    },
    cityToPlace: function cityToPlace() {
      return this.cityToValue.slice(1 + this.cityToValue.indexOf('('), -1);
    }
  },
  watch: {
    currTripId: function currTripId(val, oldVal) {
      this.isInfoLoaded = false;
      this.infoToggle = 'false';
      if (val != '') this.sendRequest('info'); //console.log('tripId: ' + val);
    }
  },
  filters: {
    placeFilter: function placeFilter(val) {
      if (val == 0) return 'Сколько пассажиров?';
      if (val == 1) return '1 пассажир';
      return val + ' пассажира';
    },
    costFilter: function costFilter(val) {
      if (val == 0) return '';
      return val + ' руб.';
    },
    dateFilter: function dateFilter(val) {
      if (val == 0) return 'Когда?';
      return val;
    },
    timeFilter: function timeFilter(val) {
      if (val == 0) return '';
      return ', ' + val;
    },
    musterTimeFilter: function musterTimeFilter(val) {
      var tempArray = val.split(':');
      if (tempArray[1] < 10) tempArray[1] = '0' + tempArray[1];
      return tempArray.join(':');
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FormBlock.vue?vue&type=template&id=eef4e064&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FormBlock.vue?vue&type=template&id=eef4e064& ***!
  \************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "container" }, [
      _c(
        "div",
        { staticClass: "row route-list", class: _vm.routeList.length },
        _vm._l(_vm.routeSortedList, function(routeItem) {
          return _c("div", { staticClass: "col-6 col-md-3" }, [
            _c(
              "div",
              {
                staticClass: "card route-item",
                on: {
                  click: function($event) {
                    return _vm.changeRoute(routeItem)
                  }
                }
              },
              [
                _c("div", { staticClass: "card-header" }, [
                  _vm._v(
                    "\n                        " +
                      _vm._s(routeItem.CityFrom) +
                      " - " +
                      _vm._s(routeItem.CityTo) +
                      "\n                    "
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "card-body" }, [
                  _vm._v(
                    "\n                        В пути " +
                      _vm._s(routeItem.DistanceTime) +
                      "\n                    "
                  )
                ])
              ]
            )
          ])
        }),
        0
      ),
      _vm._v(" "),
      _c("div", { staticClass: "form-title" }, [
        _c(
          "p",
          { staticClass: "route-name hidden-layer" },
          [
            _c("transition", { attrs: { name: "fade-0", mode: "out-in" } }, [
              _c("span", { key: _vm.cityFrom }, [
                _vm._v(_vm._s(_vm.cityFrom) + " - " + _vm._s(_vm.cityTo))
              ])
            ])
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c(
        "form",
        {
          attrs: {
            action: "http://bilet.m10.by/booking/register-s1",
            method: "post"
          }
        },
        [
          _c("input", {
            attrs: { type: "hidden", name: "tripID" },
            domProps: { value: _vm.currTripId }
          }),
          _vm._v(" "),
          _c("input", {
            attrs: { type: "hidden", name: "currencyCode", value: "BYN" }
          }),
          _vm._v(" "),
          _c("input", {
            attrs: { type: "hidden", name: "fromCityID" },
            domProps: { value: _vm.fromPlaceID }
          }),
          _vm._v(" "),
          _c("input", {
            attrs: { type: "hidden", name: "toCityID" },
            domProps: { value: _vm.toPlaceID }
          }),
          _vm._v(" "),
          _c("input", {
            attrs: { type: "hidden", name: "fromCityName" },
            domProps: { value: _vm.cityFrom }
          }),
          _vm._v(" "),
          _c("input", {
            attrs: { type: "hidden", name: "fromCityDescription" },
            domProps: { value: _vm.cityFromPlace }
          }),
          _vm._v(" "),
          _c("input", {
            attrs: { type: "hidden", name: "fromTimeString" },
            domProps: { value: _vm.fromTime }
          }),
          _vm._v(" "),
          _c("input", {
            attrs: { type: "hidden", name: "toCityName" },
            domProps: { value: _vm.cityTo }
          }),
          _vm._v(" "),
          _c("input", {
            attrs: { type: "hidden", name: "toCityDescription" },
            domProps: { value: _vm.cityToPlace }
          }),
          _vm._v(" "),
          _c("input", {
            attrs: { type: "hidden", name: "toTimeString" },
            domProps: { value: _vm.toTime }
          }),
          _vm._v(" "),
          _vm._m(0),
          _vm._v(" "),
          _c("div", { staticClass: "row input-row" }, [
            _c("div", { staticClass: "col-12 col-md-3" }, [
              _c("div", { staticClass: "form-group " }, [
                _c(
                  "label",
                  { staticClass: "hidden-layer", attrs: { for: "cityFrom" } },
                  [
                    _c(
                      "transition",
                      { attrs: { name: "fade-1", mode: "out-in" } },
                      [
                        _c("span", { key: _vm.cityFrom }, [
                          _vm._v(_vm._s(_vm.cityFrom))
                        ])
                      ]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.cityFromValue,
                        expression: "cityFromValue"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { name: "from", id: "cityFrom" },
                    on: {
                      change: [
                        function($event) {
                          var $$selectedVal = Array.prototype.filter
                            .call($event.target.options, function(o) {
                              return o.selected
                            })
                            .map(function(o) {
                              var val = "_value" in o ? o._value : o.value
                              return val
                            })
                          _vm.cityFromValue = $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        },
                        function($event) {
                          return _vm.selectParams(0)
                        }
                      ]
                    }
                  },
                  [
                    _c(
                      "option",
                      { attrs: { value: "", selected: "", disabled: "" } },
                      [_vm._v("Откуда")]
                    ),
                    _vm._v(" "),
                    _vm._l(_vm.currPlacesFromArray, function(currPlace) {
                      return _c(
                        "option",
                        { domProps: { value: currPlace.value } },
                        [_vm._v(_vm._s(currPlace.name))]
                      )
                    })
                  ],
                  2
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-12 col-md-3" }, [
              _c("div", { staticClass: "form-group " }, [
                _c(
                  "label",
                  { staticClass: "hidden-layer", attrs: { for: "cityTo" } },
                  [
                    _c(
                      "transition",
                      { attrs: { name: "fade-2", mode: "out-in" } },
                      [
                        _c("span", { key: _vm.cityTo }, [
                          _vm._v(_vm._s(_vm.cityTo))
                        ])
                      ]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.cityToValue,
                        expression: "cityToValue"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      name: "to",
                      id: "cityTo",
                      disabled: _vm.input1Disabled
                    },
                    on: {
                      change: [
                        function($event) {
                          var $$selectedVal = Array.prototype.filter
                            .call($event.target.options, function(o) {
                              return o.selected
                            })
                            .map(function(o) {
                              var val = "_value" in o ? o._value : o.value
                              return val
                            })
                          _vm.cityToValue = $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        },
                        function($event) {
                          return _vm.selectParams(1)
                        }
                      ]
                    }
                  },
                  [
                    _c(
                      "option",
                      { attrs: { value: "", selected: "", disabled: "" } },
                      [_vm._v("Куда")]
                    ),
                    _vm._v(" "),
                    _vm._l(_vm.currPlacesToArray, function(currPlace) {
                      return _c(
                        "option",
                        { domProps: { value: currPlace.value } },
                        [_vm._v(_vm._s(currPlace.name))]
                      )
                    })
                  ],
                  2
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-12 col-md-3" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("input", {
                  attrs: { type: "hidden", name: "date" },
                  domProps: { value: _vm.dateValue }
                }),
                _vm._v(" "),
                _vm._m(1),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn label-button",
                    class: { enabled: !_vm.input2Disabled },
                    attrs: {
                      id: "dateToggle",
                      type: "button",
                      "data-toggle": _vm.dateToggle,
                      "data-target": "#collapseDate",
                      "aria-expanded": "false",
                      "aria-controls": "collapseDate"
                    }
                  },
                  [
                    [
                      _vm._v(
                        _vm._s(_vm._f("dateFilter")(_vm.dateValue)) +
                          " " +
                          _vm._s(_vm._f("timeFilter")(_vm.time))
                      )
                    ]
                  ],
                  2
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "collapse", attrs: { id: "collapseDate" } },
                  [
                    _c("div", { staticClass: "label-body" }, [
                      _c("div", { staticClass: "date-time-container" }, [
                        _vm._m(2),
                        _vm._v(" "),
                        _c("div", { staticClass: "time-body" }, [
                          _c("img", {
                            staticClass: "back-arrow",
                            attrs: { src: "/img/icon1.jpg", alt: "Назад" },
                            on: {
                              click: function($event) {
                                return _vm.showDate()
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c("p", { staticClass: "time-body-title" }, [
                            _vm._v("Выберите время:")
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: "time-body-content d-flex flex-wrap"
                            },
                            _vm._l(_vm.tripList, function(tripListItem) {
                              return _c(
                                "div",
                                {
                                  staticClass:
                                    "time-body-item justify-content-between",
                                  on: {
                                    click: function($event) {
                                      return _vm.selectTime(tripListItem)
                                    }
                                  }
                                },
                                [
                                  _vm._v(_vm._s(tripListItem[0])),
                                  _c("span", { staticClass: "time-minutes" }, [
                                    _vm._v(_vm._s(tripListItem[1]))
                                  ])
                                ]
                              )
                            }),
                            0
                          )
                        ])
                      ])
                    ])
                  ]
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-12 col-md-3" }, [
              _c("div", { staticClass: "form-group " }, [
                _c("input", {
                  attrs: { type: "hidden", name: "placeCount" },
                  domProps: { value: _vm.placeValue }
                }),
                _vm._v(" "),
                _vm._m(3),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn label-button",
                    class: { enabled: !_vm.input3Disabled },
                    attrs: {
                      id: "passToggle",
                      type: "button",
                      "data-toggle": _vm.passToggle,
                      "data-target": "#collapsePass",
                      "aria-expanded": "false",
                      "aria-controls": "collapsePass"
                    }
                  },
                  [[_vm._v(_vm._s(_vm._f("placeFilter")(_vm.placeValue)))]],
                  2
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "collapse", attrs: { id: "collapsePass" } },
                  [
                    _c(
                      "div",
                      { key: _vm.currPassHover, staticClass: "pass-container" },
                      [
                        _c("div", { staticClass: "row" }, [
                          _c("div", { staticClass: "col-4" }, [
                            _c("img", {
                              class: {
                                selected: _vm.passSelectArray[0],
                                hovered: _vm.passHoveredArray[0]
                              },
                              attrs: { src: "/img/passenger.jpg" },
                              on: {
                                mouseover: function($event) {
                                  return _vm.hoverPassenger(0)
                                },
                                mouseleave: function($event) {
                                  return _vm.clearPassenger()
                                },
                                click: function($event) {
                                  return _vm.selectPassenger(0)
                                }
                              }
                            })
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-4" }, [
                            _c("img", {
                              class: {
                                selected: _vm.passSelectArray[1],
                                hovered: _vm.passHoveredArray[1]
                              },
                              attrs: { src: "/img/passenger.jpg" },
                              on: {
                                mouseover: function($event) {
                                  return _vm.hoverPassenger(1)
                                },
                                mouseleave: function($event) {
                                  return _vm.clearPassenger()
                                },
                                click: function($event) {
                                  return _vm.selectPassenger(1)
                                }
                              }
                            })
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-4" }, [
                            _c("img", {
                              class: {
                                selected: _vm.passSelectArray[2],
                                hovered: _vm.passHoveredArray[2]
                              },
                              attrs: { src: "/img/passenger.jpg" },
                              on: {
                                mouseover: function($event) {
                                  return _vm.hoverPassenger(2)
                                },
                                mouseleave: function($event) {
                                  return _vm.clearPassenger()
                                },
                                click: function($event) {
                                  return _vm.selectPassenger(2)
                                }
                              }
                            })
                          ])
                        ]),
                        _vm._v(" "),
                        _vm._m(4)
                      ]
                    )
                  ]
                )
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row button-row" }, [
            _c(
              "div",
              {
                staticClass: "offset-0 offset-md-9 col-12 col-md-3 add-info",
                class: { enabled: _vm.isInfoLoaded }
              },
              [
                _c(
                  "a",
                  {
                    staticClass: "small-letter",
                    attrs: {
                      "data-toggle": _vm.infoToggle,
                      href: "#tripInfo",
                      "aria-expanded": "false",
                      "aria-controls": "tripInfo"
                    }
                  },
                  [_vm._v("Дополнительная информация")]
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "order-button",
                class: { active: !_vm.submitButtonDisabled },
                attrs: { type: "submit", disabled: _vm.submitButtonDisabled }
              },
              [_vm._v("Заказать")]
            )
          ])
        ]
      )
    ]),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "modal fade",
        attrs: {
          id: "tripInfo",
          tabindex: "-1",
          role: "dialog",
          "aria-labelledby": "tripInfo",
          "aria-hidden": "true"
        }
      },
      [
        _c(
          "div",
          {
            staticClass: "modal-dialog modal-xl modal-dialog-scrollable",
            attrs: { role: "document" }
          },
          [
            _c("div", { staticClass: "modal-content" }, [
              _vm._m(5),
              _vm._v(" "),
              _c("div", { staticClass: "modal-body" }, [
                _c("div", { staticClass: "card card-body" }, [
                  _c("div", { staticClass: "info-container" }, [
                    _c(
                      "ul",
                      { staticClass: "info-muster" },
                      _vm._l(_vm.tripDataArray.muster, function(tripData) {
                        return _c("li", { staticClass: "row" }, [
                          _c("div", { staticClass: "col-6 content-right" }, [
                            _vm._v(_vm._s(tripData.Description))
                          ])
                        ])
                      }),
                      0
                    )
                  ])
                ])
              ]),
              _vm._v(" "),
              _vm._m(6)
            ])
          ]
        )
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row indicator-row" }, [
      _c("div", { staticClass: "indicator-layer" }),
      _vm._v(" "),
      _c("div", { staticClass: "d-flex justify-content-between" }, [
        _c("div", { staticClass: "indicator-point" }),
        _vm._v(" "),
        _c("div", { staticClass: "indicator-point" }),
        _vm._v(" "),
        _c("div", { staticClass: "indicator-point" }),
        _vm._v(" "),
        _c("div", { staticClass: "indicator-point" })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { attrs: { for: "dateToggle" } }, [
      _c("span", [_vm._v("Дата поездки")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "date-container" }, [
      _c("div", { staticClass: "date-body", attrs: { id: "travelDate" } })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { attrs: { for: "passToggle" } }, [
      _c("span", [_vm._v("Число пассажиров")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "pass-text" }, [
      _c("p", [
        _vm._v("Для заказа более 3 мест "),
        _c(
          "a",
          {
            staticClass: "modal-link",
            attrs: {
              "data-toggle": "modal",
              href: "#phoneCall",
              "aria-expanded": "false",
              "aria-controls": "phoneCall"
            }
          },
          [_vm._v("позвоните")]
        ),
        _vm._v(" оператору")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c("h5", { staticClass: "modal-title" }, [_vm._v("Остановки в пути")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-footer" }, [
      _c(
        "button",
        {
          staticClass: "btn btn-secondary",
          attrs: { type: "button", "data-dismiss": "modal" }
        },
        [_vm._v("Закрыть")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Vue.component('form-block', __webpack_require__(/*! ./components/FormBlock.vue */ "./resources/js/components/FormBlock.vue")["default"]);
var vm = new Vue({
  el: '#app',
  data: {}
});
/*$(document).ready(function() {

});*/

/***/ }),

/***/ "./resources/js/components/FormBlock.vue":
/*!***********************************************!*\
  !*** ./resources/js/components/FormBlock.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormBlock_vue_vue_type_template_id_eef4e064___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormBlock.vue?vue&type=template&id=eef4e064& */ "./resources/js/components/FormBlock.vue?vue&type=template&id=eef4e064&");
/* harmony import */ var _FormBlock_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormBlock.vue?vue&type=script&lang=js& */ "./resources/js/components/FormBlock.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FormBlock_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FormBlock_vue_vue_type_template_id_eef4e064___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FormBlock_vue_vue_type_template_id_eef4e064___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/FormBlock.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/FormBlock.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/components/FormBlock.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormBlock_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./FormBlock.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FormBlock.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormBlock_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/FormBlock.vue?vue&type=template&id=eef4e064&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/FormBlock.vue?vue&type=template&id=eef4e064& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormBlock_vue_vue_type_template_id_eef4e064___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./FormBlock.vue?vue&type=template&id=eef4e064& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FormBlock.vue?vue&type=template&id=eef4e064&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormBlock_vue_vue_type_template_id_eef4e064___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormBlock_vue_vue_type_template_id_eef4e064___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*************************************************************!*\
  !*** multi ./resources/js/app.js ./resources/sass/app.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! D:\OSPanel\domains\m10\resources\js\app.js */"./resources/js/app.js");
module.exports = __webpack_require__(/*! D:\OSPanel\domains\m10\resources\sass\app.scss */"./resources/sass/app.scss");


/***/ })

/******/ });