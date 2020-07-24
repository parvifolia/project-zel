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

const firstText = document.querySelector(".goz-text-relative");
const carousel = document.querySelectorAll(".carousel-item");
$('.carousel').carousel('pause'); // watch class changes with mutation observer

function showNewText(text) {
  firstText.innerHTML = `${text}`;
  gsap.to(".goz-text-relative", {
    duration: 0.3,
    opacity: 1
  });
}

function workOnClassRemoved() {}

;
carousel.forEach((e, i) => {
  if (i < 8) {
    let list = [workOnAddClass1, workOnAddClass2, workOnAddClass3, workOnAddClass4, workOnAddClass5, workOnAddClass6, workOnAddClass7, workOnAddClass8];
    new ClassWatcher(e, 'active', list[i], workOnClassRemoved);
  }
});

function workOnAddClass1() {
  let text = `
        <div class="goz-text-relative-inside" style="text-align: left;">
        Betonart Mimarlık Yaz Okulu<br><br>
        2018<br><br>
        Kayseri
        </div>
        `;
  gsap.to(".goz-text-relative", {
    duration: 0.3,
    opacity: 0,
    onComplete: showNewText,
    onCompleteParams: [text]
  });
}

;

function workOnAddClass2() {
  let text = `
        "Beton Olmak" temalı Betonart Mimarlık Yaz Okulu’ nda GÖZ başlıklı çalışma, beton ile kurulan ilişkide ışığı 
        sıkıştırmayı ve beton ile yakın ilişkide malzemenin çıplaklığına tanıklığı ve bu deneyimin çevreye öğrenci köyüne 
        basit ve ölçekli bir katılımını hedefliyordu. GÖZ iIe ucu açık, gündeIik deneyimi önceleyen, özellikle betonun 
        ilksel hâllerine yönelmiş bir tavır kurmaya çalıştık.
        `;
  gsap.to(".goz-text-relative", {
    duration: 0.3,
    opacity: 0,
    onComplete: showNewText,
    onCompleteParams: [text]
  });
}

;

function workOnAddClass3() {
  let text = `
        Işığı sıkıştıran, beton ile karşılaşmayı bir kol mesafesinde tutmaya çalışan, çevreden kontrollü bir biçimde 
        kopan bir geçiş tasarladık. Süreç içinde ilk eskizlerden, işin son hâline kadar Betonart Mimarlık Yaz Okulu 
        gibi temel hedefi betonun imkânlarını açmak, yeni kullanım olanaklarını araştırmak olan bir deney alanı içinde, 
        özellikle ilkel betonu pürüzleri ile başbaşa bırakmayı deneyen bir tema ile hareket ettik.
    `;
  gsap.to(".goz-text-relative", {
    duration: 0.3,
    opacity: 0,
    onComplete: showNewText,
    onCompleteParams: [text]
  });
}

;

function workOnAddClass4() {
  let text = `
        Sonrasında, bulunduğu devreye eklemlenen çabası ile yere yaklaşan bir geçit kurmaya çalışırken konvansiyonel 
        betonun üretim hatalarını, ahşap kalıp izlerini, hareleri ve çapakları yakından görmeyi istedik.
    `;
  gsap.to(".goz-text-relative", {
    duration: 0.3,
    opacity: 0,
    onComplete: showNewText,
    onCompleteParams: [text]
  });
}

;

function workOnAddClass5() {
  let text = `
        Son haliyle GÖZ, öğrenci köyünde bostanların  hemen yamacında yurtlardan birine yönelmiş ince bir patika izine 
        sahip çıkan, ardışık eşiklerden kurulu, ölçülü bir şekilde içe kapanan  bir  geçit  olarak  ortaya çıktı.  
        Çalışmanın  ilk  günlerinde  seçilmiş  alanda hemen farkına vardığımız, çimler üzerindeki bu patikanın yere 
        dâhil  edilmesi  dıüşüncesiyle  oluşan bir geçiş mekânı olarak kuruldu. 
    `;
  gsap.to(".goz-text-relative", {
    duration: 0.3,
    opacity: 0,
    onComplete: showNewText,
    onCompleteParams: [text]
  });
}

;

function workOnAddClass6() {
  let text = `
        Hem yere, hem çevreye dair ölçekli bir mekân kurmayı umut eden, beton  ile  karşılaşma  anlarını  sıkıştırmayı  
        düşünen bir kestirme. Diğer yanda aslında ahaliyi geçerken durmaya davet eden bir pasaj,  gözün  taradığı  
        ardışık eşikleri bir kapanışlar ve açılışlar alanı olarak kuran bir kesişimler durağı, bir aralık olmasına 
        çalıştık. Mekârısallaşan bir dizi eşik ve kenar üreterek öğrenci köyü girişinde farklı vistalar, kapanışlar ve 
        perspektifler  kurarak  özellikle   gün   boyu   bostanda çalışanlar için bir dinlenme alanı tarif eden bir durak.
    `;
  gsap.to(".goz-text-relative", {
    duration: 0.3,
    opacity: 0,
    onComplete: showNewText,
    onCompleteParams: [text]
  });
}

;

function workOnAddClass7() {
  let text = `
        Gün içinde hareket eden gölgelerin tarif ettiği alanın zeminde  üretilen   yırtıkla buluştuğu çökertilmiş 
        iç zeminde kısa bir an için bile olsa zaman duygusunu dönüştürmeyi deniyor GÖZ.
    `;
  gsap.to(".goz-text-relative", {
    duration: 0.3,
    opacity: 0,
    onComplete: showNewText,
    onCompleteParams: [text]
  });
}

;

function workOnAddClass8() {
  let text = `
        Sırtını beton duvarlara vererek oturan kişinin, betonun serinliğine, ışığın ısısına dokunduğu, gök ile 
        yer arasında durmanın tüm duygusunun beton duvarlar arasına sıkıştırıldığı, ardışık bir iç/dış/ara kurmayı 
        deniyor bir anlamda. 
    `;
  gsap.to(".goz-text-relative", {
    duration: 0.3,
    opacity: 0,
    onComplete: showNewText,
    onCompleteParams: [text]
  });
}

;