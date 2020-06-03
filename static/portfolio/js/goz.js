import ClassWatcher from './modules/ClassWatcher.js';

const firstText=document.querySelector(".m402-text-relative");
const carousel=document.querySelectorAll(".carousel-item");

$('.carousel').carousel('pause');

// watch class changes with mutation observer

//first text 
let watchingClass1=carousel[0];
function showNewText1(){
    firstText.innerHTML=`
    <div style="text-align: left;">
    Betonart Mimarlık Yaz Okulu<br><br>
    2018<br><br>
    Kayseri
    </div>
    `;
    $(".m402-text-relative").fadeIn(300);
}
function workOnClassAdd1() {
    $(".m402-text-relative").fadeOut(300,showNewText1)
}
function workOnClassRemoval() {
}
let classWatcher1 = new ClassWatcher(watchingClass1, 'active', workOnClassAdd1,workOnClassRemoval)



//second text
let watchingClass2=carousel[1];
function showNewText2(){
    firstText.innerHTML=`
    "Beton Olmak" temalı Betonart Mimarlık Yaz Okulu’ nda GÖZ başlıklı çalışma, beton ile kurulan ilişkide ışığı 
    sıkıştırmayı ve beton ile yakın ilişkide malzemenin çıplaklığına tanıklığı ve bu deneyimin çevreye öğrenci köyüne 
    basit ve ölçekli bir katılımını hedefliyordu. GÖZ iIe ucu açık, gündeIik deneyimi önceleyen, özellikle betonun 
    ilksel hâllerine yönelmiş bir tavır kurmaya çalıştık.
    `;
    $(".m402-text-relative").fadeIn(300);
}
function workOnClassAdd2() {
    $(".m402-text-relative").fadeOut(300,showNewText2)
}
let classWatcher2 = new ClassWatcher(watchingClass2, 'active', workOnClassAdd2,workOnClassRemoval)



//third text
let watchingClass3=carousel[2]
function showNewText3(){
    firstText.innerHTML=`
    Işığı sıkıştıran, beton ile karşılaşmayı bir kol mesafesinde tutmaya çalışan, çevreden kontrollü bir biçimde 
    kopan bir geçiş tasarladık. Süreç içinde ilk eskizlerden, işin son hâline kadar Betonart Mimarlık Yaz Okulu 
    gibi temel hedefi betonun imkânlarını açmak, yeni kullanım olanaklarını araştırmak olan bir deney alanı içinde, 
    özellikle ilkel betonu pürüzleri ile başbaşa bırakmayı deneyen bir tema ile hareket ettik.
    `;
    $(".m402-text-relative").fadeIn(300);
}
function workOnClassAdd3() {
    $(".m402-text-relative").fadeOut(300,showNewText3)
}
let classWatcher3 = new ClassWatcher(watchingClass3, 'active', workOnClassAdd3,workOnClassRemoval)


//fourth text
let watchingClass4=carousel[3]
function showNewText4(){
    firstText.innerHTML=`
    Sonrasında, bulunduğu devreye eklemlenen çabası ile yere yaklaşan bir geçit kurmaya çalışırken konvansiyonel 
    betonun üretim hatalarını, ahşap kalıp izlerini, hareleri ve çapakları yakından görmeyi istedik.
    `;
    $(".m402-text-relative").fadeIn(300);
}
function workOnClassAdd4() {
    $(".m402-text-relative").fadeOut(300,showNewText4)
}
let classWatcher4 = new ClassWatcher(watchingClass4, 'active', workOnClassAdd4,workOnClassRemoval)

//fifth text
let watchingClass5=carousel[4]
function showNewText5(){
    firstText.innerHTML=`
    Son haliyle GÖZ, öğrenci köyünde bostanların  hemen yamacında yurtlardan birine yönelmiş ince bir patika izine 
    sahip çıkan, ardışık eşiklerden kurulu, ölçülü bir şekilde içe kapanan  bir  geçit  olarak  ortaya çıktı.  
    Çalışmanın  ilk  günlerinde  seçilmiş  alanda hemen farkına vardığımız, çimler üzerindeki bu patikanın yere 
    dâhil  edilmesi  dıüşüncesiyle  oluşan bir geçiş mekânı olarak kuruldu. 
    `;
    $(".m402-text-relative").fadeIn(300);
}
function workOnClassAdd5() {
    $(".m402-text-relative").fadeOut(300,showNewText5)
}
let classWatcher5 = new ClassWatcher(watchingClass5, 'active', workOnClassAdd5,workOnClassRemoval)


//sixth text
let watchingClass6=carousel[5]
function showNewText6(){
    firstText.innerHTML=`
    Hem yere, hem çevreye dair ölçekli bir mekân kurmayı umut eden, beton  ile  karşılaşma  anlarını  sıkıştırmayı  
    düşünen bir kestirme. Diğer yanda aslında ahaliyi geçerken durmaya davet eden bir pasaj,  gözün  taradığı  
    ardışık eşikleri bir kapanışlar ve açılışlar alanı olarak kuran bir kesişimler durağı, bir aralık olmasına 
    çalıştık. Mekârısallaşan bir dizi eşik ve kenar üreterek öğrenci köyü girişinde farklı vistalar, kapanışlar ve 
    perspektifler  kurarak  özellikle   gün   boyu   bostanda çalışanlar için bir dinlenme alanı tarif eden bir durak. 
    `;
    $(".m402-text-relative").fadeIn(300);
}
function workOnClassAdd6() {
    $(".m402-text-relative").fadeOut(300,showNewText6)
}
let classWatcher6 = new ClassWatcher(watchingClass6, 'active', workOnClassAdd6,workOnClassRemoval)

//seventh text
let watchingClass7=carousel[6]
function showNewText7(){
    firstText.innerHTML=`
    Gün içinde hareket eden gölgelerin tarif ettiği alanın zeminde  üretilen   yırtıkla buluştuğu çökertilmiş 
    iç zeminde kısa bir an için bile olsa zaman duygusunu dönüştürmeyi deniyor GÖZ.
    `;
    $(".m402-text-relative").fadeIn(300);
}
function workOnClassAdd7() {
    $(".m402-text-relative").fadeOut(300,showNewText7)
}
let classWatcher7 = new ClassWatcher(watchingClass7, 'active', workOnClassAdd7,workOnClassRemoval)

//eighth text
let watchingClass8=carousel[7]
function showNewText8(){
    firstText.innerHTML=`
    Sırtını beton duvarlara vererek oturan kişinin, betonun serinliğine, ışığın ısısına dokunduğu, gök ile 
    yer arasında durmanın tüm duygusunun beton duvarlar arasına sıkıştırıldığı, ardışık bir iç/dış/ara kurmayı 
    deniyor bir anlamda. 
    `;
    $(".m402-text-relative").fadeIn(300);
}
function workOnClassAdd8() {
    $(".m402-text-relative").fadeOut(300,showNewText8)
}
let classWatcher8 = new ClassWatcher(watchingClass8, 'active', workOnClassAdd8,workOnClassRemoval)

