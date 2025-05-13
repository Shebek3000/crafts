var p_proz;
function popup_colors_green()
{
//Правим прозореца

p_proz = window.open("", "", "top=250, left=620, width=600, height=730");

//HTML в прозореца
//p_proz.document.open();

//HTML съдържание
p_proz.document.write("<html>");
p_proz.document.write("<head><title>Цветове в българските шевици</title></head>");
p_proz.document.write("<center><font size=5 color=green><i><u>Зеленият цвят в българските народни шевици и неговото значение</u></i></font></center><br>");

p_proz.document.write("<p><font size=4>Зелената цветова гама в българските народни шевици е свързана с природата, плодородието и обновлението.</font></p>");
p_proz.document.write("<p style=text-indent:1cm;><font size=4>Този цвят предава чувството на свежест, живот и радост.</font> </p>");
p_proz.document.write("<p style=text-indent:1cm;><font size=4>В шевиците зеленото се използва за отразяване на връзката на българския народ със земята и природата. </font></p>");
p_proz.document.write("<p style=text-indent:1cm;><font size=4> Символ е на надежда и растеж. </font></p>");
p_proz.document.write("<p style=text-indent:1cm;><font size=4>Дава израз на вечно възраждащия се живот.</font></p>");
p_proz.document.write("<p style=text-indent:1cm;><font size=4>Свързвал се е с дървото на живота – универсалният човешки символ за Всемира.</font></p>");
p_proz.document.write("<center><img src=Images/green.jpg width=320 height=320></center>");

p_proz.document.write("</html>");
//HTML прозорец затваряне

}





