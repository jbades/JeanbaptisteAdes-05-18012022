import Media from "./Media.js";

export default class Video extends Media {
    constructor(input) {
        super(input);
    }

    renderMediaCard() {
        return `
            <div class="media-container" data-id=${this.id}>
                <div class="media-container__video-wrapper">
                    <video class="media-container__media media-container__video" width="100%" height="225px" autoplay loop>
                        <source src="assets/images/${this.video}">
                    </video>
                </div>
            ${this.txtWrapper}
        `;
    }

    renderMediaLightbox() {
        return `
            <div class="lightbox-modal__arrow lightbox-modal__left-arrow" data-id=${this.id}>
                <i class="fas fa-angle-left"></i>
            </div>
            <div class="lightbox-modal__media-wrapper">
                <video class="lightbox-modal__video" width="100%" height="500px" autoplay loop>
                    <source scr="assets/images/${this.video}" type="video/mp4"> 
                </video>
                <span class="lightbox-modal__title">${this.title}</span>
            </div>
            <div  class="lightbox-modal__arrow lightbox-modal__right-arrow">
                <i class="fas fa-angle-right"></i>
            </div>
            <i class="lightbox-modal__close fas fa-times"></i>
            `;
    }
}