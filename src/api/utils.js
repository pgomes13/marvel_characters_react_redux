import MD5 from 'crypto-js/md5';

import { PUBLIC_KEY, PRIVATE_KEY, BASE_URL } from './base';

const timestamp = new Date().getTime();

const MD5_HASH = MD5(timestamp + PRIVATE_KEY + PUBLIC_KEY).toString();

/**
 * construct the api query as per the passed parameters
 * @param {String} topic - the marvel comic topic ie. characters, comics, creaters etc
 * @param {Number} id - the topic id by means of which it is identified in the db
 * @param {String} subTopic - the marvel comic subtopic ie. events, series, stories etc.
 * @returns {String} - the constructed query
 */
export function constructQuery ({ topic = null, id = null, subTopic = null }) {
    let query = BASE_URL;

    if (topic) {
        query = query + '/' + topic;
    }

    if (id) {
        query = query + '/' + id;
    }

    if (subTopic) {
        query = query + '/' + subTopic;
    }

    query = query + '?apikey=' + PUBLIC_KEY + '&ts=' + timestamp + '&hash=' + MD5_HASH;

    return query;
};