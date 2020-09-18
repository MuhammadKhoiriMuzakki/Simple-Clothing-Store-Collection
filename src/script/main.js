const main = () => {
    const bajuList = document.getElementById("list-baju");
    let hpbaju = [];
    console.log(searchBar);

    // Pencarian
    searchBar.addEventListener('keyup', (e) => {
        const searchString = e.target.value.toLowerCase();

        const filteredbaju = hpbaju.filter((baju) => {
            return (
                baju.name.toLowerCase().includes(searchString)
            );
        });
        displaybaju(filteredbaju);
    });

    const loadbaju = async () => {
        try {
            const res = await fetch('https://my-json-server.typicode.com/MuhammadKhoiriMuzakki/my-json-server-fake-online-rest/baju');
            hpbaju = await res.json();
            displaybaju(hpbaju);
            console.log(hpbaju);
        } catch (err) {
            console.error(err);
        }
    };

    const displaybaju = (baju) => {
        const htmlString = baju
            .map((baju) => {
                return `
            <div class="col-xl-3 col-md-6 mb-4 ">
            <div class="card border-0 shadow">
                <img src="../src/${baju.image}" class="card-img-top" alt="..." width="700" height="250">
                <div class="card-body text-center">
                <h5 class="card-title mb-0"><a>${baju.name}</a></h5>
                </div>
            </div>
            </div>`;
            })
            .join('');
        bajuList.innerHTML = htmlString;
    };

    loadbaju();
};
export default main;