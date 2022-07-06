let sucess = document.getElementById("sucess");
let container = document.getElementById("container");
let home_btn = document.getElementById("home_btn");
let spinner = document.getElementById("spin");
let uid = localStorage.getItem("uid");

// Razorpay Integration

// setting total amount
getCartProducts(uid);
async function getCartProducts(uid) {
  let res = await fetch(
    `http://localhost:4000/cart/api/${uid}`
  );
  data = await res.json();
  // cart_items = data.bag;
  localStorage.setItem("totalprice", data.totalval);
  document.getElementById("price_pro").innerHTML = `₹ ${data.totalval}.00`;

  razorStart();
}
function razorStart() {
  const price = localStorage.getItem("totalprice");
  const totalAmount = +price * 100;

  //generating order id
  var orderId;
  $(document).ready(function () {
    var settings = {
      url: "/create/orderId",
      method: "POST",
      timeout: 0,
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify({
        amount: `${totalAmount}`,
      }),
    };

    //creates new orderId everytime
    $.ajax(settings).done(function (response) {
      orderId = response.orderId;
      $("button").show();
    });
  });

  // proceding to payment through razorpay
  document.getElementById("rzp-button1").onclick = function (e) {
    var options = {
      key: "rzp_test_gW4ujGNEEezk8e",
      amount: `${totalAmount}`, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "Bella Vita Organic",
      description: "Providing Ayurvedic Solutions",
      image:
        "https://image.pitchbook.com/P7Hrk1j3T4pMuYiMUSYxglFJ6Mr1618573989989_200x200",
      order_id: orderId,
      theme: {
        color: "#fbd400",
      },
      callback_url: "/razorpay/success",
    };
    var rzp1 = new Razorpay(options);
    rzp1.open();
    e.preventDefault();
  };
}

// redirecting to home page
home_btn.addEventListener("click", () => {
  window.location.href = "http://localhost:4000";
});

document.querySelectorAll(".payment_method").forEach((el) => {
  el.addEventListener("mouseover", () => {
    el.style.backgroundColor = "teal";
    el.style.color = "white";
  });
  el.addEventListener("mouseleave", () => {
    el.style.backgroundColor = "white";
    el.style.color = "black";
  });
});

// form validation

let submit = document.getElementById("card_btn");
submit.addEventListener("click", () => {
  let card_number = document.getElementById("card_number");
  let card_name = document.getElementById("card_name");
  let doe = document.getElementById("doe");
  let cvv = document.getElementById("cvv");

  if (
    card_number.value === "" ||
    card_name.value === "" ||
    doe.value === "" ||
    cvv.value === ""
  ) {
    alert("All the fields are mandatory");
  } else {
    container.style.opacity = "0.2";
    spinner.style.display = "block";
    setTimeout(() => {
      sucess.style.display = "block";
    }, 2000);
    // setTimeout(() => {
    //   alert("Hey Provide Path");
    // }, 5000);
  }
  card_number.value === ""
    ? (card_number.style.borderColor = "red")
    : (card_number.style.borderColor = "rgb(219, 216, 216)");

  card_name.value === ""
    ? (card_name.style.borderColor = "red")
    : (card_name.style.borderColor = "rgb(219, 216, 216)");

  doe.value === ""
    ? (doe.style.borderColor = "red")
    : (doe.style.borderColor = "rgb(219, 216, 216)");

  cvv.value === ""
    ? (cvv.style.borderColor = "red")
    : (cvv.style.borderColor = "rgb(219, 216, 216)");
});