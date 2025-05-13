var p_proz;
function popup_severnqshka()
{
//Правим прозореца

p_proz = window.open("", "", "top=1, left=300, width=960, height=1080");

//HTML в прозореца
//p_proz.document.open();

//HTML съдържание
p_proz.document.write("<html>");
p_proz.document.write("<head><title>Северняшка Фолклорна Област</title></head>");
p_proz.document.write("<body>");
p_proz.document.write("<center><font size=5 color=black><i><u>Северняшка Фолклорна област</u></i></font></center><br>");

p_proz.document.write("<p><font size=4>Елементите на женската носия са:</font></p>");

p_proz.document.write("<p><font size=4>Риза: Женската риза в Северняшката област обикновено е изработена от бяла или светлосива ленена тъкан</font></p>");
p_proz.document.write("<p><font size=4>Гръден шал(турлук): Турлукът е изключително важен и придава уникалност на носията.</font></p>");
p_proz.document.write("<p><font size=4>Престилка (калъп): Тя е украсена с орнаменти и символизира трудолюбието и отдадеността на жената в ежедневните дейности.</font></p>");
p_proz.document.write("<p><font size=4>Забрадка: Забрадките в Северняшката област са украсени с цветни орнаменти и са важен елемент от ежедневното облекло, като символ на женската скромност и трудолюбие.</font></p>");

p_proz.document.write("<p><font size=4>Елементите на мъжката носия са:</font></p>");

p_proz.document.write("<p><font size=4>Риза: Мъжката риза е също изработена от бяла ленена тъкан, но обикновено е с по-широки ръкави и по-прост дизайн.</font></p>");
p_proz.document.write("<p><font size=4>Панталони: Те са широки и удобни, подходящи за физическата работа, която се извършва в региона.</font></p>");
p_proz.document.write("<p><font size=4>Колан: Коланът е неизменна част от мъжката носия, често изработен от кожена лента или тъкан и украсен с различни орнаменти.</font></p>");
p_proz.document.write("<p><font size=4>Обувки: Мъжете носят традиционни кожени обувки, които са здрави и издръжливи, подходящи за ежедневна работа в полето и на земята.</font></p>");

p_proz.document.write("<left><img src=Images/muzhkasevernqshka.jpg width=460></left>");
p_proz.document.write("<right><img src=Images/zhenskasevernqshka.png width=460></right>");

p_proz.document.write("</html>");
//HTML прозорец затваряне

}





