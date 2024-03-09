import * as utils from './utils.js';

'use strict';
const emailButton = utils.select("button");
const footerEmailButton = utils.select(".fa-envelope");

const emailCallBack = () => {
    location.href = "mailto:userclassdev@outlook.com?subject=";
}
utils.listen('click', emailButton, emailCallBack);
utils.listen('click', footerEmailButton, emailCallBack);


