fetch('../../data/photographers.json')
    .then(function(res) {
        if (res.ok) {
        return res.json();
        }
    })
    .then(function(value) {
        const myPhotographers = value.photographers;
        // console.log([myPhotographers]);
        const mySection = document.querySelector('.photographer_section'); 
        myPhotographers.forEach((myPhotographer) => {
            console.log(myPhotographer);
            render(myPhotographer);
        });
        
        function render(input) {
            const picture = `assets/photographers/` + input.portrait;
            console.log({picture});            
            const img = document.createElement( 'img' );
            img.setAttribute("src", picture)
            const article = document.createElement( 'article' );
            article.appendChild(img);
            const h2 = document.createElement( 'h2' );
            h2.textContent = input.name;
            article.appendChild(h2);
            const h3 = document.createElement('h3');
            h3.textContent = input.city;
            article.appendChild(h3);
            const tagDiv = document.createElement('div');
            tagDiv.textContent = input.tagline;
            article.appendChild(tagDiv);
            const priceDiv = document.createElement('div');
            priceDiv.textContent = input.price + "€/jour";
            article.appendChild(priceDiv);
            mySection.appendChild(article);
        }
    })
    .catch(function(err) {
    });
    

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