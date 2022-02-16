// class List {
//     constructor() {
//         this.all = [];
//     }

//     display () {
//         let photographerDOM = '';
        
//         this.all.forEach((photographer) => {
//             photographerDOM += photographer.homeCardRender();
//         });
        
//         document.querySelector('.photographer_section').innerHTML = photographerDOM ;
//     }
    
//     filter (data) {
//         data.forEach((myPhotographer) => {
//             if (myPhotographer.id === currentPhotographerID) {
//                 this.all.push(new Photographer(myPhotographer));
//             }
//         });
//     }

//     focus () {
//         let photographerDOM = '';
        
//         this.all.forEach((photographer) => {
//             photographerDOM += photographer.profileCardRender();
//         });
        
//         document.querySelector('#main').innerHTML = photographerDOM ;
//     }
    
//     hydratePhotographer (data) {
//         data.forEach((myPhotographer) => {
//             this.all.push(new Photographer(myPhotographer));
//         });
//     }

//     hydrateMedia (data) {
//         data.forEach((myMedia) => {
//             this.all.push(new Media(myMedia));
//         });
//     }
// }

class Media {
    constructor() {
        this.all = [];
    }

    mediaListRender () {
        return `
            <div class="medialist">
                <img src="assets/images/
            </div>
        `;
    }
}
    

// class Photographer {
//     constructor(input) {
//         this.name = input.name;
//         this.photographerID = input.id;
//         this.city = input.city;
//         this.tagline = input.tagline;
//         this.price = input.price;
//         this.portrait = input.portrait;
//         this.alt = input.alt;
//     }

//     homeCardRender() {
//         return `
//             <article>
//                 <a href="photographer.html" class="artistcard__img-wrapper photographer-click" data-id="${this.photographerID}">
//                     <img src="assets/photographers/${this.portrait}"/>
//                 </a>
//                 <a href="photographer.html" class="artistcard__h2-wrapper photographer-click" data-id="${this.photographerID}">
//                     <h2>${this.name}</h2>
//                 </a>
//                 <h3>${this.city}</h3>
//                 <div>${this.tagline}</div>
//                 <div class="artistcard__price">${this.price}€/jour</div>
//             </article>
//         `;
//     }

//     profileCardRender() {
//         return `
//             <article class="photographer-header">
//                 <div>
//                     <h2>${this.name}</h1>
//                     <h3>${this.city}</h3>
//                     <div>${this.tagline}</div>
//                 </div>
//                 <button class="contact_button">Contactez-moi</button>
//                 <img src="assets/photographers/${this.portrait}"/>
//             </article>
//         `;
//     }
// }
