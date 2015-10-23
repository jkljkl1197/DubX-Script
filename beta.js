/*
    THE Q PUBLIC LICENSE version 1.0
    Copyright (C) 1999-2005 Trolltech AS, Norway. 
    Everyone is permitted to copy and distribute this license document.
    The intent of this license is to establish freedom to share and change the software regulated by this license under the open source model.
    This license applies to any software containing a notice placed by the copyright holder saying that it may be distributed under the terms of the Q Public License version 1.0. Such software is herein referred to as the Software. This license covers modification and distribution of the Software, use of third-party application programs based on the Software, and development of free software which uses the Software.
    Granted Rights
    1. You are granted the non-exclusive rights set forth in this license provided you agree to and comply with any and all conditions in this license. Whole or partial distribution of the Software, or software items that link with the Software, in any form signifies acceptance of this license.
    2. You may copy and distribute the Software in unmodified form provided that the entire package, including - but not restricted to - copyright, trademark notices and disclaimers, as released by the initial developer of the Software, is distributed.
    3. You may make modifications to the Software and distribute your modifications, in a form that is separate from the Software, such as patches. The following restrictions apply to modifications:
    a. Modifications must not alter or remove any copyright notices in the Software. 
    b. When modifications to the Software are released under this license, a non-exclusive royalty-free right is granted to the initial developer of the Software to distribute your modification in future versions of the Software provided such versions remain available under these terms in addition to any other license(s) of the initial developer.
    4. You may distribute machine-executable forms of the Software or machine-executable forms of modified versions of the Software, provided that you meet these restrictions:
    a. You must include this license document in the distribution. 
    b. You must ensure that all recipients of the machine-executable forms are also able to receive the complete machine-readable source code to the distributed Software, including all modifications, without any charge beyond the costs of data transfer, and place prominent notices in the distribution explaining this. 
    c. You must ensure that all modifications included in the machine-executable forms are available under the terms of this license.
    5. You may use the original or modified versions of the Software to compile, link and run application programs legally developed by you or by others.
    6. You may develop application programs, reusable components and other software items that link with the original or modified versions of the Software. These items, when distributed, are subject to the following requirements:
    a. You must ensure that all recipients of machine-executable forms of these items are also able to receive and use the complete machine-readable source code to the items without any charge beyond the costs of data transfer. 
    b. You must explicitly license all recipients of your items to use and re-distribute original and modified versions of the items in both machine-executable and source code forms. The recipients must be able to do so without any charges whatsoever, and they must be able to re-distribute to anyone they choose. 
    c. If the items are not available to the general public, and the initial developer of the Software requests a copy of the items, then you must supply one.
    Limitations of Liability
    In no event shall the initial developers or copyright holders be liable for any damages whatsoever, including - but not restricted to - lost revenue or profits or other direct, indirect, special, incidental or consequential damages, even if they have been advised of the possibility of such damages, except to the extent invariable law, if any, provides otherwise.
    No Warranty
    The Software and this license document are provided AS IS with NO WARRANTY OF ANY KIND, INCLUDING THE WARRANTY OF DESIGN, MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE.
    Choice of Law
    This license is governed by the Laws of Norway. Disputes shall be settled by Oslo City Court.
*/

//Hello.js
/* global Dubtrack */ // for jshint
var DubX = DubX || {}; // Object to namespace this plugin

if (!DubX.isOpen) {
    DubX.isOpen = true;

    //Ref 1: User Interface Functions
    DubX.helloUser = function() {
        var user = Dubtrack.session.get('username');
        $('.isUser').text(user);
    };
    DubX.toggleControls = function() {
        $('.isSwordful').slideToggle("fast");
    };
    
    //Ref 2: User Interface
    DubX.hello = function() {
        var li = '<li><button onclick="DubX.toggleControls();" class="relate" style="font-size: 1em;height: 32px;margin-right: 16px;border-radius: 0.1875em;">DUB X</button></li>';
        var css = [
            '<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/foundicons/3.0.0/foundation-icons.css">',
            '<link rel="stylesheet" type="text/css" href="https://rawgit.com/sinfulBA/DubX-Script/master/asset.css">'
        ].join('');
        var html = [
            '<div class="isSwordful">',
                '<div class="verSwordful">',
                    '<p class="Javaling">DubX Settings</p>',
                    '<p class="Javaful">Version 02.15.30 - *Tips le fedora* M`lady, would you like some doritos and mountain dew?</p>',
                '</div>',
                '<ul class="optionSwordful">',
                    '<li class="optionClass">',
                        '<p class="Optionling" style="margin: 0;">Aloha, <span class="isUser"></span>!</p>',
                    '</li>',
                    '<li class="optionClass">',
                        '<p class="Optionful" style="margin: 0;">Dub X currently has 693 Google Chrome users! Thank you, we appreciate your continued use of our script/extension. ❤</p>',
                    '</li>',
                    '<li class="optionClass extension">',
                        '<a href="https://chrome.google.com/webstore/detail/dubx/oceofndagjnpebjmknefoelcpcnpcedm/reviews" target="_blank" style="color: white;">',
                            '<p class="isOnOff"><i class="fi-like"></i></p>',
                            '<p class="Optionling">Give Us a Rating</p>',
                        '</a>',
                    '</li>',
                    '<li class="titleClass">',
                        '<p class="istitle">Standard</p>',
                    '</li>',
                    '<li onclick="DubX.optionAutovote();" class="optionClass autovote">',
                        '<p class="isOnOff"><i class="fi-x"></i></p>',
                        '<p class="Optionling">Autovote</p>',
                    '</li>',
                    '<li onclick="DubX.optionFullscreen();" class="optionClass fullscreen">',
                        '<p class="isOnOff"><i class="fi-x"></i></p>',
                        '<p class="Optionling">Fullscreen</p>',
                    '</li>',
                    '<li onclick="DubX.optionWork();" class="optionClass work">',
                        '<p class="isOnOff"><i class="fi-x"></i></p>',
                        '<p class="Optionling">Work Mode</p>',
                    '</li>',
                    '<li onclick="DubX.optionSplitChat();" class="optionClass splitchat">',
                        '<p class="isOnOff"><i class="fi-x"></i></p>',
                        '<p class="Optionling">Split Chat</p>',
                    '</li>',
                    '<li onclick="DubX.optionChat();" class="optionClass showchat">',
                        '<p class="isOnOff"><i class="fi-x"></i></p>',
                        '<p class="Optionling">Chat Only</p>',
                    '</li>',
                    '<li onclick="DubX.isBackgroundToggle();" class="optionClass removestretch">',
                        '<p class="isOnOff"><i class="fi-x"></i></p>',
                        '<p class="Optionling">Hide Background</p>',
                    '</li>',
                    '<li onclick="DubX.optionAutorespond();" class="optionClass afk">',
                        '<p class="isOnOff"><i class="fi-x"></i></p>',
                        '<p class="Optionling">AFK Auto-Respond</p>',
                    '</li>',
                    '<li onclick="DubX.optionOnBeforeUnload();" class="optionClass onbeforeunload">',
                        '<p class="isOnOff"><i class="fi-x"></i></p>',
                        '<p class="Optionling">Warn On Navigation</p>',
                    '</li>',
                    '<li onclick="DubX.communityCSS();" class="optionClass communitycss">',
                        '<p class="isOnOff"><i class="fi-x"></i></p>',
                        '<p class="Optionling">Community CSS</p>',
                    '</li>',
                    '<li onclick="DubX.plugTheme();" class="optionClass plugtheme">',
                        '<p class="isOnOff"><i class="fi-x"></i></p>',
                        '<p class="Optionling">Plug Theme</p>',
                    '</li>',
                    '<li class="titleClass">',
                        '<p class="istitle">Support</p>',
                    '</li>',
                    '<li class="optionClass support">',
                        '<a href="https://docs.google.com/document/d/1IhVn4fUA4Qd4TJCX6jmrp10ztVVn6pn8MT5Va69HiEM/edit?usp=drivesdk" target="_blank" style="color: white;">',
                            '<p class="isOnOff"><i class="fi-paint-bucket"></i></p>',
                            '<p class="Optionling">How-to: Community CSS</p>',
                        '</a>',
                    '</li>',
                    '<li class="titleClass">',
                        '<p class="istitle">Contact</p>',
                    '</li>',
                    '<li onclick="DubX.showReport();" class="optionClass report">',
                        '<p class="isOnOff"><i class="fi-comments"></i></p>',
                        '<p class="Optionling">Bug Report</p>',
                    '</li>',
                    '<li class="titleClass">',
                        '<p class="istitle">Customize</p>',
                    '</li>',
                    '<li onclick="DubX.openCSS();" class="optionClass custominput">',
                        '<p class="isOnOff"><i class="fi-unlink"></i></p>',
                        '<p class="Optionling">Custom CSS</p>',
                    '</li>',
                    '<li onclick="DubX.openCustom();" class="optionClass customupload">',
                        '<p class="isOnOff"><i class="fi-unlink"></i></p>',
                        '<p class="Optionling">Custom Background</p>',
                    '</li>',
                    '<li class="titleClass">',
                        '<p class="istitle">Disabled</p>',
                    '</li>',
                    '<li class="optionClass request">',
                        '<p class="isOnOff"><i class="fi-prohibited"></i></p>',
                        '<p class="Optionling">Feature Request</p>',
                    '</li>',
                    '<li class="titleClass">',
                        '<p class="istitle">Social</p>',
                    '</li>',
                    '<li class="optionClass facebook">',
                        '<a href="https://www.facebook.com/DubXScript" target="_blank" style="color: white;">',
                            '<p class="isOnOff"><i class="fi-social-facebook"></i></p>',
                            '<p class="Optionling">Like Us on Facebook</p>',
                        '</a>',
                    '</li>',
                    '<li class="optionClass twitter">',
                        '<a href="https://twitter.com/DubXScript" target="_blank" style="color: white;">',
                            '<p class="isOnOff"><i class="fi-social-twitter"></i></p>',
                            '<p class="Optionling">Follow Us on Twitter</p>',
                        '</a>',
                    '</li>',
                    '<li class="optionClass github">',
                        '<a href="https://github.com/sinfulBA/DubX-Script" target="_blank" style="color: white;">',
                            '<p class="isOnOff"><i class="fi-social-github"></i></p>',
                            '<p class="Optionling">Fork Us on Github</p>',
                        '</a>',
                    '</li>',
                    '<li class="optionClass website">',
                        '<a href="https://dubx.net" target="_blank" style="color: white;">',
                            '<p class="isOnOff"><i class="fi-link"></i></p>',
                            '<p class="Optionling">Check out our Website</p>',
                        '</a>',
                    '</li>',
                '</ul>',
            '</div>'
        ].join('');
        $('head').append(css);
        $('.user-header-menu').prepend(li);
        $(document.body).prepend(html);
        DubX.helloUser();
    };
    DubX.hello();
    
    //Ref 3: Options
    
    //Ref 3.1: Input Function
    DubX.input = function(title,content,placeholder,confirm) {
        var inputHtml = [
            '<div class="onErr">',
                '<div class="container">',
                    '<div class="title">',
                        '<h1>'+title+'</h1>',
                    '</div>',
                    '<div class="content">',
                        '<p>'+content+'</p>',
                        '<textarea class="input" type="text" placeholder="'+placeholder+'"></textarea>',
                    '</div>',
                    '<div class="control">',
                        '<div class="cancel">',
                            '<p>Cancel</p>',
                        '</div>',
                        '<div class="'+confirm+' confirm">',
                            '<p>Okay</p>',
                        '</div>',
                    '</div>',
                '</div>',
            '</div>'
        ].join('');
        $('body').prepend(inputHtml);
    };
    
    //Ref 3.2: Global Functions
    DubX.toggleOptionOn = function(selector) {
        $(selector + ' .isOnOff i').replaceWith('<i class="fi-check"></i>');
    };
    DubX.toggleOptionOff = function(selector) {
        $(selector + ' .isOnOff i').replaceWith('<i class="fi-x"></i>');
    };
    DubX.closeErr = function() {
        $('.onErr').remove();
    };
    
    //Ref 3.3: optionAutovote
    DubX.isAutovote = false;
    DubX.optionAutovote = function() {
        var isOn;
        if (!DubX.isAutovote) {
            DubX.isAutovote = true;
            isOn = "on";
            $('.dubup').click();
            function advanceVote() {
                $('.dubup').click();
            }
            Dubtrack.Events.bind('realtime:room_playlist-update', advanceVote);
            localStorage.setItem('isAutovote','true');
            DubX.toggleOptionOn('.autovote');
        } else {
            DubX.isAutovote = false;
            isOn = "off";
            Dubtrack.Events.unbind('realtime:room_playlist-update', advanceVote);
            localStorage.setItem('isAutovote','false');
            DubX.toggleOptionOff('.autovote');
        }
    };
    if (localStorage.getItem('isAutovote') === 'true') {
        DubX.optionAutovote();
    }
    
    //Ref 3.4: optionSplitChat
    DubX.isSplitChat = false;
    DubX.optionSplitChat = function() {
        var isOn;
            if (!DubX.isSplitChat) {
                DubX.isSplitChat = true;
                isOn = "on";
                $('.chat-main li:nth-child(even)').addClass('split');
                $('.chat-main li:nth-child(even) .chatDelete').addClass('splitfix');
                localStorage.setItem('isSplitChat','true');
                DubX.toggleOptionOn('.splitchat');
            } else {
                DubX.isSplitChat = false;
                isOn = "off";
                $('.chat-main li:nth-child(even)').removeClass('split');
                $('.chat-main li:nth-child(even) .chatDelete').removeClass('splitfix');
                localStorage.setItem('isSplitChat','false');
                DubX.toggleOptionOff('.splitchat');
            }
    };
    if (localStorage.getItem('isSplitChat') === 'true') {
        DubX.optionSplitChat();
    }
    
    //Ref 3.5: boothDuration
    $('.player_sharing').append('<span class="durationRemaining"></span>');
    DubX.boothDuration = function() {
        var time = 4;
        var currentTimeMinStr = $('#player-controller div.left ul li.infoContainer.display-block div.currentTime span.min').text();
        var currentTimeMinInt = parseInt(currentTimeMinStr);
        var boothDurationStr = Dubtrack.room.player.queueInfo.text();
        var boothDurationInt = parseInt(boothDurationStr);
        var boothDurationLeft = (boothDurationInt * time - time) + currentTimeMinInt;
        if (boothDurationLeft >= 0) {
            $('.durationRemaining').replaceWith('<span class="durationRemaining">You will be on the booth in approximately ' + boothDurationLeft + ' minutes.</span>');
        }
    };
    Dubtrack.Events.bind('realtime:room_playlist-update', DubX.boothDuration);
    
    //Ref 3.6 : bugReport
    DubX.reportPost = function() {
        var user = Dubtrack.session.get('username');
        var userid = Dubtrack.realtime.dtPubNub.get_uuid();
        var content = $('.input').val();
        var locationhref = location.href;
        var post = '*Username:* ' + user + '  |  ' + '*ID:* ' + userid + '  |  ' + '*Report:* ' + content + '  |  ' + '*Location:* `' + locationhref + '`';
        $.ajax({
            type: 'POST',
            url: 'https://hooks.slack.com/services/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',
            data: 'payload={"username": "Incoming Bug Report", "text": "' + post + '", "icon_emoji": ":bug:"}',
            crossDomain: true
        }).done(function(msg) {
            console.log(msg);
        });
    };
    DubX.postreport = function() {
        DubX.reportPost();
        $('.onErr').remove();
        DubX.toggleOptionOn('.report');
    };
    DubX.cancelreport = function() {
        $('.onErr').remove();
    };
    DubX.showReport = function() {
        DubX.input('Bug Report:','Report:','Please give a detailed description of the bug.','confirm-for36','cancel');
        $('.confirm-for36').click(DubX.postreport);
        $('.cancel').click(DubX.cancelreport);
    };
        
    //Ref 3.7: optionFullscreen 
    DubX.isFullscreen = false;
    DubX.fullscreenOff = function() {
        var isOn;
        $('#room-comments').show();
        $('.main-page-container').removeClass('fullscreenFix');
        $('#main-room').removeClass('fullscreenParent');
        $('.left_section').removeClass('fullscreenLeft');
        $('.right_section').removeClass('fullscreenRight');
        $('#chat').removeClass('fullscreenChat');
        $('.chat-messages').removeClass('fullscreenChatChild');
        $('#main_player').removeClass('fullscreenVideo');
        $('.player_container').removeClass('fullscreenVideoChild');
        $('#player-controller').removeClass('fullscreenController');
        DubX.isFullscreen = false;
        isOn = "off";
        localStorage.setItem('isFullscreen','false');
        DubX.toggleOptionOff('.fullscreen');
    };
    DubX.optionFullscreen = function() {
        var isOn;
        if (!DubX.isFullscreen) {
            DubX.isFullscreen = true;
            $('#room-comments').hide();
            $('.main-page-container').addClass('fullscreenFix');
            $('#main-room').addClass('fullscreenParent');
            $('.left_section').addClass('fullscreenLeft');
            $('.right_section').addClass('fullscreenRight');
            $('#chat').addClass('fullscreenChat');
            $('.chat-messages').addClass('fullscreenChatChild');
            $('#main_player').addClass('fullscreenVideo');
            $('.player_container').addClass('fullscreenVideoChild');
            $('#player-controller').addClass('fullscreenController');
            isOn = "on";
            localStorage.setItem('isFullscreen','true');
            DubX.toggleOptionOn('.fullscreen');
        } else {
            DubX.fullscreenOff();
        }
    };
    if (localStorage.getItem('isFullscreen') === 'true') {
        DubX.optionFullscreen();
    }
    $('.user-info-button').click(DubX.fullscreenOff);
    window.addEventListener("resize", function(){
        var windowWidth = $(window).width();
        if (windowWidth <= 1185) {
            DubX.fullscreenOff();
        }
    }, true);
        
    //Ref 3.8: optionHideBackground
    DubX.isBackground = false;
    DubX.isBackgroundToggle = function() {
        var isOn;
            if (!DubX.isBackground) {
                DubX.isBackground = true;
                isOn = "on";
                $('.backstretch').hide();
                $('.userCustomB').hide();
                localStorage.setItem('isBackground','true');
                DubX.toggleOptionOn('.removestretch');
            } else {
                DubX.isBackground = false;
                isOn = "off";
                $('.backstretch').show();
                $('.userCustomB').show();
                localStorage.setItem('isBackground','false');
                DubX.toggleOptionOff('.removestretch');
            }
    };
    if (localStorage.getItem('isBackground') === 'true') {
        DubX.isBackgroundToggle();
    }
    
    //Ref 3.9: optionWorkMode
    DubX.isWork = false;
    DubX.disableWork = function() {
        var isOn;
        DubX.isWork = false;
            $('#main-room').show();
            isOn = "off";
            localStorage.setItem('isWork','false');
            DubX.toggleOptionOff('.work');
    };
    DubX.optionWork = function() {
        var isOn;
        if (!DubX.isWork) {
            DubX.isWork = true;
            $('#main-room').hide();
            DubX.fullscreenOff();
            isOn = "on";
            localStorage.setItem('isWork','true');
            DubX.toggleOptionOn('.work');
        } else {
            DubX.disableWork();
        }
    };
    if (localStorage.getItem('isWork') === 'true') {
        DubX.optionWork();
    }
    $('.user-info-button').click(DubX.disableWork);
    
    //Ref 3.10: optionOnBeforeUnload
    DubX.isOnBeforeUnload = false;
    DubX.optionOnBeforeUnload = function() {
        var isOn;
            if (!DubX.isOnBeforeUnload) {
                DubX.isOnBeforeUnload = true;
                isOn = "on";
                window.onbeforeunload = function(e) {
                    return 'You sure about that?';
                };
                localStorage.setItem('isOnBeforeUnload','true');
                DubX.toggleOptionOn('.onbeforeunload');
            } else {
                DubX.isOnBeforeUnload = false;
                isOn = "off";
                window.onbeforeunload = null;
                localStorage.setItem('isOnBeforeUnload','false');
                DubX.toggleOptionOff('.onbeforeunload');
            }
    };
    if (localStorage.getItem('isOnBeforeUnload') === 'true') {
        DubX.optionOnBeforeUnload();
    }
    
    //Ref 3.11: AFK-Autorespond
    DubX.isAutorespond = false;
    DubX.sendAutorespond = true;
    DubX.realtimeChat = function(data) {
        var realtimeContent = data.message;
        var isUserAfk = Dubtrack.session.get('username');
        if (realtimeContent.indexOf('@'+isUserAfk) >-1) {
            if (DubX.sendAutorespond) {
                $('#chat-txt-message').val('I am AFK at the moment.');
                Dubtrack.room.chat.sendMessage();
                DubX.sendAutorespond = false;
                setTimeout (function() {
                    DubX.sendAutorespond = true;
                }, 30 * 1000);
            }
        }
    };
    DubX.optionAutorespond = function() {
        var isOn;
            if (!DubX.isAutorespond) {
                DubX.isAutorespond = true;
                isOn = "on";
                Dubtrack.Events.bind('realtime:chat-message', DubX.realtimeChat);
                DubX.toggleOptionOn('.afk');
            } else {
                DubX.isAutorespond = false;
                isOn = "off";
                Dubtrack.Events.unbind('realtime:chat-message', DubX.realtimeChat);
                DubX.toggleOptionOff('.afk');
            }
    };
    
    //Ref 3.12: Chat Only
    DubX.isChat = false;
    DubX.optionChat = function() {
        var isOn;
            if (!DubX.isChat) {
                DubX.isChat = true;
                isOn = "on";
                $('body').append('<style class="isChat">.left_section {display: none !important;}.right_section {width: 428.4px !important;margin: 0 auto !important;right: initial !important;position: relative !important;float: inherit !important;}</style>');
                localStorage.setItem('isChat','true');
                DubX.toggleOptionOn('.showchat');
            } else {
                DubX.isChat = false;
                isOn = "off";
                $('.isChat').remove();
                localStorage.setItem('isChat','false');
                DubX.toggleOptionOff('.showchat');
            }
    };
    if (localStorage.getItem('isChat') === 'true') {
        DubX.optionChat();
    }
    
    //Ref 3.13: Custom CSS
    DubX.openCSS = function() {
        var current_css_file = 'Current file: '+localStorage.getItem('userCSS');
        DubX.input('Link a .CSS file:',current_css_file,'https://example.com/example.css','confirm-for313');
        $('.confirm-for313').click(DubX.importCSS);
        $('.cancel').click(DubX.closeErr);
    };
    DubX.importCSS = function() {
        $('.customCSS').remove();
        var userCSS = $('.input').val();
        localStorage.setItem('userCSS',userCSS);
        $('head').append('<link class="customCSS" href="' + userCSS + '" rel="stylesheet" type="text/css">');
        $('.onErr').remove();
    };
    DubX.loadCSS = function() {
        if (localStorage.getItem('userCSS') !== null) {
            var userlocalCSS = localStorage.getItem('userCSS');
            $('head').append('<link class="customCSS" href="' + userlocalCSS + '" rel="stylesheet" type="text/css">');
        }
    };
    $('document').ready(DubX.loadCSS);
    
    //Ref 3.14: Custom Background
    DubX.openCustom = function() {
        DubX.input('Link an image file:','It is recommended a .jpg file is used','https://example.com/example.jpg','confirm-for314');
        $('.confirm-for314').click(DubX.importCustom);
        $('.cancel').click(DubX.closeErr);
    };
    DubX.importCustom = function() {
        var userCustom = $('.input').val();
        localStorage.setItem('userCustom',userCustom);
        $('.userCustomB').remove();
        $('body').append('<div class="userCustomB" style="width: 100vw;height: 100vh;z-index: -999998;position: fixed; background: url(' + userCustom + ');background-size: cover;top: 0;"></div>');
        $('.onErr').remove();
    };
    DubX.loadCustom = function() {
        if (localStorage.getItem('userCustom') !== null) {
            var userloadCustom = localStorage.getItem('userCustom');
            $('body').append('<div class="userCustomB" style="width: 100vw;height: 100vh;z-index: -999998;position: fixed; background: url(' + userloadCustom + ');background-size: cover;top: 0;"></div>');
        }
    };
    $('document').ready(DubX.loadCustom);
    
    //Ref 3.15: Community CSS
    DubX.isCommunityCSS = false;
    DubX.communityCSS = function() {
        var isOn;
        if (!DubX.isCommunityCSS) {
            DubX.isCommunityCSS = true;
            isOn = "on";
            var user_location_url = Dubtrack.room.model.get('roomUrl');
            $.ajax({
                type: 'GET',
                url: 'https://api.dubtrack.fm/room/'+user_location_url,
            }).done(function(data) {
                var info = data.data.description;
                var expression = /(@dubx=)(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
                var url = info.match(expression);
                var append = url[0].split('@dubx=');
                $('head').append('<link class="importcommunitycss" href="'+append[1]+'" rel="stylesheet" type="text/css">');
            });
            if (DubX.isPlugTheme === true) {
                DubX.plugTheme();
            }
            localStorage.setItem('communitycss','true');
            DubX.toggleOptionOn('.communitycss');
        } else {
            DubX.isCommunityCSS = false;
            isOn = "off";
            $('.importcommunitycss').remove();
            localStorage.setItem('communitycss','false');
            DubX.toggleOptionOff('.communitycss');
        }
    };
    if (localStorage.getItem('communitycss') === 'true') {
        DubX.communityCSS();
    }
    
    //Ref 3.16: Plug CSS Theme
    DubX.isPlugTheme = false;

    DubX.plugTheme = function() {
        var isOn;
        if (!DubX.isPlugTheme) {
            DubX.isPlugTheme = true;
            isOn = "on";
            $('head').append('<link class="enableplugtheme" href="https://rawgit.com/sinfulBA/DubX-Script/master/PlugTheme.css" rel="stylesheet" type="text/css">');
            localStorage.setItem('plugtheme', 'true');
            DubX.toggleOptionOn('.plugtheme');
            if (DubX.isCommunityCSS === true) {
                DubX.communityCSS();
            }
        } else {
            DubX.isPlugTheme = false;
            isOn = "off";
            $('.enableplugtheme').remove();
            localStorage.setItem('plugtheme', 'false');
            DubX.toggleOptionOff('.plugtheme');
        }
    };
    if (localStorage.getItem('plugtheme') === 'true') {
        DubX.plugTheme();
    }
    
    //Ref 4: chatLog
    function chatLog(e){var a=new Dubtrack.View.chatLoadingItem;a.$el.text(e).appendTo(Dubtrack.room.chat._messagesEl)}chatLog('Running DubX V.02.15.30');
      
} else {
    DubX.onErr = function(error) {
        var onErr = [
            '<div class="onErr">',
                '<div class="container">',
                    '<div class="title">',
                        '<h1>Oh noes:</h1>',
                    '</div>',
                    '<div class="content">',
                        '<p>'+error+'</p>',
                    '</div>',
                    '<div class="control">',
                        '<div class="cancel">',
                            '<p>Cancel</p>',
                        '</div>',
                        '<div class="confirm confirm-err">',
                            '<p>Okay</p>',
                        '</div>',
                    '</div>',
                '</div>',
            '</div>'
        ].join('');
        var filecontent = document.querySelector('body');
        $(filecontent).prepend(onErr);
    };
	DubX.onErr('Oh no! Error 69: Extension is already open.');
    $('.cancel').click(DubX.closeErr);
    $('.confirm-err').click(DubX.closeErr);
}
