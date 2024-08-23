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
    var radio = document.querySelector('input[name="gender"]:checked')
    if (!radio) {
        alert("Please select gender");
        return false;
    }
    var e = document.getElementById("district");
    var drop = district.options[e.selectedIndex].value;
    var drop1 = district.options[e.selectedIndex].text;
    if (drop == 0) {
        alert("Please select a district");
        return false;
    }

    var phone = document.getElementById("phone").value;
    var po = /^\d{10}$/
    if ((phone == "")) {
        alert("Please fill phone number");
        return false;

    }
    else if (!po.test(phone)) {
        alert("Please enter valid phone number");
        return false;
    }

    var sam = document.getElementById("email").value;
    var em = /^[a-z0-9_.]+@[a-z]+\.[a-z]{2,}$/
    if (sam == "") {
        alert("Please enter email address")
    }
    else if (!em.test(sam)) {
        alert("Please enter valid email address")
    }
    var sports = Array.from(document.querySelectorAll('input[name="sport"]:checked')).length > 0;
    if (!sports) {
        if (!sports) {
            alert("Please select at least one sport");
            return false;
        }

    }
    return false;

}