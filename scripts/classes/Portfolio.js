import Photographer from './Photographer.js';
import MediaFactory from './MediaFactory.js';
import { sendData } from '../utils/contactForm.js';
import { closeModal } from '../utils/contactForm.js';
import Slider from './Slider.js';

export default class Portfolio {
    constructor(photographer) {
        this.all = [];
        this.totalLikes = 0;
        this.photographer = new Photographer(photographer);
        this.sortParam = "Likes";
        this.translations = {
            title: 'Titre',
            likes: 'Popularité',
            date: 'Date'
        }
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

    displayGallery() {
        let html = '';
        this.all.forEach((media) => {
            html += media.renderMediaCard();
        } );
        document.querySelector('.gallery').innerHTML = html;
    }
    
    displayPhotographer() {
        this.photographer.display();
        this.photographer.listenButton();
        this.listenSend();
        this.listenCloseModal();
    }

    displaySort() {
        document.querySelector('.sort-entry').innerHTML = this.translations["likes"];
        this.listenSort();
        this.listenForOptions();
    }
    
    displaySummary() {
        let summary = `
            <div>
                <span id="count">${this.totalLikes}</span>
                <i id="toggleLike" class="fas fa-heart"></i>
            </div>
            <span id="price">${this.photographer.price}€/jour</span>
        `;        
        document.querySelector('.summary').innerHTML = summary;
    }

    hideOptions() {
        document.querySelector('.sort-list').style.display = "none";
        document.querySelector('.sort-button').style.display = "grid";
    }

    hydrate (data) {
        let factory = new MediaFactory();
        data.forEach((media) => {
            this.all.push(factory.build(media));
        });
    }

    listenLike() {
        this.all.forEach((media) => {
            document.querySelector(`.media-container[data-id="${media.id}"] #toggleLike`).addEventListener("click", () => {
                media.toggle();
                this.count();
                document.querySelector('#count').innerHTML = this.totalLikes;
            });
        });
    }

    listenSlider() {
        this.all.forEach((media, index) => {
            document.querySelector(`.media-container[data-id="${media.id}"] .media-container__media`).addEventListener('click', () => {
                new Slider(this.all, index);
            });
        });
    }

    listenCloseModal() {
        document.querySelector('.modal header button').addEventListener('click', () => {
            closeModal();
        });
    }

    listenSend() {
        document.querySelector('.send_button').addEventListener('click', (e) => {
            e.preventDefault();
            sendData();
        });
    }
    
    listenSort() {
        document.querySelector('.sort-button__wrapper').addEventListener('click', () => {
            this.showOptions();
        });
    }

    listenForOptions() {
        document.querySelectorAll('.sort-select').forEach((entry) => {
            entry.addEventListener('click', () => {
                let order = entry.dataset.id;
                this.updateActiveOrder(order);
                this.hideOptions();
                this.sort(order);
                this.displayGallery();
                this.listenLike();
                this.listenSlider();
            });
        });
    }

    showOptions() {
        document.querySelector('.sort-button').style.display = "none";
        document.querySelector('.sort-list').style.display = "grid";
    }

    sort(order) {
        switch (order) {
            case 'date':
                this.all = this.all.sort((a,b) => new Date(a.date) - new Date(b.date));
                break;
            case 'title':
                this.all = this.all.sort((a,b) => a.title.localeCompare(b.title));
                break;
            default:
                this.all = this.all.sort((a,b) => b.likes - a.likes);
        }
    }

    start(data) {
        this.hydrate(data);
        this.count();
        this.display();
        this.listenLike();
        this.listenSort();
        this.listenSlider();
    }

    updateActiveOrder(order) {
        document.querySelector('.sort-button__wrapper .sort-entry').innerHTML = this.translations[order];
    }
}