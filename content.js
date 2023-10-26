function edit() {
    var element = document.getElementById("rickelement000");
    if (element) {
        element.innerHTML = "yes";
    }
}
document.addEventListener("DOMContentLoaded", edit);