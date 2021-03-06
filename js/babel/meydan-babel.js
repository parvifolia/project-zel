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

const firstText = document.querySelector(".meydan-text-relative");
const carousel = document.querySelectorAll(".carousel-item");
$('.carousel').carousel('pause'); // watch class changes with mutation observer

function showNewText(text) {
  firstText.innerHTML = `${text}`;
  gsap.to(".meydan-text-relative", {
    duration: 0.3,
    opacity: 1
  });
}

function workOnClassRemoved() {}

;
carousel.forEach((e, i) => {
  if (i < 6) {
    let list = [workOnAddClass1, workOnAddClass2, workOnAddClass3, workOnAddClass4, workOnAddClass5, workOnAddClass6];
    new ClassWatcher(e, 'active', list[i], workOnClassRemoved);
  }
});

function workOnAddClass1() {
  let text = `
        <div class="meydan-text-relative-inside" style="text-align: left;">
        Sosyal Sorumluluk Projesi<br><br>
        2018<br><br>
        Kocaseyit / Havran / Balıkesir
        </div>
        `;
  gsap.to(".meydan-text-relative", {
    duration: 0.3,
    opacity: 0,
    onComplete: showNewText,
    onCompleteParams: [text]
  });
}

;

function workOnAddClass2() {
  let text = `
        Havran / balıkesir’e bağlı kocaseyit köyü’nde yapılan geziler ve analizler sonucunda, bölgede yaşayan 
        halkın ihtiyaçları öz önünde bulundurularak sağlanabilecek olanaklar ve yeni düzenlemeler düşünülerek 
        proje başlatıldı. 
        `;
  gsap.to(".meydan-text-relative", {
    duration: 0.3,
    opacity: 0,
    onComplete: showNewText,
    onCompleteParams: [text]
  });
}

;

function workOnAddClass3() {
  let text = `
        Tasarıma köydeki tescilli kerpiç evden başlandı. İnsanları kerpiç eve ve karşısında ki kaz dağı 
        manzarasına yönlendirmek amaçlandı. Bu alanı kullanacakların,  köy meydanından başlayarak önce kerpiç 
        eve oradan da kaz dağları manzarasına yönlendirecek yollar düzenlendi.
    `;
  gsap.to(".meydan-text-relative", {
    duration: 0.3,
    opacity: 0,
    onComplete: showNewText,
    onCompleteParams: [text]
  });
}

;

function workOnAddClass4() {
  let text = `
        Kerpiç evin yan tarafındaki küçük meydan ve manzaraya karşı kurulan seyir terası ile bu akış güçlendirildi. 
        İnsanların bu alanda geçirecekleri vakti daha da keyifli hale getirecek oturma alanları ve satış birimi kuruldu. 
        Terastaki açık hava sineması ile tasarım bütünlüğü sağlandı. 
    `;
  gsap.to(".meydan-text-relative", {
    duration: 0.3,
    opacity: 0,
    onComplete: showNewText,
    onCompleteParams: [text]
  });
}

;

function workOnAddClass5() {
  let text = `
        Köy içerisinde enerjisini güneş ışığından karşılayan aydınlatma sistemleri, hem hayvan hem insanların 
        rahatlıkla kullanabileceği su birimleri, beton ve ahşaptan kolaylıkla Elde edilebilecek oturma birimleri tasarlandı. 
        Ayrıca yol zemin kaplaması olarak doğal kesme taş  kullanımı ön görülmüştür. 
    `;
  gsap.to(".meydan-text-relative", {
    duration: 0.3,
    opacity: 0,
    onComplete: showNewText,
    onCompleteParams: [text]
  });
}

;

function workOnAddClass6() {
  let text = `
        Doğa ile uyumlu, geri dönüştürülebilir, doğaya ve canlılara zarar vermeyen, 
        sürdürülebilir malzemelerin kullanılmı tercih edilmiştir. 
    `;
  gsap.to(".meydan-text-relative", {
    duration: 0.3,
    opacity: 0,
    onComplete: showNewText,
    onCompleteParams: [text]
  });
}

;