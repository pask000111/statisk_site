const listContainer = document.querySelector(".product_list_container");

fetch(`https://kea-alt-del.dk/t7/api/products/`)
  .then((repsonse) => repsonse.json())
  .then((data) => showList(data));

function showList(products) {
  console.log(products);
  let markup = "";
  products
    .map((product) => {
      markup += `<div class="card">
        <a href="produkt.html">
          <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="nikebluse" />
        </a>
        <p class="article">${product.articletype} | ${product.brandname}</p>
        <h3>${product.productdisplayname}</h3>
        <p>DKK ${product.price}-</p>
        <a class="readmore" href="produkt.html">
          Read more
        </a>
      </div>`;
    })
    .join("");
  console.log(markup);
  listContainer.innerHTML = markup;
}
