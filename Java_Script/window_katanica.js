var p_proz;
function popup()
{
//Правим прозореца

p_proz = window.open("", "", "top=250, left=620, width=600, height=730");

//HTML в прозореца
//p_proz.document.open();

//HTML съдържание
p_proz.document.write("<html>");
p_proz.document.write("<head><title>Дървото на живота</title></head>");
p_proz.document.write("<div>");
p_proz.document.write("<iframe src=https://trinket.io/embed/python/e1ff775af8dc?toggleCode=true&start=result width=100% height=100% frameborder=0 marginwidth=0 marginheight=0 allowfullscreen></iframe>");
p_proz.document.write("</div>");
p_proz.document.write("</html>");
//HTML прозорец затваряне

}





