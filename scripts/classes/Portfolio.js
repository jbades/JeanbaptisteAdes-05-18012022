import Photographer from './Photographer.js';
import MediaFactory from './MediaFactory.js';

export default class Portfolio {
    constructor() {
        this.all = [];
        this.totalLikes;
        this.price;
    }

    countTotalLikes() {
        this.totalLikes = 0;
        this.all.forEach((media) => {
            this.totalLikes += media.likes;
        });
        return this.totalLikes;
    }

    displayPhotographer(data, photographerID) {
        let chosenPhotographer = data.photographers.find(photographer => photographer.id == photographerID);
        let photographer = new Photographer(chosenPhotographer);
        photographer.display();
        this.price = photographer.price;
        photographer.listenButton();
    }

    displayPortfolio() {

        // let html = '';
        
        // this.all.forEach((media) => {
        //     if(media.video) {
        //         html += media.renderVideoCard();
        //     } else {
        //         html += media.renderImgCard();
        //     }
        // });

        let section = document.createElement('section');
        section.classList.add('portfolio');
        let portfolio = document.querySelector('main').appendChild(section);
        portfolio.innerHTML = factory.test();
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
            <span id="price">${this.price}€/jour</span>
        `;        
    }

    hydrate (data) {
        data.forEach((media) => {
            let factory = new MediaFactory(media);
            this.all.push(factory.test());
            console.log(this.all);
        });
    }

    listenEvent() {
        let list = '';
        this.all.forEach((media) => {
            document.querySelector(`.media-container[data-id="${media.id}"] #toggleLike`).addEventListener("click", () => {
                if(media.hasBeenLiked) {
                    media.dislike();
                } else {
                    media.like();
                }
            this.countTotalLikes();
            document.querySelector('#count').innerHTML = this.totalLikes;
            });
        });
    }
}