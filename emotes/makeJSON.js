/*
  this is meant to run locally with NODE and it just creates a JSON file with
  all the emotes data from the subfolders 

  we might want to use rawgit but it seems to be working fine with their own raw. 
  https://rawgit.com/sinfulBA/DubX-Script/master
 */

var fs = require('fs');
var path = require('path');

var contents = fs.readFileSync(__dirname + "/emotes.json");
var jsonContent = JSON.parse(contents);

var sets = [
  'cats',
  'gifs',
  'logos',
  'misc',
  'tastycat',
  'userfaces'
];

var tastyJSON = {
  template: '//raw.githubusercontent.com/sinfulBA/DubX-Script/master/emotes/',
  emotes: { }
};

function getEmotes(set) {
  for (var emote in jsonContent[set]) {
    var url = jsonContent[set][emote].url.split('/');
    if (emote.indexOf('amp;') >= 0){ 
      emote = emote.replace("amp;", ""); 
    }
    tastyJSON.emotes[emote.toLowerCase()] = set + "/" + url[url.length - 1];
  }
}

sets.forEach(function(val,i,r){
  getEmotes(val);
});

console.log(tastyJSON);

fs.writeFile(__dirname + "/tastyemotes.json", JSON.stringify(tastyJSON), function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
}); 