var p_proz;
function popup_colors_blue()
{
//Правим прозореца

p_proz = window.open("", "", "top=250, left=620, width=600, height=700");

//HTML в прозореца
//p_proz.document.open();

//HTML съдържание
p_proz.document.write("<html>");
p_proz.document.write("<head><title>Цветове в българските шевици</title></head>");
p_proz.document.write("<center><font size=5 color=blue><i><u>Синият цвят в българските народни шевици и неговото значение</u></i></font></center><br>");

p_proz.document.write("<p><font size=4>Синият цвят изобразява небето, простора и водата. Той олицетворява истината и доверието, спокойствието и съзерцанието.</font></p>");
p_proz.document.write("<p style=text-indent:1cm;><font size=4>Предава усещане за мистерия, дълбочина и солидност. </font> </p>");
p_proz.document.write("<p style=text-indent:1cm;><font size=4>Често се съчетава в комбинация със своя противоположен червен цвят.</font></p>");
p_proz.document.write("<p style=text-indent:1cm;><font size=4> Изразява достойнство, сила и уважение.  </font></p>");
p_proz.document.write("<p style=text-indent:1cm;><font size=4>Символ е на духовност и стабилност.</font></p>");
p_proz.document.write("<p style=text-indent:1cm;><font size=4>Синият цвят се свързва с морето и небето и тяхната съвършена чистота.</font></p>");
p_proz.document.write("<center><img src=Images/green.jpg width=320 height=320></center>");

p_proz.document.write("</html>");
//HTML прозорец затваряне

}





