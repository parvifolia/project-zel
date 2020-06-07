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
        <div class="m402-text-relative-inside" style="text-align: left;">Toplu Konut Projesi<br><br>
        2016-2017 Bahar Dönem<br><br>
        Sarıyer/ İstanbul
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
        Tarabya yakınların büyük ölçekli bir alanda home-office projesidir. Dönüştürülebilen çok 
        amaçlı konutlar, kullanıcı ihtiyaçları göz önünde tutularak tasarım kararları verilmiştir. 
        Eğim, fiziki çevre, ulaşabilirlik gibi etkenler referans alınarak tasarıma başlanmıştır.
        `
    gsap.to(".m402-text-relative",{
        duration:0.3,
        opacity:0,
        onComplete: showNewText,
        onCompleteParams:[text]
})};
function workOnAddClass3 (){
    let text = `
    Çevre silüetini bozmaması adına kat sınırlaması ile beraber büyük ölçüde yeşil alana yer verimiştir. 
    Bu doğrular çerçevesinde proje son halini almıştır.
    `
    gsap.to(".m402-text-relative",{
        duration:0.3,
        opacity:0,
        onComplete: showNewText,
        onCompleteParams:[text]
})};
