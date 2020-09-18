class NavigasiBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <nav class="navbar navbar-light animated fadeInDown" style="background-color : #393b44 ;color:white">
        <div class="container">
        <a class="navbar-brand animated pulse infinite">Clothing Store Collection</a>
        <form class="form-inline">
            <input type="text" class="form-control mr-sm-2" name="searchBar" id="searchBar"
                placeholder="Cari baju disini ...">

        </form>
        </div>
    </nav>
        `;
    }
}

customElements.define("navigasi-bar", NavigasiBar);