var p_proz;
function popup_colors()
{
//Правим прозореца

p_proz = window.open("", "", "top=250, left=620, width=600, height=790");

//HTML в прозореца
//p_proz.document.open();

//HTML съдържание
p_proz.document.write("<html>");
p_proz.document.write("<head><title>Цветове в българските шевици</title></head>");
p_proz.document.write("<center><font size=5 color=red><i><u>Червеният цвят в българските народни шевици и неговото значение</u></i></font></center><br>");
p_proz.document.write("<p><font size=4>Червената цветова гама в българските народни шевици е изключително популярна и важна. Този цвят се свързва с мощта, продължението на живота и енергията. В шевиците червеното се използва за подчертаване на смелостта и силата. Той предпазвал от “лоши очи” и уроки. То е символ на любов, страст и увереност.</p>");
p_proz.document.write("<p style=text-indent:1cm;><font size=4>Прекрита с червено було се венчавала невестата;</font></p>");
p_proz.document.write("<p style=text-indent:1cm;><font size=4>С червена пелена повивали новороденото;</font></p>");
p_proz.document.write("<p style=text-indent:1cm;><font size=4>С червен конец привързвали обредните китки;</font></p>");
p_proz.document.write("<p style=text-indent:1cm;><font size=4>Червено било първото обагрено за Възкресение Христово яйце, с което мацвали челцата и бузките на децата за здраве;</font></p>");
p_proz.document.write("<p style=text-indent:1cm;><font size=4>С прехвърлена върху плета червена тъкан във всеки дом посрещали Баба Марта, която водела пролетното съживяване на природата.</font></p>");
p_proz.document.write("<center><img src=Images/Svatba.jpg width=200 height=320></center>");

p_proz.document.write("</html>");
//HTML прозорец затваряне

}





