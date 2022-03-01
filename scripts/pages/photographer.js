//Mettre le code JavaScript lié à la page photographer.html

import Portfolio from '../classes/Portfolio.js';

const photographerID = getID('id');

fetch('../../data/photographers.json')
.then(res => res.json())
.then((data) => {    
    filterMedia(data);
})

function filterMedia(input) {
    let medias = input.media.filter(media => media.photographerId == photographerID);
    let portfolio = new Portfolio();
    portfolio.hydrate(medias); 
    portfolio.displayPhotographer(input, photographerID);
    portfolio.countTotalLikes();
    portfolio.displayPortfolio();
    portfolio.displaySummary();
    portfolio.listenEvent();
}

function getID (key) {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    return params[key];
}