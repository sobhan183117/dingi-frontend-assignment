import { getToken } from "./authHelper";
import axios from 'axios';
import { BASE_URL } from "./serviceURL";

 function getMethod(url) {

    const tokenData = JSON.parse(getToken());
    axios({
        method: 'GET',
        url: BASE_URL + url,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'JWT ' + tokenData,
        },
    })
        .then(response => {
            return response.data;

            console.log('g-getRes', response);
        }).catch(error => {
            console.log('g-getResErr', error);
            return error;

        })
}

export {getMethod }