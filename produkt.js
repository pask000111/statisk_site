let productId = new URLSearchParams(window.location.search).get("id");
let productContainer = document.querySelector(".product_container");

fetch(`https://kea-alt-del.dk/t7/api/products/${productId}`)
  .then((response) => response.json())
  .then((data) => showProduct(data));

function showProduct(data) {
  productContainer.innerHTML = `
        <div class="product_image">
          <img class="nikebluse" src="https://kea-alt-del.dk/t7/images/webp/640/${productId}.webp" alt="nikebluse" />
        </div>
        <div class="product_info">
          <h2>${data.productdisplayname}</h2>
          <h3>Product name:</h3>
          <p>${data.productdisplayname}</p>
          <h3>Articletype:</h3>
          <p>${data.articletype}</p>
          <h3>Inventory number:</h3>
          <p>${data.id}</p>
            <h3>Stock status</h3>
            <p ${data.soldout && "yesSoldout"}>${data.soldout ? "Out of stock" : ""} ${!data.soldout ? "In stock" : ""}</p>
         
        </div>

        <div class="product_form">
          <form>
            <h2>${data.productdisplayname}</h2>
            <label>
             <h3>Price<h3>
          <div class="grid_price"> <p>${data.price},-</p>
          <div class="discount ${data.discount && "yesDiscount"}"> <p>${data.discount}%</p></div></div>

              <h3>Choose a size</h3>
              <select name="size">
                <option>XS</option>
                <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
              </select>
            </label>
           <button>Add to basket</button>
          </form>
        </div>`;
}
