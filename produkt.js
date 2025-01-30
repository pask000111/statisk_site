let productId = 1165;
let = productContainer = document.querySelector(".product_container");

fetch(`https://kea-alt-del.dk/t7/api/products/${productId}`)
  .then((respone) => response.json())
  .then((data) => {
    productContainer.innerHTML = `
        <div class="product">
          <img class="nikebluse" src="https://kea-alt-del.dk/t7/images/webp/640/1163.webp" alt="nikebluse" />
          <h2>Sahara Team India Fanwear Round Neck Jersey</h2>
          <h3>Product name: ${data.productdisplayname}</h3>
          <p>Sahara Team India Fanwear Round Neck Jersey</p>
          <h3>Color:</h3>
          <p>Blue</p>
          <h3>Inventory number:</h3>
          <p>1163</p>

          <div class="form">
            <form>
              <label>
                Choose a size
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
          </div>
        </div>`;
  });
