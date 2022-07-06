// ratting script
function getStars(rating) {
    // Round to nearest half
    rating = Math.round(rating * 2) / 2;
    let output = [];
  
    // Append all the filled whole stars
    for (var i = rating; i >= 1; i--)
      output.push(
        '<i class="fa fa-star" aria-hidden="true" style="color: gold;"></i>&nbsp;'
      );
  
    // If there is a half a star, append it
    if (i == 0.5)
      output.push(
        '<i class="fa fa-star-half-o" aria-hidden="true" style="color: gold;"></i>&nbsp;'
      );
  
    // Fill the empty stars
    for (let i = 5 - rating; i >= 1; i--)
      output.push(
        '<i class="fa fa-star-o" aria-hidden="true" style="color: gold;"></i>&nbsp;'
      );
  
    return output.join("");
  }
  
  function slider(sdata, i, cartData, cart_total_value, showCartItems) {
    let slide_div = document.getElementsByClassName("item-slider-div")[i];
    slide_div.innerHTML = null;
  
    sdata.forEach((item, index) => {
      let card = document.createElement("div");
      card.classList = "slider-card anim";
  
      let i_div = document.createElement("div");
      i_div.addEventListener("mouseenter", function () {
        document.getElementsByClassName("buy-now-tag")[index].style.display =
          "block";
      });
  
      i_div.addEventListener("mouseleave", function () {
        document.getElementsByClassName("buy-now-tag")[index].style.display =
          "none";
      });
  
      let img = document.createElement("img");
      img.src = item.Img_url;
      i_div.appendChild(img);
  
      img.addEventListener("mouseenter", function () {
        document.getElementsByClassName("buy-now-tag")[index].style.display =
          "block";
      });
  
      // onmouseout effect
      img.addEventListener("click", function () {
        localStorage.setItem("brod_view", JSON.stringify(item));
        window.location.href = "./prodView.html";
      });
  
      let buy_now = document.createElement("div");
      buy_now.classList = "buy-now-tag";
      buy_now.innerHTML = `<div id="buy"><p>BUY NOW</p></div>
        <div id="quick"><p>QUICK VIEW</p></div>`;
  
      buy_now.addEventListener("mouseover", function () {
        let ef = document.getElementsByClassName("buy-now-tag")[index];
        ef.style.display = "block";
  
        // //   // onclick adding item to cart
        ef.addEventListener("click", () => {
          cartData.unshift(item);
          console.log(cartData);
          cart_total_value(cartData);
          showCartItems(cartData);
          localStorage.setItem("cart_items", JSON.stringify(cartData));
        });
      });
  
      let name = document.createElement("p");
      name.innerHTML = item.Name;
      name.classList = "slide-card-name";
  
      let rating_span = document.createElement("span");
      rating_span.id = "stars";
      rating_span.innerHTML =
        getStars(item.Rating) + `<span>${item.Review} review</span>`;
  
      let price_div = document.createElement("div");
      price_div.className = "price-div";
  
      let old_price = document.createElement("h4");
      old_price.classList = "old_price";
      let old = 93;
      old += Number(item.Price);
      old_price.innerText = "Rs. " + old;
  
      let price = document.createElement("h4");
      price.innerText = "Rs." + item.Price;
  
      price_div.append(old_price, price);
  
      // rating_div.append(rating);
      card.append(i_div, buy_now, name, rating_span, price_div);
      slide_div.append(card);
    });
  
    // slider control functions
    let l_btn = document.getElementsByClassName("l_btn")[i];
    l_btn.addEventListener("click", function () {
      leftbtn(sdata);
    });
  
    let r_btn = document.getElementsByClassName("r_btn")[i];
    r_btn.addEventListener("click", function () {
      rightbtn(sdata);
    });
  
    // slider control buttons(left and right)
  
    // automatic sliding by interval of 3 seconds
    // setInterval(function () {
    //   leftbtn(sdata);
    // }, 5000);
  
    // left button
    function leftbtn(list) {
      let temp = list.shift();
      list.push(temp);
      slider(list, i);
    }
  
    // right button
    function rightbtn(list) {
      let temp = list.shift();
      list.push(temp);
      slider(list, i);
    }
  }
  
  function whatsappChat() {
    // whatsapp chat
    let chat = document.getElementsByClassName("whatapp-icon")[0];
    chat.addEventListener("click", openForm);
  
    let cancel = document.getElementsByClassName("cancel")[0];
    cancel.addEventListener("click", closeForm);
  
    function openForm() {
      document.getElementById("myForm").style.display = "block";
    }
  
    function closeForm() {
      document.getElementById("myForm").style.display = "none";
    }
  }
  
  function sticky_view() {
    return `<div class="bella-cash fixed">
      <img src="https://cdn.sweettooth.io/v1/images/launcher_icons/crown.svg?color=%23000000" alt="Bella Cash"
          srcset="" />
      <h6>Bella Cash</h6>
  </div>
  <div class="whatapp-icon fixed">
      <img src="https://cdn.shopify.com/s/files/1/0054/6665/2718/t/259/assets/whatsapp.svg?v=10753259276865380946"
          alt="" /> 
  </div>
  <div class="chat-popup" id="myForm">
    <form action="/action_page.php" class="form-container">
      <h3>Bella Vita Organic</h3>
      <label for="msg"><b>Please drop Your Message</b></label>
      <textarea placeholder="Type message.." name="msg" required></textarea>
      <button type="submit" class="btn">Send</button>
      <button type="button" class="btn cancel" onclick="closeForm()">Close</button>
    </form>
  </div>`;
  }
  function newArrivalList() {
    return `[
        {
          "Category": "skin",
          "Name": "Choco 3 in 1 Tinty for Lips, Cheeks & Eyes for moisturizing & nourishing|Lip Stains & Tints 8 gm",
          "Img_url": "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Choco-01_800x.jpg?v=1637919186",
          "Price1": "403",
          "Price": "444",
          "Rating": "3.8998.",
          "Review": "660",
          "Qty": 1
          },
          {
          "Category": "skin",
          "Name": "Choco 3 in 1 Tinty for Lips, Cheeks & Eyes for moisturizing & nourishing|Lip Stains & Tints 8 gm",
          "Img_url": "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Choco-02_800x.jpg?v=1637919186",
          "Price1": "258",
          "Price": "197",
          "Rating": "3.2",
          "Review": "219",
          "Qty": 1
          },
          {
          "Category": "skin",
          "Name": "Peach 3 in 1 Tinty for Lips, Cheeks & Eyes for moisturizing & nourishing |Lip Stains & Tints 8 gm",
          "Img_url": "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Peach-01_800x.jpg?v=1637918142",
          "Price1": "259",
          "Price": "227",
          "Rating": "3.5",
          "Review": "104",
          "Qty": 1
          },
          {
          "Category": "skin",
          "Name": "Pomegranate 3 in 1 Tinty for Lips, Cheeks & Eyelids for moisturizing & nourishing|Lip Stains & Tints 8 gm",
          "Img_url": "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Pomegrante-02_800x.jpg?v=1637916570",
          "Price1": "328",
          "Price": "199",
          "Rating": "4.6",
          "Review": "354",
          "Qty": 1
          },
          {
          "Category": "skin",
          "Name": "Glowner Rose Water Face Toner & Mist - Natural Toner Spray for Glowing Skin for All Skin Type - 200 ml",
          "Img_url": "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Peach-01_1024x1024.jpg?v=1637918142",
          "Price1": "599",
          "Price": "401",
          "Rating": "4.5",
          "Review": "239",
          "Qty": 1
          },
          {
          "Category": "hair",
          "Name": "Belly Drops Ayurvedic Navel Oil For Luminous & Healthy Hair - 15 ml",
          "Img_url": "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/BELLYDROPBEAUTYBOOSTING-01_1024x1024.jpg?v=1632819748",
          "Price1": "292",
          "Price": "229",
          "Rating": "4",
          "Review": "159",
          "Qty": 1
          },
          {
          "Category": "hair",
          "Name": "Growth Protein Natural Hair Conditioner For Hair Fall, Dry & Frizzy Hair - 225 ml",
          "Img_url": "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/HairConditioner-1_1024x1024.jpg?v=1632475566",
          "Price1": "456",
          "Price": "399",
          "Rating": "4.5",
          "Review": "128",
          "Qty": 1
          },
          {
          "Category": "hair",
          "Name": "Oil Control Shampoo For Oily Hair & Scalp Anti Dandruff, Neem, Tea Tree & Basil 225 ml",
          "Img_url": "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/OilControlShampoo-01_1_1024x1024.jpg?v=1621313274",
          "Price1": "298",
          "Price": "239",
          "Rating": "4.5",
          "Review": "128",
          "Qty": 1
          },
          {
          "Category": "hair",
          "Name": "Hair Perfume Mist Spray For All Hair Types Alcohol Free With Fresh and Floral Long Lasting Fragrance Unisex - 50ml",
          "Img_url": "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/HairPerfume-01_1024x1024.jpg?v=1626681100",
          "Price1": "199",
          "Price": "159",
          "Rating": "3",
          "Review": "487",
          "Qty": 1
          },
          {
          "Category": "hair",
          "Name": "Dual Teeth Wooden Neem Comb For Tanglefree Curls and Healthy Scalp",
          "Img_url": "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/NeemCombDualTeeth-01_1024x1024.jpg?v=1633437311",
          "Price1": "315",
          "Price": "301",
          "Rating": "4.6382",
          "Review": "345",
          "Qty": 1
          },
          {
          "Category": "hair",
          "Name": "Growth Protein Hair Spa Mask For Hairfall Control, Frizzy Hair Cream, Color Damaged Hair Repair & Growth With Keratin, Biotin, Argan, Onion, Tea Tree & Coffee, 225 g",
          "Img_url": "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/HairMasque-1_1024x1024.jpg?v=1632814654",
          "Price1": "458",
          "Price": "308",
          "Rating": "5",
          "Review": "398",
          "Qty": 1
          },
          {
          "Category": "face",
          "Name": "Exfoliate Face and Body Scrub Grit, Skin Brightening, De-Tan Removal - 75gm",
          "Img_url": "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Exfoliate-01_1024x1024.jpg?v=1626345623",
          "Price1": "185",
          "Price": "165",
          "Rating": "5",
          "Review": "1524",
          "Qty": 1
          },
          {
          "Category": "face",
          "Name": "EyeLift Under Eye Cream for Dark Circles, Puffy Eyes & Wrinkles, For Men & Women 20 gm",
          "Img_url": "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/EyeLift-01_1024x1024.jpg?v=1632990113",
          "Price1": "299",
          "Price": "245",
          "Rating": "5",
          "Review": "6456",
          "Qty": 1
          }]`;
  }
  
  function comboSetList() {
    return `[
        {
          "Category": "skin",
          "Name": "Oil Control & Face Glow Combo (C Glow + Exfoliate + Ubtan Plus + Anti Acne)",
          "Img_url": "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Face-wash_-Exfoliate_-Anti-Acne_-Ubtan_800x.jpg?v=1626938935",
          "Price1": "803",
          "Price": "590",
          "Rating": "4.8998.",
          "Review": "160",
          "Qty": 1
          },
          {
          "Category": "skin",
          "Name": "Natural Roll On For Bright Healthy Underarms",
          "Img_url": "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Shampoo-_-Hair-Conditioner_90114dd9-cf21-4197-8f70-2ff13fea741c_800x.jpg?v=1632218249",
          "Price1": "358",
          "Price": "297",
          "Rating": "5.0",
          "Review": "319",
          "Qty": 1
          },
          {
          "Category": "skin",
          "Name": "Face Spots & Marks Reduction Combo",
          "Img_url": "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Combo18_800x.jpg?v=1632918139",
          "Price1": "359",
          "Price": "327",
          "Rating": "4.5",
          "Review": "204",
          "Qty": 1
          },
          {
          "Category": "skin",
          "Name": "Pomegranate 3 in 1 Tinty for Lips, Cheeks & Eyelids for moisturizing & nourishing|Lip Stains & Tints 8 gm",
          "Img_url": "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Pomegrante-02_800x.jpg?v=1637916570",
          "Price1": "328",
          "Price": "199",
          "Rating": "4.6",
          "Review": "354",
          "Qty": 1
          },
          {
          "Category": "skin",
          "Name": "best-skin-brightening-combo-at-rs-999-natural-skin-brightening-products",
          "Img_url": "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Combo18_1024x1024.jpg?v=1632918139",
          "Price1": "299",
          "Price": "501",
          "Rating": "2.5",
          "Review": "39",
          "Qty": 1
          },
          {
          "Category": "hair",
          "Name": "Belly Drops Ayurvedic Navel Oil For Luminous & Healthy Hair - 15 ml",
          "Img_url": "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/BELLYDROPBEAUTYBOOSTING-01_1024x1024.jpg?v=1632819748",
          "Price1": "292",
          "Price": "229",
          "Rating": "4",
          "Review": "159",
          "Qty": 1
          },
          {
          "Category": "hair",
          "Name": "Growth Protein Natural Hair Conditioner For Hair Fall, Dry & Frizzy Hair - 225 ml",
          "Img_url": "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/HairConditioner-1_1024x1024.jpg?v=1632475566",
          "Price1": "456",
          "Price": "399",
          "Rating": "4.5",
          "Review": "128",
          "Qty": 1
          },
          {
          "Category": "hair",
          "Name": "Oil Control Shampoo For Oily Hair & Scalp Anti Dandruff, Neem, Tea Tree & Basil 225 ml",
          "Img_url": "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/OilControlShampoo-01_1_1024x1024.jpg?v=1621313274",
          "Price1": "298",
          "Price": "239",
          "Rating": "4.5",
          "Review": "128",
          "Qty": 1
          },
          {
          "Category": "hair",
          "Name": "Hair Perfume Mist Spray For All Hair Types Alcohol Free With Fresh and Floral Long Lasting Fragrance Unisex - 50ml",
          "Img_url": "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/HairPerfume-01_1024x1024.jpg?v=1626681100",
          "Price1": "199",
          "Price": "159",
          "Rating": "3",
          "Review": "487",
          "Qty": 1
          },
          {
          "Category": "hair",
          "Name": "Dual Teeth Wooden Neem Comb For Tanglefree Curls and Healthy Scalp",
          "Img_url": "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/NeemCombDualTeeth-01_1024x1024.jpg?v=1633437311",
          "Price1": "315",
          "Price": "301",
          "Rating": "4.6382",
          "Review": "345",
          "Qty": 1
          },
          {
          "Category": "hair",
          "Name": "Growth Protein Hair Spa Mask For Hairfall Control, Frizzy Hair Cream, Color Damaged Hair Repair & Growth With Keratin, Biotin, Argan, Onion, Tea Tree & Coffee, 225 g",
          "Img_url": "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/HairMasque-1_1024x1024.jpg?v=1632814654",
          "Price1": "458",
          "Price": "308",
          "Rating": "5",
          "Review": "398",
          "Qty": 1
          },
          {
          "Category": "face",
          "Name": "Exfoliate Face and Body Scrub Grit, Skin Brightening, De-Tan Removal - 75gm",
          "Img_url": "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Exfoliate-01_1024x1024.jpg?v=1626345623",
          "Price1": "185",
          "Price": "165",
          "Rating": "5",
          "Review": "1524",
          "Qty": 1
          },
          {
          "Category": "face",
          "Name": "EyeLift Under Eye Cream for Dark Circles, Puffy Eyes & Wrinkles, For Men & Women 20 gm",
          "Img_url": "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/EyeLift-01_1024x1024.jpg?v=1632990113",
          "Price1": "299",
          "Price": "245",
          "Rating": "5",
          "Review": "6456",
          "Qty": 1
          }]`;
  }
  
  function bestsellerList() {
    return `[
        {
          "Name": "Exfoliate Face and Body Scrub Grit, Skin Brightening, De-Tan Removal - 75gm",
          "Img_url": "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Exfoliate-01_1024x1024.jpg?v=1626345623",
          "Price": "223",
          "Price1":"300",
          "Rating": "4.5",
          "Review": "523",
          "dis":"Bella Vita Organic's Eyelift Under Eye Cream Gel makes for a great companion for reducing dark circles, dullness and puffy eyes. It is curated with natural cucumber extract, tulsi, jojoba oil, almond oil & pure aloe-vera gel, meant for everyday...",
          "Qty": 1  },
        {
          "Category": "skin",
          "Name": "Glowey Face Pack, Scrub & Face Wash 3 in 1 for Glowing Skin & Radiance Unisex Ayurveda, 100 g With Free Face Pack Applicator Brush",
          "Img_url": "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Glowey-01_3122f22c-16b1-4dfe-ab7e-f5a4e16c2aaa_1024x1024.jpg?v=1631708103",
          "Price": "298",
          "Price1":"369",
          "Rating": "4.5",
          "Review": "1605",
          "dis":"Bella Vita Organic's Eyelift Under Eye Cream Gel makes for a great companion for reducing dark circles, dullness and puffy eyes. It is curated with natural cucumber extract, tulsi, jojoba oil, almond oil & pure aloe-vera gel, meant for everyday...",
          "Qty": 1  },
        {
          "Category": "skin",
          "Name": "Day Glow Sunscreen Face and Body Lotion SPF 30+for All Skin Types",
          "Img_url": "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/DAYGLOW-01_1024x1024.jpg?v=1632393899",
          "Price": "301",
          "Price1":"390",
          "Rating": "4",
          "Review": "773",
          "dis":"Bella Vita Organic's Eyelift Under Eye Cream Gel makes for a great companion for reducing dark circles, dullness and puffy eyes. It is curated with natural cucumber extract, tulsi, jojoba oil, almond oil & pure aloe-vera gel, meant for everyday...",
          "Qty": 1  },
        {
          "Category": "skin",
          "Name": "Glowtion Face & Body Butter Lotion For Skin Brightening & Deep Moisturization - 100ml",
          "Img_url": "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Glowtion-01_1024x1024.jpg?v=1634219952",
          "Price": "249",
          "Price1":"360",
          "Rating": "4",
          "Review": "240",
          "dis":"Bella Vita Organic's Eyelift Under Eye Cream Gel makes for a great companion for reducing dark circles, dullness and puffy eyes. It is curated with natural cucumber extract, tulsi, jojoba oil, almond oil & pure aloe-vera gel, meant for everyday...",
          "Qty": 1  },
        {
          "Category": "skin",
          "Name": "SuperScrub Natural Dirt Removal & Skin Brightening Scrub Cream - 85g",
          "Img_url": "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/SuperScrub-01_1024x1024.jpg?v=1632303623",
          "Price": "199",
          "Price1":"210",
          "Rating": "4.5",
          "Review": "206",
          "dis":"Bella Vita Organic's Eyelift Under Eye Cream Gel makes for a great companion for reducing dark circles, dullness and puffy eyes. It is curated with natural cucumber extract, tulsi, jojoba oil, almond oil & pure aloe-vera gel, meant for everyday...",
          "Qty": 1  },
        {
          "Category": "skin",
          "Name": "De Tan Removal Face Pack For Glowing Skin, Oil Control, Acne, Pimples, Blemishes, Pigmentation & Brightening - 100 gm",
          "Img_url": "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Detan-1_1024x1024.jpg?v=1632400463",
          "Price1": "279",
          "Price": "239",
          "Rating": "4",
          "Review": "333",
          "dis":"Bella Vita Organic's Eyelift Under Eye Cream Gel makes for a great companion for reducing dark circles, dullness and puffy eyes. It is curated with natural cucumber extract, tulsi, jojoba oil, almond oil & pure aloe-vera gel, meant for everyday...",
          "Qty": 1  },
        {
          "Category": "skin",
          "Name": "Anti Acne, Pimple Scar Spots Removal Cream Gel For Men & Women - 85 gm",
          "Img_url": "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Anti-Acne-face-Gel-01_1024x1024.jpg?v=1626177200",
          "Price1": "499",
          "Price": "449",
          "Rating": "4",
          "Review": "111",
          "dis":"Bella Vita Organic's Eyelift Under Eye Cream Gel makes for a great companion for reducing dark circles, dullness and puffy eyes. It is curated with natural cucumber extract, tulsi, jojoba oil, almond oil & pure aloe-vera gel, meant for everyday...",
          "Qty": 1  },
        {
          "Category": "skin",
          "Name": "PapyBlem Pigmentation Blemish Cream Gel For Skin Brightening with Papaya & Saffron - 85gm",
          "Img_url": "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/PapyblemFaceGel-01_1024x1024.jpg?v=1632988046",
          "Price1": "501",
          "Price": "445",
          "Rating": "4",
          "Review": "291",
          "dis":"Bella Vita Organic's Eyelift Under Eye Cream Gel makes for a great companion for reducing dark circles, dullness and puffy eyes. It is curated with natural cucumber extract, tulsi, jojoba oil, almond oil & pure aloe-vera gel, meant for everyday...",
          "Qty": 1  },
        {
          "Category": "skin",
          "Name": "Multani Mitti Ubtan Plus Face Glow Pack For Oil Control, De-Tan, Acne, Pimples - 80 g Unisex For All Skin Types",
          "Img_url": "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/UBTANPLUS-01_8081e672-4c0f-41ac-bda5-bf983c844826_1024x1024.jpg?v=1632576315",
          "Price1": "389",
          "Price": "219",
          "Rating": "4",
          "Review": "114",
          "dis":"Bella Vita Organic's Eyelift Under Eye Cream Gel makes for a great companion for reducing dark circles, dullness and puffy eyes. It is curated with natural cucumber extract, tulsi, jojoba oil, almond oil & pure aloe-vera gel, meant for everyday...",
          "Qty": 1  },
        {
          "Category": "skin",
          "Name": "SkinSolve Multi Benefit Face Cream & Body Butter For Dry Skin, Stretch Marks, Tattoo Balm, Rash Relief, Make up Base - 85 g",
          "Img_url": "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/SkinSolve-01_1024x1024.jpg?v=1632306325",
          "Price1": "429",
          "Price": "366",
          "Rating": "4",
          "Review": "35",
          "dis":"Bella Vita Organic's Eyelift Under Eye Cream Gel makes for a great companion for reducing dark circles, dullness and puffy eyes. It is curated with natural cucumber extract, tulsi, jojoba oil, almond oil & pure aloe-vera gel, meant for everyday...",
          "Qty": 1
        },
        {
          "Category": "skin",
          "Name": "NoseGlow Natural Nose Scrub for Blackheads and Whiteheads - 20 gm",
          "Img_url": "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Noseglow_1_1024x1024.jpg?v=1632559834",
          "Price1": "417",
          "Price": "309",
          "Rating": "5",
          "Review": "411",
          "dis":"Bella Vita Organic's Eyelift Under Eye Cream Gel makes for a great companion for reducing dark circles, dullness and puffy eyes. It is curated with natural cucumber extract, tulsi, jojoba oil, almond oil & pure aloe-vera gel, meant for everyday...",
          "Qty": 1
        },
        {
          "Category": "skin",
          "Name": "Vitamin C-Glow Natural Face Wash With Coffee, Neem & Mint, Oil Control, Acne, Brightening & Glow, Men & Women - 225 ml",
          "Img_url": "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/FaceWash-01_1024x1024.jpg?v=1626177693",
          "Price1": "299",
          "Price": "205",
          "Rating": "4",
          "Review": "210",
          "dis":"Bella Vita Organic's Eyelift Under Eye Cream Gel makes for a great companion for reducing dark circles, dullness and puffy eyes. It is curated with natural cucumber extract, tulsi, jojoba oil, almond oil & pure aloe-vera gel, meant for everyday...",
          "Qty": 1
        },
        {
          "Category": "skin",
          "Name": "Oil Control Face Wash with Activated Charcoal For Deep Cleansing, Dirt Removal & Skin Brightening, 115ml",
          "Img_url": "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/oilcontrolfacewash-01_1024x1024.jpg?v=1626505575",
          "Price1": "499",
          "Price": "355",
          "Rating": "4",
          "Review": "55",
          "dis":"Bella Vita Organic's Eyelift Under Eye Cream Gel makes for a great companion for reducing dark circles, dullness and puffy eyes. It is curated with natural cucumber extract, tulsi, jojoba oil, almond oil & pure aloe-vera gel, meant for everyday...",
          "Qty": 1
        },
        {
          "Category": "skin",
          "Name": "Anti Acne Face Wash for Oil Control, Pimples Repair & Glow with Neem, Basil, Tea Tree & Aloe - 115g",
          "Img_url": "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/AntiAcneFaceWash-01_1024x1024.jpg?v=1626177072",
          "Price1": "333",
          "Price": "444",
          "Rating": "4",
          "Review": "66",
          "dis":"Bella Vita Organic's Eyelift Under Eye Cream Gel makes for a great companion for reducing dark circles, dullness and puffy eyes. It is curated with natural cucumber extract, tulsi, jojoba oil, almond oil & pure aloe-vera gel, meant for everyday...",
          "Qty": 1
        },
        {
          "Category": "skin",
          "Name": "EyeLift Under Eye Cream for Dark Circles, Puffy Eyes & Wrinkles, For Men & Women 20 gm",
          "Img_url": "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/EyeLift-01_1024x1024.jpg?v=1632990113",
          "Price1": "258",
          "Price": "197",
          "Rating": "5",
          "Review": "119",
          "dis":"Bella Vita Organic's Eyelift Under Eye Cream Gel makes for a great companion for reducing dark circles, dullness and puffy eyes. It is curated with natural cucumber extract, tulsi, jojoba oil, almond oil & pure aloe-vera gel, meant for everyday...",
          "Qty": 1
        },
        {
          "Category": "skin",
          "Name": "Rose Glow Face Gel For Pore Minimising, Oil Control & Skin Brightening - 85 gm",
          "Img_url": "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/RoseGlow-01_1024x1024.jpg?v=1632907878",
          "Price1": "259",
          "Price": "227",
          "Rating": "4.5",
          "Review": "454",
          "dis":"Bella Vita Organic's Eyelift Under Eye Cream Gel makes for a great companion for reducing dark circles, dullness and puffy eyes. It is curated with natural cucumber extract, tulsi, jojoba oil, almond oil & pure aloe-vera gel, meant for everyday...",
          "Qty": 1
        },
        {
          "Category": "skin",
          "Name": "Micellar Water - Best Natural Makeup Remover and Cleanser - 225 ml",
          "Img_url": "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/MicellarWater-01_1024x1024.jpg?v=1632824206",
          "Price1": "478",
          "Price": "399",
          "Rating": "4",
          "Review": "254",
          "dis":"Bella Vita Organic's Eyelift Under Eye Cream Gel makes for a great companion for reducing dark circles, dullness and puffy eyes. It is curated with natural cucumber extract, tulsi, jojoba oil, almond oil & pure aloe-vera gel, meant for everyday...",
          "Qty": 1
        },
        {
          "Category": "skin",
          "Name": "Glowner Rose Water Face Toner & Mist - Natural Toner Spray for Glowing Skin for All Skin Type - 200 ml",
          "Img_url": "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Glowner-01_1024x1024.jpg?v=1632557600",
          "Price1": "599",
          "Price": "401",
          "Rating": "4",
          "Review": "239",
          "dis":"Bella Vita Organic's Eyelift Under Eye Cream Gel makes for a great companion for reducing dark circles, dullness and puffy eyes. It is curated with natural cucumber extract, tulsi, jojoba oil, almond oil & pure aloe-vera gel, meant for everyday...",
          "Qty": 1
        },
        {
          "Category": "skin",
          "Name": "21 Again Anti Ageing & Skin Glow Face Serum - 35 ml",
          "Img_url": "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/21Again-01_1024x1024.jpg?v=1634638149",
          "Price1": "487",
          "Price": "399",
          "Rating": "5",
          "Review": "298",
          "dis":"Bella Vita Organic's Eyelift Under Eye Cream Gel makes for a great companion for reducing dark circles, dullness and puffy eyes. It is curated with natural cucumber extract, tulsi, jojoba oil, almond oil & pure aloe-vera gel, meant for everyday...",
          "Qty": 1
        },
        {
          "Category": "skin",
          "Name": "NicoLips Lip Lightening Scrub For Dark, Dry, Chapped & Damaged Lips Unisex - 20 gm",
          "Img_url": "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/NicoLips-01_1024x1024.jpg?v=1626433148",
          "Price1": "229",
          "Price": "199",
          "Rating": "5",
          "Review": "4877",
          "dis":"Bella Vita Organic's Eyelift Under Eye Cream Gel makes for a great companion for reducing dark circles, dullness and puffy eyes. It is curated with natural cucumber extract, tulsi, jojoba oil, almond oil & pure aloe-vera gel, meant for everyday...",
          "Qty": 1
        },
          {
            "Category": "hair",
            "Name": "Growth Protein Conditioning Shampoo Anti Frizz, Hairfall Control, Greying, Volumizing & Anti Dandruff, 225 ML Sls/Paraben/Sulfate Free",
            "Img_url": "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Growthprotein-01_2b5abd2e-1641-4fe9-ae67-b3747bb13413_1024x1024.jpg?v=1631817443",
            "Price1": "499",
            "Price": "456",
            "Rating": "4",
            "Review": "654",
            "dis":"Bella Vita Organic's Eyelift Under Eye Cream Gel makes for a great companion for reducing dark circles, dullness and puffy eyes. It is curated with natural cucumber extract, tulsi, jojoba oil, almond oil & pure aloe-vera gel, meant for everyday...",
            "Qty": 1
          },
          {
            "Category": "hair",
            "Name": "SilkyStrong Coffee Onion Ayurvedic Herbal Anti-Dandruff Natural Hair Growth Oil, Volume & Fall Control - 225ml",
            "Img_url": "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/SilkystrongHairOil-01_1024x1024.jpg?v=1632921308",
            "Price1": "249",
            "Price": "198",
            "Rating": "4",
            "Review": "215",
            "dis":"Bella Vita Organic's Eyelift Under Eye Cream Gel makes for a great companion for reducing dark circles, dullness and puffy eyes. It is curated with natural cucumber extract, tulsi, jojoba oil, almond oil & pure aloe-vera gel, meant for everyday...",
            "Qty": 1
          },
          {
            "Category": "hair",
            "Name": "Growth Protein Shampoo & Conditioner Combo For Hair Fall Control & Dry & Frizz Free Hair - 225 ml Each",
            "Img_url": "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Shampoo-_-Hair-Conditioner_90114dd9-cf21-4197-8f70-2ff13fea741c_1024x1024.jpg?v=1632218249",
            "Price1": "349",
            "Price": "326",
            "Rating": "5",
            "Review": "1236",
            "dis":"Bella Vita Organic's Eyelift Under Eye Cream Gel makes for a great companion for reducing dark circles, dullness and puffy eyes. It is curated with natural cucumber extract, tulsi, jojoba oil, almond oil & pure aloe-vera gel, meant for everyday...",
            "Qty": 1
          },
          {
            "Category": "hair",
            "Name": "Growth Protein Hair Spa Mask For Hairfall Control, Frizzy Hair Cream, Color Damaged Hair Repair & Growth With Keratin, Biotin, Argan, Onion, Tea Tree & Coffee, 225 g",
            "Img_url": "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/HairMasque-1_1024x1024.jpg?v=1632814654",
            "Price1": "495",
            "Price": "426",
            "Rating": "5",
            "Review": "374",
            "dis":"Bella Vita Organic's Eyelift Under Eye Cream Gel makes for a great companion for reducing dark circles, dullness and puffy eyes. It is curated with natural cucumber extract, tulsi, jojoba oil, almond oil & pure aloe-vera gel, meant for everyday...",
            "Qty": 1
          },
          {
            "Category": "hair",
            "Name": "Belly Drops Ayurvedic Navel Oil For Luminous & Healthy Hair - 15 ml",
            "Img_url": "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/BELLYDROPBEAUTYBOOSTING-01_1024x1024.jpg?v=1632819748",
            "Price1": "292",
            "Price": "229",
            "Rating": "4",
            "Review": "159",
            "dis":"Bella Vita Organic's Eyelift Under Eye Cream Gel makes for a great companion for reducing dark circles, dullness and puffy eyes. It is curated with natural cucumber extract, tulsi, jojoba oil, almond oil & pure aloe-vera gel, meant for everyday...",
            "Qty": 1
          },
          {
            "Category": "hair",
            "Name": "Growth Protein Natural Hair Conditioner For Hair Fall, Dry & Frizzy Hair - 225 ml",
            "Img_url": "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/HairConditioner-1_1024x1024.jpg?v=1632475566",
            "Price1": "456",
            "Price": "399",
            "Rating": "4",
            "Review": "128",
            "dis":"Bella Vita Organic's Eyelift Under Eye Cream Gel makes for a great companion for reducing dark circles, dullness and puffy eyes. It is curated with natural cucumber extract, tulsi, jojoba oil, almond oil & pure aloe-vera gel, meant for everyday...",
            "Qty": 1
          },
          {
            "Category": "hair",
            "Name": "Oil Control Shampoo For Oily Hair & Scalp Anti Dandruff, Neem, Tea Tree & Basil 225 ml",
            "Img_url": "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/OilControlShampoo-01_1_1024x1024.jpg?v=1621313274",
            "Price1": "298",
            "Price": "239",
            "Rating": "4",
            "Review": "128",
            "dis":"Bella Vita Organic's Eyelift Under Eye Cream Gel makes for a great companion for reducing dark circles, dullness and puffy eyes. It is curated with natural cucumber extract, tulsi, jojoba oil, almond oil & pure aloe-vera gel, meant for everyday...",
            "Qty": 1
          },
          {
            "Category": "hair",
            "Name": "Hair Perfume Mist Spray For All Hair Types Alcohol Free With Fresh and Floral Long Lasting Fragrance Unisex - 50ml",
            "Img_url": "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/HairPerfume-01_1024x1024.jpg?v=1626681100",
            "Price1": "199",
            "Price": "159",
            "Rating": "5",
            "Review": "487",
            "dis":"Bella Vita Organic's Eyelift Under Eye Cream Gel makes for a great companion for reducing dark circles, dullness and puffy eyes. It is curated with natural cucumber extract, tulsi, jojoba oil, almond oil & pure aloe-vera gel, meant for everyday...",
            "Qty": 1
          },
          {
            "Category": "hair",
            "Name": "Dual Teeth Wooden Neem Comb For Tanglefree Curls and Healthy Scalp",
            "Img_url": "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/NeemCombDualTeeth-01_1024x1024.jpg?v=1633437311",
            "Price1": "315",
            "Price": "301",
            "Rating": "4",
            "Review": "345",
            "dis":"Bella Vita Organic's Eyelift Under Eye Cream Gel makes for a great companion for reducing dark circles, dullness and puffy eyes. It is curated with natural cucumber extract, tulsi, jojoba oil, almond oil & pure aloe-vera gel, meant for everyday...",
            "Qty": 1
          },
          {
            "Category": "hair",
            "Name": "Growth Protein Hair Spa Mask For Hairfall Control, Frizzy Hair Cream, Color Damaged Hair Repair & Growth With Keratin, Biotin, Argan, Onion, Tea Tree & Coffee, 225 g",
            "Img_url": "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/HairMasque-1_1024x1024.jpg?v=1632814654",
            "Price1": "458",
            "Price": "308",
            "Rating": "5",
            "Review": "398",
            "dis":"Bella Vita Organic's Eyelift Under Eye Cream Gel makes for a great companion for reducing dark circles, dullness and puffy eyes. It is curated with natural cucumber extract, tulsi, jojoba oil, almond oil & pure aloe-vera gel, meant for everyday...",
            "Qty": 1
          },
          
          {
            "Category": "face",
            "Name": "Exfoliate Face and Body Scrub Grit, Skin Brightening, De-Tan Removal - 75gm",
            "Img_url": "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Exfoliate-01_1024x1024.jpg?v=1626345623",
            "Price1": "185",
            "Price": "165",
            "Rating": "5",
            "Review": "1524",
            "dis":"Bella Vita Organic's Eyelift Under Eye Cream Gel makes for a great companion for reducing dark circles, dullness and puffy eyes. It is curated with natural cucumber extract, tulsi, jojoba oil, almond oil & pure aloe-vera gel, meant for everyday...",
            "Qty": 1
          },
          {
            "Category": "face",
            "Name": "EyeLift Under Eye Cream for Dark Circles, Puffy Eyes & Wrinkles, For Men & Women 20 gm",
            "Img_url": "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/EyeLift-01_1024x1024.jpg?v=1632990113",
            "Price1": "299",
            "Price": "245",
            "Rating": "5",
            "Review": "6456",
            "dis":"Bella Vita Organic's Eyelift Under Eye Cream Gel makes for a great companion for reducing dark circles, dullness and puffy eyes. It is curated with natural cucumber extract, tulsi, jojoba oil, almond oil & pure aloe-vera gel, meant for everyday...",
            "Qty": 1
          },
          {
            "Category": "face",
            "Name": "Glowey Face Pack, Scrub & Face Wash 3 in 1 for Glowing Skin & Radiance Unisex Ayurveda, 100 g With Free Face Pack Applicator Brush",
            "Img_url": "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Glowey-01_3122f22c-16b1-4dfe-ab7e-f5a4e16c2aaa_1024x1024.jpg?v=1631708103",
            "Price1": "454",
            "Price": "309",
            "Rating": "5",
            "Review": "644",
            "dis":"Bella Vita Organic's Eyelift Under Eye Cream Gel makes for a great companion for reducing dark circles, dullness and puffy eyes. It is curated with natural cucumber extract, tulsi, jojoba oil, almond oil & pure aloe-vera gel, meant for everyday...",
            "Qty": 1
          },
          {
            "Category": "face",
            "Name": "DryGlow Natural Face Wash For Dry Skin With Papaya, Saffron, Turmeric, Aloe, Brightening & Hydrating Sulfate Paraben Free for Men, Women, Unisex - 115gm",
            "Img_url": "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/DryGlow-01_1024x1024.jpg?v=1620725250",
            "Price1": "359",
            "Price": "301",
            "Rating": "4",
            "Review": "55",
            "dis":"Bella Vita Organic's Eyelift Under Eye Cream Gel makes for a great companion for reducing dark circles, dullness and puffy eyes. It is curated with natural cucumber extract, tulsi, jojoba oil, almond oil & pure aloe-vera gel, meant for everyday...",
            "Qty": 1
          },
          {
            "Category": "face",
            "Name": "PapyBlem Pigmentation Blemish Cream Gel For Skin Brightening with Papaya & Saffron - 85gm",
            "Img_url": "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/PapyblemFaceGel-01_1024x1024.jpg?v=1632988046g",
            "Price1": "487",
            "Price": "422",
            "Rating": "5",
            "Review": "645",
            "dis":"Bella Vita Organic's Eyelift Under Eye Cream Gel makes for a great companion for reducing dark circles, dullness and puffy eyes. It is curated with natural cucumber extract, tulsi, jojoba oil, almond oil & pure aloe-vera gel, meant for everyday...",
            "Qty": 1
          },
          {
            "Category": "face",
            "Name": "NicoLips Lip Lightening Scrub For Dark, Dry, Chapped & Damaged Lips Unisex - 20 gm",
            "Img_url": "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/NicoLips-01_1024x1024.jpg?v=1626433148",
            "Price1": "299",
            "Price": "288",
            "Rating": "4",
            "Review": "111",
            "dis":"Bella Vita Organic's Eyelift Under Eye Cream Gel makes for a great companion for reducing dark circles, dullness and puffy eyes. It is curated with natural cucumber extract, tulsi, jojoba oil, almond oil & pure aloe-vera gel, meant for everyday...",
            "Qty": 1
          },
          {
            "Category": "face",
            "Name": "Vitamin C-Glow Natural Face Wash With Coffee, Neem & Mint, Oil Control, Acne, Brightening & Glow, Men & Women - 225 ml",
            "Img_url": "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/FaceWash-01_1024x1024.jpg?v=1626177693",
            "Price1": "546",
            "Price": "399",
            "Rating": "4",
            "Review": "201",
            "dis":"Bella Vita Organic's Eyelift Under Eye Cream Gel makes for a great companion for reducing dark circles, dullness and puffy eyes. It is curated with natural cucumber extract, tulsi, jojoba oil, almond oil & pure aloe-vera gel, meant for everyday...",
            "Qty": 1
          },
          {
            "Category": "face",
            "Name": "Oil Control Face Wash with Activated Charcoal For Deep Cleansing, Dirt Removal & Skin Brightening, 115ml",
            "Img_url": "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/oilcontrolfacewash-01_1024x1024.jpg?v=1626505575",
            "Price1": "299",
            "Price": "210",
            "Rating": "4",
            "Review": "287",
            "dis":"Bella Vita Organic's Eyelift Under Eye Cream Gel makes for a great companion for reducing dark circles, dullness and puffy eyes. It is curated with natural cucumber extract, tulsi, jojoba oil, almond oil & pure aloe-vera gel, meant for everyday...",
            "Qty": 1
          },
          {
            "Category": "face",
            "Name": "Anti Acne Face Wash for Oil Control, Pimples Repair & Glow with Neem, Basil, Tea Tree & Aloe - 115g",
            "Img_url": "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/AntiAcneFaceWash-01_1024x1024.jpg?v=1626177072",
            "Price1": "599",
            "Price": "299",
            "Rating": "4",
            "Review": "254",
            "dis":"Bella Vita Organic's Eyelift Under Eye Cream Gel makes for a great companion for reducing dark circles, dullness and puffy eyes. It is curated with natural cucumber extract, tulsi, jojoba oil, almond oil & pure aloe-vera gel, meant for everyday...",
            "Qty": 1
          },
          {
            "Category": "face",
            "Name": "GrowBrow Eyebrows & Eyelash Hair Growth & Volume Oil - 12 ml",
            "Img_url": "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/GrowBrow-01_1024x1024.jpg?v=1630571451",
            "Price1": "199",
            "Price": "155",
            "Rating": "3.5",
            "Review": "599",
            "dis":"Bella Vita Organic's Eyelift Under Eye Cream Gel makes for a great companion for reducing dark circles, dullness and puffy eyes. It is curated with natural cucumber extract, tulsi, jojoba oil, almond oil & pure aloe-vera gel, meant for everyday...",
            "Qty": 1
          },
          {
            "Category": "face",
            "Name": "NicoLips Lip Scrub & NicoBalm Lip Balm Combo For Dry, Chapped & Dark Lips, 20 gm & 8 gm",
            "Img_url": "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/7_3056cc8a-7167-4e4e-8402-e332971d6338_1024x1024.jpg?v=1624539646",
            "Price1": "454",
            "Price": "311",
            "Rating": "5",
            "Review": "687",
            "dis":"Bella Vita Organic's Eyelift Under Eye Cream Gel makes for a great companion for reducing dark circles, dullness and puffy eyes. It is curated with natural cucumber extract, tulsi, jojoba oil, almond oil & pure aloe-vera gel, meant for everyday...",
            "Qty": 1
          },
          {
            "Category": "face",
            "Name": "Multani Mitti Ubtan Plus Face Glow Pack For Oil Control, De-Tan, Acne, Pimples - 80 g Unisex For All Skin Types",
            "Img_url": "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/UBTANPLUS-01_8081e672-4c0f-41ac-bda5-bf983c844826_1024x1024.jpg?v=1632576315",
            "Price1": "499",
            "Price": "199",
            "Rating": "4",
            "Review": "635",
            "dis":"Bella Vita Organic's Eyelift Under Eye Cream Gel makes for a great companion for reducing dark circles, dullness and puffy eyes. It is curated with natural cucumber extract, tulsi, jojoba oil, almond oil & pure aloe-vera gel, meant for everyday...",
            "Qty": 1
          },
          {
            "Category": "face",
            "Name": "Anti Acne, Pimple Scar Spots Removal Cream Gel For Men & Women - 85 gm",
            "Img_url": "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Anti-Acne-face-Gel-01_1024x1024.jpg?v=1626177200",
            "Price1": "299",
            "Price": "205",
            "Rating": "4",
            "Review": "354",
            "dis":"Bella Vita Organic's Eyelift Under Eye Cream Gel makes for a great companion for reducing dark circles, dullness and puffy eyes. It is curated with natural cucumber extract, tulsi, jojoba oil, almond oil & pure aloe-vera gel, meant for everyday...",
            "Qty": 1
          },
          {
            "Category": "face",
            "Name": "NicoBalm Natural Lip Balm For Dry and Chapped Lips - 8gm",
            "Img_url": "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/NicoBalm-01_1024x1024.jpg?v=1632896556",
            "Price1": "555",
            "Price": "399",
            "Rating": "5",
            "Review": "345",
            "dis":"Bella Vita Organic's Eyelift Under Eye Cream Gel makes for a great companion for reducing dark circles, dullness and puffy eyes. It is curated with natural cucumber extract, tulsi, jojoba oil, almond oil & pure aloe-vera gel, meant for everyday...",
            "Qty": 1
          }]`;
  }
  
  // sticky bellacash and whatapp icon display
  
  let st = document.getElementsByClassName("sticky-view")[0];
  st.innerHTML = sticky_view();
  whatsappChat();
  
  // displaying slider items
  const sdata = JSON.parse(bestsellerList());
  slider(sdata, 0);
  
  // new Arrival slider
  const new_arrival = JSON.parse(newArrivalList());
  slider(new_arrival, 1);
  
  // combo slider
  const combo = JSON.parse(comboSetList());
  slider(combo, 2);
  
  // customer review
  let review = [
    "https://cdn.shopify.com/s/files/1/0054/6665/2718/files/6.png?v=1603863416",
    "https://cdn.shopify.com/s/files/1/0054/6665/2718/files/5.png?v=1603863398",
    "https://cdn.shopify.com/s/files/1/0054/6665/2718/files/1.png?v=1603863344",
    "https://cdn.shopify.com/s/files/1/0054/6665/2718/files/2.png?v=1603863359",
  ];
  let rev = [
    "./images/home/rev-1.jpg",
    "./images/home/rev-0.jpg",
    "./images/home/rev-2.jpg",
    "./images/home/rev-3.jpg",
  ];
  
  let image = document.querySelector(".image>img");
  let re = document.querySelector(".cust-text img");
  let i = 0;
  setInterval(function () {
    image.src = review[(i + 1) % 4];
    re.src = rev[(i + 1) % 4];
    i++;
    if (i == 4) i = 0;
  }, 4000);