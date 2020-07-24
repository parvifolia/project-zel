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
  if (i < 3) {
    let list = [workOnAddClass1, workOnAddClass2, workOnAddClass3];
    new ClassWatcher(e, 'active', list[i], workOnClassRemoved);
  }
});

function workOnAddClass1() {
  let text = `
        <div class="m402-text-relative-inside" style="text-align: left;">Moda evi<br><br>
        2016-2017 Güz Dönemi<br><br>
        Levent/ İstanbul
        </div><br><br>
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
        Levent sınırları içerisinde kolay ulaşılabilir bir konuma sahip alanda çok amaçlı moda evi 
        projesidir. Birçok benzeri kullanım mekanları gezilerek ihtiyaç listesi oluşturulup tasarıma 
        başlanmıştır. Sokak silüeti ön planda tutularak başlanan tasarım aşaması diğer çevre 
        analizleri ile bütünleştirilmiştir.
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
        Atölye, sergi alanı, kütüphane, kafeterya gibi alanlarında mevcut olduğu, kapsamlı bir tasarım amaçlanmıştır. 
        Bu ihtiyaçlar doğrultusunda proje son halini almıştır.
    `;
  gsap.to(".m402-text-relative", {
    duration: 0.3,
    opacity: 0,
    onComplete: showNewText,
    onCompleteParams: [text]
  });
}

;