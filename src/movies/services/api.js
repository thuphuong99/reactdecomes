import axios from 'axios';
import * as moment from 'moment';

function addDate(date, days){
    let result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}

export const getDataMoviesHomepage = async (page = 1) => {
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=
0aecc06bb4fadb06b5f071fef0c2ce6d&language=en-US&sort_by=popularity.desc&include_adult
=false&include_video=false&page=${page}`;

    const response = await axios.get(url);
    const result = await response.status === 200 ? response.data : []
        ;
    return result;
}

export const getUpcomingMovie = async (page=1) => {
    let fromDate = `2020-10-23`;
    let toDate = `2020-11-23`;
    let date = new Date();
    let d = date.getDate();
    d = d < 10 ? `0${d}` : d;
    let m = date.getMonth() + 1;
    m = m < 10 ? `0${m}` : m;
    let y = date.getFullYear();
    let today = `${y}-${m}-${d}`;
    let nextTime = addDate(today,30);
    nextTime = moment(nextTime).utc().format('YYYY-MM-DD');

    const url = `https://api.themoviedb.org/3/discover/movie?api_key=0aecc06bb4fadb06b5f071fef0c2ce6d&language=en-US&region=US&sort_by=popularity.desc
    &include_adult=false&include_video=false&page=${page}&release_date.gte=${today}&release_date.lte=${nextTime}&with_release_type=3&
    fbclid=IwAR0QmGZzrjF6eNKtrgB4azafOdQMkhK4xBPxo0rU-FccinS2m6-6wkFaYDU`
    const response = await axios.get(url);
    const result = await response.status === 200 ? response.data : []
        ;
    return result;
}
