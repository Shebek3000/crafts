var p_proz;
function popup_strandzhanska()
{
//Правим прозореца

p_proz = window.open("", "", "top=1, left=300, width=960, height=1080");

//HTML в прозореца
//p_proz.document.open();

//HTML съдържание
p_proz.document.write("<html>");
p_proz.document.write("<head><title>Странджанска фолклорна област</title></head>");
p_proz.document.write("<body>");
p_proz.document.write("<center><font size=5 color=black><i><u>Странджанска фолклорна област</u></i></font></center><br>");

p_proz.document.write("<p><font size=4>Женска носия - елементи:</font></p>");

p_proz.document.write("<p><font size=4>Риза: Бяла, с богата бродерия около яката, ръкавите и подгъва, често в червен и черен конец.</font></p>");
p_proz.document.write("<p><font size=4>Сукман: Тъмен, почти винаги черен или тъмносин на цвят, дълъг и прав, без ръкави. Бродиран е с геометрични и растителни мотиви, обикновено в червено, жълто или зелено.</font></p>");
p_proz.document.write("<p><font size=4>Престилка (фартух): Ярко украсена, с хоризонтални ивици и шевици, обикновено червена с геометрични орнаменти.</font></p>");
p_proz.document.write("<p><font size=4>Пояс – вълнен, дълъг, често червен, обвива се няколко пъти около кръста.</font></p>");
p_proz.document.write("<p><font size=4>Чорапи: вълнени, с шарки.</font></p>");
p_proz.document.write("<p><font size=4>Забраждане: главата се покрива с кърпа (кърпене) или с кофа (шапка тип чепрак), особено при обредни случаи.</font></p>");

p_proz.document.write("<p><font size=4>Мъжка носия - елементи:</font></p>");

p_proz.document.write("<p><font size=4>Риза: Бяла, дълга, с бродирана яка и ръкави.</font></p>");
p_proz.document.write("<p><font size=4>Панталони: Обикновено бели.</font></p>");
p_proz.document.write("<p><font size=4>Пояс: червен или черен, дълъг и вълнен.</font></p>");
p_proz.document.write("<p><font size=4>Елек (елекче): Tъмен, вълнен, с малко украса.</font></p>");
p_proz.document.write("<p><font size=4>Калпак или кърпа: В зависимост от възрастта и повода.</font></p>");

p_proz.document.write("<left><img src=Images/muzhkastrandzhanska.jpg width=460></left>");
p_proz.document.write("<right><img src=Images/zhenskastrandzhanska.jpg width=460></right>");

p_proz.document.write("</html>");
//HTML прозорец затваряне

}
