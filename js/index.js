const btnFilter = document.querySelectorAll(".sort-text ul li");
const dataItem = document.querySelectorAll(".product-item-all");
const btnSeeAll = document.getElementById("btnSeeAll");

let activeCategory = "Semua Produk";
let showAll = false;
const LIMIT = 8;

function renderItems() {
    let visibleCount = 0;

    dataItem.forEach(item => {
        const category = item.getAttribute("data-category");

        const matchCategory =
            activeCategory === "Semua Produk" ||
            category === activeCategory;

        if (matchCategory) {
            if (showAll || visibleCount < LIMIT) {
                item.style.display = "block";
                item.className =
                    "product-item-all col-12 col-sm-6 col-md-3 d-flex justify-content-center";
                visibleCount++;
            } else {
                item.style.display = "none";
                item.className = ""
            }
        } else {
            item.style.display = "none";
            item.className = ""
        }
    });

    // Tampilkan / sembunyikan tombol See All
    btnSeeAll.style.display =
        (!showAll && visibleCount >= LIMIT) ? "inline-block" : "none";
}

// FILTER
btnFilter.forEach(btn => {
    btn.onclick = () => {
        btnFilter.forEach(b =>
            b.className = "list-group-item item-nonaktif"
        );

        btn.className = "list-group-item item-active";

        activeCategory = btn.textContent.trim();
        showAll = false; // reset ke 8 item
        renderItems();
    };
});

// SEE ALL
btnSeeAll.onclick = () => {
    showAll = true;
    renderItems();
};

dataItem.forEach((data) => {
    data.onclick = () => {
        const card = data.querySelector("div")
        const cardContent = card.querySelector(".item-content")
        const cardtitle = cardContent.querySelector(".item-title")
        const cardtitle2 = cardContent.querySelector(".item-title-2")
        const cardline = cardContent.querySelector(".separate-line")
        const cardline2 = cardContent.querySelector(".separate-line-2")
        const cardharga = cardContent.querySelector(".text-harga")
        const cardharga2 = cardContent.querySelector(".text-harga-2")
        const cardDesc = cardContent.querySelector(".desc-sort")
        const cardDesc2 = cardContent.querySelector(".desc-sort-2")
        const boxHarga = cardContent.querySelector(".box-harga")
        const boxHargaNormal = cardContent.querySelectorAll(".text-harga-normal")
        const boxHargaNormal2 = cardContent.querySelectorAll(".text-harga-normal-2")
        const boxHargaUp = cardContent.querySelector(".text-harga-up")
        const boxHargaUp2 = cardContent.querySelector(".text-harga-up-2")

        // const cardDescText = cardDesc.innerHTML
        // const cardDescText2 = cardDesc2.innerHTML
        if(card.classList.contains("item-box-2")){
            card.className = "item-box position-relative text-center pt-5"
            cardDesc2.className = "desc-sort mt-3 px-3"
            cardtitle2.className = "item-title fw-bold mb-2"
            cardline2.className = "separate-line mx-auto mb-2"
            cardharga2.className = "text-harga mb-1"
            boxHargaNormal2.forEach((harga) => {
                harga.className = "text-harga-normal"
            })
            boxHargaUp2.className = "text-harga-up"
            cardDesc2.innerHTML = "Ganti Teks Penjelasan"
        }else{
            card.className = "item-box-2 position-relative text-center pt-5"
            cardDesc.className = "desc-sort-2 mt-3 px-3"
            cardtitle.className = "item-title-2 fw-bold mb-2"
            cardline.className = "separate-line-2 mx-auto mb-2"
            cardharga.className = "text-harga-2 mb-1"
            boxHargaNormal.forEach((harga) => {
                harga.className = "text-harga-normal-2"
            })
            boxHargaUp.className = "text-harga-up-2"
            cardDesc.innerHTML = "adonan kulit pastri dengan isian pisang, coklat, keju"
        }
    }
})

// INITIAL LOAD
renderItems();
