class PhotographerList {
    constructor() {
        this.all = [];
    }

    display () {
        let photographerDOM = '';
        
        this.all.forEach((photographer) => {
            photographerDOM += photographer.render();
        });
        
        document.querySelector('.photographer_section').innerHTML = photographerDOM ;
    }
    
    hydrate (data) {
        data.forEach((myPhotographer) => {
            this.all.push(new Photographer(myPhotographer));
        });
    }

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
                <a href="#" class="artistcard__img-wrapper">
                    <img src="assets/photographers/${this.portrait}"/>
                </a>
                <a href="#" class="artistcard__h2-wrapper">
                    <h2>${this.name}</h2>
                </a>
                <h3>${this.city}</h3>
                <div>${this.tagline}</div>
                <div class="artistcard__price">${this.price}€/jour</div>
            </article>
        `;
    }
}
