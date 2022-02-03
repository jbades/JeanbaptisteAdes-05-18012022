{fetch('../../data/photographers.json')
    .then(function(res) {
        if (res.ok) {
        return res.json();
        }
    })
    .then(function(value) {
        const myPhotographers = value.photographers;
        myPhotographers.forEach((myPhotographer) => {
            const photographerDOM = render(myPhotographer);
            document.querySelector('.photographer_section').appendChild(photographerDOM);
        });
    })
    .catch(function(err) {
    });
}
    
function render(photographer) {
    const article = document.createElement( 'article' );
    const articleContent = `
        <img src="assets/photographers/${photographer.portrait}"/>
        <h2>${photographer.name}</h2>
        <h3>${photographer.city}</h3>
        <div>${photographer.tagline}</div>
        <div>${photographer.price}€/jour</div>
    `; 
    article.innerHTML = articleContent;
    return article;
}

async function getPhotographers() {
    // Penser à remplacer par les données récupérées dans le json
    
    const photographers = [
        {
            "name": "Ma data test",
            "id": 1,
            "city": "Paris",
            "country": "France",
            "tagline": "Ceci est ma data test",
            "price": 400,
            "portrait": "account.png"
        },
        {
            "name": "Autre data test",
            "id": 2,
            "city": "Londres",
            "country": "UK",
            "tagline": "Ceci est ma data test 2",
            "price": 500,
            "portrait": "account.png"
        },
    ]

    // et bien retourner le tableau photographers seulement une fois

//     return ({
//         photographers: [...myPhotographers]})
}

async function displayData(photographers) {
    const photographersSection = document.querySelector(".photographer_section");
    
    photographers.forEach((photographer) => {
        const photographerModel = photographerFactory(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();
        photographersSection.appendChild(userCardDOM);
    });
};

async function init() {
    // Récupère les datas des photographes
    const { photographers } = await getPhotographers();
    displayData(photographers);
};

//    init();