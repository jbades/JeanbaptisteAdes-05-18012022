import Media from "./Media.js";

export default class Image extends Media {
    constructor(input) {
        super(input);
    }

    renderMediaCard() {
        return `
            <div class="media-container" data-id=${this.id}>
                <button class="media-container__media media-container__img-wrapper" aria-label="${this.img} - Image grand format">
                    <img src="./assets/images/${this.img}" class="media-container__img" alt="Image ${this.img}"/>
                </button>
                <div class="media-container__txt-wrapper">
                    <h3>${this.title}</h3>
                    <div class="media-container__likes-wrapper">
                        <div id="heartCount">${this.likes}</div>
                        <button id="toggleLike" class="${this.likeIcon} fa-heart" alt="icon likes" arial-label="likes"></button>
                    </div>
                </div>
            </div>        
        `;
    }

    renderMediaLightbox() {
        return `
            <div class="lightbox-modal__arrow lightbox-modal__left-arrow"  data-id=${this.id}>
                <button class="fas fa-angle-left"></button>
            </div>
            <div class="lightbox-modal__media-wrapper">
                <img src="./assets/images/${this.img}" alt="${this.img}" class="lightbox-modal__img" aria-label="${this.img}"/>
                <span class="lightbox-modal__title">${this.title}</span>
            </div>
            <div class="lightbox-modal__arrow lightbox-modal__right-arrow">
                <button class="fas fa-angle-right"></button>
            </div>
            <button class="lightbox-modal__close fas fa-times"></button>
            `;
    }
 }