var p_proz;
function popup_colors_black()
{
//Правим прозореца

p_proz = window.open("", "", "top=250, left=620, width=600, height=380");

//HTML в прозореца
//p_proz.document.open();

//HTML съдържание
p_proz.document.write("<html>");
p_proz.document.write("<head><title>Цветове в българските шевици</title></head>");
p_proz.document.write("<body>");
p_proz.document.write("<center><font size=5 color=black><i><u>Черният цвят в българските народни шевици и неговото значение</u></i></font></center><br>");

p_proz.document.write("<p><font size=4>Oлицетворява Майката земя, нейната стабилност и сигурност. Този цвят може да представлява тъга, събиране и спомен за предците.</font></p>");


p_proz.document.write("<center><img src=Images/black.png width=320 height=180></center>");

p_proz.document.write("</html>");
//HTML прозорец затваряне

}





