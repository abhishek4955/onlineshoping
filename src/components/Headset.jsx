import React from "react";

function Book() {
  return (
    <div class="product_body">
      <div class="product_description">
        <p>
        Redgear Cosmo 7.1 Wired Over Ear Headphones With Mic (Black)
        </p>
      </div>
      <div class="product_price">
        <p>
          &#8377; <span>1399</span>
        </p>
      </div>
      <ul class="rating d-flex">
        <li>
          <i class="fas fa-star"></i>
        </li>
        <li>
          <i class="fas fa-star"></i>
        </li>
        <li>
          <i class="fas fa-star"></i>
        </li>
        <li>
          <i class="fas fa-star"></i>
        </li>
        <li>
          <i class="far fa-star"></i>
        </li>
      </ul>
      <div class="product_img d-flex">
        <img src="https://m.media-amazon.com/images/I/71PhCZEGH7L._SX522_.jpg" alt="" />
      </div>
      <div class="button-cart d-flex">
        <a href="https://amzn.eu/d/5Ul1njO">
          <button>Go to Shop</button>
        </a>
      </div>
    </div>
  );
}

export default Book;
