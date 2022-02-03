{fetch('../../data/photographers.json')
    .then(res => res.json())
    .then(function(value) {
        let photographerDOM = '';

        value.photographers.forEach((myPhotographer) => {
            let photographer = new Photographer(myPhotographer);
            console.log(photographer);
            photographerDOM += photographer.render();
        });

        document.querySelector('.photographer_section').innerHTML = photographerDOM ;
    })
    .catch(function(err) {
    })
}

class Photographer {
    constructor(input) {
        this.name = input.name;
        this.city = input.city;
        this.tagline = input.tagline;
        this.price = input.price;
        this.portrait = input.portrait;
    }

    render() {
        return `
            <article>
                <img src="assets/photographers/${this.portrait}"/>
                <h2>${this.name}</h2>
                <h3>${this.city}</h3>
                <div>${this.tagline}</div>
                <div>${this.price}€/jour</div>
            </article>
        `;
    }
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