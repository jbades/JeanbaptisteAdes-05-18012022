import {displayModal} from '../utils/contactForm.js'

export default class Photographer {
    constructor(input) {
        this.name = input.name;
        this.id = input.id;
        this.city = input.city;
        this.tagline = input.tagline;
        this.price = input.price;
        this.portrait = input.portrait;
        this.alt = input.alt;
    }

    display() {
        document.querySelector('.photographer-header').innerHTML = this.renderProfileCard();
    }

    renderHomeCard() {
        return `
            <div>
                <a href="photographer.html?id=${this.id}" class="artistcard__img-wrapper photographer-click">
                    <img src="assets/photographers/${this.portrait}"/>
                </a>
                <a href="photographer.html?id=${this.id}" class="artistcard__h2-wrapper photographer-click">
                    <h2>${this.name}</h2>
                </a>
                <h3>${this.city}</h3>
                <div>${this.tagline}</div>
                <div class="artistcard__price">${this.price}€/jour</div>
            </div>
        `;
    }

    renderProfileCard() {
        return `
            <div>
                <h2>${this.name}</h1>
                <h3>${this.city}</h3>
                <div class="photographer__tagline">${this.tagline}</div>
            </div>
            <button class="contact_button">Contactez-moi</button>
            <img class="photographer-header__img" src="assets/photographers/${this.portrait}"/>
        `;
    }

    listenButton() {
        document.querySelector('.contact_button').addEventListener('click', () => {
            displayModal();
        });
    }
}
