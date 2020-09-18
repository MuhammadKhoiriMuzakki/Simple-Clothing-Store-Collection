class NotifikasiBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="alert alert-primary animated fadeInRight" role="alert">
                <marquee behavior="" direction="left" class="berita">Koleksi Baju dengan desain terbaik dan harga termurah di indonesia</marquee>
            </div>
        `;
    }
}

customElements.define("notifikasi-bar", NotifikasiBar);