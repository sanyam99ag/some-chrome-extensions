console.log('background running');

chrome.runtime.onMessage.addListener(receiver);

window.word = "practice extension";

function receiver(request, sender, sendResponse) {
  console.log(request);
  word = request.text;
}
