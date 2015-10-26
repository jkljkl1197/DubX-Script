(function twitchEmotes(){
  var twitchAPI = "https://twitchemotes.com/api_cache/v2/global.json";
  var twitchEmotesObj;
  $.getJSON( twitchAPI)
  .success(function(data) {
    console.log(data);
    twitchEmotesObj = JSON.parse(data);
  });


   Dubtrack.Events.bind("realtime:chat-message", hello.afk_chat_respond);
})();