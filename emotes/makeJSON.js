/*
  this is meant to run locally with NODE and it just creates a JSON file with
  all the emotes data from the subfolders 

  we might want to use rawgit but it seems to be working fin with their own raw. 
  https://rawgit.com/sinfulBA/DubX-Script/master
 */

var fs = require('fs');
var path = require('path');

var tastyJSON = {
  template: '//raw.githubusercontent.com/sinfulBA/DubX-Script/master/emotes/',
  emotes: {
    'cats' : {},
    'gifs' : {},
    'logos' : {},
    'misc' : {},
    'tastycat' : {},
    'userfaces' : {}
  }
};


var sets = [
  'cats',
  'gifs',
  'logos',
  'misc',
  'tastycat',
  'userfaces'
];

function getFiles(set){
  
  var files = fs.readdirSync(set);
  var ext, base;

  for (var i in files) {
    ext = path.extname(files[i]);
    base = path.basename(files[i], ext);

    if (ext === ".gif" || ext === ".png") {
      tastyJSON.emotes[set][base] = set + '/' + files[i];
    }
  }
}

sets.forEach(function(val,i,r){
  getFiles(val);
});

console.log(tastyJSON);

fs.writeFile("tastyemotes.json", JSON.stringify(tastyJSON), function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
}); 