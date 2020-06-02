import ClassWatcher from './modules/ClassWatcher.js';

const firstText=document.querySelector(".m402-text-relative");
const carousel=document.querySelectorAll(".carousel-item");

$('.carousel').carousel('pause');

// watch class changes with mutation observer

//first text 
let watchingClass1=carousel[0];
function showNewText1(){
    firstText.innerHTML=`<div style="text-align: left;">Toplu Konut Projesi<br><br>
    2016-2017 Bahar Dönem<br><br>
    Sarıyer/ İstanbul
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
    Tarabya yakınların büyük ölçekli bir alanda home-office projesidir. Dönüştürülebilen çok 
    amaçlı konutlar, kullanıcı ihtiyaçları göz önünde tutularak tasarım kararları verilmiştir. 
    Eğim, fiziki çevre, ulaşabilirlik gibi etkenler referans alınarak tasarıma başlanmıştır.
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
    Çevre silüetini bozmaması adına kat sınırlaması ile beraber büyük ölçüde yeşil alana yer verimiştir. 
    Bu doğrular çerçevesinde proje son halini almıştır.
    `;
    $(".m402-text-relative").fadeIn(300);
}
function workOnClassAdd3() {
    $(".m402-text-relative").fadeOut(300,showNewText3)
}
let classWatcher3 = new ClassWatcher(watchingClass3, 'active', workOnClassAdd3,workOnClassRemoval)

