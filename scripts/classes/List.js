class List {
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
    
    // filter (data) {
    //     data.forEach((myPhotographer) => {
    //         if (myPhotographer.id === currentPhotographerID) {
    //             this.all.push(new Photographer(myPhotographer));
    //         }
    //     });
    // }

    // focus () {
    //     let html = '';
        
    //     this.all.forEach((photographer) => {
    //         html += photographer.renderProfileCard();
    //     });
        
    //     document.querySelector('#main').innerHTML = html ;
    // }
    
    hydrate (data) {
        data.forEach((myPhotographer) => {
            this.all.push(new Photographer(myPhotographer));
        });
    }

    hydrateMedia (data) {
        data.forEach((myMedia) => {
            this.all.push(new Media(myMedia));
        });
    }
}