//Mettre le code JavaScript lié à la page photographer.html
const photographerID = getID();

fetch('../../data/photographers.json')
.then(res => res.json())
.then((data) => {    
    let chosenPhotographer = data.photographers.find(photographer => photographer.id == photographerID);
    console.log(chosenPhotographer);
    let photographer = new Photographer(chosenPhotographer);
    console.log(photographer);
    // photographer.hydrate(data.photographers);
    // photographer.focus();
})

function getID () {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    return params.id;
}