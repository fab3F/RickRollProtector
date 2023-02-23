document.getElementById("proceed-button").addEventListener("click", function() {
  location.href = window.location.search.slice(1) + "&rickrollprotector=bypass";
});
  
document.getElementById("primary-button").addEventListener("click", function() {
  if (history.length > 2) {
    history.go(-2);
  } else {
    window.close();
    location.href = "about:blank";
  }
});