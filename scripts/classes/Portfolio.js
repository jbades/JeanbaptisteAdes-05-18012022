import Media from './Media.js'

export default class Portfolio {
    constructor() {
        this.all = [];
        // this.photographer = photographer;
    }

    display() {
        let html = '';
        
        this.all.forEach((media) => {
            if(media.video) {
                html += media.renderVideoCard();
            } else {
                html += media.renderImgCard();
            }
        });

        let section = document.createElement('section');
        section.classList.add('portfolio');
        let portfolio = document.querySelector('main').appendChild(section);
        portfolio.innerHTML = html;

    }

    hydrate (data) {
        data.forEach((media) => {
            this.all.push(new Media(media));
        });
    }
}