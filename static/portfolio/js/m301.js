import ClassWatcher from './modules/ClassWatcher.js';

const firstText=document.querySelector(".m402-text-relative");
const carousel=document.querySelectorAll(".carousel-item");

$('.carousel').carousel('pause');

// watch class changes with mutation observer

//first text 
let watchingClass1=carousel[0];
function showNewText1(){
    firstText.innerHTML=`<div style="text-align: left;">Moda evi<br><br>
    2016-2017 Güz Dönemi<br><br>
    Levent/ İstanbul
    </div><br><br>
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
    Levent sınırları içerisinde kolay ulaşılabilir bir konuma sahip alanda çok amaçlı moda evi 
    projesidir. Birçok benzeri kullanım mekanları gezilerek ihtiyaç listesi oluşturulup tasarıma 
    başlanmıştır. Sokak silüeti ön planda tutularak başlanan tasarım aşaması diğer çevre 
    analizleri ile bütünleştirilmiştir.
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
    Atölye, sergi alanı, kütüphane, kafeterya gibi alanlarında mevcut olduğu, kapsamlı bir tasarım amaçlanmıştır. 
    Bu ihtiyaçlar doğrultusunda proje son halini almıştır.
    `;
    $(".m402-text-relative").fadeIn(300);
}
function workOnClassAdd3() {
    $(".m402-text-relative").fadeOut(300,showNewText3)
}
let classWatcher3 = new ClassWatcher(watchingClass3, 'active', workOnClassAdd3,workOnClassRemoval)

