import Media from "./Media.js";

export default class Video extends Media {
    constructor(input) {
        super(input);
    }

    renderMediaCard() {
        return `
            <div class="media-container" data-id=${this.id}>
                <button class="media-container__media media-container__video-wrapper" aria-label="${this.video} - Vidéo grand format">
                    <video class="media-container__video" alt="Vidéo ${this.video}" width="100%" height="225px" autoplay loop>
                        <source src="assets/images/${this.video}">
                    </video>
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
            <div class="lightbox-modal__arrow lightbox-modal__left-arrow" data-id=${this.id}>
                <button class="fas fa-angle-left" arial-label="Média précédent"></button>
            </div>
            <div class="lightbox-modal__media-wrapper">
                <video class="lightbox-modal__video" alt="${this.video}" aria-label="${this.video}" width="100%" height="500px" autoplay loop>
                    <source src="assets/images/${this.video}" type="video/mp4"> 
                </video>
                <span class="lightbox-modal__title">${this.title}</span>
            </div>
            <div  class="lightbox-modal__arrow lightbox-modal__right-arrow">
                <button class="fas fa-angle-right" arial-label="Média suivant"></button>
            </div>
            <button class="lightbox-modal__close fas fa-times" arial-label="Fermer la popup"></button>
            `;
    }
}