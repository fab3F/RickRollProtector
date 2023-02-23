const rickrolls = [];

fetch ("https://fab3F.github.io/rickrollprotector/list.txt")
.then(x => x.text())
.then(y => rickrolls = y.split("\n"))


if(typeof location !== 'undefined' && rickrolls.some(id => location.href.includes(id)) && !location.href.includes("rickrollprotector=bypass")) {
  if (navigator.userAgent.indexOf("Firefox") > 0) {
    location = chrome.runtime.getURL("error-firefox.html")+"?"+location.href;
  }else{
    location = chrome.runtime.getURL("error-chrome.html")+"?"+location.href;
  }
}

