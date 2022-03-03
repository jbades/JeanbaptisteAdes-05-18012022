import Photographer from './Photographer.js';
import MediaFactory from './MediaFactory.js';

export default class Portfolio {
    constructor(photographer) {
        this.all = [];
        this.totalLikes = 0;
        this.photographer = new Photographer(photographer);
    }

    count() {
        this.totalLikes = 0;
        this.all.forEach((media) => {
            this.totalLikes += media.likes;
        });
        return this.totalLikes;
    }

    display() {
        this.displayPhotographer();
        this.displayGallery();
        this.displaySummary();
    }

    displayPhotographer() {
        this.photographer.display();
        this.photographer.listenButton();
    }

    displayGallery() {
        let html = '';
        let section = document.createElement('section');
        section.classList.add('portfolio');
        let portfolio = document.querySelector('main').appendChild(section);
        this.all.forEach((media) => {
            html += media.render();
        } );
        portfolio.innerHTML = html;
}
    
    displaySummary() {
        let div = document.createElement('div');
        div.classList.add("fixed-summary");
        let summary = document.querySelector('main').appendChild(div);
        summary.innerHTML = `
            <div>
                <span id="count">${this.totalLikes}</span>
                <i id="toggleLike" class="icon-heart"></i>
            </div>
            <span id="price">${this.photographer.price}€/jour</span>
        `;        
    }

    hydrate (data) {
        let factory = new MediaFactory();
        data.forEach((media) => {
            this.all.push(factory.build(media));
        });
    }

    listen() {
        let list = '';
        this.all.forEach((media) => {
            document.querySelector(`.media-container[data-id="${media.id}"] #toggleLike`).addEventListener("click", () => {
                media.toogle();
                this.count();
                document.querySelector('#count').innerHTML = this.totalLikes;
            });
        });
    }

    start(data) {
        this.hydrate(data); 
        this.count();
        this.display();
        this.listen();
    }
}