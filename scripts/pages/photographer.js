//Mettre le code JavaScript lié à la page photographer.html

import Portfolio from '../classes/Portfolio.js';

const photographerID = get('id');

fetch('../../data/photographers.json')
.then(res => res.json())
.then((data) => {    
    let chosenPhotographer = data.photographers.find(photographer => photographer.id == photographerID);
    let medias = data.media.filter(media => media.photographerId == photographerID);
    
    let portfolio = new Portfolio(chosenPhotographer);
    portfolio.start(medias);
})

function get (key) {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    return params[key];
}