/* share42.com | 05.05.2014 | (c) Dimox */
(function($){$(function(){$('div.share42init').each(function(idx){var el=$(this),u=el.attr('data-url'),t=el.attr('data-title'),i=el.attr('data-image'),d=el.attr('data-description'),f=el.attr('data-path'),fn=el.attr('data-icons-file'),z=el.attr("data-zero-counter"),m1=el.attr('data-top1'),m2=el.attr('data-top2')*1,m3=el.attr('data-margin');if(!u)u=location.href;if(!fn)fn='icons.png';if(!z)z=0;if(!f){function path(name){var sc=document.getElementsByTagName('script'),sr=new RegExp('^(.*/|)('+name+')([#?]|$)');for(var p=0,scL=sc.length;p<scL;p++){var m=String(sc[p].src).match(sr);if(m){if(m[1].match(/^((https?|file)\:\/{2,}|\w:[\/\\])/))return m[1];if(m[1].indexOf("/")==0)return m[1];b=document.getElementsByTagName('base');if(b[0]&&b[0].href)return b[0].href+m[1];else return document.location.pathname.match(/(.*[\/\\])/)[0]+m[1];}}return null;}f=path('share42.js');}if(!t)t=document.title;if(!d){var meta=$('meta[name="description"]').attr('content');if(meta!==undefined)d=meta;else d='';}if(!m1)m1=150;if(!m2)m2=20;if(!m3)m3=0;u=encodeURIComponent(u);t=encodeURIComponent(t);t=t.replace(/\'/g,'%27');i=encodeURIComponent(i);d=encodeURIComponent(d);d=d.replace(/\'/g,'%27');var fbQuery='u='+u;if(i!='null'&&i!='')fbQuery='s=100&p[url]='+u+'&p[title]='+t+'&p[summary]='+d+'&p[images][0]='+i;var s=new Array('"#" data-count="twi" onclick="window.open(\'https://twitter.com/intent/tweet?text='+t+'&url='+u+'\', \'_blank\', \'scrollbars=0, resizable=1, menubar=0, left=100, top=100, width=550, height=440, toolbar=0, status=0\');return false" title="Share on Twitter"','"#" data-count="fb" onclick="window.open(\'http://www.facebook.com/sharer.php?m2w&'+fbQuery+'\', \'_blank\', \'scrollbars=0, resizable=1, menubar=0, left=100, top=100, width=550, height=440, toolbar=0, status=0\');return false" title="Share on Facebook"','"#" data-count="gplus" onclick="window.open(\'https://plus.google.com/share?url='+u+'\', \'_blank\', \'scrollbars=0, resizable=1, menubar=0, left=100, top=100, width=550, height=440, toolbar=0, status=0\');return false" title="Share on Google+"','"#" data-count="lnkd" onclick="window.open(\'http://www.linkedin.com/shareArticle?mini=true&url='+u+'&title='+t+'\', \'_blank\', \'scrollbars=0, resizable=1, menubar=0, left=100, top=100, width=600, height=400, toolbar=0, status=0\');return false" title="Share on Linkedin"','"http://reddit.com/submit?url='+u+'&title='+t+'" title="Share on Reddit"','"#" data-count="dlcs" onclick="window.open(\'http://delicious.com/save?url='+u+'&title='+t+'&note='+d+'\', \'_blank\', \'scrollbars=0, resizable=1, menubar=0, left=100, top=100, width=710, height=660, toolbar=0, status=0\');return false" title="Save to Delicious"','"https://www.evernote.com/clip.action?url='+u+'&title='+t+'" title="Share on Evernote"','"http://www.feedburner.com/fb/a/emailFlare?loc=en_US&itemTitle='+t+'&uri='+u+'" title="Email this to a friend"','"" onclick="return fav(this);" title="Save to Browser Favorites"');var l='';for(j=0;j<s.length;j++){var s42s='';l+='<span class="share42-item" style="display:block;white-space:no-wrap;margin:0 0 6px;height:32px;"><a rel="nofollow" style="display:inline-block;vertical-align:top;width:32px;height:32px;margin:0;padding:0;outline:none;background:url('+f+fn+') -'+32*j+'px 0 no-repeat" href='+s[j]+' target="_blank"></a></span>'+s42s;};el.html('<span id="share42" style="position:fixed;z-index:9999;margin-left:'+m3+'px">'+l+'</span>'+'');var p=$('#share42');function m(){var top=$(window).scrollTop();if(top+m2<m1){p.css({top:m1-top});}else{p.css({top:m2});}}m();$(window).scroll(function(){m();})});})})(jQuery);function fav(a){var title=document.title;var url=document.location;try{window.external.AddFavorite(url,title);}catch(e){try{window.sidebar.addPanel(title,url,'');}catch(e){if(typeof(opera)=='object'||window.sidebar){a.rel='sidebar';a.title=title;a.url=url;a.href=url;return true;}else{alert('Press Ctrl-D to add the page to browser favorites');}}}return false;};