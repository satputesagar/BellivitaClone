require('dotenv').config();

const express = require("express");

const app = express();
const connect = require("./config/db");
const bodyparser = require("body-parser");
const passport = require("./config/passport");
const Razorpay = require("razorpay");


const userController = require("./controllers/user.controller");
const product_controller = require("./controllers/product.controller");
const cart_controller = require("./controllers/cart.controller");
const addtocart_controller = require("./controllers/addtocart.controller");
const address_controller = require("./controllers/address.controller");



app.use(express.json());
app.set("view engine", "ejs"); // root directory for views views/
app.use(express.static("public"));

app.get("/", function (req, res) {
  res.render("landingPage.ejs", { user_id: "null" });
});

// router
app.use("/products", product_controller);
app.use("/cart", cart_controller);
app.use("/users", userController);

app.use("/addtocart", addtocart_controller);
app.use("/address", address_controller);

app.get("/signup", async (req, res) => {
    res.render("signup.view.ejs", {});
  });
  
  app.use("/checkout", async (req, res) => {
    try {
      res.render("checkout.ejs", {});
    } catch (err) {
      return res.send(err.message);
    }
  });
  
  app.use("/payment", async (req, res) => {
    res.render("payment.ejs", {});
  });

  
 // Google Auth

passport.serializeUser(function (user, callback) {
    callback(null, user);
  });
  
  passport.deserializeUser(function (user, callback) {
    callback(null, user);
  });
  
  app.get(
    "/auth/google",
    passport.authenticate("google", { scope: ["email", "profile"] })
  );
  
  app.get(
    "/auth/google/callback",
    passport.authenticate("google", {
      failureRedirect: "/auth/google/failure",
    }),
    (req, res) => {
      let user_id = req.user.user._id;
      res.render("landingPage", {
        user_id: user_id,
      });
    }
  );
  
  app.get("/auth/google/failure", (req, res) => {
    return res.send("Failure");
  });
  
  //Razorpay
  
  const instance = new Razorpay({
    key_id: "rzp_test_gW4ujGNEEezk8e",
  
    key_secret: "WCx0JYBEIZJFnukupfe2oWhn",
  });
  
  app.post("/create/orderId", (req, res) => {
    console.log("Created orderId request", req.body);
    const amount = Number(req.body.amount);
    var options = {
      amount: String(amount), // amount in the smallest currency unit
      currency: "INR",
      receipt: "rcp1",
    };
    instance.orders.create(options, function (err, order) {
      console.log(order);
      res.send({ orderId: order.id });
    });
  });
  
  app.post("/razorpay/success", (req, res) => {
    // res.send({ message: "payment sucessful" });
    res.render("sucess", {});
  });
  // Connecting with port
  
  const port = process.env.PORT || 4000;
  
  app.listen(port, async () => {
    try {
      await connect();
      console.log(`Listening to the port ${port}`);
    } catch (error) {
      console.log("Database is not connected");
      console.log(error.message);
    }
  }); 