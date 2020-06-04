import ClassWatcher from './modules/ClassWatcher.js';

const firstText=document.querySelector(".m402-text-relative");
const carousel=document.querySelectorAll(".carousel-item");

$('.carousel').carousel('pause');

// watch class changes with mutation observer

//first text 
let watchingClass1=carousel[0];
function showNewText1(){
    firstText.innerHTML=`<div class="m402-text-relative-inside" style="text-align: left;">Endüstri Müzesi ve Kültür-Sanat Merkezi<br><br>
    2017-2018 Güz Dönemi<br><br>
    Havran/ Balıkesir
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
    Havran merkezinde tarihi ve manevi değere sahip kullanılmayan zeytinyağı fabrikası ve çevresinin tasarımı projesidir.
    Kültürel zenginlikleri ile bilinen bu ilçede alan gezisi ve yerel halkla iletişime geçilerek ihtiyaç listesi 
    oluşturulmuştur.
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
    Endüstri müzesine dönüştürülen tarihi fabrikanın yanı sıra sergi alanı ve atölyelerden oluşan kültür-sanat merkezi, 
    kütüphane ve yöre lezzetlerini sunulduğu restoran tasarlanmıştır. Atölye çıktıları veya yerel halkın üretimlerinin 
    sergilenmesi ve ihtiyaç sahiplerine iletilmesi amacıyla peyzajda açık sergi alanlarına yer verilmiştir.
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
    Çocukların vakit geçirebilicekleri parklar, gösteri, sinema gibi etkinliklerin düzenlenebiliceği açık sahne 
    peyzajda konumlandırılmıştır. Son olarak ilçenin yeşil alan ihtiyacını karşılayacak yeşil alanlar eklenerek proje 
    son haline getirilmiştir.
    `;
    $(".m402-text-relative").fadeIn(300);
}
function workOnClassAdd4() {
    $(".m402-text-relative").fadeOut(300,showNewText4)
}
let classWatcher4 = new ClassWatcher(watchingClass4, 'active', workOnClassAdd4,workOnClassRemoval)


