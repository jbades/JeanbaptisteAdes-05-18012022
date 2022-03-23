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
        this.likeIcon = "far";
        this.date = input.date;
    }

    dislike() {
        this.likes--;
        this.hasBeenLiked = false;
        this.likeIcon = "far";
        this.resetCount();
        document.querySelector(`.media-container[data-id="${this.id}"] .toggleLike i`).classList.replace('fas', 'far');
    }
    
    like() {
        this.likes++;
        this.hasBeenLiked = true;
        this.likeIcon = "fas";
        this.resetCount();
        document.querySelector(`.media-container[data-id="${this.id}"] .toggleLike i`).classList.replace('far', 'fas');
    }
    
    resetCount() {
        document.querySelector(`.media-container[data-id="${this.id}"] .heartCount`).innerText = this.likes;
    }

    toggle() {
        if(this.hasBeenLiked) {
            this.dislike();
        } else {
            this.like();
        }
    }
}