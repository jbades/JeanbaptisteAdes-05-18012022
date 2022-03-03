import Photographer from "./Photographer.js";

export default class PhotographersList {
    constructor() {
        this.all = [];
    }

    display () {
        let html = '';
        
        this.all.forEach((photographer) => {
            html += photographer.renderHomeCard();
        });
        
        document.querySelector('main').innerHTML = html ;
    }
    
    hydrate (data) {
        data.forEach((myPhotographer) => {
            this.all.push(new Photographer(myPhotographer));
        });
    }

    start(data) {
        this.hydrate(data);
        this.display();
    }
}