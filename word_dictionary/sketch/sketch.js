// Wordnik API key:
// let api_key = '/?api_key=48dd8...................7da2484d5c7'

function setup() {
  noCanvas();

  let bgpage = chrome.extension.getBackgroundPage();
  let word = bgpage.word.trim();

  let url = `http://api.wordnik.com:80/v4/word.json/
  ${word}
  /definitions?limit=1
  &includeRelated=false
  &sourceDictionaries=all
  &useCanonical=false
  &includeTags=false
  &api_key=48dd829661......................888cc7da2484d5c7
  `
  url = url.replace(/\s+/g, '');
  loadJSON(url, gotData);

  function gotData(data) {
    createP(data[0].text).style('font-size', '38pt');
  }

}
