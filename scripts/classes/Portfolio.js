import Photographer from './Photographer.js';
import MediaFactory from './MediaFactory.js';

export default class Portfolio {
    constructor(photographer) {
        this.all = [];
        this.totalLikes = 0;
        this.photographer = new Photographer(photographer);
        this.sortParam = "Likes";
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

    displaySort() {
        document.querySelector('.sort-button__wrapper .sort-entry').innerHTML = "cacaboudin";
        console.log(this.all);
    };

    displayGallery() {
        let html = '';
        let gallery = '';
        gallery = document.querySelector('.gallery');
        console.log(this.all);
        let toto = this.sort(this.all);
        console.log(toto);
        toto.forEach((media) => {
            html += media.render();
        } );
        gallery.innerHTML = html;
    }
    
    displayPhotographer() {
        this.photographer.display();
        this.photographer.listenButton();
    }

    displaySummary() {
        // let div = document.createElement('div');
        // div.classList.add("fixed-summary");
        // let summary = document.querySelector('main').appendChild(div);
        let summary = `
            <div>
                <span id="count">${this.totalLikes}</span>
                <i id="toggleLike" class="icon-heart"></i>
            </div>
            <span id="price">${this.photographer.price}€/jour</span>
        `;        
        document.querySelector('.summary').innerHTML = summary;
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
    
    sort(data) {
        let sortedList = data.sort((a,b) => b.likes - a.likes);
        return sortedList;
    }

    start(data) {
        this.hydrate(data);
        this.count();
        this.display();
        this.listen();
    }
}