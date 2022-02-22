export default class Media {
    constructor(input) {
        this.title = input.title;
        this.id = input.id;
        this.parentId = input.photographerId;
        this.likes = input.likes;
        this.price = input.price;
        this.img = input.image;
        this.video = input.video;
    }

    renderImgCard() {
        return `
            <div class="media-container">
                <a href="#" class="media-container__img-wrapper">
                    <img src="assets/images/${this.img}" class="media-container__img"/>
                </a>
                <div class="media-container__txt-wrapper">
                    <h3>${this.title}</h3>
                    <div class="media-container__likes-wrapper">
                        <div>${this.likes}</div>
                        <div>coeur</div>
                    </div>
                </div>
            </div>
        `;
    }

    renderVideoCard() {
        return `
            <div class="media-container">
                <a href="#" class="media-container__video-wrapper">
                    <video class="media-container__video" width="100%" height="225px" autoplay loop>
                        <source src="assets/images/${this.video}">
                    </video>
                </a>
                <div class="media-container__txt-wrapper">
                    <h3>${this.title}</h3>
                    <div class="media-container__likes-wrapper">
                        <div>${this.likes}</div>
                        <div>coeur</div>
                    </div>
                </div>
            </div>
        `;
    }
}