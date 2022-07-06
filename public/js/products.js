let products;

data = async (page, size) => {
  //    console.log("page","size",page,size)
  let pagButton = document.querySelectorAll(".first");
  for (let i = 0; i < pagButton.length; i++) {
    if (i == page - 1) {
      pagButton[i].style.backgroundColor = "#f96302";
      pagButton[i].style.color = "white";
    } else {
      pagButton[i].style.backgroundColor = "white";
      pagButton[i].style.color = "black";
    }
  }
  const response = await fetch(
    `http://localhost:4000/products/api?page=${page}&size=${size}`
  );
  products = await response.json();

  showproducts(products);

  //    localStorage.setItem("productsData",JSON.stringify(productsData))
};

data(1, 12);

let count = 0;
let btn = document.querySelector(".container-fluid > button");
btn.addEventListener("click", () => {
  count++;
  if (count % 2 == 1) {
    let p = document.querySelector(".container-fluid > p");
    p.innerHTML =
      "At Bella Vita Organic, we strive to provide the best non-toxic, ayurvedic, and natural beauty products online. Our journey has awarded us with unparalleled derma knowledge, which enabled us to build the best beauty product brand using premium close-to-nature botanicals and safe ingredients. We passionately focus on the purity and efficiency of formulations with months of research through our own manufacturing unit and a dedicated Research & Development team. Our products are certified natural and inspired by Ayurveda recipes of the ministry of AYUSH. Every unit of our products is developed, confirming the highest quality control standards and thousands of cruelty-free testing. You will surely fall in love with our range of natural and ayurvedic products for your overall well-being. All of our products are suitable for various health and wellness needs and are available online on different e-commerce platforms, making it accessible and feasible for all. Try our range of high-grade beauty products online that are created, ensuring the quality and purity of conception and formulation. Spread your positive feedback across your friends and family to ensure no one is left behind to get the utmost self-care.";
    let cont = document.querySelector(".container-fluid");
    cont.style.height = "350px";
    btn.textContent = "READ LESS";
    btn.style.backgroundColor = "white";
    let mediaQuery = window.matchMedia("(max-width: 400px)");
    if (mediaQuery.matches) {
      p.style.lineHeight = "23px";
      cont.style.height = "850px";
    }
  } else {
    let p = document.querySelector(".container-fluid > p");
    p.innerHTML =
      "At Bella Vita Organic, we strive to provide the best non-toxic, ayurvedic, and natural beauty products online. Our journey has awarded us with unparalleled derma knowledge, which enabled us to build the best beauty product brand using premium close-to-nature botanicals and safe ingredients....";
    let cont = document.querySelector(".container-fluid");
    cont.style.height = "250px";
    btn.textContent = "READ MORE";
    btn.style.backgroundColor = "white";
    let mediaQuery = window.matchMedia("(max-width: 400px)");
    if (mediaQuery.matches) {
      p.style.lineHeight = "23px";
      cont.style.height = "850px";
      cont.style.height = "400px";
    }
  }
});

//sort by function
let sort = document.querySelector(".drop");
let options = document.querySelector(".options");
let clk_count = 0;
sort.addEventListener("click", function () {
  clk_count++;
  if (clk_count % 2 == 1) {
    options.style.display = "block";
  } else {
    options.style.display = "none";
  }
});

//add to cart funtion when user click on buy now button
let arr = JSON.parse(localStorage.getItem("cart_items")) || [];
function addTo_cart(e) {
  arr.push(e);
  localStorage.setItem("cart_items", JSON.stringify(arr));
  let header_cart_qty = document.getElementById("header_cart_qty");
  header_cart_qty.innerHTML = `${arr.length}`;
}

// grid horizontal css column one
let grid = document.querySelector(".one");
grid.addEventListener("click", function () {
  horizontalGrid(products);
  grid.style.border = "1px solid black";
  two.style.border = "1px solid #cccecf";
  three.style.border = "1px solid #cccecf";
  four.style.border = "1px solid #cccecf";
  document.querySelector(".five").style.border = "1px solid #cccecf";
});
let right = document.querySelector(".right");
function horizontalGrid(data) {
  document.querySelector(".right").innerHTML = "";
  document.querySelector(".right").style.gridTemplateColumns = "96%";
  data.map(function (item) {
    let boxes = document.createElement("div");
    boxes.setAttribute("class", "boxes");
    let imgDiv = document.createElement("div");
    imgDiv.setAttribute("class", "imgDiv");
    let trendImg = document.createElement("img");
    trendImg.src =
      "https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Bestsellers-tag.png?v=4831700483207635039";
    let img = document.createElement("img");
    img.setAttribute("class", "mainImg");
    img.src = item.Img_url;
    let info = document.createElement("div");
    info.setAttribute("class", "Boxinfo");
    let div1 = document.createElement("div");
    div1.innerHTML = item.Name;
    let div2 = document.createElement("div");
    div2.innerHTML = item.dis;
    let div3 = document.createElement("div");
    let sbdiv = document.createElement("div");
    sbdiv.innerHTML = "Rs. " + item.Price1;
    let sbdiv2 = document.createElement("div");
    sbdiv2.innerHTML = "Rs. " + item.Price;
    let button = document.createElement("button");
    button.innerHTML = "BUY NOW";
    button.addEventListener("click", function () {
      addToBag(item);
    });
    div3.append(sbdiv, sbdiv2);
    info.append(div1, div2, div3, button);
    imgDiv.append(trendImg, img);
    boxes.append(imgDiv, info);
    document.querySelector(".right").append(boxes);
  });
}

//grid column four default

let four = document.querySelector(".four");
four.addEventListener("click", function () {
  window.location.reload();
  //  showproducts(products)
  grid.style.border = "1px solid black";
});

//grid colunm two
let two = document.querySelector(".two");
let mediaQuery = window.matchMedia("(max-width: 400px)");
two.addEventListener("click", function () {
  if (mediaQuery.matches) {
    window.location.reload();
  } else {
    document.querySelector(".right").innerHTML = "";
    two.style.border = "1px solid black";
    grid.style.border = "1px solid #cccecf";
    four.style.border = "1px solid #cccecf";
    document.querySelector(".five").style.border = "1px solid #cccecf";
    right.style.gridTemplateColumns = "48% 48%";
    showproduct2(products);
    function showproduct2(data) {
      data.map(function (item) {
        //maindiv
        let maindiv = document.createElement("div");
        maindiv.setAttribute("class", "maind");
        //tagdiv
        let tag_img = document.createElement("img");
        //tag_img
        tag_img.setAttribute("class", "tag_img2");
        tag_img.src =
          "https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Bestsellers-tag.png?v=4831700483207635039";
        //main_img
        let imgdiv = document.createElement("div");
        imgdiv.setAttribute("class", "imgdiv2");
        let img = document.createElement("img");
        //on hover buttton
        let bt = document.createElement("button");
        bt.innerHTML = "BUY NOW";
        bt.addEventListener("click", function () {
          addToBag(item);
        });
        let btt = document.createElement("button");
        btt.setAttribute("class", "quk");
        btt.innerHTML = "QUICK VIEW";
        //onHover functions change img src
        img.addEventListener("mouseover", () => {
          img.src =
            "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Exfoliate-02_800x.jpg?v=1626345624";
          img.style.opacity = "0.4";
          bt.style.display = "block";
          btt.style.display = "block";
          bt.style.backgroundColor = "black";
          btt.style.backgroundColor = "black";
        });
        img.addEventListener("mouseout", () => {
          img.src = item.Img_url;
          img.style.opacity = "1";
          bt.style.display = "none";
          btt.style.display = "none";
        });
        //on hover button show and change to green
        bt.addEventListener("mouseenter", () => {
          img.src =
            "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Exfoliate-02_800x.jpg?v=1626345624";
          bt.style.backgroundColor = "#52b359";
          img.style.opacity = "0.4";
          bt.style.display = "block";
          btt.style.display = "block";
        });
        img.setAttribute("class", "img2");
        img.src = item.Img_url;
        //info div
        let infodiv = document.createElement("div");
        infodiv.setAttribute("class", "infodiv2");
        let title = document.createElement("div");
        title.setAttribute("class", "text2");
        title.innerHTML = item.Name;
        let rate = document.createElement("div");
        let rate1 = document.createElement("div");
        //rating fun change rating acc to value
        if (item.Rating == 3) {
          rate1.innerHTML =
            '<ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon>';
        } else if (item.Rating == 4) {
          rate1.innerHTML =
            '<ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon>';
        } else if (item.Rating == 5) {
          rate1.innerHTML =
            '<ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon>';
        } else if (item.Rating == 4.5) {
          rate1.innerHTML =
            '<ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star-half"></ion-icon>';
        }
        let rate2 = document.createElement("div");
        rate2.innerHTML = item.Review + " reviews";
        rate.append(rate1, rate2);
        //price div
        let price = document.createElement("div");
        let div = document.createElement("div");
        div.innerHTML = "Rs." + item.Price1;
        let div2 = document.createElement("div");
        div2.innerHTML = "Rs." + item.Price;
        let save = document.createElement("div");
        //saved price
        save.innerHTML = "(Save Rs." + (item.Price1 - item.Price) + ")";
        infodiv.append(title, rate, price, save);
        let btn = document.createElement("button");
        btn.innerHTML = "BUY NOW";
        infodiv.append(btn);
        //append
        price.append(div, div2);
        imgdiv.append(tag_img, bt, img, btt);
        maindiv.append(imgdiv, infodiv);
        document.querySelector(".right").append(maindiv);
      });
    }
  }
});

//grid colunm three
let three = document.querySelector(".three");
three.addEventListener("click", function () {
  document.querySelector(".right").innerHTML = "";
  three.style.border = "1px solid black";
  grid.style.border = "1px solid #cccecf";
  four.style.border = "1px solid #cccecf";
  two.style.border = "1px solid #cccecf";
  document.querySelector(".five").style.border = "1px solid #cccecf";
  right.style.gridTemplateColumns = "32% 32% 32%";
  showproduct3(products);
  function showproduct3(data) {
    data.map(function (item) {
      //maindiv
      let maindiv = document.createElement("div");
      maindiv.setAttribute("class", "maindiv3");
      //tagdiv
      let tag_img = document.createElement("img");
      //tag_img
      tag_img.setAttribute("class", "tag_img3");
      tag_img.src =
        "https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Bestsellers-tag.png?v=4831700483207635039";
      //main_img
      let imgdiv = document.createElement("div");
      imgdiv.setAttribute("class", "imgdiv3");
      let img = document.createElement("img");
      //on hover buttton
      let bt = document.createElement("button");
      bt.innerHTML = "BUY NOW";
      let btt = document.createElement("button");
      btt.setAttribute("class", "quk");
      btt.innerHTML = "QUICK VIEW";
      //onHover functions change img src
      img.addEventListener("mouseover", () => {
        img.src =
          "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Exfoliate-02_800x.jpg?v=1626345624";
        img.style.opacity = "0.4";
        bt.style.display = "block";
        btt.style.display = "block";
        bt.style.backgroundColor = "black";
        btt.style.backgroundColor = "black";
      });
      img.addEventListener("mouseout", () => {
        img.src = item.Img_url;
        img.style.opacity = "1";
        bt.style.display = "none";
        btt.style.display = "none";
      });
      //on hover button show and change to green
      bt.addEventListener("mouseenter", () => {
        img.src =
          "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Exfoliate-02_800x.jpg?v=1626345624";
        bt.style.backgroundColor = "#52b359";
        img.style.opacity = "0.4";
        bt.style.display = "block";
        btt.style.display = "block";
      });
      img.setAttribute("class", "img3");
      img.src = item.Img_url;
      //info div
      let infodiv = document.createElement("div");
      infodiv.setAttribute("class", "infodiv3");
      let title = document.createElement("div");
      title.setAttribute("class", "text2");
      title.innerHTML = item.Name;
      let rate = document.createElement("div");
      let rate1 = document.createElement("div");
      //rating fun change rating acc to value
      if (item.Rating == 3) {
        rate1.innerHTML =
          '<ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon>';
      } else if (item.Rating == 4) {
        rate1.innerHTML =
          '<ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon>';
      } else if (item.Rating == 5) {
        rate1.innerHTML =
          '<ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon>';
      } else if (item.Rating == 4.5) {
        rate1.innerHTML =
          '<ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star-half"></ion-icon>';
      }
      let rate2 = document.createElement("div");
      rate2.innerHTML = item.Review + " reviews";
      rate.append(rate1, rate2);
      //price div
      let price = document.createElement("div");
      let div = document.createElement("div");
      div.innerHTML = "Rs." + item.Price1;
      let div2 = document.createElement("div");
      div2.innerHTML = "Rs." + item.Price;
      let save = document.createElement("div");
      //saved price
      save.innerHTML = "(Save Rs." + (item.Price1 - item.Price) + ")";
      infodiv.append(title, rate, price, save);
      let btn = document.createElement("button");
      btn.innerHTML = "BUY NOW";
      infodiv.append(btn);
      //append
      price.append(div, div2);
      imgdiv.append(tag_img, bt, img, btt);
      maindiv.append(imgdiv, infodiv);
      document.querySelector(".right").append(maindiv);
    });
  }
});

//grid column five
let five = document.querySelector(".five");
five.addEventListener("click", function () {
  document.querySelector(".right").innerHTML = "";
  right.style.gridTemplateColumns = "18% 18% 18% 18% 18%";
  five.style.border = "1px solid  black";
  three.style.border = "1px solid  #cccecf";
  grid.style.border = "1px solid #cccecf";
  four.style.border = "1px solid #cccecf";
  two.style.border = "1px solid #cccecf";
  showproduct5(products);
  function showproduct5(data) {
    data.map(function (item) {
      //maindiv
      let maindiv = document.createElement("div");
      maindiv.setAttribute("class", "maindiv5");
      //tagdiv
      let tag_img = document.createElement("img");
      //tag_img
      tag_img.setAttribute("class", "tag_img5");
      tag_img.src =
        "https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Bestsellers-tag.png?v=4831700483207635039";
      //main_img
      let imgdiv = document.createElement("div");
      imgdiv.setAttribute("class", "imgdiv5");
      let img = document.createElement("img");
      //on hover buttton
      let bt = document.createElement("button");
      bt.innerHTML = "BUY NOW";
      let btt = document.createElement("button");
      btt.setAttribute("class", "quk");
      btt.innerHTML = "QUICK VIEW";
      //onHover functions change img src
      img.addEventListener("mouseover", () => {
        img.src =
          "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Exfoliate-02_800x.jpg?v=1626345624";
        img.style.opacity = "0.4";
        bt.style.display = "block";
        btt.style.display = "block";
        bt.style.backgroundColor = "black";
        btt.style.backgroundColor = "black";
      });
      img.addEventListener("mouseout", () => {
        img.src = item.Img_url;
        img.style.opacity = "1";
        bt.style.display = "none";
        btt.style.display = "none";
      });
      //on hover button show and change to green
      bt.addEventListener("mouseenter", () => {
        img.src =
          "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Exfoliate-02_800x.jpg?v=1626345624";
        bt.style.backgroundColor = "#52b359";
        img.style.opacity = "0.4";
        bt.style.display = "block";
        btt.style.display = "block";
      });
      img.setAttribute("class", "img5");
      img.src = item.Img_url;
      //info div
      let infodiv = document.createElement("div");
      infodiv.setAttribute("class", "infodiv5");
      let title = document.createElement("div");
      title.setAttribute("class", "text2");
      title.innerHTML = item.Name;
      let rate = document.createElement("div");
      let rate1 = document.createElement("div");
      //rating fun change rating acc to value
      if (item.Rating == 3) {
        rate1.innerHTML =
          '<ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon>';
      } else if (item.Rating == 4) {
        rate1.innerHTML =
          '<ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon>';
      } else if (item.Rating == 5) {
        rate1.innerHTML =
          '<ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon>';
      } else if (item.Rating == 4.5) {
        rate1.innerHTML =
          '<ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star-half"></ion-icon>';
      }
      let rate2 = document.createElement("div");
      rate2.innerHTML = item.Review + " reviews";
      rate.append(rate1, rate2);
      //price div
      let price = document.createElement("div");
      let div = document.createElement("div");
      div.innerHTML = "Rs." + item.Price1;
      let div2 = document.createElement("div");
      div2.innerHTML = "Rs." + item.Price;
      let save = document.createElement("div");
      //saved price
      save.innerHTML = "(Save Rs." + (item.Price1 - item.Price) + ")";
      infodiv.append(title, rate, price, save);
      let btn = document.createElement("button");
      btn.innerHTML = "BUY NOW";
      infodiv.append(btn);
      //append
      price.append(div, div2);
      imgdiv.append(tag_img, bt, img, btt);
      maindiv.append(imgdiv, infodiv);
      document.querySelector(".right").append(maindiv);
    });
  }
});

//left box category accordion js
let acc_clk = 0;
let acc = document.querySelector(".CateAccord");
acc.addEventListener("click", () => {
  acc_clk++;
  if (acc_clk % 2 == 1) {
    document.querySelector(".CateAccord1").style.display = "block";
  } else {
    document.querySelector(".CateAccord1").style.display = "none";
  }
});

//skin_acc
let skin_clk = 0;
let skin_acc = document.querySelector(".skin_acc");
skin_acc.addEventListener("click", () => {
  skin_clk++;
  if (skin_clk % 2 == 1) {
    document.querySelector(".skin_Sacc").style.display = "block";
  } else {
    document.querySelector(".skin_Sacc").style.display = "none";
  }
});

//hair_acc
let hair_ckl = 0;
let hair_acc = document.querySelector(".hair_acc");
hair_acc.addEventListener("click", () => {
  hair_ckl++;
  if (hair_ckl % 2 == 1) {
    document.querySelector(".hair_Sacc").style.display = "block";
  } else {
    document.querySelector(".hair_Sacc").style.display = "none";
  }
});

//face_acc
let face_ckl = 0;
let face_acc = document.querySelector(".face_acc");
face_acc.addEventListener("click", () => {
  face_ckl++;
  if (face_ckl % 2 == 1) {
    document.querySelector(".face_Sacc").style.display = "block";
  } else {
    document.querySelector(".face_Sacc").style.display = "none";
  }
});

//body_acc
let body_ckl = 0;
let body_acc = document.querySelector(".body_acc");
body_acc.addEventListener("click", () => {
  body_ckl++;
  if (body_ckl % 2 == 1) {
    document.querySelector(".body_Sacc").style.display = "block";
  } else {
    document.querySelector(".body_Sacc").style.display = "none";
  }
});

//perfume_acc
let perfume_ckl = 0;
let perfume_acc = document.querySelector(".perfume_acc");
perfume_acc.addEventListener("click", () => {
  perfume_ckl++;
  if (perfume_ckl % 2 == 1) {
    document.querySelector(".perfume_Sacc").style.display = "block";
  } else {
    document.querySelector(".perfume_Sacc").style.display = "none";
  }
});

//Concern_acc
let conc_ckl = 0;
let ConcAccord = document.querySelector(".ConcAccord");
ConcAccord.addEventListener("click", () => {
  conc_ckl++;
  if (conc_ckl % 2 == 1) {
    document.querySelector(".ConcAccord1").style.display = "block";
  } else {
    document.querySelector(".ConcAccord1").style.display = "none";
  }
});
//Ingredient_acc
let ing_ckl = 0;
let IngAccord = document.querySelector(".IngAccord");
IngAccord.addEventListener("click", () => {
  ing_ckl++;
  if (ing_ckl % 2 == 1) {
    document.querySelector(".IngAccord1").style.display = "block";
  } else {
    document.querySelector(".IngAccord1").style.display = "none";
  }
});

//Combos acc
let Com_clk = 0;
let ComAccord = document.querySelector(".ComAccord");
ComAccord.addEventListener("click", () => {
  Com_clk++;
  if (Com_clk % 2 == 1) {
    document.querySelector(".ComAccord1").style.display = "block";
  } else {
    document.querySelector(".ComAccord1").style.display = "none";
  }
});
//more acc
let mor_acc = 0;
let MorAccord = document.querySelector(".MorAccord");
MorAccord.addEventListener("click", () => {
  mor_acc++;
  if (mor_acc % 2 == 1) {
    document.querySelector(".MorAccord1").style.display = "block";
  } else {
    document.querySelector(".MorAccord1").style.display = "none";
  }
});
//filter function
document.querySelector(".skin_acc").addEventListener("click", function () {
  right.innerHTML = "";
  products.map(function (item) {
    if (item.Category == "skin") {
      filterProd(item);
    }
  });
});
document.querySelector(".hair_acc").addEventListener("click", function () {
  right.innerHTML = "";
  products.map(function (item) {
    if (item.Category == "hair") {
      filterProd(item);
    }
  });
});
document.querySelector(".face_acc").addEventListener("click", function () {
  right.innerHTML = "";
  products.map(function (item) {
    if (item.Category == "face") {
      filterProd(item);
    }
  });
});
document.querySelector(".body_acc").addEventListener("click", function () {
  right.innerHTML = "";
  products.map(function (item) {
    if (item.Category == "body") {
      filterProd(item);
    }
  });
});
//filterfunction
function filterProd(item) {
  //maindiv
  let maindiv = document.createElement("div");
  maindiv.setAttribute("class", "maindiv");
  //tagdiv
  let tag_img = document.createElement("img");
  //tag_img
  tag_img.setAttribute("class", "tag_img");
  tag_img.src =
    "https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Bestsellers-tag.png?v=4831700483207635039";
  //main_img
  let imgdiv = document.createElement("div");
  imgdiv.setAttribute("class", "imgdiv");
  let img = document.createElement("img");
  //on hover buttton
  let bt = document.createElement("button");
  bt.innerHTML = "BUY NOW";
  bt.addEventListener("click", showappdiv);
  function showappdiv() {
    document.querySelector(".appdiv").style.display = "block";
  }
  bt.addEventListener("click", function () {
    addToBag(item);
  });
  let btt = document.createElement("button");
  btt.addEventListener("click", showResdiv);
  function showResdiv() {
    document.querySelector(".resDivImg").style.display = "block";
  }

  btt.setAttribute("class", "quk");
  // btt.addEventListener("click", )
  btt.innerHTML = "QUICK VIEW";
  //onHover functions change img src
  img.addEventListener("mouseover", () => {
    img.src =
      "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Exfoliate-02_800x.jpg?v=1626345624";
    img.style.opacity = "0.4";
    bt.style.display = "block";
    btt.style.display = "block";
    bt.style.backgroundColor = "black";
    btt.style.backgroundColor = "black";
  });
  img.addEventListener("mouseout", () => {
    img.src = item.Img_url;
    img.style.opacity = "1";
    bt.style.display = "none";
    btt.style.display = "none";
  });
  //on hover button show and change to green
  bt.addEventListener("mouseenter", () => {
    img.src =
      "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Exfoliate-02_800x.jpg?v=1626345624";
    bt.style.backgroundColor = "#52b359";
    img.style.opacity = "0.4";
    bt.style.display = "block";
    btt.style.display = "block";
  });
  img.setAttribute("class", "img");
  img.src = item.Img_url;
  //info div
  let infodiv = document.createElement("div");
  infodiv.setAttribute("class", "infodiv");
  let title = document.createElement("div");
  title.setAttribute("class", "text");
  title.innerHTML = item.Name;
  let rate = document.createElement("div");
  let rate1 = document.createElement("div");
  //rating fun change rating acc to value
  if (item.Rating == 3) {
    rate1.innerHTML =
      '<ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon>';
  } else if (item.Rating == 4) {
    rate1.innerHTML =
      '<ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon>';
  } else if (item.Rating == 5) {
    rate1.innerHTML =
      '<ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon>';
  } else if (item.Rating == 4.5) {
    rate1.innerHTML =
      '<ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star-half"></ion-icon>';
  }
  let rate2 = document.createElement("div");
  rate2.innerHTML = item.Review + " reviews";
  rate.append(rate1, rate2);
  //price div
  let price = document.createElement("div");
  let div = document.createElement("div");
  div.innerHTML = "Rs." + item.Price1;
  let div2 = document.createElement("div");
  div2.innerHTML = "Rs." + item.Price;
  let save = document.createElement("div");
  //saved price
  save.innerHTML = "(Save Rs." + (item.Price1 - item.Price) + ")";
  infodiv.append(title, rate, price, save);
  let btn = document.createElement("button");
  btn.innerHTML = "BUY NOW";
  infodiv.append(btn);
  //append
  price.append(div, div2);
  imgdiv.append(tag_img, bt, img, btt);
  maindiv.append(imgdiv, infodiv);
  document.querySelector(".right").append(maindiv);
}
// sort function
document.querySelector(".low").addEventListener("click", sortP);
function sortP() {
  products.sort(function (a, b) {
    return a.Price - b.Price;
  });
  right.innerHTML = "";
  showproducts(products);
}
document.querySelector(".high").addEventListener("click", sortP1);
function sortP1() {
  products.sort(function (a, b) {
    return b.Price - a.Price;
  });
  right.innerHTML = "";
  showproducts(products);
}

//products show fun gird normal four
showproducts(products);

function showproducts(data) {
  document.querySelector(".right").innerHTML = "";
  data.map(function (item) {
    //maindiv
    let maindiv = document.createElement("div");
    maindiv.setAttribute("class", "maindiv");
    //tagdiv
    let tag_img = document.createElement("img");
    //tag_img
    tag_img.setAttribute("class", "tag_img");
    tag_img.src =
      "https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Bestsellers-tag.png?v=4831700483207635039";
    //main_img
    let imgdiv = document.createElement("div");
    imgdiv.setAttribute("class", "imgdiv");
    let img = document.createElement("img");
    //on hover buttton
    let bt = document.createElement("button");
    bt.innerHTML = "BUY NOW";
    bt.setAttribute("id", "bagadd");
    bt.addEventListener("click", function () {
      showappdiv(item);
    });

    bt.addEventListener("click", function () {
      addToBag(item);
    });
    let btt = document.createElement("button");
    btt.addEventListener("click", function () {
      showResdiv(item);
    });

    btt.setAttribute("class", "quk");
    btt.innerHTML = "QUICK VIEW";
    //onHover functions change img src
    img.addEventListener("mouseover", () => {
      img.src =
        "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Exfoliate-02_800x.jpg?v=1626345624";
      img.style.opacity = "0.4";
      bt.style.display = "block";
      btt.style.display = "block";
      bt.style.backgroundColor = "black";
      btt.style.backgroundColor = "black";
    });
    img.addEventListener("mouseout", () => {
      img.src = item.Img_url;
      img.style.opacity = "1";
      bt.style.display = "none";
      btt.style.display = "none";
    });
    //on hover button show and change to green
    bt.addEventListener("mouseenter", () => {
      img.src =
        "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Exfoliate-02_800x.jpg?v=1626345624";
      bt.style.backgroundColor = "#52b359";
      img.style.opacity = "0.4";
      bt.style.display = "block";
      btt.style.display = "block";
    });
    img.setAttribute("class", "img");
    img.src = item.Img_url;
    //info div
    let infodiv = document.createElement("div");
    infodiv.setAttribute("class", "infodiv");
    let title = document.createElement("div");
    title.setAttribute("class", "text");
    title.innerHTML = item.Name;
    let rate = document.createElement("div");
    let rate1 = document.createElement("div");
    //rating fun change rating acc to value
    if (item.Rating == 3) {
      rate1.innerHTML =
        '<ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon>';
    } else if (item.Rating == 4) {
      rate1.innerHTML =
        '<ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon>';
    } else if (item.Rating == 5) {
      rate1.innerHTML =
        '<ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon>';
    } else if (item.Rating == 4.5) {
      rate1.innerHTML =
        '<ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star-half"></ion-icon>';
    }
    let rate2 = document.createElement("div");
    rate2.innerHTML = item.Review + " reviews";
    rate.append(rate1, rate2);
    //price div
    let price = document.createElement("div");
    let div = document.createElement("div");
    div.innerHTML = "Rs." + item.Price1;
    let div2 = document.createElement("div");
    div2.innerHTML = "Rs." + item.Price;
    let save = document.createElement("div");
    //saved price
    save.innerHTML = "(Save Rs." + (item.Price1 - item.Price) + ")";
    infodiv.append(title, rate, price, save);
    let btn = document.createElement("button");
    btn.innerHTML = "BUY NOW";
    infodiv.append(btn);
    //append
    price.append(div, div2);
    imgdiv.append(tag_img, bt, img, btt);
    maindiv.append(imgdiv, infodiv);
    document.querySelector(".right").append(maindiv);
  });
}
function showResdiv(item) {
  document.querySelector(".resDivImg").style.display = "block";
  document.querySelector(".Img_divv").innerHTML = "";
  document.querySelector(".name").innerHTML = "";
  document.querySelector(".currP").innerHTML = "";
  document.querySelector(".num").innerHTML = "";
  let name = document.createElement("p");
  name.innerHTML = item.Name;
  let img = document.createElement("img");
  img.src = item.Img_url;
  let price = document.createElement("strong");
  let num1 = document.createElement("span");
  num1.innerHTML = "Rs. " + item.Price1;
  let num2 = document.createElement("span");
  num2.innerHTML = "Rs. " + item.Price;
  price.innerHTML = "Subtotal : Rs. " + item.Price;

  document.querySelector(".num").append(num1, num2);
  document.querySelector(".currP").append(price);
  document.querySelector(".name").append(name);
  document.querySelector(".Img_divv").append(img);
}

function showappdiv(item) {
  document.querySelector(".appdiv").style.display = "block";
  document.querySelector(".imgd").innerHTML = "";
  document.querySelector(".nmdiv").innerHTML = "";
  let name = document.createElement("p");
  name.innerHTML = item.Name;
  let img = document.createElement("img");
  img.src = item.Img_url;
  document.querySelector(".nmdiv").append(name);
  document.querySelector(".imgd").append(img);
}

function appdivOpen() {
  document.querySelector(".appdiv").style.display = "block";
  document.querySelector(".resDivImg").style.display = "none";
}
document.querySelector(".cross2").addEventListener("click", closefun1);
function closefun1() {
  document.querySelector(".appdiv").style.display = "none";
  window.location.reload();
}
document.querySelector(".cross").addEventListener("click", closefun);
function closefun() {
  document.querySelector(".resDivImg").style.display = "none";
}

// go to cart and go to checkout function
function gotoCart() {
  let userId = localStorage.getItem("uid");

  window.location.href = `http://localhost:4000/cart/${userId}`;
}
function gotoCheck() {
  let obj = {
    cart: 0,
    delivery: 1,
    cod: 0,
    payment: 0,
  };
  localStorage.setItem("check_status", JSON.stringify(obj));
  window.location.href =
    "http://localhost:4000/checkout";
}

async function addToBag(item) {
  let file = item;
  file["userId"] = localStorage.getItem("uid");

  cartItem = JSON.stringify(file);
  let cartApi = `http://localhost:4000/addtocart`;
  try {
    let res = await fetch(cartApi, {
      method: "POST",
      body: cartItem,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    let data = await res.json();
  } catch (err) {
    console.log(err.message);
  }
}