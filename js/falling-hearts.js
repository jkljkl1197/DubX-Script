//from http://rainbow.arch.scriptmania.com/scripts/bg/hearts_fall_1.html
(function ($) {
        "use strict";

	$.HeartAnimation = function () {
        //$('#main-section').append("<marquee behavior=scroll direction=down scrollamount=3 scrolldelay=26 height=653 style='z-index:99999;position:fixed; left:17%; top:103px; width:17; height:653px;'><img src=http://dl3.glitter-graphics.net/pub/12/12603tbcu2fkuwr.gif border=0></marquee><marquee behavior=scroll direction=down scrollamount=4 scrolldelay=41 height=668 style='z-index:99999;position:fixed; left:61%; top:27px; width:17; height:668px;'><img src=http://dl3.glitter-graphics.net/pub/12/12603tbcu2fkuwr.gif border=0></marquee><marquee behavior=scroll direction=down scrollamount=5 scrolldelay=44 height=522 style='z-index:99999;position:fixed; left:93%; top:23px; width:17; height:522px;'><img src=http://dl3.glitter-graphics.net/pub/12/12603tbcu2fkuwr.gif border=0></marquee><marquee behavior=scroll direction=down scrollamount=3 scrolldelay=14 height=576 style='z-index:99999;position:fixed; left:69%; top:154px; width:17; height:576px;'><img src=http://dl3.glitter-graphics.net/pub/12/12603tbcu2fkuwr.gif border=0></marquee><marquee behavior=scroll direction=down scrollamount=6 scrolldelay=32 height=520 style='z-index:99999;position:fixed; left:59%; top:140px; width:17; height:520px;'><img src=http://dl3.glitter-graphics.net/pub/12/12603tbcu2fkuwr.gif border=0></marquee><marquee behavior=scroll direction=down scrollamount=3 scrolldelay=21 height=528 style='z-index:99999;position:fixed; left:87%; top:125px; width:17; height:528px;'><img src=http://dl3.glitter-graphics.net/pub/12/12603tbcu2fkuwr.gif border=0></marquee><marquee behavior=scroll direction=down scrollamount=2 scrolldelay=27 height=574 style='z-index:99999;position:fixed; left:89%; top:187px; width:17; height:574px;'><img src=http://dl3.glitter-graphics.net/pub/12/12603tbcu2fkuwr.gif border=0></marquee><marquee behavior=scroll direction=down scrollamount=1 scrolldelay=24 height=593 style='z-index:99999;position:fixed; left:91%; top:21px; width:17; height:593px;'><img src=http://dl3.glitter-graphics.net/pub/12/12603tbcu2fkuwr.gif border=0></marquee><marquee behavior=scroll direction=down scrollamount=1 scrolldelay=48 height=558 style='z-index:99999;position:fixed; left:9%; top:166px; width:17; height:558px;'><img src=http://dl3.glitter-graphics.net/pub/12/12603tbcu2fkuwr.gif border=0></marquee><marquee behavior=scroll direction=down scrollamount=4 scrolldelay=34 height=632 style='z-index:99999;position:fixed; left:29%; top:48px; width:17; height:632px;'><img src=http://dl3.glitter-graphics.net/pub/12/12603tbcu2fkuwr.gif border=0></marquee><marquee behavior=scroll direction=down scrollamount=5 scrolldelay=43 height=610 style='z-index:99999;position:fixed; left:53%; top:118px; width:17; height:610px;'><img src=http://dl3.glitter-graphics.net/pub/12/12603tbcu2fkuwr.gif border=0></marquee><marquee behavior=scroll direction=down scrollamount=5 scrolldelay=40 height=562 style='z-index:99999;position:fixed; left:86%; top:133px; width:17; height:562px;'><img src=http://dl3.glitter-graphics.net/pub/12/12603tbcu2fkuwr.gif border=0></marquee><marquee behavior=scroll direction=down scrollamount=5 scrolldelay=43 height=514 style='z-index:99999;position:fixed; left:91%; top:142px; width:17; height:514px;'><img src=http://dl3.glitter-graphics.net/pub/12/12603tbcu2fkuwr.gif border=0></marquee><marquee behavior=scroll direction=down scrollamount=4 scrolldelay=7 height=525 style='z-index:99999;position:fixed; left:44%; top:120px; width:17; height:525px;'><img src=http://dl3.glitter-graphics.net/pub/12/12603tbcu2fkuwr.gif border=0></marquee><marquee behavior=scroll direction=down scrollamount=2 scrolldelay=29 height=548 style='z-index:99999;position:fixed; left:77%; top:108px; width:17; height:548px;'><img src=http://dl3.glitter-graphics.net/pub/12/12603tbcu2fkuwr.gif border=0></marquee><marquee behavior=scroll direction=down scrollamount=5 scrolldelay=25 height=692 style='z-index:99999;position:fixed; left:93%; top:50px; width:17; height:692px;'><img src=http://dl3.glitter-graphics.net/pub/12/12603tbcu2fkuwr.gif border=0></marquee><marquee behavior=scroll direction=down scrollamount=4 scrolldelay=40 height=613 style='z-index:99999;position:fixed; left:22%; top:110px; width:17; height:613px;'><img src=http://dl3.glitter-graphics.net/pub/12/12603tbcu2fkuwr.gif border=0></marquee><marquee behavior=scroll direction=down scrollamount=1 scrolldelay=14 height=519 style='z-index:99999;position:fixed; left:70%; top:7px; width:17; height:519px;'><img src=http://dl3.glitter-graphics.net/pub/12/12603tbcu2fkuwr.gif border=0></marquee><marquee behavior=scroll direction=down scrollamount=4 scrolldelay=26 height=687 style='z-index:99999;position:fixed; left:69%; top:193px; width:17; height:687px;'><img src=http://dl3.glitter-graphics.net/pub/12/12603tbcu2fkuwr.gif border=0></marquee><marquee behavior=scroll direction=down scrollamount=1 scrolldelay=20 height=526 style='z-index:99999;position:fixed; left:15%; top:183px; width:17; height:526px;'><img src=http://dl3.glitter-graphics.net/pub/12/12603tbcu2fkuwr.gif border=0></marquee>");

// Set the number of snowflakes (more than 30 - 40 not recommended)
var snowmax=12

// Set the colors for the snow. Add as many colors as you like
var snowcolor=new Array("#aaaacc","#ddddFF","#ccccDD","#ffffff","#ffc0cb")

// Set the fonts, that create the snowflakes. Add as many fonts as you like
var snowtype=new Array("Arial Black","Arial Narrow","Times","Comic Sans MS")

// **** CHANGE YOUR IMAGE HERE ****

// Set the letter that creates your snowflake (recommended: * )
var snowletter=" <img src=http://rainbow.arch.scriptmania.com/scripts/bg/heart9.gif> "

// Set the speed of sinking (recommended values range from 0.3 to 2)
var sinkspeed=0.6

// Set the maximal-size of your snowflaxes
var snowmaxsize=40

// Set the minimal-size of your snowflaxes
var snowminsize=20

// Set the snowing-zone
// Set 1 for all-over-snowing, set 2 for left-side-snowing
// Set 3 for center-snowing, set 4 for right-side-snowing
var snowingzone=1

///////////////////////////////////////////////////////////////////////////
// CONFIGURATION ENDS HERE
///////////////////////////////////////////////////////////////////////////


// Do not edit below this line
var snow=new Array()
var marginbottom
var marginright
var timer
var i_snow=0
var x_mv=new Array();
var crds=new Array();
var lftrght=new Array();
var browserinfos=navigator.userAgent
var ie5=document.all&&document.getElementById&&!browserinfos.match(/Opera/)
var ns6=document.getElementById&&!document.all
var opera=browserinfos.match(/Opera/)
var browserok=ie5||ns6||opera

function randommaker(range) {
	rand=Math.floor(range*Math.random())
    return rand
}

function initsnow() {
	if (ie5 || opera) {
      marginbottom = document.body.clientHeight
      marginright = document.body.clientWidth
   }
   else if (ns6) {
      marginbottom = window.innerHeight
      marginright = window.innerWidth
   }
	var snowsizerange=snowmaxsize-snowminsize
	for (i=0;i<=snowmax;i++) {
		crds[i] = 0;
    	lftrght[i] = Math.random()*15;
    	x_mv[i] = 0.03 + Math.random()/10;
		snow[i]=document.getElementById("s"+i)
		snow[i].style.fontFamily=snowtype[randommaker(snowtype.length)]
		snow[i].size=randommaker(snowsizerange)+snowminsize
		snow[i].style.fontSize=snow[i].size
		snow[i].style.color=snowcolor[randommaker(snowcolor.length)]
		snow[i].sink=sinkspeed*snow[i].size/5
		if (snowingzone==1) {snow[i].posx=randommaker(marginright-snow[i].size)}
		if (snowingzone==2) {snow[i].posx=randommaker(marginright/2-snow[i].size)}
		if (snowingzone==3) {snow[i].posx=randommaker(marginright/2-snow[i].size)+marginright/4}
		if (snowingzone==4) {snow[i].posx=randommaker(marginright/2-snow[i].size)+marginright/2}
		snow[i].posy=randommaker(2*marginbottom-marginbottom-2*snow[i].size)
		snow[i].style.left=snow[i].posx
		snow[i].style.top=snow[i].posy
	}
	movesnow()
}

function movesnow() {
	for (i=0;i<=snowmax;i++) {
		crds[i] += x_mv[i];
		snow[i].posy+=snow[i].sink
		snow[i].style.left=snow[i].posx+lftrght[i]*Math.sin(crds[i]);
		snow[i].style.top=snow[i].posy

		if (snow[i].posy>=marginbottom-2*snow[i].size || parseInt(snow[i].style.left)>(marginright-3*lftrght[i])){
			if (snowingzone==1) {snow[i].posx=randommaker(marginright-snow[i].size)}
			if (snowingzone==2) {snow[i].posx=randommaker(marginright/2-snow[i].size)}
			if (snowingzone==3) {snow[i].posx=randommaker(marginright/2-snow[i].size)+marginright/4}
			if (snowingzone==4) {snow[i].posx=randommaker(marginright/2-snow[i].size)+marginright/2}
			snow[i].posy=0
		}
	}
	var timer=setTimeout("movesnow()",50)
}

for (i=0;i<=snowmax;i++) {
	document.write("<span id='s"+i+"' style='position:absolute;top:-"+snowmaxsize+"'>"+snowletter+"</span>")
}
if (browserok) {
	window.onload=initsnow
}


        };
}(jQuery));
