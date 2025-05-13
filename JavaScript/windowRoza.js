var p_proz;
function popupRoza()
{
//Правим прозореца

p_proz = window.open("", "", "top=250, left=620, width=600, height=730");

//HTML в прозореца
//p_proz.document.open();

//HTML съдържание
p_proz.document.write("<html>");
p_proz.document.write("<head><title>Розоварство</title></head>");
p_proz.document.write("<body>");

p_proz.document.write("<center><img width=200 height=200 src=Images/Rosa_damascena1.jpg style=border:2px solid brown;Float:left;margin-right:20px;></center>");
p_proz.document.write("<b>Особености:</b><br/>");
p_proz.document.write("<p>Роза Дамаскена (Rosa damascena), по името на град Дамаск, край който се е отглеждала в древността. Известна също като розата на Кастилия е хибриден вид маслодайна роза, получена от съчетаването на Галска роза и Мускусна роза. </p>");
p_proz.document.write("<b>Приложение:<br/></b>");
p_proz.document.write("<p>Цветовете ѝ са известни с финия си аромат и се берат за розово масло („роза ото“ или „роза абсолю“, което се използва в парфюмерията) и за розова вода и „розов конкрет“. Венчелистчетата на цветовете са годни и за консумация. Те могат да се използват за ароматизиране на храни, като гарнитура, като билков чай и да се консервират със захар („гулканд“).</p>");
p_proz.document.write("</body>");

p_proz.document.write("</html>");
//HTML прозорец затваряне

}





