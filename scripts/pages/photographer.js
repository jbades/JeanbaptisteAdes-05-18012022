//Mettre le code JavaScript lié à la page photographer.html

const photographerID = getID('id');

fetch('../../data/photographers.json')
.then(res => res.json())
.then((data) => {    
    let chosenPhotographer = data.photographers.find(photographer => photographer.id == photographerID);
    let photographer = new Photographer(chosenPhotographer);
    console.log(photographer);
    photographer.display();
})

function getID (key) {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    return params[key];
}