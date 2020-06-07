import ClassWatcher from './modules/ClassWatcher.js';

const firstText=document.querySelector(".m402-text-relative");
const carousel=document.querySelectorAll(".carousel-item");

$('.carousel').carousel('pause');

// watch class changes with mutation observer
function showNewText(text){
    firstText.innerHTML=`${text}`;
    gsap.to(".m402-text-relative",
        {
        duration:0.3,
        opacity:1
    });
}
function workOnClassRemoved(){};

carousel.forEach((e, i) => {
    if (i<4){
    let list = [ workOnAddClass1,workOnAddClass2,workOnAddClass3,workOnAddClass4]
    new ClassWatcher(e, 'active', list[i],workOnClassRemoved)
    }
})

function workOnAddClass1(){
    let text = `
        <div class="m402-text-relative-inside" style="text-align: left;">Endüstri Müzesi ve Kültür-Sanat Merkezi<br><br>
        2017-2018 Güz Dönemi<br><br>
        Havran/ Balıkesir
        </div>
        `
    gsap.to(".m402-text-relative",{
        duration:0.3,
        opacity:0,
        onComplete: showNewText,
        onCompleteParams:[text]
})};
function workOnAddClass2 (){
    let text = `
        Havran merkezinde tarihi ve manevi değere sahip kullanılmayan zeytinyağı fabrikası ve çevresinin tasarımı projesidir.
        Kültürel zenginlikleri ile bilinen bu ilçede alan gezisi ve yerel halkla iletişime geçilerek ihtiyaç listesi 
        oluşturulmuştur.
        `
    gsap.to(".m402-text-relative",{
        duration:0.3,
        opacity:0,
        onComplete: showNewText,
        onCompleteParams:[text]
})};
function workOnAddClass3 (){
    let text = `
    Endüstri müzesine dönüştürülen tarihi fabrikanın yanı sıra sergi alanı ve atölyelerden oluşan kültür-sanat merkezi, 
    kütüphane ve yöre lezzetlerini sunulduğu restoran tasarlanmıştır. Atölye çıktıları veya yerel halkın üretimlerinin 
    sergilenmesi ve ihtiyaç sahiplerine iletilmesi amacıyla peyzajda açık sergi alanlarına yer verilmiştir.
    `
    gsap.to(".m402-text-relative",{
        duration:0.3,
        opacity:0,
        onComplete: showNewText,
        onCompleteParams:[text]
})};
function workOnAddClass4 (){
    let text = `
    Çocukların vakit geçirebilicekleri parklar, gösteri, sinema gibi etkinliklerin düzenlenebiliceği açık sahne 
    peyzajda konumlandırılmıştır. Son olarak ilçenin yeşil alan ihtiyacını karşılayacak yeşil alanlar eklenerek proje 
    son haline getirilmiştir. 
    `
    gsap.to(".m402-text-relative",{
        duration:0.3,
        opacity:0,
        onComplete: showNewText,
        onCompleteParams:[text]
})};

