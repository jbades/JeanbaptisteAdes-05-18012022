export default class Media {
    constructor(input) {
        this.title = input.title;
        this.id = input.id;
        this.parentId = input.photographerId;
        this.likes = input.likes;
        this.price = input.price;
        this.img = input.image;
        this.video = input.video;
        this.hasBeenLiked = false;
        this.date = input.date;
        this.txtWrapper = `<div class="media-container__txt-wrapper">
                                <h3>${this.title}</h3>
                                <div class="media-container__likes-wrapper">
                                    <div id="heartCount">${this.likes}</div>
                                    <i id="toggleLike" class="far fa-heart"></i>
                                </div>
                            </div>
                        </div>
                    `;
    }

    dislike() {
        this.likes--;
        this.hasBeenLiked = false;
        this.resetCount();
        document.querySelector(`.media-container[data-id="${this.id}"] #toggleLike`).classList.replace('fas', 'far');
    }
    
    like() {
        this.likes++;
        this.hasBeenLiked = true;
        this.resetCount();
        document.querySelector(`.media-container[data-id="${this.id}"] #toggleLike`).classList.replace('far', 'fas');
    }
    
    resetCount() {
        document.querySelector(`.media-container[data-id="${this.id}"] #heartCount`).innerText = this.likes;
    }

    toogle() {
        if(this.hasBeenLiked) {
            this.dislike();
        } else {
            this.like();
        }
    }
}