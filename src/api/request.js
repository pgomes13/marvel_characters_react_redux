import axios from 'axios';

import { constructQuery } from './utils';

/**
 * Make the promise based request to get the marvel comic data as per passed parameters
 @param {String} topic - the marvel comic topic ie. characters, comics, creaters etc
 * @param {Number} id - the topic id by means of which it is identified in the db
 * @param {String} subTopic - the marvel comic subtopic ie. events, series, stories etc
 * @returns {Object} - the response data object
 */
export function getMarvelAPIData (payload) {
    return axios.get(constructQuery(payload))
        .then((response) => {
            return response.data.data.results;
        })
        .catch((error) => {
            return error;
        });
};