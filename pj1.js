	
if (document.addEventListener) {
document.addEventListener("DOMContentLoaded", function() {
	loaded();
});
} else if (document.attachEvent) {
    document.attachEvent("onreadystatechange", function() {
        loaded();
    });
}

function loaded() {
    setInterval(loop, 300);
}
var x = 0;

var titleText = [ 
   "B",
   "Be",
   "Bem",
   "Bem-",
   "Bem-V",
   "Bem-Vi",
   "Bem-Vin",
   "Bem-Vind",
   "Bem-Vindo!",
        

];

function loop() {

    document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];

}
	// JavaScript Document