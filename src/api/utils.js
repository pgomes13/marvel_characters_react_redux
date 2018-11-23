import md5 from 'crypto-js/md5';

import { PUBLIC_KEY, PRIVATE_KEY } from './base';

export const md5Hash = () => {
    const ts = new Date().getTime();
};