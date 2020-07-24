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
        <div class="m402-text-relative-inside" style="text-align: left;">Karma Yapı Projesi<br><br>
        2017-2018 Bahar Dönemi Mezuniyet Projesi<br><br>
        Etiler / Rumeli Hisarüstü / İstanbul</div><br><br></br>
        `
    gsap.to(".m402-text-relative",{
        duration:0.3,
        opacity:0,
        onComplete: showNewText,
        onCompleteParams:[text]
})};
function workOnAddClass2 (){
    let text = `
        Proje alanı, Boğaziçi Üniversitesi Kuzey Kampüsü yakınlarında öğrenci, akademisyen ve yerel halkın yoğunlukta 
        olduğu; otobüs, metro gibi ulaşım ağlarına yakın merkezi bir konumdadır.
        `
    gsap.to(".m402-text-relative",{
        duration:0.3,
        opacity:0,
        onComplete: showNewText,
        onCompleteParams:[text]
})};
function workOnAddClass3 (){
    let text = `
    Alışveriş-Beslenme, Barınma, Kültür Merkezi ve Spor Kompleksi gibi alanları içeren karma yapı projesidir. 
    Yapılan ihtiyaç listesi ve analizler sonucunda sirkülasyon, ulaşabilirlik, manzara, fiziki çevre faktörleri 
    referans alınarak yapılar konumlandırılmış ve son halini almıştır.
    `
    gsap.to(".m402-text-relative",{
        duration:0.3,
        opacity:0,
        onComplete: showNewText,
        onCompleteParams:[text]
})};
function workOnAddClass4 (){
    let text = `
    Sosyal alan odaklı peyzaj projesi çalışılmıştır. Açık sergi ve etkinlik alanları, sahne,  spor ve oyun alanları, 
    oturma ve yeşil gibi alanlara yer verilmiştir. Kullanıcı kitlesi öğrenci ve akademisyen olucak barınma yapıları 
    manzara odaklı, sosyal alanlara kolay ulaşabilir fakat mesafeli bi bölgeye konumlandırılmıştır. 
    `
    gsap.to(".m402-text-relative",{
        duration:0.3,
        opacity:0,
        onComplete: showNewText,
        onCompleteParams:[text]
})};

// carousel.forEach((e, idx) => {
//     new ClassWatcher(e, 'active', ...getCallbacksFor(idx))
// })

// function getCallbacksFor(iValue) {
//     return [
//       function workOnAdd() {
//         console.log('add class work for', iValue);
//         if (iValue==0){
//             let text = `
//         <div class="m402-text-relative-inside" style="text-align: left;">Karma Yapı Projesi<br><br>
//         2017-2018 Bahar Dönemi Mezuniyet Projesi<br><br>
//         Etiler / Rumeli Hisarüstü / İstanbul</div><br><br></br>
//         `
//         gsap.to(".m402-text-relative",{
//             duration:0.3,
//             opacity:0,
//             onComplete: showNewText,
//             onCompleteParams:[text]
//         })
//         } else if (iValue==1){
//             let text = `
//         Proje alanı, Boğaziçi Üniversitesi Kuzey Kampüsü yakınlarında öğrenci, akademisyen ve yerel halkın yoğunlukta 
//         olduğu; otobüs, metro gibi ulaşım ağlarına yakın merkezi bir konumdadır.
//         `
//         gsap.to(".m402-text-relative",{
//             duration:0.3,
//             opacity:0,
//             onComplete: showNewText,
//             onCompleteParams:[text]
//         })
//         } else if (iValue==2){
//             let text = `
//         Alışveriş-Beslenme, Barınma, Kültür Merkezi ve Spor Kompleksi gibi alanları içeren karma yapı projesidir. 
//         Yapılan ihtiyaç listesi ve analizler sonucunda sirkülasyon, ulaşabilirlik, manzara, fiziki çevre faktörleri 
//         referans alınarak yapılar konumlandırılmış ve son halini almıştır.
//         `
//         gsap.to(".m402-text-relative",{
//             duration:0.3,
//             opacity:0,
//             onComplete: showNewText,
//             onCompleteParams:[text]
//         })
//         }else if (iValue==3){
//             let text = `
//         Sosyal alan odaklı peyzaj projesi çalışılmıştır. Açık sergi ve etkinlik alanları, sahne,  spor ve oyun alanları, 
//         oturma ve yeşil gibi alanlara yer verilmiştir. Kullanıcı kitlesi öğrenci ve akademisyen olucak barınma yapıları 
//         manzara odaklı, sosyal alanlara kolay ulaşabilir fakat mesafeli bi bölgeye konumlandırılmıştır. 
//         `
//         gsap.to(".m402-text-relative",{
//             duration:0.3,
//             opacity:0,
//             onComplete: showNewText,
//             onCompleteParams:[text]
//         })
//         };
//     },
//       function workOnRemove() {},
//     ]
// };


