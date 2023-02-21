document.getElementById("proceed-button").addEventListener("click", function() {
  location.href = window.location.search.slice(1) + "?antirickroll=bypass";
});
  
document.getElementById("primary-button").addEventListener("click", function() {
  if (history.length > 2) {
    history.go(-2);
  } else {
    location.href = "about:blank";
  }
});