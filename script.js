function validation() {
  var a = document.getElementById("name").value;
  if (a == "") {
    alert("Pleast fill first name");
    return false;
  }
  var b = document.getElementById("lname").value;
  if (b == "") {
    alert("Pleast fill last name");
    return false;
  }
  var c = document.getElementById("age").value;
  if (c == "") {
    alert("Pleast fill age");
    return false;
  }
  var genderInput = document.querySelector('input[name="gender"]:checked');
  if (genderInput) {
    localStorage.setItem("gender", genderInput.value);
  } else {
    alert("Please select a gender.");
    return false;
  }

  var e = document.getElementById("district");
  var drop = e.options[e.selectedIndex].value;
  //   var drop1 = district.options[e.selectedIndex].text;
  if (drop == 0) {
    alert("Please select a district");
    return false;
  }

  var phone = document.getElementById("phone").value;
  var po = /^\d{10}$/;
  if (phone == "") {
    alert("Please fill phone number");
    return false;
  } else if (!po.test(phone)) {
    alert("Please enter valid phone number");
    return false;
  }

  var sam = document.getElementById("email").value;
  var em = /^[a-z0-9_.]+@[a-z]+\.[a-z]{2,}$/;
  if (sam == "") {
    alert("Please enter email address");
    return false;
  } else if (!em.test(sam)) {
    alert("Please enter valid email address");
    return false;
  }
  var sports =
    Array.from(document.querySelectorAll('input[name="sport"]:checked'))
      .length > 0;

  if (!sports) {
    alert("Please select at least one sport");
    return false;
  }

  if (typeof localStorage != "undefined") {
    localStorage.fname = document.getElementById("name").value;
    localStorage.lname = document.getElementById("lname").value;
    localStorage.age = document.getElementById("age").value;

    // Store selected gender
    // var genderradio = document.querySelector('input[name="gender"]:checked');
    // if (genderradio) {
    //   localStorage.setItem("gender", genderradio.value);
    // } else {
    //   console.log("No gender selected");
    // }
    localStorage.phone = document.getElementById("phone").value;
    localStorage.email = document.getElementById("email").value;
    localStorage.district = document.getElementById("district").value;
    // localStorage.sport=document.getElementById("")
    var sports = [];
    var checkboxs = document.querySelectorAll('input[name="sport"]:checked');
    checkboxs.forEach(function (checkbox) {
      sports.push(checkbox.value);
    });
    localStorage.setItem("sport", JSON.stringify(sports));
  }
  // return true;
  document.getElementById("dev").submit();
}

function setData() {
  if (typeof localStorage != "undefined") {
    document.getElementById("show1").innerHTML = localStorage.fname || ""; // Show fname or empty string if not set
    document.getElementById("show2").innerHTML = localStorage.lname || ""; // Show lname or empty string if not set
    document.getElementById("show3").innerHTML = localStorage.age || ""; // Show age or empty string if not set
    document.getElementById("show4").innerHTML = localStorage.getItem("gender");
    document.getElementById("show5").innerHTML = localStorage.phone;
    document.getElementById("show6").innerHTML = localStorage.email;
    document.getElementById("show7").innerHTML = localStorage.district;
    var store = JSON.parse(localStorage.getItem("sport")) || [];
    document.getElementById("show8").innerHTML = store.join(",") || "";
  }

  // Clear stored values after displaying them
  localStorage.fname = "";
  localStorage.lname = "";
  localStorage.age = "";
  localStorage.gender = ""; // Clear gender
  localStorage.phone = ""; // Clear phone
  localStorage.email = "";
  localStorage.district = "";
  localStorage.sport = ""; // Clear email
}
