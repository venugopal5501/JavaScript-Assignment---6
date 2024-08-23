function submitform() {
    if (typeof (localStorage) != "undefined") {
        localStorage.fname = document.getElementById("name").value;
        localStorage.lname = document.getElementById("lname").value;
        localStorage.age = document.getElementById("age").value;
        var genderRadios = document.getElementsByName("gender"); // Corrected typo here
        for(var i = 0; i < genderRadios.length; i++) {
            if(genderRadios[i].checked) {
                localStorage.gender = genderRadios[i].value;
                break;
            }
        }
    }
    document.getElementById("dev").submit();
}

function setData() {
    if (typeof(localStorage) != "undefined") {
        document.getElementById("show1").innerHTML = localStorage.fname || ""; // Show fname or empty string if not set
        document.getElementById("show2").innerHTML = localStorage.lname || ""; // Show lname or empty string if not set
        document.getElementById("show3").innerHTML = localStorage.age || ""; // Show age or empty string if not set
        document.getElementById("show4").innerHTML = localStorage.gender || ""; // Show gender or empty string if not set
    }
    localStorage.fname = "";
    localStorage.lname = "";
    localStorage.age = "";
    localStorage.gender = ""; // Clear stored values
}
