const myCategory = new URLSearchParams(window.location.search).get("category");
const productContainer = document.querySelector(".product_list_container");

document.querySelector(".category_title").textContent = `${myCategory}`;

document.querySelectorAll("button").forEach((knap) => knap.addEventListener("click", showFiltered));

let allData;

fetch(`https://kea-alt-del.dk/t7/api/products?category=${myCategory}`)
  .then((response) => response.json())
  .then((json) => {
    allData = json;
    showList(allData);
  });

function showFiltered() {
  const filter = this.dataset.gender;
  if (filter == "All") {
    showList(allData);
  } else {
    fraction = allData.filter((product) => product.gender == filter);
    showList(fraction);
  }
}

fetch(`https://kea-alt-del.dk/t7/api/products?category=${myCategory}`)
  .then((response) => response.json())
  .then((data) => showList(data));

function showList(products) {
  console.log(products);
  const markup = products
    .map(
      (product) =>
        `<div class="card">
        <a href="produkt.html?id=${product.id}">
          <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="nikebluse" />
          <div class="soldout ${product.soldout && "yesSoldout"}"> <p> soldout</p></div>
        </a>

        <p class="article">${product.articletype} | ${product.brandname}</p>
        <h3>${product.productdisplayname}</h3>
        <p>DKK ${product.price},-</p>
        <div class="discount_liste ${product.discount && "yesDiscount"}"> <p>${product.discount}%</p></div>
        <a class="readmore" href="produkt.html?id=${product.id}">
          Read more
        </a>
      </div>`
    )

    .join("");
  console.log(markup);
  productContainer.innerHTML = markup;
}
