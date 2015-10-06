//optionShutDown.js
var isShutDown = false;
function optionShutDown() {
	var isOn
		if (!isShutDown) {
			isShutDown = true
			isOn = "on";
			function chatLog(e){
				var a=new Dubtrack.View.chatLoadingItem;a.$el.text(e).appendTo(Dubtrack.room.chat._messagesEl)
			}
			function killDubX() {
				setTimeout(function(){chatLog('Shutting down Dub X..'); }, 1000);
				setTimeout(function(){throw new Error('Shutting down..'); }, 3000);
			};
		} else {
			//I did this for lolz
			isShutDown = false
			isOn = "off";
			console.log("How did you get here?");
		}
};

$('.pY').click(optionShutDown);
