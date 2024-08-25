// function submitform() {
//   if (typeof localStorage != "undefined") {
//     localStorage.fname = document.getElementById("name").value;
//     localStorage.lname = document.getElementById("lname").value;
//     localStorage.age = document.getElementById("age").value;

//     // Store selected gender
//     // var genderradio = document.querySelector('input[name="gender"]:checked');
//     // if (genderradio) {
//     //   localStorage.setItem("gender", genderradio.value);
//     // } else {
//     //   console.log("No gender selected");
//     // }
//     localStorage.phone=document.getElementById("phone").value;
//     localStorage.email=document.getElementById("email").value;
//     localStorage.district=document.getElementById("district").value;
//     // localStorage.sport=document.getElementById("")
//     var sports=[];
//     var checkboxs=document.querySelectorAll('input[name="sport"]:checked');
//     checkboxs.forEach(function(checkbox){
//         sports.push(checkbox.value);
//     });
//     localStorage.setItem("sport",JSON.stringify(sports));
//   }
//   document.getElementById("dev").submit();
// }

// function setData() {
//   if (typeof localStorage != "undefined") {
//     document.getElementById("show1").innerHTML = localStorage.fname || ""; // Show fname or empty string if not set
//     document.getElementById("show2").innerHTML = localStorage.lname || ""; // Show lname or empty string if not set
//     document.getElementById("show3").innerHTML = localStorage.age || ""; // Show age or empty string if not set
//     document.getElementById("show4").innerHTML =localStorage.getItem("gender");
//     document.getElementById("show5").innerHTML=localStorage.phone;
//     document.getElementById("show6").innerHTML=localStorage.email;
//     document.getElementById("show7").innerHTML=localStorage.district;
//     var store=JSON.parse(localStorage.getItem("sport"))||[];
//     document.getElementById("show8").innerHTML=store.join(",")||"";
//  }

//   // Clear stored values after displaying them
//   localStorage.fname = "";
//   localStorage.lname = "";
//   localStorage.age = "";
//   localStorage.gender = ""; // Clear gender
//   localStorage.phone = ""; // Clear phone
//   localStorage.email = ""; 
//   localStorage.district = "";
//   localStorage.sport = ""; // Clear email
// }
