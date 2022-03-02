import Media from "./Media.js";

export default class Image extends Media {
    constructor(input) {
        super(input);
    }

    render() {
        return `
            <div class="media-container" data-id=${this.id}>
                <a href="#" class="media-container__img-wrapper">
                    <img src="assets/images/${this.img}" class="media-container__img"/>
                </a>
            ${this.txtWrapper}
        `;
    }
}