var JQuery = require("JQuery");
"use strict";if(window.jQuery===undefined||window.jQuery.fn.jquery!=='3.2.1'){var script_tag=document.createElement('script');script_tag.setAttribute("type","text/javascript");script_tag.setAttribute("integrity","sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=");script_tag.setAttribute("crossorigin","anonymous");script_tag.setAttribute("src","https://code.jquery.com/jquery-3.4.1.min.js");if(script_tag.readyState){script_tag.onreadystatechange=function(){if(this.readyState==='complete'||this.readyState==='loaded'){scriptLoadHandler();}};}else{script_tag.onload=scriptLoadHandler;}
(document.getElementsByTagName("head")[0]||document.documentElement).appendChild(script_tag);}else{jQuery=window.jQuery;main();}
function scriptLoadHandler(){(function(jQuery){var globalHost="https://ygoprodeck.com";jQuery(document).ready(function(){var link=jQuery("<link>"),setTimeoutConst;link.attr({type:"text/css",rel:"stylesheet",href:globalHost+"/tooltip.css"});jQuery("head").append(link);jQuery(document).on({mouseenter:function(e){if(window.location.toString().includes("/card-database/")){}else{var name=jQuery(e.currentTarget).data("name");if(isNaN(name)){name=name.replace(/\s*$/,"");}else{}
jQuery(this).prop("href","https://db.ygoprodeck.com/card/?search="+
encodeURIComponent(name));jQuery(this).attr("target","_blank");}
if(jQuery(window).width()<480){jQuery(this).removeAttr("href");jQuery(this).removeAttr("target");}
setTimeoutConst=setTimeout(function(){tooltip.open(e);},200);},mouseleave:function(e){clearTimeout(setTimeoutConst);tooltip.close(e);}},"a[data-name]");});jQuery("a[data-name]").css({'cursor':'pointer','color':'blue','text-decoration':'underline'});var tooltip={open:function(e){var name=jQuery(e.currentTarget).data("name"),host=globalHost+"/pics/";var url="";url=globalHost+
"/dev_tooltips/tooltip_yugioh.php?name="+
encodeURIComponent(name);tooltip.show(500,e);jQuery.ajax({url:url,dataType:"json",success:function(data){var tooltip=jQuery("#yugioh-tooltip-content");if(data.desc!==undefined){data.desc=data.desc.replace(/\n/g,"<br>");}
if(data.ban_tcg===""){data.ban_tcg="Unlimited";}
if(data.id&&data.type!=="Spell Card"&&data.type!=="Trap Card"&&data.type!=="Link Monster"&&data.type!=="Skill Card"){tooltip.html('<img src="'+
host+
data.id+
'.jpg" class="timg">'+
'<div id="yugioh-tooltip-desc" style="font-family:open sans;">'+
'<div class="name"><img src="https://ygoprodeck.com/pics/icons/'+
data.type+
'.jpg" style="height: 25px; width: 22px; float: left; padding-right: 5px; display: inline-block; vertical-align:top; margin:0;"><img src="https://ygoprodeck.com/pics/icons/'+
data.ban_tcg+
'.png" style="float: right; padding-right: 5px; display: inline-block; vertical-align:top; margin:0;margin-top:2px;"/>'+
data.name+
"</div>"+
'<div class="atk"><img src="https://ygoprodeck.com/wp-content/uploads/2017/01/atk.png" style="float:left; padding-right: 5px; display: inline-block; vertical-align:top; margin:0;" /> ATK : '+
data.atk+
" DEF : "+
data.def+
"</div>"+
'<div class="att">'+
'<img src="'+
host+
data.attribute+
'.jpg" style="height: 20px; width: 23px; float: left; padding-right: 5px; display: inline-block; vertical-align:top; margin:0;">'+
"Attribute : "+
data.attribute+
"</div>"+
'<div class="type">'+
'<img src="'+
host+
data.race+
'.png" style="float: left; padding-right: 5px; display: inline-block; vertical-align:top; margin:0;"/>'+
"Type : "+
data.race+
"</div>"+
'<div class="lvl"><img src="https://ygoprodeck.com/wp-content/uploads/2017/01/level.png" style="float: left; padding-right: 5px; display: inline-block; vertical-align:top; margin:0;"/> Level/Rank: '+
data.level+
"</div>"+
'<div class="text">'+
data.desc+
"</div>"+
"</div>");}else if(data.id&&data.type=="Link Monster"){tooltip.html('<img src="'+
host+
data.id+
'.jpg" class="timg">'+
'<div id="yugioh-tooltip-desc" style="font-family:open sans;">'+
'<div class="name"><img src="https://ygoprodeck.com/pics/icons/'+
data.type+
'.jpg" style="height: 25px; width: 22px; float: left; padding-right: 5px; display: inline-block; vertical-align:top; margin:0;"><img src="https://ygoprodeck.com/pics/icons/'+
data.ban_tcg+
'.png" style="float: right; padding-right: 5px; display: inline-block; vertical-align:top; margin:0;margin-top:2px;"/>'+
data.name+
"</div>"+
'<div class="atk"><img src="https://ygoprodeck.com/wp-content/uploads/2017/01/atk.png" style="float:left; padding-right: 5px; display: inline-block; vertical-align:top; margin:0;"/> ATK : '+
data.atk+
" LINK : "+
data.linkval+
"</div>"+
'<div class="att">'+
'<img src="'+
host+
data.attribute+
'.jpg" style="height: 20px; width: 23px; float: left; padding-right: 5px; display: inline-block; vertical-align:top; margin:0;">'+
"Attribute :  "+
data.attribute+
"</div>"+
'<div class="type">'+
'<img src="'+
host+
data.race+
'.png" style="float: left; padding-right: 5px; display: inline-block; vertical-align:top; margin:0;">'+
"Type : "+
data.race+
"</div>"+
'<div class="lvl"><img src="https://ygoprodeck.com/wp-content/uploads/2019/04/link-arrow-right.png" style="height: 20px; width: 20px;float: left; padding-right: 6px; display: inline-block; vertical-align:top; margin:0;"/> Link Arrows: '+
data.linkmarkers+
"</div>"+
'<div class="text">'+
data.desc+
"</div>"+
"</div>");}else if(data.id&&data.type=="Skill Card"){tooltip.html('<img src="'+
host+
data.id+
'.jpg" class="timg">'+
'<div id="yugioh-tooltip-desc" style="font-family:open sans;">'+
'<div class="name"><img src="https://ygoprodeck.com/pics/icons/'+
data.type+
'.jpg" style="height: 25px; width: 22px; float: left; padding-right: 5px; display: inline-block; vertical-align:top; margin:0;"><img src="https://ygoprodeck.com/pics/icons/'+
data.ban_tcg+
'.png" style="float: right; padding-right: 5px; display: inline-block; vertical-align:top; margin:0;margin-top:2px;"/>'+
data.name+
"</div>"+
'<div class="text">'+data.type+
"</div>"+
'<div class="text">'+
data.desc+
"</div>"+
"</div>");}else{tooltip.html('<img src="'+
host+
data.id+
'.jpg" class="timg">'+
'<div id="yugioh-tooltip-desc" style="font-family:open sans;">'+
'<div class="name"><img src="https://ygoprodeck.com/pics/icons/'+
data.type+
'.jpg" style="height: 25px; width: 22px; float: left; padding-right: 5px; display: inline-block; vertical-align:top; margin:0;"><img src="https://ygoprodeck.com/pics/icons/'+
data.ban_tcg+
'.png" style="float: right; padding-right: 5px; display: inline-block; vertical-align:top; margin:0;margin-top:2px;"/>'+
data.name+
"</div>"+
'<div class="text"><img src="https://ygoprodeck.com/pics/icons/'+
data.race+
'.png" style="float: left; padding-right: 5px; display: inline-block; vertical-align:top; margin:0;">'+
data.race+
" "+
data.type+
"</div>"+
'<div class="text">'+
data.desc+
"</div>"+
"</div>");}
if(data.desc!==undefined){jQuery("#yugioh-tooltip-desc",tooltip).append('<div style="margin-top:5px;"><span style="font-size:14px;color:white;" class="tooltipprices"><span style="color:#7aa9f4;">Cardmarket</span>: €'+data.currentPrice_cm+' <span style="color:#e04343;">TCGPlayer</span>: $'+data.currentPrice_tcg+' <span style="color:#bfc7ff;">eBay</span>: $'+data.currentPrice_eb+' <span style="color:#ff9e4f;">Amazon</span>: $'+data.currentPrice_am+'</span></div>');}},statusCode:{400:function(){var tooltip=jQuery("#yugioh-tooltip-content");tooltip.html('<img src="https://ygoprodeck.com/pics/Tooltip%20Error.jpg" class="timg">'+
'<div id="yugioh-tooltip-desc" style="color:white;font-size:14px;font-family:open sans;">Card Not Found</div>'+
'<div class="text" style="font-family:open sans;">Card information could not be found. This card could not be found in our database, please send us a message if you feel this card should be in our database.</div>'+
"</div>");}}});},show:function(size,e){jQuery("#yugioh-tooltip").remove();jQuery("body").append('<div id="yugioh-tooltip" class="card-tooltip"><div id="yugioh-tooltip-content"></div></div>');var position={left:function(){if(e.pageX>jQuery("body").width()/2){return e.pageX-size-50;}
return e.pageX+30;},top:e.pageY+30};jQuery("#yugioh-tooltip").css({left:position.left,top:position.top}).stop(true,true).fadeIn(400);var height=260,offsetTop=jQuery("#yugioh-tooltip").offset().top,scrolltop=jQuery(window).scrollTop(),windowHeight=window.innerHeight,yPos=height+offsetTop-scrolltop-windowHeight;if(yPos>-30){jQuery("#yugioh-tooltip").css({top:e.pageY-Math.max(0,yPos)-20});}},close:function(){jQuery(".card-tooltip").remove();}};window.a=tooltip;})(jQuery);}