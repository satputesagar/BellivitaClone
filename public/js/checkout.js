function content(cart_items, location, sub_total, sub_total_bottom, uid) {
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
      let checkout_user_details = document.getElementById(
        "checkout_user_details"
      );
      checkout_user_details.innerHTML = `${data.first_name}(${data.email})`;
    }
  
    display(cart_items);
  
    function display(cart_items) {
      cart_items.map((el, index) => {
        let item = document.createElement("div");
        item.setAttribute("id", "item");
  
        //image div
        let item_img_div = document.createElement("div");
        item_img_div.setAttribute("id", "item_img_div");
  
        let img = document.createElement("img");
        img.setAttribute("id", "item_img");
        img.src = el.Img_url;
  
        let qty_circle = document.createElement("div");
        qty_circle.setAttribute("id", "qty_circle");
  
        let qty = document.createElement("p");
        qty.innerHTML = `${el.Qty}`;
  
        //title div
        let title_div = document.createElement("div");
        title_div.setAttribute("id", "title_div");
  
        let count_div = document.createElement("div");
        count_div.setAttribute("id", "count_div");
  
        let decre = document.createElement("p");
        decre.setAttribute("id", "decre");
        decre.innerHTML = `-`;
  
        decre.addEventListener("click", () => {
          if (el.Qty > 1) {
            decrease(el._id);
  
            function decrease(documentId) {
              fetch(
                `http://localhost:4000/cart/qtyd/${documentId}`,
                { method: "PATCH" }
              )
                .then((res) => {
                  window.location.href = `http://localhost:4000/checkout`;
                })
                .catch((err) => {
                  console.log("err:", err);
                });
            }
          }
        });
  
        let count_value = document.createElement("p");
        count_value.setAttribute("id", "count_value");
        count_value.innerHTML = `${el.Qty}`;
  
        let incre = document.createElement("p");
        incre.setAttribute("id", "incre");
        incre.innerHTML = `+`;
  
        incre.addEventListener("click", () => {
          increase(el._id);
          function increase(documentId) {
            fetch(
              `http://localhost:4000/cart/qtyi/${documentId}`,
              { method: "PATCH" }
            )
              .then((res) => {
                window.location.href = `http://localhost:4000/checkout`;
              })
              .catch((err) => {
                console.log("err:", err);
              });
          }
        });
  
        let title = document.createElement("p");
        title.setAttribute("id", "item_name");
        title.innerHTML = `${el.Name}`;
  
        // price div
        let price_div = document.createElement("div");
        price_div.setAttribute("id", "price_div");
  
        let price = document.createElement("div");
        price.setAttribute("id", "item_price");
        price.innerHTML = `₹${el.Price * el.Qty}.00`;
  
        price_div.append(price);
        count_div.append(decre, count_value, incre);
        title_div.append(title, count_div);
        qty_circle.append(qty);
        item_img_div.append(qty_circle, img);
        item.append(item_img_div, title_div, price_div);
        location.append(item);
      });
    }
  }
  
  // form validation
  function formValidate(uid) {
    let submit = document.getElementById("btn");
    submit.addEventListener("click", () => {
      let check_status = JSON.parse(localStorage.getItem("check_status"));
  
      let fname = document.getElementById("floatingInput1");
      let lname = document.getElementById("floatingInput2");
      let location = document.getElementById("floatingInput3");
      let area = document.getElementById("floatingInput4");
      let city = document.getElementById("floatingInput5");
      let state = document.getElementById("floatingInput6");
      let pincode = document.getElementById("floatingInput7");
      let phone = document.getElementById("floatingInput8");
  
      let address = [];
  
      if (
        fname.value === "" ||
        lname.value === "" ||
        location.value === "" ||
        area.value === "" ||
        city.value === "" ||
        state.value === "State" ||
        pincode.value === "" ||
        phone.value === ""
      ) {
        alert("All the fields are mandatory");
      } else {
        alert("Address added sucessfully");
        address.push(
          fname.value,
          lname.value,
          location.value,
          area.value,
          city.value,
          state.value,
          pincode.value,
          phone.value
        );
        sendAdd(uid);
        async function sendAdd(uid) {
          let user_str = address.join(",");
          let userAdd = {
            user_id: uid,
            address: user_str,
          };
  
          let user_add = JSON.stringify(userAdd);
          console.log("user_add:", user_add);
  
          let add_api = `http://localhost:4000/address`;
  
          //fetch request
  
          let res = await fetch(add_api, {
            method: "POST",
  
            body: user_add,
  
            headers: {
              "Content-Type": "application/json",
            },
          });
  
          let data = await res.json();
          console.log("data:", data);
        }
        check_status.cod = "1";
        check_status.delivery = "0";
        check_status.cart = "0";
        check_status.payment = "0";
        localStorage.setItem("check_status", JSON.stringify(check_status));
        window.location.href = `http://localhost:4000/checkout`;
      }
      fname.value === ""
        ? (fname.style.borderColor = "red")
        : (fname.style.borderColor = "rgb(219, 216, 216)");
  
      lname.value === ""
        ? (lname.style.borderColor = "red")
        : (lname.style.borderColor = "rgb(219, 216, 216)");
  
      location.value === ""
        ? (location.style.borderColor = "red")
        : (location.style.borderColor = "rgb(219, 216, 216)");
  
      area.value === ""
        ? (area.style.borderColor = "red")
        : (area.style.borderColor = "rgb(219, 216, 216)");
  
      city.value === ""
        ? (city.style.borderColor = "red")
        : (city.style.borderColor = "rgb(219, 216, 216)");
  
      state.value === "State"
        ? (state.style.borderColor = "red")
        : (state.style.borderColor = "rgb(219, 216, 216)");
  
      pincode.value === ""
        ? (pincode.style.borderColor = "red")
        : (pincode.style.borderColor = "rgb(219, 216, 216)");
  
      phone.value === ""
        ? (phone.style.borderColor = "red")
        : (phone.style.borderColor = "rgb(219, 216, 216)");
    });
  }
  
  export { content, formValidate };