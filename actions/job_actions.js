import {
    FETCH_JOBS 
} from './types';
import reverseGeocode from 'latlng-to-zip';
import axios from 'axios';
import qs from 'qs';

// export const fetchJobs = () => {

//     return function () {

//     }
// }                                   // SHOT 1

const JOB_QUERY_PARAMS = {
    publisher: '4201738803816157',
    format: 'json',
    v: '2',
    latlong: 1,
    radius: 10,
    q: 'javascript'
}

const JOB_ROOT_URL = 'https://api.indeed.com/ads/apisearch?';

const buildUrl = (zip) => {
    const query = qs.stringify({ ...JOB_QUERY_PARAMS, l: zip })
    return `${JOB_ROOT_URL}${query}`
}

export const fetchJobs = (region, callback) => async (dispatch) => {   // changing region to zip code on the go   // SHOT 2

    try {
        let zip = await reverseGeocode(region);
        const url = buildUrl(zip);

        let { data } = await axios.get(url);

        dispatch({ type: FETCH_JOBS, payload: url })

        callback();

        console.log(data)
    } catch(e) {
        console.error(e);
    }

}