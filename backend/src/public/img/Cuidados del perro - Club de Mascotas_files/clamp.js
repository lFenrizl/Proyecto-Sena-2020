!function(){function e(e,t){function n(e,t){return s.getComputedStyle||(s.getComputedStyle=function(e,t){return this.el=e,this.getPropertyValue=function(t){var n=/(\-([a-z]){1})/g;return"float"==t&&(t="styleFloat"),n.test(t)&&(t=t.replace(n,function(){return arguments[2].toUpperCase()})),e.currentStyle&&e.currentStyle[t]?e.currentStyle[t]:null},this}),s.getComputedStyle(e,null).getPropertyValue(t)}function i(t){var n=t||e.clientHeight,i=a(e);return Math.max(Math.floor(n/i),0)}function l(t){var n=a(e);return n*t}function a(e){var t=n(e,"line-height");return"normal"==t&&(t=1.2*parseInt(n(e,"font-size"))),parseInt(t)}function r(t){return t.lastChild.children&&t.lastChild.children.length>0?r(Array.prototype.slice.call(t.children).pop()):t.lastChild&&t.lastChild.nodeValue&&""!=t.lastChild.nodeValue&&t.lastChild.nodeValue!=p.truncationChar?t.lastChild:(t.lastChild.parentNode.removeChild(t.lastChild),r(e))}function u(t,n){function i(){y=p.splitOnChars.slice(0),H=y[0],v=null,g=null}if(n){var l=t.nodeValue.replace(p.truncationChar,"");if(v||(H=y.length>0?y.shift():"",v=l.split(H)),v.length>1?(g=v.pop(),o(t,v.join(H))):v=null,c&&(t.nodeValue=t.nodeValue.replace(p.truncationChar,""),e.innerHTML=t.nodeValue+" "+c.innerHTML+p.truncationChar),v){if(e.clientHeight<=n){if(!(y.length>=0&&""!=H))return e.innerHTML;o(t,v.join(H)+H+g),v=null}}else""==H&&(o(t,""),t=r(e),i());return p.animate?void setTimeout(function(){u(t,n)},p.animate===!0?10:p.animate):u(t,n)}}function o(e,t){e.nodeValue=t+p.truncationChar}t=t||{};var c,s=window,p={clamp:t.clamp||2,useNativeClamp:"undefined"!=typeof t.useNativeClamp?t.useNativeClamp:!0,splitOnChars:t.splitOnChars||[".","-","–","—"," "],animate:t.animate||!1,truncationChar:t.truncationChar||"…",truncationHTML:t.truncationHTML},h=e.style,d=e.innerHTML,f="undefined"!=typeof e.style.webkitLineClamp,C=p.clamp,m=C.indexOf&&(C.indexOf("px")>-1||C.indexOf("em")>-1);p.truncationHTML&&(c=document.createElement("span"),c.innerHTML=p.truncationHTML);var v,g,y=p.splitOnChars.slice(0),H=y[0];"auto"==C?C=i():m&&(C=i(parseInt(C)));var L;if(f&&p.useNativeClamp)h.overflow="hidden",h.textOverflow="ellipsis",h.webkitBoxOrient="vertical",h.display="-webkit-box",h.webkitLineClamp=C,m&&(h.height=p.clamp+"px");else{var M=l(C);M<=e.clientHeight&&(L=u(r(e),M))}return{original:d,clamped:L}}window.$clamp=e}();
