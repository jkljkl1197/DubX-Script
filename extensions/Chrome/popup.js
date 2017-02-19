// var app = chrome.runtime.getBackgroundPage();

function hello() {
  console.log("Hello Word!")
}

document.getElementById('clickme').addEventListener('click', hello);
