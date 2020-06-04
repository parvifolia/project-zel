import ClassWatcher from './modules/ClassWatcher.js';

const firstText=document.querySelector(".flaneur-text-relative");
const carousel=document.querySelectorAll(".carousel-item");

$('.carousel').carousel('pause');

// watch class changes with mutation observer

//first text 
let watchingClass1=carousel[0];
function showNewText1(){
    firstText.innerHTML=`
    <div class="flaneur-text-relative-inside" style="text-align: left;">
    Uluslararası Mimarlık Öğrencileri Buluşması<br><br>
    2018<br><br>
    Adana
    </div>
    `;
    $(".flaneur-text-relative").fadeIn(300);
}
function workOnClassAdd1() {
    $(".flaneur-text-relative").fadeOut(300,showNewText1)
}
function workOnClassRemoval() {
}
let classWatcher1 = new ClassWatcher(watchingClass1, 'active', workOnClassAdd1,workOnClassRemoval)



//second text
let watchingClass2=carousel[1];
function showNewText2(){
    firstText.innerHTML=`
    UMÖB 17.5 Adana'da gerçekleştirilen Flaneur atölyesi, 10 katılımcı ve 3 yürütücü ile 2 Şubat 2018 tarihinde tamamlandı. 
    Toplamda 6 çalışma günü süresi içerisinde gerçekleşti.
    `;
    $(".flaneur-text-relative").fadeIn(300);
}
function workOnClassAdd2() {
    $(".flaneur-text-relative").fadeOut(300,showNewText2)
}
let classWatcher2 = new ClassWatcher(watchingClass2, 'active', workOnClassAdd2,workOnClassRemoval)



//third text
let watchingClass3=carousel[2]
function showNewText3(){
    firstText.innerHTML=`
    "Dont forget to play!" Alvar Aalto<br><br>
    Kent bir bulmacadır. Her gün yürüdüğümüz sokaklar, her gün alışveriş yaptığımız bakkal, her akşam döndüğümüz 
    evimiz olmasaydı, bu bulmacayı hemen çözebilir miydik? Alışık olduğumuz aletler bir anda kaybolsaydı, 
    gene aynı manevra kabiliyetinde olabilir miydik? Peki yaşam alanını çeşitli sebeplerle bırakmış bir kimse, 
    kent ile hangi düzeyde iletişim kurar?
    `;
    $(".flaneur-text-relative").fadeIn(300);
}
function workOnClassAdd3() {
    $(".flaneur-text-relative").fadeOut(300,showNewText3)
}
let classWatcher3 = new ClassWatcher(watchingClass3, 'active', workOnClassAdd3,workOnClassRemoval)


//fourth text
let watchingClass4=carousel[3]
function showNewText4(){
    firstText.innerHTML=`
    Flaneur; kenti bir ev yapabilir miyiz?<br><br>

    Flaneur atölyesi katılımcılarından "göç" etmelerini istiyor. Alışık olmadıkları bir şehirde, alışık oldukları 
    araçları kendileri için üretmek, kenti "tekrar" ev yapmaya çağırıyor. Her gün önlerine çıkan bulmacaları çözüp, 
    günün üretimini gerçekleştiren katılımcılar "hayatta kalacak."
    
    `;
    $(".flaneur-text-relative").fadeIn(300);
}
function workOnClassAdd4() {
    $(".flaneur-text-relative").fadeOut(300,showNewText4)
}
let classWatcher4 = new ClassWatcher(watchingClass4, 'active', workOnClassAdd4,workOnClassRemoval)

//fifth text
let watchingClass5=carousel[4]
function showNewText5(){
    firstText.innerHTML=`
    Flaneur, doğrudan bir kelime anlamı olmasa da, atölye süresince kabul gören tanımıyla; "düşünür-gezer. <br><br>
    Flaneur, kent içerisinde amaçsızca dolaşırken hem düşünsel hem de mekansal anlamda göç etmektedir. 
    Onun için mekanın önemi yoktur; sokaklar birbirine bağlı bir şekilde tıpkı düşsel çağırışımlar gibi ardı 
    ardına gelmektedir. Böylece mekanın önemi azalmakta ve hareketliliğin kendisi önem kazanmaktadır.
    
    `;
    $(".flaneur-text-relative").fadeIn(300);
}
function workOnClassAdd5() {
    $(".flaneur-text-relative").fadeOut(300,showNewText5)
}
let classWatcher5 = new ClassWatcher(watchingClass5, 'active', workOnClassAdd5,workOnClassRemoval)


//sixth text
let watchingClass6=carousel[5]
function showNewText6(){
    firstText.innerHTML=`
    Bu noktada atölye Flaneur kavramı üzerine kurulmuştur; gündelik göçlerden yola çıkarak, kentin aslında 
    bir ev gibi kullanılabilir oluşu ve evin bize hissettirdiği çeşitli duyguların sorgulanması hedeflenmiştir. 
    Eğer bir Flaneur ait olduğu mekandan koparılırsa ne tepki verir? Alışık olduğu araçlardan uzakta kalırsa nasıl 
    hayatta kalır? 
    `;
    $(".flaneur-text-relative").fadeIn(300);
}
function workOnClassAdd6() {
    $(".flaneur-text-relative").fadeOut(300,showNewText6)
}
let classWatcher6 = new ClassWatcher(watchingClass6, 'active', workOnClassAdd6,workOnClassRemoval)

//seventh text
let watchingClass7=carousel[6]
function showNewText7(){
    firstText.innerHTML=`
    Kent, aslında tamamı bilmeceden oluşan kompleks bir olgudur; tamamen kavranılamaz ve kavranılan duygular 
    da son derece subjektiftir. Bununla birlikte bir Flaneur kentin kendisini ev gibi kullanıyorsa, yabancı 
    olduğu bu habitat karşısında ne tepki vereceği önemlidir; çünkü flaneur konforunu tekrar elde etmeye 
    çalışacak, bir noktada gezginlik ile üretim dengesini kurması gerecektir.
    `;
    $(".flaneur-text-relative").fadeIn(300);
}
function workOnClassAdd7() {
    $(".flaneur-text-relative").fadeOut(300,showNewText7)
}
let classWatcher7 = new ClassWatcher(watchingClass7, 'active', workOnClassAdd7,workOnClassRemoval)

//eighth text
let watchingClass8=carousel[7]
function showNewText8(){
    firstText.innerHTML=`
    Sonuç itibariyle kenti tekrar ev yapmaya çalışacaktır. Atölye, kentin gündelik kullanımlarını sorgulamak, 
    konfor araçlarının üretimlerini gerçekleştirmek ve kenti ev gibi kullanmanın mümkünlüğünü tartışmaktadır.<br><br>

    Kurgu kenti anlamaya çalışıp, ona üretmek üzerine kuruludur.
    `;
    $(".flaneur-text-relative").fadeIn(300);
}
function workOnClassAdd8() {
    $(".flaneur-text-relative").fadeOut(300,showNewText8)
}
let classWatcher8 = new ClassWatcher(watchingClass8, 'active', workOnClassAdd8,workOnClassRemoval)


//ninth text
let watchingClass9=carousel[8]
function showNewText9(){
    firstText.innerHTML=`
    Çatı örtüsü olarak Adana'nın sıcak iklimi göz önüne alınmış ve amerikan bezlerinden bir hafif örtü tasarlanmıştır.
    `;
    $(".flaneur-text-relative").fadeIn(300);
}
function workOnClassAdd9() {
    $(".flaneur-text-relative").fadeOut(300,showNewText9)
}
let classWatcher9 = new ClassWatcher(watchingClass9, 'active', workOnClassAdd9,workOnClassRemoval)

//tenth text
let watchingClass10=carousel[9]
function showNewText10(){
    firstText.innerHTML=`
    Döşemenin taşınabilirliği için yaklaşık 35cm aralıklarla 5x10 kirişler çakılmış, döşeme olarak kullanılan osb nin 
    mukavemetini arttırmak içinde 2 adet üst üste konulmuştur.
    `;
    $(".flaneur-text-relative").fadeIn(300);
}
function workOnClassAdd10() {
    $(".flaneur-text-relative").fadeOut(300,showNewText10)
}
let classWatcher10 = new ClassWatcher(watchingClass10, 'active', workOnClassAdd10,workOnClassRemoval)


//eleventh text
let watchingClass11=carousel[10]
function showNewText11(){
    firstText.innerHTML=`
    Pavyonun salınımını engellemek için zemin katta çaprazlamalar vardır. Rijitliği önemli ölçüde arttırmıştır.
    `;
    $(".flaneur-text-relative").fadeIn(300);
}
function workOnClassAdd11() {
    $(".flaneur-text-relative").fadeOut(300,showNewText11)
}
let classWatcher11 = new ClassWatcher(watchingClass11, 'active', workOnClassAdd11,workOnClassRemoval)

//twelfth text
let watchingClass12=carousel[11]
function showNewText12(){
    firstText.innerHTML=`
    Ahşap boyutlarından dolayı yekpare dikey ve yatay taşıyıcılar elde edilemediği için, çeşitli profil çözümleri 
    yapılmıştır. Birbirlerine geçmeli şeklinde üretilen bu şablon sayesinde birleşim noktaları sağlamlaştırılmıştır.
    `;
    $(".flaneur-text-relative").fadeIn(300);
}
function workOnClassAdd12() {
    $(".flaneur-text-relative").fadeOut(300,showNewText12)
}
let classWatcher12 = new ClassWatcher(watchingClass12, 'active', workOnClassAdd12,workOnClassRemoval)

