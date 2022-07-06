
//sticky navbar
window.onscroll = function () {
    myFunction();
  };
  
  var navbar = document.getElementById("navbar");
  var sticky = navbar.offsetTop;
  
  function myFunction() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky");
      navbar.classList.add("header_box_shadow");
    } else {
      navbar.classList.remove("sticky");
      navbar.classList.remove("header_box_shadow");
    }
  }
  
  // onclick event for admin & cart icon
  let close_btn = document.querySelectorAll(".closebtn");
  let admin_icon = document.getElementById("header_admin");
  let cart_icon = document.getElementById("cart_icon_div");
  let checkout_btn = document.getElementById("checkout_btn");
  let view_cart = document.getElementById("view_cart_btn");
  let search_icon = document.getElementById("header_search");
  let search_box = document.getElementById("search_box");
  let close_search = document.getElementById("close_search");
  let company_logo = document.getElementById("company_logo");
  // let check_status = JSON.parse(localStorage.getItem("check_status"));
  
  close_btn[0].addEventListener("click", () => {
    document.getElementById("mySidenav_login").style.width = "0";
  });
  
  close_btn[1].addEventListener("click", () => {
    document.getElementById("mySidenav_cart").style.width = "0";
    //   window.location.reload();
  });
  
  admin_icon.addEventListener("click", () => {
    document.getElementById("mySidenav_login").style.width = "360px";
  });
  
  cart_icon.addEventListener("click", () => {
    document.getElementById("mySidenav_cart").style.width = "360px";
  });
  
  search_icon.addEventListener("click", () => {
    search_box.style.display = "block";
  });
  
  close_search.addEventListener("click", () => {
    search_box.style.display = "none";
  });
  
  company_logo.addEventListener("click", () => {
    window.location.href = "http://localhost:4000/";
  });
  
  // variable declaration
  
  let login = document.getElementById("side_navbar_login");
  let login_details = document.getElementById("side_navbar_login_details");
  let login_name = document.getElementById("login_name");
  let login_btn = document.getElementById("login_btn");
  let logout = document.getElementById("logout_btn");
  let create_acc_btn = document.getElementById("create_acc_btn");
  let header_cart_qty = document.getElementById("header_cart_qty");
  let side_navbar_cart = document.getElementById("side_navbar_cart");
  let empty_cart = document.getElementById("side_navbar_empty_cart");
  let sidenav_cart_items = document.getElementById("sidenav_cart_items");
  let header_all_pro = document.getElementById("header_all_pro");
  
  // Create Account
  create_acc_btn.addEventListener("click", () => {
    window.location.href = "http://localhost:4000/signup";
  });
  
  // Redirecting to Product Page from side navbar
  header_all_pro.addEventListener("click", () => {
    window.location.href =
      "http://localhost:4000/products";
  });
  
  // Redirecting to Checkout Page from side navbar
  checkout_btn.addEventListener("click", () => {
    let check_status = JSON.parse(localStorage.getItem("check_status"));
    if (!check_status) {
      let obj = {
        cart: 0,
        delivery: 1,
        cod: 0,
        payment: 0,
      };
      localStorage.setItem("check_status", JSON.stringify(obj));
      window.location.href =
        "http://localhost:4000/checkout";
    } else {
      window.location.href =
        "http://localhost:4000/checkout";
    }
  });
  
  // Getting User Info
  
  let uid = localStorage.getItem("uid");
  if (!uid) {
    console.log("hello_2");
    login.style.display = "block";
    empty_cart.style.display = "block";
  } else {
    console.log("hello");
    getUserDetails(uid);
    async function getUserDetails(uid) {
      const response = await fetch(
        `http://localhost:4000/users/${uid}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
  
      const data = await response.json();
      login_name.innerHTML = `Hi, ${data.first_name}`;
      login_details.style.display = "block";
    }
    getCartProducts(uid);
    async function getCartProducts(uid) {
      let res = await fetch(
        `http://localhost:4000/cart/api/${uid}`
      );
      let data = await res.json();
      if (data.quantity === 0) {
        empty_cart.style.display = "block";
      } else {
        header_cart_qty.innerText = `${data.quantity}`;
        side_navbar_cart.style.display = "block";
        displayItems(data.bag);
        let total_price = document.getElementById("total_price");
        total_price.innerText = `Rs. ${data.totalval}`;
      }
    }
  }
  // Displaying cart items on side navbar
  
  function displayItems(arr) {
    sidenav_cart_items.innerHTML = null;
    arr.map((el, index) => {
      let item_div = document.createElement("div");
      item_div.setAttribute("id", "header_item_div");
  
      let img_div = document.createElement("div");
      img_div.setAttribute("id", "header_img_div");
  
      let img = document.createElement("img");
      img.src = el.Img_url;
  
      let content_div = document.createElement("div");
      content_div.setAttribute("id", "header_content_div");
  
      let title_div = document.createElement("div");
      title_div.setAttribute("id", "header_title_div");
  
      let name = document.createElement("p");
      name.innerText = `${el.Name}`;
  
      let del_pro = document.createElement("span");
      del_pro.setAttribute("id", "delete_pro");
  
      let price_div = document.createElement("div");
      price_div.setAttribute("id", "header_price_div");
      price_div.innerHTML = `<span>${el.Qty} X</span> <p>Rs.${el.Price}</p>`;
  
      title_div.append(name);
      content_div.append(title_div, price_div);
      img_div.append(img);
      item_div.append(img_div, content_div);
      sidenav_cart_items.append(item_div);
    });
  }
  // Redirecting to cart page from side navbar
  
  view_cart.addEventListener("click", () => {
    gotoCart();
  });
  function gotoCart() {
    let userId = localStorage.getItem("uid");
    window.location.href = `http://localhost:4000/cart/${userId}`;
  }
  
  // Login Authentification
  
  login_btn.addEventListener("click", () => {
    Login();
  });
  
  async function Login() {
    let login_data = {
      email: document.getElementById("email").value,
      password: document.getElementById("pwd").value,
    };
  
    if (login_data.email === "" || login_data.password === "") {
      document.getElementById("error_message").innerHTML =
        "All fields are mandatory";
      document.getElementById("error_message").style.visibility = "visible";
    } else {
      login_data = JSON.stringify(login_data);
  
      let login_api = `http://localhost:4000/users/login`;
  
      //fetch request
  
      let resposne = await fetch(login_api, {
        method: "POST",
  
        body: login_data,
  
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      let data = await resposne.json();
  
      if (data.status === true) {
        localStorage.setItem("uid", data.details.user_id);
        alert("Login Sucessfull");
        window.location.href = "http://localhost:4000/";
      } else {
        document.getElementById("error_message").innerHTML = `${data.message}`;
        document.getElementById("error_message").style.visibility = "visible";
      }
    }
  }
  
  // Logout
  
  logout.addEventListener("click", () => {
    alert("logout sucessfull");
    localStorage.clear();
    window.location.href = "http://localhost:4000/";
  });