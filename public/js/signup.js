function validateEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  
  function isValidPassword(string) {
    const re =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%#*?&])[A-Za-z\d@$!%*#?&]{6,}$/;
    return re.test(string);
  }
  
  async function signupUser(e) {
    e.preventDefault();
  
    let fName = document.getElementById("fname").value.trim();
    let lName = document.getElementById("lname").value.trim();
    let email = document.getElementById("signup_email").value.trim();
    let password = document.getElementById("signup_password").value.trim();
  
    if (
      fName === "" ||
      lName === "" ||
      isValidPassword(password) == false ||
      validateEmail(email) == false
    ) {
      if (fName === "") {
        document.getElementById("fname").style.borderColor = "red";
      } else {
        document.getElementById("fname").style.borderColor = "rgb(219, 216, 216)";
      }
      if (lName === "") {
        document.getElementById("lname").style.borderColor = "red";
      } else {
        document.getElementById("lname").style.borderColor = "rgb(219, 216, 216)";
      }
      if (isValidPassword(password) == false) {
        document.getElementById("signup_password").style.borderColor = "red";
        document.getElementById("error").innerText =
          "please enter all fields password should be alphanumeric with capital and small case letters and 1 special character.length should be atleast 6 chars long and email address as name@email.com";
      } else {
        document.getElementById("signup_password").style.borderColor =
          "rgb(219, 216, 216)";
      }
      if (validateEmail(email) == false) {
        document.getElementById("signup_email").style.borderColor = "red";
        document.getElementById("error").innerText =
          "please enter all fields password should be alphanumeric with capital and small case letters and 1 special character.length should be atleast 6 chars long and email address as name@email.com";
      } else {
        document.getElementById("signup_email").style.borderColor =
          "rgb(219, 216, 216)";
      }
    } else {
      document.getElementById("error").innerText = null;
  
      let json = JSON.stringify({
        first_name: fName,
        last_name: lName,
        email: email,
        password: password,
      });
      // console.log(json);
  
      let response = await fetch(
        "http://localhost:4000/users/createUser",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: json,
        }
      );
  
      response = await response.json();
      // console.log("response:", response);
  
      if (response.status === true) {
        alert("Account created successfully");
        window.location.href = "http://localhost:4000/";
      } else {
        alert("error");
      }
    }
}