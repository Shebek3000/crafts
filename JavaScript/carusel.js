var pausa = 2000;
var n=0;
var pics = new Array("slide1.jpg","slide2.jpg","slide3.jpg","slide4.jpg","slide5.jpg","slide6.jpg");
var preload = new Array();
for (var i=1; i<pics.length;i++)
{preload[i]=new Image();
preload[i].src="Images/slide/"+pics[i];
}
function smiana()
{
document.images.pic.src="Images/slide/"+pics[n];
(n==(pics.length-1))?n=0:n++;
setTimeout("smiana()",pausa);
}
window.onload=smiana;