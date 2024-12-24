const rickrolls = [
  "dQw4w9WgXcQ",
  "oHg5SJYRHA0",
  "cvh0nX08nRw",
  "V-_O7nl0Ii0",
  "2ocykBzWDiM",
  "j5a0jTc9S10",
  "HPk-VhRjNI8",
  "LLFhKaqnWwk",
  "xvFZjo5PgG0",
  "doEqUhFiQS4",
  "6_b7RDuLwcI",
  "G8iEMVr7GFg",
  "AyOqGRjVtls",
  "6mhmcwmgWbA",
  "SpZ2FsEfwP4",
  "H01BwSD9eyQ",
  "nrsnN23tmUA",
  "8mkofgRW1II",
  "rAx5LIul1N8",
  "sO4wVSA9UPs",
  "rrs0B_LM898",
  "epyRUp0BhrA",
  "uK5WDo_3s7s",
  "wzSVOcgKq04",
  "7B--1KArxow",
  "rbsPu1z3ugQ",
  "ptw2FLKXDQE",
  "E50L-JYWm3w",
  "8leAAwMIigI",
  "ByqFY-Boq5Y",
  "E4ihJMQUmUQ",
  "cjBHXvBYw5s",
  "xaazUgEKuVA",
  "TzXXHVhGXTQ",
  "Uj1ykZWtPYI",
  "EE-xtCF3T94",
  "V-_O7nl0Ii0",
  "cqF6M25kqq4",
  "0SoNH07Slj0",
  "xfr64zoBTAQ",
  "j5a0jTc9S10",
  "dPmZqsQNzGA",
  "nHRbZW097Uk",
  "BjDebmqFRuc",
  "Gc2u6AFImn8",
  "8VFzHYtOARw",
  "cSAp9sBzPbc",
  "Dx5i1t0mN78",
  "Oo0twK2ZbLU",
  "lXMskKTw3Bc",
  "7z_1E8VGJOw",
  "VgojnNgmgVs",
  "5wOXc03RwVA",
  "Rtqkxkt7Hyg",
  "Yb6dZ1IFlKc",
  "o-YBDTqX_ZU",
  "zipwduCA9iU",
  "RL0rynUZt3Y",
  "eBGIQ7ZuuiU",
  "mCdA4bJAGGk",
  "H8ZH_mkfPUY",
  "iik25wqIuFo",
  "mTXzFkYX7-g",
  "GtL1huin9EE",
  "p7YXXieghto",
  "QdezFxHfatw",
  "K_YivhIREM4",
  "GHMjD0Lp5DY",
  "34Ig3X59_qA",
  "3BFTio5296w",
  "DLzxrzFCyOs",
  "EpX1_YJPGAY",
  "ZXpThNX9IRc",
  "-DdkOB0htO0",
  "hvL1339luv0",
  "tgTUtfb0Ok8",
  "AyOqGRjVtls",
  "AVlzryCQg8s",
  "5lUYJpoNt4g",
  "mTXzFkYX7-g",
  "DsC8jQXRbQE",
  "qbnt_vmk4fU",
  "K7XHy8nppf4",
  "N9w1lCZfaWI",
  "SwA2R9OyamE",
  "O91DT1pR1ew",
  "xdcXNHyE6Cg",
  "QMW4AqbuSGg",
  "xm3YgoEiEDc",
  "PMH54eetPSo",
  "di14EZRpMVo",
  "131wf0e6ACk",
  "8G0omjVSh_U",
  "cErgMJSgpv0",
  "xsrVWXm1J64",
  "jzwMjOl8Iyo",
  "YxjY_YTksKM",
  "0AmZvXwuyM4",
  "db3aMa-401A",
  "6MIkXsFHeBk",
  "88iUchyd86M",
  "mW61VTLhNjQ",
  "rTga41r3a4s",
  "2v39YzT8AAQ",
  "8ybW48rKBME",
  "xbXoWRs2C8M",
  "7lEodsmjeQU",
  "3tcl2ornvU0",
  "BBJa32lCaaY",
  "SXHMnicI6Pg",
  "96GnOB1iZQI",
  "WXSLN5ZF9cs",
  "Ves2WbZXals",
  "Fw4hyBqj5xM",
  "41iWg91yFv0",
  "C_rf1OFyjTM",
  "KFf7XMF1Y4Q",
  "nX84KctJtG0",
  "9O9lRpm-0sg",
  "tVwUn4r4Byo",
  "a1iHrWtCOZ8",
  "LNew965FXZs",
  "-p7XUf4GvVU",
  "VmBOL3nfee8",
  "M3DvMiHxckA",
  "nsCIeklgp1M",
  "tNpECYA5VXo",
  "Svj1bZz2mXw",
  "fMCN-b0ic_k",
  "hB7CDrVnNCs",
  "LWlZ6Vd_0c4",
  "ub82Xb1C8os",
  "IO9XlQrEt2Y",
  "3HrSN7176XI",
  "-51AfyMqnpI",
  "0-16Z3GwNk4",
  "d0tGBCCE0lc",
  "CttYJgr9vgQ",
  "v7ScGV5128A",
  "5q0gJs2eYB4",
  "F4qicK39ISc",
  "QB7ACr7pUuE",
  "LBIDhZJpD6s",
  "MH63dQUSUnw"
];

if(typeof location !== 'undefined' && rickrolls.some(id => location.href.includes(id)) && !location.href.includes("rickrollprotector=bypass")) {

  var userAgent = navigator.userAgent;
  if (userAgent.indexOf("MSIE") > 0 || userAgent.indexOf("Trident/") > 0) {
  }
  else if (userAgent.indexOf("Edge") > 0) {
  }
  else if (userAgent.indexOf("Chrome") > 0 && !(userAgent.indexOf("OPR") > 0 || userAgent.indexOf("Opera") > 0)) {
    location = chrome.runtime.getURL("error-chrome.html")+"?"+location.href;
  }
  else if (userAgent.indexOf("Firefox") > 0) {
    location = chrome.runtime.getURL("error-firefox.html")+"?"+location.href;
  }
  else if (userAgent.indexOf("OPR") > 0 || userAgent.indexOf("Opera") > 0) {
    const brands = navigator.userAgentData.brands;
    const isOperaGX = brands.some(brand => {
      return brand.brand === 'Opera GX';
    });
    if(isOperaGX){
      location = chrome.runtime.getURL("error-opera.html")+"?"+location.href;
    }else{
      //Dann normales opera
      location = chrome.runtime.getURL("error-opera.html")+"?"+location.href;
    }
  }
  else if (userAgent.indexOf("Brave") > 0 && !(userAgent.indexOf("OPR") > 0 || userAgent.indexOf("Opera") > 0)) {
  }
  else {
    location = chrome.runtime.getURL("error-opera.html")+"?"+location.href;
  }
}

