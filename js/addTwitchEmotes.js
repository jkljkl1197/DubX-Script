// because of CORS issues,  I have to embed the JSON here (parsed) 
// source:  https://twitchemotes.com/apidocs 
var GitHubLocation = 'https://rawgit.com/FranciscoG/DubX-Script/dev/js/';

$.getScript(GitHubLocation + 'twitchemotes.js')
  .done(function(data){
    console.log(data);
    var twitchObject = JSON.parse(data);
    var re = new RegExp(Object.keys(twitchObject.emotes).join("|"),"g"); 

    function makeImage(id){
      return '<img class="emoji" src="//static-cdn.jtvnw.net/emoticons/v1/'+id+'/1.0" />';
    }
    function replaceTextWithEmote(){
      var $last = $('.chat-main .text').last();
      var emoted = $last.html().replace(re, function(matched){
        return makeImage(twitchObject.emotes[matched].image_id);
      });
      $last.html(emoted);
    }
    Dubtrack.Events.bind("realtime:chat-message", replaceTextWithEmote);
  });


