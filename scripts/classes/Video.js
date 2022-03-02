import Media from "./Media.js";

export default class Video extends Media {
    constructor(input) {
        super(input);
    }

    render() {
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
}