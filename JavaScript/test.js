	//Masiv za podregdane na otgovorite na vapros1
var m1=Array(0,1,2,3);
//Masiv za podregdane na otgovorite na vapros2
var m2=Array(0,1,2,3);
//Masiv za podregdane na otgovorite na vapros3
var m3=Array(0,1,2,3);
//Masiv za podregdane na otgovorite na vapros4
var m4=Array(0,1,2,3);
//Masiv za podregdane na otgovorite na vapros5
var m5=Array(0,1,2,3);
//Masiv za podregdane na otgovorite na vapros6
var m6=Array(0,1,2,3);
//Masiv za podregdane na otgovorite na vapros7
var m7=Array(0,1,2,3);
//Masiv za podregdane na otgovorite na vapros8
var m8=Array(0,1,2,3);
//Masiv za podregdane na otgovorite na vapros9
var m9=Array(0,1,2,3);
//Masiv za podregdane na otgovorite na vapros10
var m10=Array(0,1,2,3);
//Masiv za podregdane na otgovorite na vapros11
var m11=Array(0,1,2,3);

//masiv s otgovori na 1 vapros
var otgv1=new Array("памук","дърво","козина","каолин ");

//masiv s otgovori na 2 vapros
var otgv2=new Array("катаница","дърво на живота","небесна костенурка","меча стъпка");

//masiv s otgovori na 3 vapros
var otgv3=new Array("дърво на живота","катаница","небесна костенурка","меча стъпка");

//masiv s otgovori na 4 vapros
var otgv4=new Array("вулия","чул","дисаги","черкез");

//masiv s otgovori na 5 vapros
var otgv5=new Array("сърп","грапа","плуг","паламарка");

//masiv s otgovori na6 vapros
var otgv6=new Array("паламарка","плуг","грапа","диканя");

//masiv s otgovori na7 vapros
var otgv7=new Array("диканя","вила","гребло", "сърп");

//masiv s otgovori na8 vapros
var otgv8=new Array("син","зелен","бял","червен");

//masiv s otgovori na9vapros
var otgv9=new Array("бял","жълт","червен","зелен");

//masiv s otgovori na10 vapros
var otgv10=new Array("козина","дърво","глина","мед");

//masiv s otgovori na11 vapros
var otgv11=new Array("шкурка","пила","сърп","длето");




//masiv s verni otgovori
var verenotg=new Array(2,1,1,0,2,2,0,3,1,2,3);

function rezultat()
{
var brt=0;

for (var i=0; i<=3; i++)
{
if ((document.forms.f.r1[i].checked) && (document.forms.f.r1t[i].value == otgv1[verenotg[0]])) brt=brt+10; 
if ((document.forms.f.r2[i].checked) && (document.forms.f.r2t[i].value == otgv2[verenotg[1]])) brt=brt+10; 
if ((document.forms.f.r3[i].checked) && (document.forms.f.r3t[i].value == otgv3[verenotg[2]])) brt=brt+10; 
if ((document.forms.f.r4[i].checked) && (document.forms.f.r4t[i].value == otgv4[verenotg[3]])) brt=brt+10; 
if ((document.forms.f.r5[i].checked) && (document.forms.f.r5t[i].value == otgv5[verenotg[4]])) brt=brt+10; 
if ((document.forms.f.r6[i].checked) && (document.forms.f.r6t[i].value == otgv6[verenotg[5]])) brt=brt+10; 
if ((document.forms.f.r7[i].checked) && (document.forms.f.r7t[i].value == otgv7[verenotg[6]])) brt=brt+10; 
if ((document.forms.f.r8[i].checked) && (document.forms.f.r8t[i].value == otgv8[verenotg[7]])) brt=brt+10; 
if ((document.forms.f.r9[i].checked) && (document.forms.f.r9t[i].value == otgv9[verenotg[8]])) brt=brt+10; 
if ((document.forms.f.r10[i].checked) && (document.forms.f.r10t[i].value == otgv10[verenotg[9]])) brt=brt+10; 
if ((document.forms.f.r11[i].checked) && (document.forms.f.r11t[i].value == otgv11[verenotg[10]])) brt=brt+10; 
}



var str=" ";
var brtstr="Вие получихте "+brt.toString()+" точки";
if ((brt>=0)&&(brt<40)) str=str+"\n"+"Научете повече!";
if ((brt>=40)&&(brt<80)) str=str+"\n"+"Браво, но можете повече!";
if (brt>=80) str=str+"\n"+"Отличен резултат!";



//alert(str);
var p_proz = window.open("", "", "top=250, left=620, width=600, height=130");
p_proz.document.write("<html>");
p_proz.document.write("<head><title>Резултати:</title></head>");
p_proz.document.write("<br>");
p_proz.document.write("<center><b>");
p_proz.document.write(brtstr);
p_proz.document.write("<br><br>");
p_proz.document.write(str);
p_proz.document.write("</b></center>");
}

//Zaregda masiv sas sluchaini cisla
function rand(m)
{
var sl;
for (var i=0; i<4;  i++)
{sl=Math.ceil(Math.random()*4)-1;
pom=m[i];
m[i]=m[sl];
m[sl]=pom;
}
//var st="";
//for (var i=0; i<4; i++)
//st=st+m[i].toString();
//alert(st);
}


function novtest()
{

//izkluchvat se radiobutonite
for (var i=0; i<=3; i++)
  document.forms.f.r1[i].checked=false;
  
for (var i=0; i<=3; i++)
  document.forms.f.r2[i].checked=false;  
  for (var i=0; i<=3; i++)
  document.forms.f.r3[i].checked=false;
  for (var i=0; i<=3; i++)
  document.forms.f.r4[i].checked=false;
  for (var i=0; i<=3; i++)
  document.forms.f.r5[i].checked=false;
  for (var i=0; i<=3; i++)
  document.forms.f.r6[i].checked=false;
  for (var i=0; i<=3; i++)
  document.forms.f.r7[i].checked=false;
  for (var i=0; i<=3; i++)
  document.forms.f.r8[i].checked=false;
  for (var i=0; i<=3; i++)
  document.forms.f.r9[i].checked=false;
  for (var i=0; i<=3; i++)
  document.forms.f.r10[i].checked=false;
  for (var i=0; i<=3; i++)
  document.forms.f.r11[i].checked=false;
  
  //vavegdat se razbarkanite otgovori na vapros 1
rand(m1);
for (var i=0; i<=3; i++)
  document.forms.f.r1t[i].value=otgv1[m1[i]];
//vavegdat se razbarkanite otgovori na vapros 2
rand(m2);
for (var i=0; i<=3; i++)
  document.forms.f.r2t[i].value=otgv2[m2[i]];  

  rand(m3);
for (var i=0; i<=3; i++)
  document.forms.f.r3t[i].value=otgv3[m3[i]];  
  
  rand(m4);
for (var i=0; i<=3; i++)
  document.forms.f.r4t[i].value=otgv4[m4[i]];
  
  rand(m5);
for (var i=0; i<=3; i++)
  document.forms.f.r5t[i].value=otgv5[m5[i]];  
  
  rand(m6);
for (var i=0; i<=3; i++)
  document.forms.f.r6t[i].value=otgv6[m6[i]];  

  
  rand(m7);
for (var i=0; i<=3; i++)
  document.forms.f.r7t[i].value=otgv7[m7[i]];  
  
  rand(m8);
for (var i=0; i<=3; i++)
  document.forms.f.r8t[i].value=otgv8[m8[i]];  
  
  rand(m9);
for (var i=0; i<=3; i++)
  document.forms.f.r9t[i].value=otgv9[m9[i]];  

  
  rand(m10);
for (var i=0; i<=3; i++)
  document.forms.f.r10t[i].value=otgv10[m10[i]];  
  
  rand(m11);
for (var i=0; i<=3; i++)
  document.forms.f.r11t[i].value=otgv11[m11[i]];  
}