// because of CORS issues,  I have to embed the JSON here (parsed) 
// source:  https://twitchemotes.com/apidocs 
var GitHubLocation = 'https://rawgit.com/FranciscoG/DubX-Script/dev/js/';

$.getScript(GitHubLocation + 'twitchemotes.js', function(data){
  console.log(data);
  
  var re = new RegExp(":(" + Object.keys(twitchObject.emotes).join("|") + "):" ,"ig"); 

  function makeImage(id){
    return '<img class="emoji" src="//static-cdn.jtvnw.net/emoticons/v1/'+id+'/1.0" />';
  }
  function replaceTextWithEmote(){
    var $last = $('.chat-main .text').last();
    var emoted = $last.html().replace(re, function(matched, p1){
      console.log(matched, p1);
      if (typeof twitchObject.emotes[p1] !== 'undefined'){
        return makeImage(twitchObject.emotes[p1].image_id);
      }
    });
    $last.html(emoted);
  }
  Dubtrack.Events.bind("realtime:chat-message", replaceTextWithEmote);
});


