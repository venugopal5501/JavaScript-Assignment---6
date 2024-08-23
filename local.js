function submitform() {
    if (typeof (localStorage) != "undefined") {
        localStorage.fname = document.getElementById("name").value;
        localStorage.lname=document.getElementById("lname").value;
    }
    document.getElementById("dev").submit();
}

function setData() {
    if (typeof (localStorage) != "undefined") {
        document.getElementById("show1").innerHTML = localStorage.fname;
        document.getElementById("show2").innerHTML=localStorage.lname;
    }
    localStorage.fname = "";
}