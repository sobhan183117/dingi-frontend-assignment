import { select, takeLatest, call, apply, put, } from 'redux-saga/effects';
import axios from 'axios';
import request from '../../utils/request';
import { SUBMIT_LOGIN } from './constants';
import { makeSelectUserName, makeSelectPassword } from './selectors';

import { BASE_URL, FETCH_USER_DATA } from '../../utils/serviceURL';
import { getToken } from '../../utils/authHelper';
import { setBarChartData, setPieChartData } from './actions';
// import { getMethod } from '../../utils/globalFunction';
// import { getMethod } from '../../utils/globalFunctionon';

export function* fetchSalesData() {

  // const tokenData = JSON.parse(getToken());

  // const requestURL = BASE_URL + FETCH_USER_DATA;
  // const options = {
  //   method: 'GET',
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'Authorization': 'JWT ' + tokenData,
  //   },
  // };

  try {
    // const response = yield call(request, requestURL, options);

    const response = [
      {
        "id": 1,
        "customer_name": "Abu Sufian",
        "customer_work_area": "Dhaka",
        "district": "Dhaka",
        "date": "2020-07-24",
        "product": "Eagle Cam",
        "order_quantity": 23,
        "created_at": "2020-07-24T13:58:23.000000Z",
        "updated_at": "2020-07-24T13:58:23.000000Z"
      },
      {
        "id": 2,
        "customer_name": "Siam",
        "customer_work_area": "Rangpur",
        "district": "Rangpur",
        "date": "2020-07-24",
        "product": "Vechile Tracker",
        "order_quantity": 55,
        "created_at": "2020-07-24T17:32:12.000000Z",
        "updated_at": "2020-07-24T17:32:12.000000Z"
      },
      {
        "id": 3,
        "customer_name": "Taju",
        "customer_work_area": "Rangpur",
        "district": "Rangpur",
        "date": "2020-07-24",
        "product": "Asset Lock",
        "order_quantity": 15,
        "created_at": "2020-07-24T17:34:14.000000Z",
        "updated_at": "2020-06-24T17:34:14.000000Z"
      },
      {
        "id": 4,
        "customer_name": "Banna",
        "customer_work_area": "Chittagong",
        "district": "Chittagong",
        "date": "2020-07-25",
        "product": "Moto Tracker",
        "order_quantity": 5,
        "created_at": "2020-07-25T14:25:03.000000Z",
        "updated_at": "2020-07-25T14:25:03.000000Z"
      },
      {
        "id": 5,
        "customer_name": "Rahul",
        "customer_work_area": "Chittagong",
        "district": "Chittagong",
        "date": "2020-07-25",
        "product": "Eagle Cam",
        "order_quantity": 25,
        "created_at": "2020-07-25T14:25:17.000000Z",
        "updated_at": "2020-07-25T14:25:17.000000Z"
      },
      {
        "id": 6,
        "customer_name": "Name 5",
        "customer_work_area": "GHI",
        "district": "Sylhet",
        "date": "2020-06-25",
        "product": "Product 4",
        "order_quantity": 25,
        "created_at": "2020-06-25T14:25:37.000000Z",
        "updated_at": "2020-06-25T14:25:37.000000Z"
      },
      {
        "id": 7,
        "customer_name": "Name 5",
        "customer_work_area": "DHI",
        "district": "Sylhet",
        "date": "2020-07-01",
        "product": "Product 5",
        "order_quantity": 25,
        "created_at": "2020-07-01T06:11:36.000000Z",
        "updated_at": "2020-07-01T06:11:36.000000Z"
      }
    ]
    console.log('response', response);

    if (response) {

      let mainSellProductList = [];
      let currentMonthDataArr = [];
      let barChartDataArr = [];

      let pieChartLevelArr = []
      let pieChartDataArr = [];
      // [{date: '2020', product: 'Eagle Cam', }]
      mainSellProductList = response;

      mainSellProductList.filter(data => {
        let formatToDate = new Date(data.date);
        if (formatToDate.getMonth() + 1 == new Date().getMonth() + 1) {
          currentMonthDataArr.push(data);
        }
      });

      console.log('currentMonthDataArr', currentMonthDataArr);

      let uniqueProductArr = [... new Set(currentMonthDataArr.map(data => data.product))];
      let uniqueDistrictArr = [... new Set(currentMonthDataArr.map(data => data.district))];

      for (let index = 0; index < uniqueProductArr.length; index++) {

        let dataArray = [];
        let monthlyOrderSum = 0;

        for (let i = 1; i < 32; i++) {

          let dailyOrderQuantity = 0;

          for (let j = 0; j < currentMonthDataArr.length; j++) {

            let sellDate = new Date(currentMonthDataArr[j].date).getDate();

            if (i == sellDate && uniqueProductArr[index] == currentMonthDataArr[j].product) {
              dailyOrderQuantity += currentMonthDataArr[j].order_quantity;
            }

          }
          monthlyOrderSum += dailyOrderQuantity;
          dataArray.push(dailyOrderQuantity);
          dailyOrderQuantity = 0;

        }

        console.log('monthlyOrderSum', uniqueProductArr[index], '-', monthlyOrderSum);

        barChartDataArr.push(
          {
            label: uniqueProductArr[index],
            backgroundColor: '#' + (Math.random().toString(16) + '00000').slice(2, 8),
            data: dataArray
          }
        );
        dataArray = [];

        // for pie chart 
        pieChartLevelArr.push(uniqueProductArr[index]);
        pieChartDataArr.push(monthlyOrderSum);

      }

      // for (let x = 0; x < uniqueDistrictArr.length; x++) {

      //   for (let k = 1; k < 32; K++) {

      //     let districtCount = 0;

      //     for (let j = 0; j < currentMonthDataArr.length; j++) {

      //       let sellDate = new Date(currentMonthDataArr[j].date).getDate();

      //       if (K == sellDate && uniqueDistrictArr[x] == currentMonthDataArr[j].district) {
      //         districtCount += currentMonthDataArr[j].district;
      //       }

      //     }

      //     // dataArray.push(districtCount);

      //   }

      //   // barChartDataArr.push(
      //   //   {
      //   //     label: uniqueDistrictArr[x],
      //   //     backgroundColor: '#' + (Math.random().toString(16) + '00000').slice(2, 8),
      //   //     data: dataArray
      //   //   }
      //   // );

      // }

      yield put(setBarChartData({ barChartDataArr }));
      yield put(setPieChartData({ pieChartLevelArr, pieChartDataArr }));

    }
  } catch (error) {

  }

  // axios({
  //   method: 'GET',
  //   url: BASE_URL + '/user/data/',
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'Authorization': 'JWT ' + tokenData,
  //   },
  // })
  //   .then(response => {
  //     // handle success
  //     if (response.status === 200) {
  //       console.log('get', response);
  //     }
  //   }).catch(error => {
  //     // handle error
  //     console.log('catch', error);
  //     if (error.response) {
  //       // client received an error response (5xx, 4xx)
  //     } else if (error.request) {

  //       console.log('in-err-req', 'network connection error.');
  //       // client never received a response, or request never left
  //     } else {
  //       console.log('in-err-else', 'something went wrong. try again later.');
  //       // anything else
  //     }
  //   })
}

// Individual exports for testing
export default function* salesSaga() {
  yield fetchSalesData();
}
