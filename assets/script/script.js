import * as utils from './utils.js';

'use strict';
const emailButton = utils.select("button");
const footerEmailButton = utils.select(".fa-envelope");

const emailCallBack = () => {
    location.href = "mailto:userclassdev@outlook.com?subject=";
}
utils.listen('click', emailButton, emailCallBack);
utils.listen('click', footerEmailButton, emailCallBack);


// reveal on scroll effect tutorial https://www.youtube.com/watch?v=VplDlwLTR50
utils.listen('scroll', window, reveal);

window.onload = function() {
    reveal();
    // without this, .active is not added to the header content immediately when the page loads.
}

function reveal() {
    var reveals = document.querySelectorAll('.reveal');
    let headerReveal = utils.select('header .reveal');
    headerReveal.classList.add('active');
    console.log("added to headder content")

    for (let i = 0; i < reveals.length; i++) {
        let windowHeight = window.innerHeight;
        let revealTop = reveals[i].getBoundingClientRect().top;
        let revealPoint = 150;


        if (revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add('active');
        } else {
            reveals[i].classList.remove('active');
        }
    }
}
