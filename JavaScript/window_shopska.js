var p_proz;
function popup_shopska()
{
//Правим прозореца

p_proz = window.open("", "", "top=1, left=300, width=960, height=1080");

//HTML в прозореца
//p_proz.document.open();

//HTML съдържание
p_proz.document.write("<html>");
p_proz.document.write("<head><title>Шопска фолклорна област</title></head>");
p_proz.document.write("<body>");
p_proz.document.write("<center><font size=5 color=black><i><u>Шопска фолклорна област</u></i></font></center><br>");

p_proz.document.write("<p><font size=4>Женска носия - елементи:</font></p>");

p_proz.document.write("<p><font size=4>Риза: Ризата има широки ръкави, които се стесняват към китката и са украсени с богати бродерии в червено, черно и златисто.</font></p>");
p_proz.document.write("<p><font size=4>Гръден шал(турлук): Обикновено е декориран с геометрични мотиви и е един от най-разпознаваемите елементи в женската носия от този район.</font></p>");
p_proz.document.write("<p><font size=4>Калъп (престилка): Калъпът е украсен с различни орнаменти и символи, които могат да имат защитаваща функция или да символизират плодовитост.</font></p>");
p_proz.document.write("<p><font size=4>Забрадка: Жените в Шопската област носят забрадки, които са украсени с бродерии или тъкани в ярки цветове, като червено и жълто.</font></p>");

p_proz.document.write("<p><font size=4>Мъжка носия - елементи:</font></p>");

p_proz.document.write("<p><font size=4>Риза: Тя е със широки ръкави, които също са украсени с геометрични шевици, но в по-прости форми.</font></p>");
p_proz.document.write("<p><font size=4>Панталони: Панталоните са изработени от вълнени тъкани в тъмни цветове.</font></p>");
p_proz.document.write("<p><font size=4>Колан: Коланът е важен елемент от мъжката носия и обикновено е изработен от кожа или вълнена тъкан.</font></p>");
p_proz.document.write("<p><font size=4>Обувки: Кожените обувки, които мъжете носят, са обикновено здрави и издръжливи, изработени за работа в земеделието и други ежедневни дейности.</font></p>");

p_proz.document.write("<left><img src=Images/muzhkashopska.png width=460></left>");
p_proz.document.write("<right><img src=Images/zhenskashopska.png width=460></right>");

p_proz.document.write("</html>");
//HTML прозорец затваряне

}





