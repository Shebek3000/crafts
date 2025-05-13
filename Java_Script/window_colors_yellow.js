var p_proz;
function popup_colors_yellow()
{
//Правим прозореца

p_proz = window.open("", "", "top=250, left=620, width=600, height=570");

//HTML в прозореца
//p_proz.document.open();

//HTML съдържание
p_proz.document.write("<html>");
p_proz.document.write("<head><title>Цветове в българските шевици</title></head>");
p_proz.document.write("<body style=background-color:#b3cbf6;>");
p_proz.document.write("<center><font size=5 color=yellow><i><u>Жълтият цвят в българските народни шевици и неговото значение</u></i></font></center><br>");

p_proz.document.write("<p><font size=4>Жълтата цветова гама в българските народни шевици е асоциирана със слънцето, светлината и радостта.</font></p>");
p_proz.document.write("<p style=text-indent:1cm;><font size=4>Този цвят предава чувство на оптимизъм, ентусиазъм и щастие.</font> </p>");
p_proz.document.write("<p style=text-indent:1cm;><font size=4>В шевиците жълтото се използва за изразяване на светлината в душата и живота. </font></p>");
p_proz.document.write("<p style=text-indent:1cm;><font size=4> Символ е на радост, щедрост и топлина.</font></p>");
p_proz.document.write("<p style=text-indent:1cm;><font size=4>Жълтият цвят се свързва със слънцето и огъня.</font></p>");
p_proz.document.write("<p style=text-indent:1cm;><font size=4>Според някои предания, жълтото е цветът на отвъдното.</font></p>");
p_proz.document.write("<center><img src=Images/yellow.jpg width=320 height=180></center>");

p_proz.document.write("</html>");
//HTML прозорец затваряне

}





