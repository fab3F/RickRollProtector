let rickrolls = [];

let rawFile = new XMLHttpRequest();
rawFile.open("GET", "https://fab3F.github.io/rickrollprotector/list.txt", true);
rawFile.onreadystatechange = function (){
  if(rawFile.readyState === 4){
    if(rawFile.status === 200 || rawFile.status == 0){
      rickrolls = rawFile.responseText.split("\n");
    }
  }
}
rawFile.send(null);

if(typeof location !== 'undefined' && rickrolls.some(id => location.href.includes(id)) && !location.href.includes("rickrollprotector=bypass")) {
  if (navigator.userAgent.indexOf("Firefox") > 0) {
    location = chrome.runtime.getURL("error-firefox.html")+"?"+location.href;
  }else{
    location = chrome.runtime.getURL("error-chrome.html")+"?"+location.href;
  }
}