      //<![CDATA[

      // Related Post Script
        var relatedTitles=[],relatedTitlesNum=0,relatedUrls=[],thumburl=[]; function related_results_labels_thumbs(f){for(var e=0;e<f.feed.entry.length;e++){var g=f.feed.entry[e];relatedTitles[relatedTitlesNum]=g.title.$t;try{thumburl[relatedTitlesNum]=g.media$thumbnail.url}catch(h){s=g.content.$t,a=s.indexOf("<img"),b=s.indexOf('src="',a),c=s.indexOf('"',b+5),d=s.substr(b+5,c-b-5),thumburl[relatedTitlesNum]=-1!=a&&-1!=b&&-1!=c&&""!=d?d:"undefined"!==typeof defaultnoimage?defaultnoimage:"http://3.bp.blogspot.com/-PpjfsStySz0/UF91FE7rxfI/AAAAAAAACl8/092MmUHSFQ0/s1600/no_image.jpg"}120<relatedTitles[relatedTitlesNum].length&& (relatedTitles[relatedTitlesNum]=relatedTitles[relatedTitlesNum].substring(0,120)+"...");for(var k=0;k<g.link.length;k++)"alternate"==g.link[k].rel&&(relatedUrls[relatedTitlesNum]=g.link[k].href,relatedTitlesNum++)}} function removeRelatedDuplicates_thumbs(){for(var f=[],e=[],g=[],h=0;h<relatedUrls.length;h++)contains_thumbs(f,relatedUrls[h])||(f.length+=1,f[f.length-1]=relatedUrls[h],e.length+=1,g.length+=1,e[e.length-1]=relatedTitles[h],g[g.length-1]=thumburl[h]);relatedTitles=e;relatedUrls=f;thumburl=g}function contains_thumbs(f,e){for(var g=0;g<f.length;g++)if(f[g]==e)return!0;return!1} function printRelatedLabels_thumbs(f){for(var e=0;e<relatedUrls.length;e++)relatedUrls[e]!=f&&relatedTitles[e]||(relatedUrls.splice(e,1),relatedTitles.splice(e,1),thumburl.splice(e,1),e--);f=Math.floor((relatedTitles.length-1)*Math.random());e=0;0<relatedTitles.length&&document.write("<h2>"+relatedpoststitle+"</h2>");for(document.write('<div style="clear: both;"/>');e<relatedTitles.length&&20>e&&e<maxresults;)document.write('<a style="text-decoration:none;'),document.write('"'),document.write(' href="'+ relatedUrls[f]+'"><img src="'+thumburl[f].replace("/s72-c/","/w225-h120-c/")+'"/><div class="relatedTitles">'+relatedTitles[f]+"</div></a>"),e++,f<relatedTitles.length-1?f++:f=0;document.write("</div>");relatedUrls.splice(0,relatedUrls.length);thumburl.splice(0,thumburl.length);relatedTitles.splice(0,relatedTitles.length)};

        // Blogger Script
function removeHtmlTag(b,c){if(-1!=b.indexOf("<")){for(var a=b.split("<"),d=0;d<a.length;d++)-1!=a[d].indexOf(">")&&(a[d]=a[d].substring(a[d].indexOf(">")+1,a[d].length));b=a.join("")}for(c=c<b.length-1?c:b.length-2;" "!=b.charAt(c-1)&&-1!=b.indexOf(" ",c);)c++;b=b.substring(0,c-1);return b+"..."}function createSummary(b){b=document.getElementById(b);var c="<div><p>"+removeHtmlTag(b.innerHTML,150)+"</div></p>";b.innerHTML=c} function myrecent(b){for(var c=0;c<b.feed.entry.length;c++){for(var a=0;a<b.feed.entry[c].link.length;a++)if("alternate"==b.feed.entry[c].link[a].rel){var d=b.feed.entry[c].link[a].href;break}var a=b.feed.entry[c].published.$t,e=a.substring(0,4),k=a.substring(5,7),a=a.substring(8,10),g=b.feed.entry[c].category[0].term,l=b.feed.entry[c].title.$t,a='<div class="po_content"><div class="po_img"><a href='+d+'><img src="'+b.feed.entry[c].media$thumbnail.url.replace("/s72-c/","/s110-h85-c/")+'"/></a></div><div class="fea_con"><div class="tune"><a href="/search/label/'+ g+'?&max-results=8">'+g+"</a></div><h3><a href="+d+">"+l+'</a></h3><div class="date-header">'+[,"January","February","March","April","May","June","July","August","September","October","November","December"][parseInt(k,10)]+" "+a+", "+e+"</div></div></div>";document.write(a)}} function repostfw(b){for(var c=0;c<b.feed.entry.length;c++){for(var a=0;a<b.feed.entry[c].link.length;a++)if("alternate"==b.feed.entry[c].link[a].rel){var d=b.feed.entry[c].link[a].href;break}a="thr$total"in b.feed.entry[c]?b.feed.entry[c].thr$total.$t+" Comments":"Comments Disable";"1 Comments"==a&&(a="1 Comment");"0 Comments"==a&&(a="No Comments");var e=b.feed.entry[c].published.$t,k=e.substring(0,4),g=e.substring(5,7),e=e.substring(8,10),l=b.feed.entry[c].title.$t,h=b.feed.entry[c].category[0].term, f=b.feed.entry[c].media$thumbnail.url;-1!=f.indexOf("img.youtube.com")&&(f=b.feed.entry[c].media$thumbnail.url.replace("default","0"));var m=b.feed.entry[c].summary.$t.substring(0,120),n=m.lastIndexOf(" "),m=m.substring(0,n)+"...",a='<div class="wrapper"><div class="rp-fw-img"><a href='+d+'><img src="'+f.replace("/s72-c/","/s350/")+'"/></a></div><div class="repostt"><a href="/search/label/'+h+'?&max-results=8">'+h+'</a></div><div class="wrappercon"><h3><a href='+d+">"+l+'</a></h3><div class="reposth">- '+ [,"January","February","March","April","May","June","July","August","September","October","November","December"][parseInt(g,10)]+" "+e+", "+k+' <span class="comment-icon"><a href='+d+"#comments>"+a+"</a></span></div><p>"+m+"</p></div></div>";document.write(a)}} function biggallery(b){for(var c=0;c<b.feed.entry.length;c++){for(var a=0;a<b.feed.entry[c].link.length;a++)if("alternate"==b.feed.entry[c].link[a].rel){var d=b.feed.entry[c].link[a].href;break}a="thr$total"in b.feed.entry[c]?b.feed.entry[c].thr$total.$t+" Comments":"Comments Disable";"1 Comments"==a&&(a="1 Comment");"0 Comments"==a&&(a="No Comments");var e=b.feed.entry[c].published.$t,k=e.substring(0,4),g=e.substring(5,7),e=e.substring(8,10),l=b.feed.entry[c].title.$t,h=b.feed.entry[c].category[0].term, f=b.feed.entry[c].media$thumbnail.url;-1!=f.indexOf("img.youtube.com")&&(f=b.feed.entry[c].media$thumbnail.url.replace("default","0"));a='<div class="big-gallery-content"><div class="big-gallery-image"><a href='+d+'><img src="'+f.replace("/s72-c/","/s1600/")+'"/></a></div><div class="big-gallery-wrapper"><div class="big-gallery-label"><a href="/search/label/'+h+'?&max-results=8">'+h+"</a></div><h3><a href="+d+">"+l+'</a></h3><div class="date-comment">- '+[,"January","February","March","April","May", "June","July","August","September","October","November","December"][parseInt(g,10)]+" "+e+", "+k+' <span class="comment-icon"><a href='+d+"#comments>"+a+"</a></span></div></div></div>";document.write(a)}} function smallgallery(b){for(var c=0;c<b.feed.entry.length;c++){for(var a=0;a<b.feed.entry[c].link.length;a++)if("alternate"==b.feed.entry[c].link[a].rel){var d=b.feed.entry[c].link[a].href;break}a="thr$total"in b.feed.entry[c]?b.feed.entry[c].thr$total.$t+" Comments":"Comments Disable";"1 Comments"==a&&(a="1 Comment");"0 Comments"==a&&(a="No Comments");var e=b.feed.entry[c].published.$t,k=e.substring(0,4),g=e.substring(5,7),e=e.substring(8,10),l=b.feed.entry[c].title.$t,h=b.feed.entry[c].category[0].term, f=b.feed.entry[c].media$thumbnail.url;-1!=f.indexOf("img.youtube.com")&&(f=b.feed.entry[c].media$thumbnail.url.replace("default","0"));a='<div class="small-gallery-content"><div class="small-gallery-image"><a href='+d+'><img src="'+f.replace("/s72-c/","/s420/")+'"/></a></div><div class="small-gallery-wrapper"><div class="small-gallery-label"><a href="/search/label/'+h+'?&max-results=8">'+h+"</a></div><h3><a href="+d+">"+l+'</a></h3><div class="date-comment">- '+[,"January","February","March","April", "May","June","July","August","September","October","November","December"][parseInt(g,10)]+" "+e+", "+k+' <span class="comment-icon"/><a href='+d+"#comments>"+a+"</a></div></div></div>";document.write(a)}} function simg(b){for(var c=0;c<b.feed.entry.length;c++){for(var a=0;a<b.feed.entry[c].link.length;a++)if("alternate"==b.feed.entry[c].link[a].rel){var d=b.feed.entry[c].link[a].href;break}a=b.feed.entry[c].media$thumbnail.url;-1!=a.indexOf("img.youtube.com")&&(a=b.feed.entry[c].media$thumbnail.url.replace("default","0"));a='<div class="s-img"><a href='+d+'><img src="'+a.replace("/s72-c/","/s160/")+'"/></a></div>';document.write(a)}};

//]]>