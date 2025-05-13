var p_proz;
function popup()
{
//Правим прозореца

p_proz = window.open("", "", "top=250, left=620, width=600, height=730");

//HTML в прозореца
//p_proz.document.open();

//HTML съдържание
p_proz.document.write("<html>");
p_proz.document.write("<head><title>Мутафчийство</title></head>");
p_proz.document.write("<b>Изделия:<br/></b>");
p_proz.document.write("<p>Мутафчиите са произвеждали разнообразни изделия за ежедневна употреба, включително:<li> Торби: Използвани за носене на зърно, брашно, сено или други стоки.</li><li>Чували: За съхранение и транспорт на селскостопански продукти.</li><li>Юргани и одеяла: За топлина и изолация.</li><li>Дисаги и черги</li></p>");
p_proz.document.write("<b>Приложение:<br/></b>");
p_proz.document.write("<p><li> Изделията от козина са били здрави, издръжливи и подходящи за суровите условия на селския живот.</li><li>Козиненият текстил е бил предпочитан заради водоустойчивостта и устойчивостта си на тежки натоварвания.</li></p>");
p_proz.document.write("<b>Регионално разпространение:<br/></b>");
p_proz.document.write("<p><li> Мутафчийството е било широко разпространено в планинските и полупланинските райони на България, където отглеждането на кози е било развито. Типични региони включват Балкана, Родопите и Странджа.</li><li>Габрово е било един от центровете на този занаят, заедно с други райони в централна и южна България.</li></p>");
p_proz.document.write("<div style=position:absolute;>");
p_proz.document.write("<img src=Images/torba.jpg width=200 height=240 align=left border=1><br>");
p_proz.document.write("<b><font size=4 color=broun>торба</font></b>");
p_proz.document.write("</div>");
p_proz.document.write("<div style=position:absolute;left:300>");
p_proz.document.write("<img src=Images/disagi.gif width=170 height=240 align=right border=1><br>");

p_proz.document.write("<b><font size=4 color=broun>дисаги</font></b>");
p_proz.document.write("</div>");
p_proz.document.write("</html>");
//HTML прозорец затваряне

}





