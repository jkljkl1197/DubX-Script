// var app = chrome.runtime.getBackgroundPage();

function reload() {
	chrome.runtime.reload();
}

function website() {
  openInNewTab('https://dubx.net/');
}

function donate() {
  openInNewTab('https://dubx.net/donate.html');
}

function openInNewTab(url) {
  var win = window.open(url, '_blank');
  win.focus();
}

document.getElementById('reload').addEventListener('click', reload);
document.getElementById('website').addEventListener('click', website);
document.getElementById('donate').addEventListener('click', donate);
