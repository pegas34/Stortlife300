/* only for Ajax!!! */
var ar_width		= '300';
var ar_height		= '250';
var ar_html			= '300x250.html'; 
var ar_pix			= '';
/* Do not touch any below */

var a = adriver(ar_ph);
new adriver.Plugin.require("html.adriver", 'pixel.adriver', 'makeImage.adriver' ).onLoadComplete(function(){
	a.onDomReady(function(){
		a.sendPixels(ar_pix);
		a.p.innerHTML = a.makeHTML(ar_width, ar_height, ar_html);
		a.loadComplete();
	})
});

