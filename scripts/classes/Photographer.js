class Photographer {
    constructor(input) {
        this.name = input.name;
        this.city = input.city;
        this.tagline = input.tagline;
        this.price = input.price;
        this.portrait = input.portrait;
    }

    render() {
        return `
            <article>
                <img src="assets/photographers/${this.portrait}"/>
                <h2>${this.name}</h2>
                <h3>${this.city}</h3>
                <div>${this.tagline}</div>
                <div>${this.price}€/jour</div>
            </article>
        `;
    }
}