function edit() {
    var element = document.getElementById("rickelement000");
    if (element) {
        element.innerHTML = "0.1.1.0";
    }
}
document.addEventListener("DOMContentLoaded", edit);