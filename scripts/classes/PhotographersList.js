class PhotographersList {
    constructor() {
        this.all = [];
    }

    display () {
        let html = '';
        
        this.all.forEach((photographer) => {
            html += photographer.renderHomeCard();
        });
        
        document.querySelector('.photographer_section').innerHTML = html ;
    }
    
    hydrate (data) {
        data.forEach((myPhotographer) => {
            this.all.push(new Photographer(myPhotographer));
        });
    }
}