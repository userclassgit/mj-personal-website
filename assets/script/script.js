import * as utils from './utils.js';

'use strict';
const emailButton = utils.select("button");

const emailCallBack = () => {
    location.href = "mailto:userclassdev@outlook.com?subject=";
}
utils.listen('click', emailButton, emailCallBack);


