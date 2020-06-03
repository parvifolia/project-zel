import ClassWatcher from './modules/ClassWatcher.js';

const firstText=document.querySelector(".m402-text-relative");
const carousel=document.querySelectorAll(".carousel-item");

$('.carousel').carousel('pause');

// watch class changes with mutation observer

//first text 
let watchingClass1=carousel[0];
function showNewText1(){
    firstText.innerHTML=`
    <div style="text-align: left;">Karma Yapı Projesi<br><br>
    2017-2018 Bahar Dönemi Mezuniyet Projesi<br><br>
    Etiler / Rumeli Hisarüstü / İstanbul</div><br><br>
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
    Proje alanı, Boğaziçi Üniversitesi Kuzey Kampüsü yakınlarında öğrenci, akademisyen ve yerel halkın yoğunlukta 
    olduğu; otobüs, metro gibi ulaşım ağlarına yakın merkezi bir konumdadır.
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
    Alışveriş-Beslenme, Barınma, Kültür Merkezi ve Spor Kompleksi gibi alanları içeren karma yapı projesidir. 
    Yapılan ihtiyaç listesi ve analizler sonucunda sirkülasyon, ulaşabilirlik, manzara, fiziki çevre faktörleri 
    referans alınarak yapılar konumlandırılmış ve son halini almıştır.
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
    Sosyal alan odaklı peyzaj projesi çalışılmıştır. Açık sergi ve etkinlik alanları, sahne,  spor ve oyun alanları, 
    oturma ve yeşil gibi alanlara yer verilmiştir. Kullanıcı kitlesi öğrenci ve akademisyen olucak barınma yapıları 
    manzara odaklı, sosyal alanlara kolay ulaşabilir fakat mesafeli bi bölgeye konumlandırılmıştır. 
    `;
    $(".m402-text-relative").fadeIn(300);
}
function workOnClassAdd4() {
    $(".m402-text-relative").fadeOut(300,showNewText4)
}
let classWatcher4 = new ClassWatcher(watchingClass4, 'active', workOnClassAdd4,workOnClassRemoval)

