export default class Slider {

    slides = [];
    currentIndex = 0;

    constructor(slides, index) {
        this.slides = slides;
        this.currentIndex = index;
        this.load();
    }

    listenForClose() {
        document.querySelector('.lightbox-modal__close').addEventListener('click', () => {
            document.querySelector("#lightbox-modal").style.display = "none";
        });
    }

    listenForNext() {
        document.querySelector('.lightbox-modal__right-arrow').addEventListener('click', () => {
            this.next();
        });
    }

    listenForPrevious() {
        document.querySelector('.lightbox-modal__left-arrow').addEventListener('click', () => {
            this.previous();
        });
    }

    load() {
        this.show();
        this.listenForPrevious();
        this.listenForNext();
        this.listenForClose();
    }

    next() {
        if (this.currentIndex === this.slides.length -1){
            this.currentIndex = 0;
        } else {
            this.currentIndex++;
        }
        this.load();
    }

    previous() {
        if (this.currentIndex === 0){
            this.currentIndex = this.slides.length - 1;
        } else {
            this.currentIndex--;
        }
        this.load();
    }

    show() {
        let media = this.slides[this.currentIndex];
        document.querySelector(`#lightbox-modal`).innerHTML = media.renderMediaLightbox();
        document.querySelector('.fa-times').classList.add('lightbox-modal__close');
        document.querySelector(`#lightbox-modal`).style.display = "flex";
    }
}