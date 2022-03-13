import Image from "./Image.js";
import Video from "./Video.js";
import { closeModal } from "../utils/contactForm.js";

export default class MediaFactory {

    build(item) {
        if (item.image) {
            return new Image(item);
        } else {
            return new Video(item);
        }
    };
}