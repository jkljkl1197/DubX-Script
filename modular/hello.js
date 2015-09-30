//Hello.JS
var community = location.pathname.replace(/^\/|\/$/g, '')
if (community === "join/nightblue3") {
	if(!autoDubX) {
		var autoDubX = true;
			alert('Sorry, but Dub X has been restricted in this community. For more information, please contact the developers of the script. (AutodubX is still available. Just click on the button to activate it.)');
			//REMOVE VIDEO CHAT & COMMENTS POPUPS
			var autoDub = '<li><button class="dub" style="font-size: 1em;height: 32px;margin-right: 16px;border-radius: 0.1875em;">Autodub</button></li>'; 
			var parentDub = document.querySelector('.user-header-menu');
			$(parentDub).prepend(autoDub);
			//Autodub
			var autoDubToggle = false;
		
			function autoDubClick() {
				var isOn
					if (!autoDubToggle) {
						autoDubToggle = true
						isOn = "on";
						$('.dubup').click();
						function advanceVote() {
							$('.dubup').click();
						};
						$('.currentSong').bind("DOMSubtreeModified", advanceVote);
					} else {
						autoDubToggle = false
						isOn = "off";
						$('.currentSong').off();
					}
			
			};
			$('.dub').click(autoDubClick);
	} else {
		alert('AutodubX is already running!');
	}
} else {
	if(!dubX) {
		var dubX = true;
        //Ref 1: User Interface
        $('.user-header-menu').prepend('<li><button class="relate" style="font-size: 1em;height: 32px;margin-right: 16px;border-radius: 0.1875em;">DUB X</button></li>');
        $('body').prepend('<style>.hideElement{display:none !important;}.fullscreenController{min-height: 3em !important;}.fullscreenFix{padding:3em 0 3em 0 !important}.fullscreenParent{display:block !important;margin:0 !important;width:100vw !important;padding:0 !important;max-width:100vw !important}.fullscreenLeft{width:calc(98.9vw - 428px) !important;float:left !important;height:calc(99.2vh - 88px) !important}.fullscreenRight{right:0 !important;float:right !important;margin-right:0 !important;position:fixed !important;height:calc(100vh - 88px) !important}.fullscreenChat{height:100% !important;position:absolute !important;right:0 !important;width:428px !important}.fullscreenChatChild{height:calc(100vh - 210px) !important}.fullscreenVideo{height:100% !important}.fullscreenVideoChild{height:calc(100% - 55px) !important}.relateX{display:none;position:fixed;right:0;top:48px;z-index:2147483647;width:314px;background:#111;padding:9px 27px;border-left:6px solid #f0f;height:100vh;height:calc(100vh - 88px);overflow:scroll}.textY{text-transform:uppercase;font-size:.5em;border-bottom:1px solid #202020}.liY{padding:1em 0;border-bottom:1px solid #202020}.liY:hover{background:#333}.liY .option{color:#f0f;font-weight:700;margin:0}.liY .title{margin:0;font-size:14px}.isOption{float:right;color:#0ff}</style><div class="relateX"> <div class="hideY"></div><div class="textY"><h1>Dub X Settings</h1></div><ul class="ulY"> <li class="liY aY"> <p class="option">Autovote<span class="isOption isOff">OFF</span></p><p class="title">Automatically clicks the UPDUB button.</p></li><li class="liY bY"> <p class="option">Fullscreen<span class="isOption isOn">OFF</span></p><p class="title">Cover the area of the window with the video.</p></li><li class="liY cY"> <p class="option">Notifications<span class="isOption isOn">N/A</span></p><p class="title">We are waiting for Dubtrack to release their API before adding this feature.</p></li><li class="liY dY"> <p class="option">Ping<span class="isOption isOn">N/A</span></p><p class="title">We are waiting for Dubtrack to release their API before adding this feature.</p></li><li class="liY eY"> <p class="option">Staff<span class="isOption isOn">N/A</span></p><p class="title">We are waiting for Dubtrack to release their API before adding this feature.</p></li><li class="liY fY"> <p class="option">Work Mode<span class="isOption isOn">OFF</span></p><p class="title">Hides the chat and the video for the workplace.</p></li><li class="liY hY"> <p class="option">Split Chat<span class="isOption isOn">OFF</span></p><p class="title">Differentiates the color of the incoming chat to make it easier to view.</p></li><li class="liY gY"> <p class="option">Bug report<span class="isOption isOn">CLICK</span></p><p class="title">Will open a dialogue to send a bug report to our Slack.</p></li><li class="liY iY"> <p class="option">Feature Request<span class="isOption isOn">CLICK</span></p><p class="title">Will open a dialogue to send a feature request to our Slack.</p></li><li class="liY jY"> <p class="option">Custom CSS<span class="isOption isOn">CLICK</span></p><p class="title">Will open a dialouge to store a custom CSS file.</p></li><li class="liY mY"> <p class="option">Custom Background<span class="isOption isOn">CLICK</span></p><p class="title">Will open a dialouge to store a custom background link.</p></li><li class="liY kY"> <p class="option">Chat Only<span class="isOption isOn">OFF</span></p><p class="title">Will hide the video and center align the chat.</p></li><li class="liY lY"> <p class="option">Hide Background<span class="isOption isOn">OFF</span></p><p class="title">Will hide the background for the Dubtrack community.</p></li></ul></div>');

        var relateY = document.querySelector('.relate');
        $(relateY).click(function() {
            $('.relateX').slideToggle("fast");
        });

        //Ref 2: returnOk
        function returnOk() {
            console.log('Ok');
        }

        //Ref 3: getScript
        var GitHubLocation = 'https://rawgit.com/sinfulBA/DubX-Script/master/modular/';
        $.getScript(GitHubLocation + 'optionAutovote.js', returnOk);
        $.getScript(GitHubLocation + 'optionFullscreen.js', returnOk);
        $.getScript(GitHubLocation + 'optionWorkMode.js', returnOk);
        $.getScript(GitHubLocation + 'bigReport.js', returnOk);
        $.getScript(GitHubLocation + 'optionSplitChat.js', returnOk);
        $.getScript(GitHubLocation + 'featureReport.js', returnOk);
        $.getScript(GitHubLocation + 'optionVideoChatToggle.js', returnOk);
        $.getScript(GitHubLocation + 'boothDuration.js', returnOk);
        $.getScript(GitHubLocation + 'userCss.js', returnOk);
        $.getScript(GitHubLocation + 'optionChatWindow.js', returnOk);
        $.getScript(GitHubLocation + 'optionHideBackground.js', returnOk);
        $.getScript(GitHubLocation + 'userBackground.js', returnOk);
    } else {
        alert('Dub X is already running!');
	}
};
