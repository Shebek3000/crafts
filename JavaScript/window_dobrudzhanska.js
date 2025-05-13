var p_proz;
function popup_dobrudzhanska()
{
//Правим прозореца

p_proz = window.open("", "", "top=1, left=300, width=960, height=1080");

//HTML в прозореца
//p_proz.document.open();

//HTML съдържание
p_proz.document.write("<html>");
p_proz.document.write("<head><title>Добруджанска Фолклорна Област</title></head>");
p_proz.document.write("<body>");
p_proz.document.write("<center><font size=5 color=black><i><u>Добруджанска Фолклорна област</u></i></font></center><br>");

p_proz.document.write("<p><font size=4>Елементите на женската носия са:</font></p>");

p_proz.document.write("<p><font size=4>Риза: Женската риза е изработена от бяла ленена тъкан и често е украсена с ръчно изработени шевици.</font></p>");
p_proz.document.write("<p><font size=4>Калъп: Жените в Добруджа носят калъп (или престилка), която се изработва от различни материи – от червени, сини или черни вълнени платове.</font></p>");
p_proz.document.write("<p><font size=4>Гръден шал(турлук): Турлукът е изключително важен и придава уникалност на носията.</font></p>");
p_proz.document.write("<p><font size=4>Забрадка: Жените в Добруджа обикновено носят памучни или ленени забрадки, които са скрепени със специален връзки.</font></p>");

p_proz.document.write("<p><font size=4>Елементите на мъжката носия са:</font></p>");

p_proz.document.write("<p><font size=4>Риза: Мъжката риза е също изработена от бяла ленена тъкан, но обикновено има по-прости шевици и е по-широка в кръста.</font></p>");
p_proz.document.write("<p><font size=4>Панталони: Панталоните на мъжете в Добруджа са широки, удобни и изработени от вълнени тъкани.</font></p>");
p_proz.document.write("<p><font size=4>Колан: Мъжете носят колан от вълнени конци, който е украсен с традиционни български орнаменти и е важен за задържането на ризата и панталоните.</font></p>");
p_proz.document.write("<p><font size=4>Обувки: Кожени обуща, често с ръчно направени декорации, които са удобни за работа в полето.</font></p>");

p_proz.document.write("<left><img src=Images/muzhkadobrudzhanska.jpg width=460></left>");
p_proz.document.write("<right><img src=Images/zhenskadobrudzhanska.png width=460></right>");

p_proz.document.write("</html>");
//HTML прозорец затваряне

}





