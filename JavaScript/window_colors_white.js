var p_proz;
function popup_colors_white()
{
//Правим прозореца

p_proz = window.open("", "", "top=250, left=620, width=600, height=550");

//HTML в прозореца
//p_proz.document.open();

//HTML съдържание
p_proz.document.write("<html>");
p_proz.document.write("<head><title>Цветове в българските шевици</title></head>");
p_proz.document.write("<body style=background-color:#3f944a;>");

p_proz.document.write("<center><font size=6 color=white><i><u>Белият цвят в българските народни шевици и неговото значение</u></i></font></center><br>");

p_proz.document.write("<p><font size=4 color=white>Белият цвят разкривал силата на чистотата, нетленността, неопетнената младост и божествената светлина.</font> </p>");
p_proz.document.write("<p style=text-indent:1cm;><font size=4 color=white>Стъпили върху бяла вълна се венчавали младоженците;</font> </p>");
p_proz.document.write("<p style=text-indent:1cm;><font size=4 color=white>Бяла вълна запридала булката в сватбения обред;</font></p>");
p_proz.document.write("<p style=text-indent:1cm;><font size=4 color=white>С бяла пара лекувала баячката;</font> </p>");
p_proz.document.write("<p style=text-indent:1cm;><font size=4 color=white>В бели менци наливали мълчана вода за обредните хлябове.</font></p>");

p_proz.document.write("<center><img src=Images/white.webp width=320 height=200></center>");
p_proz.document.write("</body>");
p_proz.document.write("</html>");
//HTML прозорец затваряне

}





