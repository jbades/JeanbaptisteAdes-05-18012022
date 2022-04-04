import PhotographersList from '../classes/PhotographersList.js';

fetch('../../data/photographers.json')
.then(res => res.json())
.then((data) => {
    let photographers = new PhotographersList();
    photographers.start(data.photographers);
})