import Image from "./Image.js";
import Video from "./Video.js";

export default class MediaFactory {
    constructor(item) {
        this.item = item; 
    }

    test() {
        if (this.item.image) {
            return new Image();
        } else {
            return new Video();
        }
    };
}