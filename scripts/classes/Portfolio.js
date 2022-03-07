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
        this.displaySort();
        this.displayGallery();
        this.displaySummary();
    }

    displaySort() {
        this.listenSort();
        this.selectOrder();
    }
    
    displayGallery(order) {
        let html = '';
        let gallery = '';
        gallery = document.querySelector('.gallery');
        let list = this.sort(this.all, order);
        list.forEach((media) => {
            html += media.render();
        } );
        gallery.innerHTML = html;
    }
    
    displayPhotographer() {
        this.photographer.display();
        this.photographer.listenButton();
    }

    displaySummary() {
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
    
    listenSort() {
        document.querySelector('.sort-button__wrapper').addEventListener('click', () => {
            document.querySelector('.sort-button').style.display = "none";
            document.querySelector('.sort-list').style.display = "flex";
        });
    };

    selectOrder() {
        document.querySelectorAll('.sort-select').forEach((entry) => {
            entry.addEventListener('click', () => {
                document.querySelector('.sort-list').style.display = "none";
                let html = document.querySelector('.sort-button__wrapper .sort-entry');
                html.innerHTML = entry.dataset.id;
                document.querySelector('.sort-button').style.display = "flex";
                this.displayGallery(entry.dataset.id);
            });
        });
    }

    sort(data, input) {
        let sortedList;
        switch (input) {
            case 'date':
                sortedList = data.slice().sort((a,b) => new Date(a.date) - new Date(b.date));
                break;
            case 'title':
                sortedList = data.slice().sort((a,b) => a.title.localeCompare(b.title));
                console.log(sortedList);
                break;
            default:
                sortedList = data.slice().sort((a,b) => b.likes - a.likes);
        }
        return sortedList;
    }

    start(data) {
        this.hydrate(data);
        this.count();
        this.display();
        this.listen();
    }
}