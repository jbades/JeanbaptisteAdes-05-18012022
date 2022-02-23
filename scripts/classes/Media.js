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
        this.heartIcon = `class="icon-heart-empty"`;
        this.txtWrapper = 
            `
                    <div class="media-container__txt-wrapper">
                        <h3>${this.title}</h3>
                        <div class="media-container__likes-wrapper">
                            <div id="heartCount">${this.likes}</div>
                            <i id="toggleLike" ${this.heartIcon}></i>
                        </div>
                    </div>
                </div>
            `;
    }

    dislike() {
        this.likes--;
        this.hasBeenLiked = false;
        this.resetCount();
        this.heartIcon = `class="icon-heart-empty"`;
        console.log(this.heartIcon);
    }

    like() {
        this.likes++;
        this.hasBeenLiked = true;
        this.resetCount();
        this.heartIcon = `class="icon-heart"`;
        console.log(this.heartIcon);
    }

    listen() {
        document.querySelector(`.media-container[data-id="${this.id}"] #toggleLike`).addEventListener("click", () => {
            if(this.hasBeenLiked) {
                this.dislike();
            } else {
                this.like();
            }
        });
    }

    renderImgCard() {
        return `
            <div class="media-container" data-id=${this.id}>
                <a href="#" class="media-container__img-wrapper">
                    <img src="assets/images/${this.img}" class="media-container__img"/>
                </a>
            ${this.txtWrapper}
        `;
    }

    renderVideoCard() {
        return `
            <div class="media-container" data-id=${this.id}>
                <a href="#" class="media-container__video-wrapper">
                    <video class="media-container__video" width="100%" height="225px" autoplay loop>
                        <source src="assets/images/${this.video}">
                    </video>
                </a>
            ${this.txtWrapper}
        `;
    }

    resetCount() {
        document.querySelector(`.media-container[data-id="${this.id}"] #heartCount`).innerText = this.likes;
    }
}