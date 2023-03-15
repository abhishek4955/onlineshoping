import React from "react";

function Navbar() {
  return (
    <nav class="d-flex none">
      <div class="nav_brand">
        <a href="#">
          <img src="./assets/gamegub_logo.png" alt="" />
        </a>
      </div>
      <div class="search d-flex">
        <input type="text" />
        <i class="fas fa-search"></i>
      </div>
      <ul class="nav_menu d-flex">
        <li>
          <a href="#">
            Become a <br />
            <span>Member</span>
          </a>
        </li>
        <li>
          <a href="https://www.amazon.in/gp/css/order-history?ref_=nav_orders_first">
            Return or <br />
            <span>orders</span>
          </a>
        </li>
        <li>
          <a href="https://www.amazon.in/gp/primecentral?ref_=ya_d_c_prime">
            Buy <br />
            <span>Prime</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fas fa-shopping-cart"></i> <span>0</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
