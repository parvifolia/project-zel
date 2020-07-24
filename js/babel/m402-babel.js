"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class ClassWatcher {
  constructor(targetNode, classToWatch, classAddedCallback, classRemovedCallback) {
    _defineProperty(this, "mutationCallback", mutationsList => {
      for (let mutation of mutationsList) {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
          let currentClassState = mutation.target.classList.contains(this.classToWatch);

          if (this.lastClassState !== currentClassState) {
            this.lastClassState = currentClassState;

            if (currentClassState) {
              this.classAddedCallback();
            } else {
              this.classRemovedCallback();
            }
          }
        }
      }
    });

    this.targetNode = targetNode;
    this.classToWatch = classToWatch;
    this.classAddedCallback = classAddedCallback;
    this.classRemovedCallback = classRemovedCallback;
    this.observer = null;
    this.lastClassState = targetNode.classList.contains(this.classToWatch);
    this.init();
  }

  init() {
    this.observer = new MutationObserver(this.mutationCallback);
    this.observe();
  }

  observe() {
    this.observer.observe(this.targetNode, {
      attributes: true
    });
  }

  disconnect() {
    this.observer.disconnect();
  }

}

;
const firstText = document.querySelector(".m402-text-relative");
const carousel = document.querySelectorAll(".carousel-item");
$('.carousel').carousel('pause'); // watch class changes with mutation observer

function showNewText(text) {
  firstText.innerHTML = `${text}`;
  gsap.to(".m402-text-relative", {
    duration: 0.3,
    opacity: 1
  });
}

function workOnClassRemoved() {}

;
carousel.forEach((e, i) => {
  if (i < 4) {
    let list = [workOnAddClass1, workOnAddClass2, workOnAddClass3, workOnAddClass4];
    new ClassWatcher(e, 'active', list[i], workOnClassRemoved);
  }
});

function workOnAddClass1() {
  let text = `
        <div class="m402-text-relative-inside" style="text-align: left;">Karma Yapı Projesi<br><br>
        2017-2018 Bahar Dönemi Mezuniyet Projesi<br><br>
        Etiler / Rumeli Hisarüstü / İstanbul</div><br><br></br>
        `;
  gsap.to(".m402-text-relative", {
    duration: 0.3,
    opacity: 0,
    onComplete: showNewText,
    onCompleteParams: [text]
  });
}

;

function workOnAddClass2() {
  let text = `
        Proje alanı, Boğaziçi Üniversitesi Kuzey Kampüsü yakınlarında öğrenci, akademisyen ve yerel halkın yoğunlukta 
        olduğu; otobüs, metro gibi ulaşım ağlarına yakın merkezi bir konumdadır.
        `;
  gsap.to(".m402-text-relative", {
    duration: 0.3,
    opacity: 0,
    onComplete: showNewText,
    onCompleteParams: [text]
  });
}

;

function workOnAddClass3() {
  let text = `
    Alışveriş-Beslenme, Barınma, Kültür Merkezi ve Spor Kompleksi gibi alanları içeren karma yapı projesidir. 
    Yapılan ihtiyaç listesi ve analizler sonucunda sirkülasyon, ulaşabilirlik, manzara, fiziki çevre faktörleri 
    referans alınarak yapılar konumlandırılmış ve son halini almıştır.
    `;
  gsap.to(".m402-text-relative", {
    duration: 0.3,
    opacity: 0,
    onComplete: showNewText,
    onCompleteParams: [text]
  });
}

;

function workOnAddClass4() {
  let text = `
    Sosyal alan odaklı peyzaj projesi çalışılmıştır. Açık sergi ve etkinlik alanları, sahne,  spor ve oyun alanları, 
    oturma ve yeşil gibi alanlara yer verilmiştir. Kullanıcı kitlesi öğrenci ve akademisyen olucak barınma yapıları 
    manzara odaklı, sosyal alanlara kolay ulaşabilir fakat mesafeli bi bölgeye konumlandırılmıştır. 
    `;
  gsap.to(".m402-text-relative", {
    duration: 0.3,
    opacity: 0,
    onComplete: showNewText,
    onCompleteParams: [text]
  });
}

;