if(!dubX){
	//Hello.JS
	var dubX = true;
		setTimeout(function(){ 
			//Ref 1: User Interface
			$('.user-header-menu').prepend('<li><button class="relate" style="font-size: 1em;height: 32px;margin-right: 16px;border-radius: 0.1875em;">DUB X</button></li>');
			$('body').prepend('<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/foundicons/3.0.0/foundation-icons.css"><style>.isUser{text-transform: capitalize;}.hideElement{display: none !important;}.fullscreenController{min-height: 3em !important;}.fullscreenFix{padding: 3em 0 3em 0 !important}.fullscreenParent{display: block !important; margin: 0 !important; width: 100vw !important; padding: 0 !important; max-width: 100vw !important}.fullscreenLeft{width: calc(98.9vw - 428px) !important; float: left !important; height: calc(99.2vh - 88px) !important}.fullscreenRight{right: 0 !important; float: right !important; margin-right: 0 !important; position: fixed !important; height: calc(100vh - 88px) !important}.fullscreenChat{height: 100% !important; position: absolute !important; right: 0 !important; width: 428px !important}.fullscreenChatChild{height: calc(100vh - 210px) !important}.fullscreenVideo{height: 100% !important}.fullscreenVideoChild{height: calc(100% - 55px) !important}.isSwordful{display: none; position: fixed; right: 0; top: 48px; width: 314px; z-index: 2147483647; padding 27px 0 27px 0; height: 100vh; height: calc(100vh - 91px); overflow-y: scroll; overflow-x: hidden; background: #111; border-left: 3px solid magenta;}.isSwordful .verSwordful{padding: 13px 0 13px 0; margin: 0 27px 0 27px; color: #fff; border-bottom: 1px solid #333;}.isSwordful .verSwordful .Javaling{text-transform: uppercase; font-weight: 700; margin: 0 0 6px 0;}.isSwordful .verSwordful .Javaful{font-weight: 400; margin: 6px 0 0 0; font-size: 12px; color: #CCCCCC;}.isSwordful .optionSwordful{list-style: none; margin: 0; padding: 13px 0 13px 0; color: #fff;}.isSwordful .optionSwordful .isOnOff{display: inline; margin: 0; font-size: 16px;}.isSwordful .optionSwordful .Optionling{display: inline; margin: 0 0 0 1em; font-size: 16px;}.isSwordful .optionSwordful .optionClass{background: #111; padding: 6px 27px 6px 27px; cursor: pointer;}.isSwordful .optionSwordful .optionClass:hover{background: #333;}.isSwordful .optionSwordful .titleClass .istitle{margin: 13px 27px 13px 28px; color: #444; border-bottom: 1px solid #444;}</style><div class="isSwordful"> <div class="verSwordful"> <p class="Javaling">DubX Settings</p><p class="Javaful">Version 01.00.19 - Spaghetti Regretti?</p></div><ul class="optionSwordful"> <li class="optionClass"> <p class="Optionling" style="margin: 0;">Greetings, <span class="isUser"></span> </p></li><li class="titleClass"> <p class="istitle">Standard</p></li><li class="optionClass aY"> <p class="isOnOff"><i class="fi-x"></i> </p><p class="Optionling">Autovote</p></li><li class="optionClass bY"> <p class="isOnOff"><i class="fi-x"></i> </p><p class="Optionling">Fullscreen</p></li><li class="optionClass fY"> <p class="isOnOff"><i class="fi-x"></i> </p><p class="Optionling">Work Mode</p></li><li class="optionClass hY"> <p class="isOnOff"><i class="fi-x"></i> </p><p class="Optionling">Split Chat</p></li><li class="optionClass kY"> <p class="isOnOff"><i class="fi-x"></i> </p><p class="Optionling">Chat Only</p></li><li class="optionClass lY"> <p class="isOnOff"><i class="fi-x"></i> </p><p class="Optionling">Hide Background</p><li class="optionClass nY"> <p class="isOnOff"><i class="fi-x"></i> </p><p class="Optionling">AFK Auto-Respond</p></li></li><li class="titleClass"> <p class="istitle">Contact</p></li><li class="optionClass gY"> <p class="isOnOff"><i class="fi-comments"></i> </p><p class="Optionling">Bug Report</p></li><li class="titleClass"> <p class="istitle">Customize</p></li><li class="optionClass jY"> <p class="isOnOff"><i class="fi-unlink"></i> </p><p class="Optionling">Custom CSS</p></li><li class="optionClass mY"> <p class="isOnOff"><i class="fi-unlink"></i> </p><p class="Optionling">Custom Background</p></li><li class="titleClass"> <p class="istitle">Disabled</p></li><li class="optionClass iY"> <p class="isOnOff"><i class="fi-prohibited"></i> </p><p class="Optionling">Feature Request</p></li><li class="optionClass cY"> <p class="isOnOff"><i class="fi-prohibited"></i> </p><p class="Optionling">Notifications</p></li><li class="optionClass eY"> <p class="isOnOff"><i class="fi-prohibited"></i> </p><p class="Optionling">Staff</p></li><li class="titleClass"> <p class="istitle">Social</p></li><li class="optionClass isFacebook"> <a href="https://www.facebook.com/DubXScript" target="_blank" style="color: white;"> <p class="isOnOff"><i class="fi-social-facebook"></i></p><p class="Optionling">Like Us on Facebook</p></a> </li><li class="optionClass isTwitter"> <a href="https://twitter.com/DubXScript" target="_blank" style="color: white;"> <p class="isOnOff"><i class="fi-social-twitter"></i></p><p class="Optionling">Follow Us on Twitter</p></a> </li></ul></div>');
			
				
			function isUser() {
				var isSinful = Dubtrack.session.get('username');
				$('.isUser').text(isSinful);
			}
			isUser();

			function relativeSwordful() {
				$('.isSwordful').slideToggle("fast");
			};
			$('.relate').click(relativeSwordful);

			//Ref 2: returnOk
			function returnOk() {
				console.log('Ok');
			}

			//Ref 3: getScript
			var GitHubLocation = 'https://rawgit.com/sinfulBA/DubX-Script/master/modular/';
			$.getScript(GitHubLocation + 'optionAutovote.js', returnOk);
			$.getScript(GitHubLocation + 'optionFullscreen.js', returnOk);
			$.getScript(GitHubLocation + 'optionWorkMode.js', returnOk);
			$.getScript(GitHubLocation + 'bugReport.js', returnOk);
			$.getScript(GitHubLocation + 'optionSplitChat.js', returnOk);
			//$.getScript(GitHubLocation + 'featureReport.js', returnOk);
			$.getScript(GitHubLocation + 'optionVideoChatToggle.js', returnOk);
			$.getScript(GitHubLocation + 'boothDuration.js', returnOk);
			$.getScript(GitHubLocation + 'userCss.js', returnOk);
			$.getScript(GitHubLocation + 'optionChatWindow.js', returnOk);
			$.getScript(GitHubLocation + 'optionHideBackground.js', returnOk);
			$.getScript(GitHubLocation + 'userBackground.js', returnOk);
			$.getScript(GitHubLocation + 'optionAutorespond.js', returnOk);
            $.getScript(GitHubLocation + 'optionOnBeforeUnload.js', returnOk);

			//Ref 4: chatLog
			function chatLog(e){var a=new Dubtrack.View.chatLoadingItem;a.$el.text(e).appendTo(Dubtrack.room.chat._messagesEl)}chatLog('Running DubX V.01.00.19');

			//Ref 5: BPM
			$.getScript('https://rawgit.com/sinfulBA/DubX-Script/master/BPM/bpm-resources.js',returnOk);
			$('head').append('<link rel="stylesheet" type="text/css" href="https://rawgit.com/sinfulBA/DubX-Script/master/BPM/bpmotes.css">');
			$('head').append('<link rel="stylesheet" type="text/css" href="https://rawgit.com/sinfulBA/DubX-Script/master/BPM/emote-classes.css">');
			$('head').append('<link rel="stylesheet" type="text/css" href="https://rawgit.com/sinfulBA/DubX-Script/master/BPM/extracss-pure.css">');
			$('head').append('<link rel="stylesheet" type="text/css" href="https://rawgit.com/sinfulBA/DubX-Script/master/BPM/extracss-webkit.css">');
			$('head').append('<link rel="stylesheet" type="text/css" href="https://rawgit.com/sinfulBA/DubX-Script/master/BPM/gif-animotes.css">');
		
		}, 1000);
} else {
	Dubtrack.room.chat.sendMessage();alert('Dub X is already running!');
};
