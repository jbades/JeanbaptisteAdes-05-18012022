import Media from "./Media.js";

export default class Image extends Media {
    constructor(input) {
        super(input);
    }

    renderMediaCard() {
        return `
            <div class="media-container" data-id=${this.id}>
                <div class="media-container__img-wrapper">
                    <img src="assets/images/${this.img}" class="media-container__media media-container__img"/>
                </div>
            ${this.txtWrapper}
        `;
    }

    renderMediaLightbox() {
        return `
            <div class="lightbox-modal__arrow"  data-id=${this.id}>
                <i class="fas fa-angle-left"></i>
            </div>
            <div class="lightbox-modal__media-wrapper">
                <img scr="assets/images/${this.img}" class="lightbox-modal__img" />
                <span class="lightbox-modal__title">${this.title}</span>
            </div>
            <div class="lightbox-modal__arrow">
                <i class="fas fa-angle-right"></i>
            </div>
            <i class="lightbox-modal__close fas fa-times"></i>
        `;
    }
}