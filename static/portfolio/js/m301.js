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
    let list = [ workOnAddClass1,workOnAddClass2,workOnAddClass3]
    new ClassWatcher(e, 'active', list[i],workOnClassRemoved)
    }
})

function workOnAddClass1(){
    let text = `
        <div class="m402-text-relative-inside" style="text-align: left;">Moda evi<br><br>
        2016-2017 Güz Dönemi<br><br>
        Levent/ İstanbul
        </div><br><br>
        `
    gsap.to(".m402-text-relative",{
        duration:0.3,
        opacity:0,
        onComplete: showNewText,
        onCompleteParams:[text]
})};
function workOnAddClass2 (){
    let text = `
        Levent sınırları içerisinde kolay ulaşılabilir bir konuma sahip alanda çok amaçlı moda evi 
        projesidir. Birçok benzeri kullanım mekanları gezilerek ihtiyaç listesi oluşturulup tasarıma 
        başlanmıştır. Sokak silüeti ön planda tutularak başlanan tasarım aşaması diğer çevre 
        analizleri ile bütünleştirilmiştir.
        `
    gsap.to(".m402-text-relative",{
        duration:0.3,
        opacity:0,
        onComplete: showNewText,
        onCompleteParams:[text]
})};
function workOnAddClass3 (){
    let text = `
        Atölye, sergi alanı, kütüphane, kafeterya gibi alanlarında mevcut olduğu, kapsamlı bir tasarım amaçlanmıştır. 
        Bu ihtiyaçlar doğrultusunda proje son halini almıştır.
    `
    gsap.to(".m402-text-relative",{
        duration:0.3,
        opacity:0,
        onComplete: showNewText,
        onCompleteParams:[text]
})};
