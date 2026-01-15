const btnFilter = document.querySelectorAll(".sort-text ul li");
const dataItem = document.querySelectorAll(".product-item-all");
const bestItem = document.querySelectorAll(".best-item");
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
        const boxHarga = cardContent.querySelector('.harga-box')
        const boxDesc = cardContent.querySelector('.desc-box')

        if(card.classList.contains("item-box-2")){
            card.className = "item-box position-relative text-center pt-5"
            cardtitle2.className = "item-title fw-bold mb-2"
            cardline2.className = "separate-line mx-auto mb-2"
            boxDesc.style.display = "block"
            boxHarga.style.display = "none"

        }else{
            card.className = "item-box-2 position-relative text-center pt-5"
            cardtitle.className = "item-title-2 fw-bold mb-2"
            cardline.className = "separate-line-2 mx-auto mb-2"
            boxDesc.style.display = "none"
            boxHarga.style.display = "block"
        }
    }
})

bestItem.forEach((data) => {
    data.onclick = () => {
        const card = data.querySelector("div")
        const cardContent = card.querySelector(".item-content")
        const cardtitle = cardContent.querySelector(".item-title")
        const cardtitle2 = cardContent.querySelector(".item-title-2")
        const cardline = cardContent.querySelector(".separate-line")
        const cardline2 = cardContent.querySelector(".separate-line-2")
        const boxHarga = cardContent.querySelector('.harga-box')
        const boxDesc = cardContent.querySelector('.desc-box')

        if(card.classList.contains("item-box-2")){
            card.className = "item-box position-relative text-center pt-5"
            cardtitle2.className = "item-title fw-bold mb-2"
            cardline2.className = "separate-line mx-auto mb-2"
            boxDesc.style.display = "block"
            boxHarga.style.display = "none"

        }else{
            card.className = "item-box-2 position-relative text-center pt-5"
            cardtitle.className = "item-title-2 fw-bold mb-2"
            cardline.className = "separate-line-2 mx-auto mb-2"
            boxDesc.style.display = "none"
            boxHarga.style.display = "block"
        }
    }
})

// INITIAL LOAD
renderItems();
