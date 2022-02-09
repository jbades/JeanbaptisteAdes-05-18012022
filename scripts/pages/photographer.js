//Mettre le code JavaScript lié à la page photographer.html
{fetch('../../data/photographers.json')
    .then(res => res.json())
    .then(function(value) {
        let photographerList = new List();
        photographerList.filter(value.photographers);
        photographerList.focus();
    })
    .catch(function(err) {
    })
}