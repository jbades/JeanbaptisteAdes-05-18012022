//Mettre le code JavaScript lié à la page photographer.html

import Photographer from '../classes/Photographer.js';
import Portfolio from '../classes/Portfolio.js';
import * as toto from '../utils/contactForm.js';

const photographerID = getID('id');

createSummary();

fetch('../../data/photographers.json')
.then(res => res.json())
.then((data) => {    
    filterPhotographer(data);
    filterMedia(data);
})

function createSummary() {
    let div = document.createElement('div');
    div.classList.add("fixed-summary");
    let summary = document.querySelector('main').appendChild(div);
    summary.innerHTML = '';
}

function filterPhotographer(input) {
    let chosenPhotographer = input.photographers.find(photographer => photographer.id == photographerID);
    let photographer = new Photographer(chosenPhotographer);
    photographer.display();

    let span = document.createElement('span');
    let summary = document.querySelector('.fixed-summary').appendChild(span);
    summary.innerHTML = `<span>${photographer.displayPrice()}€/jour</span>`;    
}

function filterMedia(input) {
    let medias = input.media.filter(media => media.photographerId == photographerID);
    let portfolio = new Portfolio();
    portfolio.hydrate(medias); 
    portfolio.display();
    portfolio.setTriggers();
    portfolio.countTotalLikes();

    let span = document.createElement('span');
    let summary = document.querySelector('.fixed-summary').appendChild(span);
    summary.innerHTML = `
        <span id="count">${portfolio.totalLikes}</span>
        <i id="toggleLike" class="icon-heart"></i>
    `;
}

function getID (key) {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    return params[key];
}