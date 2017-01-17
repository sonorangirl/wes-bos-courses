import { uniq } from 'lodash';
import insane from 'insane';
import jsonp from 'jsonp';
import apiKey from './src/config';

import User, { createUrl, gravatar } from './src/User';

const erin = new User('Erin M', 'erin@gmail.com', 'erin.com');
console.log(erin);
const profile = createUrl(erin.name);
console.log(profile);
const avatar = gravatar(erin.email);
console.log(avatar);


