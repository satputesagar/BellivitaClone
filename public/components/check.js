// static

function price_desc(){
    return `
    <div id="advert">
    <h2>checkout Offer -50% Additional <br/>Discount</h2>
    <p class="blink_me">Last few Hours Left!</p>
    <div id="slider">
            <div class="child">
              <img src="./images/checkout/check_1_1.jpg" alt="" />
            </div>
            <div class="child">
              <img src="./images/checkout/check_1_2.jpg" alt="" />
            </div>
          </div>
        </div>
        <div id="coupon_div">
          <div id="tag">
            <i class="bi bi-tag"></i>
          </div>
          <input type="text" />
          <button>APPLY</button>
        </div>
        <div id="total_div">
          <div id="total_div_top">
            <div id="sub_total_div">
              <p>Subtotal</p>
              <p id="sub_total">1218.00</p>
            </div>
            <div id="shipping_div">
              <p>Shipping</p>
              <p id="sub_total">Free</p>
            </div>
          </div>
          <div id="line"></div>
          <div id="total_div_bottom">
            <div id="tdb">
              <p>Total</p>
              <p id="span">Including ₹ 185.80 in taxes</p>
            </div>
            <div id="tdb_amount"></div>
          </div>
        </div>
    `;
}

function check_content(){
    return
    `
    <section id="contact_info">
          <div id="contact_info_top">
            <h2 class="title">CONTACT INFORMATION</h2>
            <div id="login_details">
              <div id="admin">
                <img src="./images/checkout/admin.png" alt="" />
              </div>
              <div id="details">
                <p id="checkout_user_details"></p>
                <a href="#cart">Logout</a>
              </div>
            </div>
            <div id="check">
              <input type="checkbox" class="checkbox_size" />
              <label id="check_label">Email/SMS me with news and offers</label>
            </div>
            <div class="dotted_div"></div>
          </div>
          <div id="contact_info_bottom">
            <h2 class="title">SHIPPING ADDRESS</h2>
            <div id="fl">
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control bw"
                  id="floatingInput1"
                  placeholder="Password"
                />
                <label for="floatingInput">First Name</label>
              </div>
              <div class="form-floating">
                <input
                  type="text"
                  class="form-control bw"
                  id="floatingInput2"
                  placeholder="Password"
                />
                <label for="floatingPassword">Last Name</label>
              </div>
            </div>
            <div class="form-floating">
              <input
                type="text"
                class="form-control bw"
                id="floatingInput3"
                placeholder="Password"
              />
              <label for="floatingPassword"
                >Flat, House No, Building, Company, Apartment</label
              >
            </div>
            <div class="form-floating">
              <input
                type="text"
                class="form-control bw"
                id="floatingInput4"
                placeholder="Password"
              />
              <label for="floatingPassword"
                >Area, Colony, Street, Sector, Village</label
              >
            </div>
            <div id="f2">
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control bw"
                  id="floatingInput5"
                  placeholder="name@example.com"
                />
                <label for="floatingInput">City</label>
              </div>
              <div class="form-floating">
                <select
                  class="form-select"
                  id="floatingInput6"
                  aria-label="Floating label select example"
                >
                  <option>State</option>
                  <option value="Andhra Pradesh">Andhra Pradesh</option>
                  <option value="Tamilnadu">Tamilnadu</option>
                  <option value="Kerala">Kerala</option>
                  <option value="Delhi">Delhi</option>
                </select>
                <label for="floatingSelectGrid">State</label>
              </div>
              <div class="form-floating">
                <input
                  type="number"
                  class="form-control bw"
                  id="floatingInput7"
                />
                <label for="floatingPassword">PIN code</label>
              </div>
            </div>
            <div class="form-floating">
              <input
                type="number"
                class="form-control bw"
                id="floatingInput8"
                placeholder="Password"
              />
              <label for="floatingPassword">Phone</label>
            </div>
            <button id="btn">CONTINUE TO SHIPPING & PAYMENT</button>
            <div id="payment_methods">
              <img
                src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/payments-stripe-sub-footer_2.svg?v=1616140901"
                alt="payment_methods"
                id="pm"
              />
            </div>
          </div>
          <footer>
            <span>Refund policy</span>
            <span>Privacy policy</span>
          </footer>
        </section>`;
}

function header() {
  return ` <div id="logo_box">
        <a href="#home">
          <img
            src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Bellavita_new_age_ayurveda_final_logo.png?41107"
            alt="logo"
            id="logo"
          />
        </a>
      </div>`;
}

function prepaid_content() {
  return ` 
      <div id="contact_div">
        <h2 class="contact_title">CONTACT</h2>
        <hr class="contact_hr" />
        <div id="email">
          <p id="checkout_user_details"></p>
          <p class="change">Change</p>
        </div>
        <h2 class="contact_title">SHIP TO</h2>
        <hr class="contact_hr" />
        <div id="shipping_add">
          <p id="shipping_address"></p>
          <p class="change">Change</p>
        </div>
      </div>
      <div class="dotted_div" id="dotted_div"></div>
      <div id="shipping_add_div">
        <h2 class="title_ship">SHIPPING METHOD</h2>
        <div class="pmd">
          <input type="radio" id="radio" name="free" />
          <p>
            Free Shipping (PayTM, Card, Netbanking, UPI, Wallets, Pay Later &
            PayPal)
          </p>
          <p class="float_free">Free</p>
        </div>
        <hr id="pmd_hr"  />
        <div class="pmd">
          <input type="radio" id="radio" name="free" />
          <p>
            Cash On Delivery / Pay On Delivery <br /><span>
              COD/POD Charges Rs. 42.37+7.63(GST) = Rs. 50.00
            </span>
          </p>
          <p class="float_price">₹50.00</p>
        </div>
        <button id="btn_prepaid">CONTINUE TO PAYMENT</button>
        <div id="paytm_offer">
          <img
            src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/paytm-offer-720x100-1_x100.png?v=6810256132342978229"
            alt="paytm_offer"
          />
        </div>
        <div id="payment_methods">
          <img
            src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/payments-stripe-sub-footer_2.svg?v=1616140901"
            alt="payment_methods"
            id="pm"
          />
        </div>
      </div>
      <footer>
            <span>Refund policy</span>
            <span>Privacy policy</span>
          </footer>
    `;
}

function payment_content() {
  return ` 
     <div id="demo">
      <div id="payment_contact_div">
        <h2 class="contact_title">CONTACT</h2>
        <hr class="contact_hr" />
        <div id="email">
         <p id="checkout_user_details"></p>
          <p class="change">Change</p>
        </div>
        <h2 class="contact_title">SHIP TO</h2>
        <hr class="contact_hr" />
        <div id="shipping_add">
          <p id="shipping_address"></p>
          <p class="change">Change</p>
        </div>
        <h2 class="contact_title">METHOD</h2>
        <hr class="contact_hr" />
        <div id="payment_method">
          <p id="payment_charges">
        Free Shipping (PayTM, Card, Netbanking, UPI, Wallets, Pay Later & PayPal) <span>Free</span>
          </p>
          <p class="change">Change</p>
        </div>
      </div>
      <div class="dotted_div" id="dotted_div"></div>
      <div id="shipping_add_div">
        <h2 class="title_ship">PAYMENT</h2>
        <p id="secure">All transactions are secure and encrypted.</p>
        <div id="paytm_offer">
          <img
            src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/paytm-offer-720x100-1_x100.png?v=6810256132342978229"
            alt="paytm_offer"
          />
        </div>
        <div class="pmd pay_pmd">
          <input type="radio" id="radio" name="free" />
          <div class="credit_card">
          <p>
           Credit Cards / Debit Cards / Net-Banking 
          </p>
          <div class="cred_images">
          <img src="https://cdn.shopify.com/shopifycloud/shopify/assets/payment_icons/visa-319d545c6fd255c9aad5eeaad21fd6f7f7b4fdbdb1a35ce83b89cca12a187f00.svg"/>
          <img src="https://cdn.shopify.com/shopifycloud/shopify/assets/payment_icons/master-173035bc8124581983d4efa50cf8626e8553c2b311353fbf67485f9c1a2b88d1.svg"/>
          <img src="https://cdn.shopify.com/shopifycloud/shopify/assets/payment_icons/american_express-2264c9b8b57b23b0b0831827e90cd7bcda2836adc42a912ebedf545dead35b20.svg"/>
          <img src="https://cdn.shopify.com/shopifycloud/shopify/assets/payment_icons/rupay-7dd8b2a3c63957a0174f9ad530376abbac88ed8baeb14d78e7887eec4208e63d.svg"/>
          </div>
          </div>
        </div>
        <div class="pmd pay_pmd">
          <input type="radio" id="radio" name="free" />
          <div class="credit_card">
          <p>
           Wallets / UPI 
          </p>
          <div class="cred_images">
          <img src="https://cdn.shopify.com/s/files/1/0054/6665/2718/t/259/assets/ch-icon-paytm.jpg?v=17620682809981232721"/>
          <img src="https://cdn.shopify.com/s/files/1/0054/6665/2718/t/259/assets/ch-icon-gpay.jpg?v=18258087245985986635"/>
          <img src="https://cdn.shopify.com/s/files/1/0054/6665/2718/t/259/assets/ch-icon-upi.jpg?v=10875268837052940211"/>
          <img src="https://cdn.shopify.com/s/files/1/0054/6665/2718/t/259/assets/ch-icon-amazon.jpg?v=3297254780353874161"/>
          <img src="https://cdn.shopify.com/s/files/1/0054/6665/2718/t/259/assets/ch-icon-phonepe.jpg?v=12605551129941148252"/>
          </div>
          </div>
        </div>
       
        <div class="pmd pay_pmd">
          <input type="radio" id="radio" name="free" />
          <div class="credit_card">
          <p>
           <img src="https://cdn.shopify.com/s/files/applications/cf8da439fdbc580ee9a666e47eb462de.png?height=24&1594298386"/>
          </p>
          <div class="cred_images">
          <img src="https://cdn.shopify.com/shopifycloud/shopify/assets/payment_icons/visa-319d545c6fd255c9aad5eeaad21fd6f7f7b4fdbdb1a35ce83b89cca12a187f00.svg"/>
          <img src="https://cdn.shopify.com/shopifycloud/shopify/assets/payment_icons/master-173035bc8124581983d4efa50cf8626e8553c2b311353fbf67485f9c1a2b88d1.svg"/>
          <img src="https://cdn.shopify.com/shopifycloud/shopify/assets/payment_icons/rupay-7dd8b2a3c63957a0174f9ad530376abbac88ed8baeb14d78e7887eec4208e63d.svg"/>
          </div>
          </div>
        </div>
        <button id="btn_payment">COMPLETE ORDER</button>
        
      </div>
      <footer>
            <span>Refund policy</span>
            <span>Privacy policy</span>
          </footer>
</div>
    `;
}

export { price_desc, check_content, header, prepaid_content, payment_content };