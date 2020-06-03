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
    Sosyal Sorumluluk Projesi<br><br>
    2018<br><br>
    Kocaseyit / Havran / Balıkesir
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
    Havran / balıkesir’e bağlı kocaseyit köyü’nde yapılan geziler ve analizler sonucunda, bölgede yaşayan 
    halkın ihtiyaçları öz önünde bulundurularak sağlanabilecek olanaklar ve yeni düzenlemeler düşünülerek 
    proje başlatıldı. 
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
    Tasarıma köydeki tescilli kerpiç evden başlandı. İnsanları kerpiç eve ve karşısında ki kaz dağı 
    manzarasına yönlendirmek amaçlandı. Bu alanı kullanacakların,  köy meydanından başlayarak önce kerpiç 
    eve oradan da kaz dağları manzarasına yönlendirecek yollar düzenlendi.
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
    Kerpiç evin yan tarafındaki küçük meydan ve manzaraya karşı kurulan seyir terası ile bu akış güçlendirildi. 
    İnsanların bu alanda geçirecekleri vakti daha da keyifli hale getirecek oturma alanları ve satış birimi kuruldu. 
    Terastaki açık hava sineması ile tasarım bütünlüğü sağlandı. 
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
    Köy içerisinde enerjisini güneş ışığından karşılayan aydınlatma sistemleri, hem hayvan hem insanların 
    rahatlıkla kullanabileceği su birimleri, beton ve ahşaptan kolaylıkla Elde edilebilecek oturma birimleri tasarlandı. 
    Ayrıca yol zemin kaplaması olarak doğal kesme taş  kullanımı ön görülmüştür. 
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
    Doğa ile uyumlu, geri dönüştürülebilir, doğaya ve canlılara zarar vermeyen, 
    sürdürülebilir malzemelerin kullanılmı tercih edilmiştir. 
    `;
    $(".m402-text-relative").fadeIn(300);
}
function workOnClassAdd6() {
    $(".m402-text-relative").fadeOut(300,showNewText6)
}
let classWatcher6 = new ClassWatcher(watchingClass6, 'active', workOnClassAdd6,workOnClassRemoval)
