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

const firstText = document.querySelector(".flaneur-text-relative");
const carousel = document.querySelectorAll(".carousel-item");
$('.carousel').carousel('pause'); // watch class changes with mutation observer 

function showNewText(text) {
  firstText.innerHTML = `${text}`;
  gsap.to(".flaneur-text-relative", {
    duration: 0.3,
    opacity: 1
  });
}

function workOnClassRemoved() {}

;
carousel.forEach((e, i) => {
  if (i < 12) {
    let list = [workOnAddClass1, workOnAddClass2, workOnAddClass3, workOnAddClass4, workOnAddClass5, workOnAddClass6, workOnAddClass7, workOnAddClass8, workOnAddClass9, workOnAddClass10, workOnAddClass11, workOnAddClass12];
    new ClassWatcher(e, 'active', list[i], workOnClassRemoved);
  }
});

function workOnAddClass1() {
  let text = `
        <div class="flaneur-text-relative-inside" style="text-align: left;">
        Uluslararası Mimarlık Öğrencileri Buluşması<br><br>
        2018<br><br>
        Adana
        </div>
        `;
  gsap.to(".flaneur-text-relative", {
    duration: 0.3,
    opacity: 0,
    onComplete: showNewText,
    onCompleteParams: [text]
  });
}

;

function workOnAddClass2() {
  let text = `
        UMÖB 17.5 Adana'da gerçekleştirilen Flaneur atölyesi, 10 katılımcı ve 3 yürütücü ile 2 Şubat 2018 tarihinde tamamlandı. 
        Toplamda 6 çalışma günü süresi içerisinde gerçekleşti.
        `;
  gsap.to(".flaneur-text-relative", {
    duration: 0.3,
    opacity: 0,
    onComplete: showNewText,
    onCompleteParams: [text]
  });
}

;

function workOnAddClass3() {
  let text = `
        "Dont forget to play!" Alvar Aalto<br><br>
        Kent bir bulmacadır. Her gün yürüdüğümüz sokaklar, her gün alışveriş yaptığımız bakkal, her akşam döndüğümüz 
        evimiz olmasaydı, bu bulmacayı hemen çözebilir miydik? Alışık olduğumuz aletler bir anda kaybolsaydı, 
        gene aynı manevra kabiliyetinde olabilir miydik? Peki yaşam alanını çeşitli sebeplerle bırakmış bir kimse, 
        kent ile hangi düzeyde iletişim kurar?
    `;
  gsap.to(".flaneur-text-relative", {
    duration: 0.3,
    opacity: 0,
    onComplete: showNewText,
    onCompleteParams: [text]
  });
}

;

function workOnAddClass4() {
  let text = `
        Flaneur; kenti bir ev yapabilir miyiz?<br><br>

        Flaneur atölyesi katılımcılarından "göç" etmelerini istiyor. Alışık olmadıkları bir şehirde, alışık oldukları 
        araçları kendileri için üretmek, kenti "tekrar" ev yapmaya çağırıyor. Her gün önlerine çıkan bulmacaları çözüp, 
        günün üretimini gerçekleştiren katılımcılar "hayatta kalacak."
    `;
  gsap.to(".flaneur-text-relative", {
    duration: 0.3,
    opacity: 0,
    onComplete: showNewText,
    onCompleteParams: [text]
  });
}

;

function workOnAddClass5() {
  let text = `
        Flaneur, doğrudan bir kelime anlamı olmasa da, atölye süresince kabul gören tanımıyla; "düşünür-gezer. <br><br>
        Flaneur, kent içerisinde amaçsızca dolaşırken hem düşünsel hem de mekansal anlamda göç etmektedir. 
        Onun için mekanın önemi yoktur; sokaklar birbirine bağlı bir şekilde tıpkı düşsel çağırışımlar gibi ardı 
        ardına gelmektedir. Böylece mekanın önemi azalmakta ve hareketliliğin kendisi önem kazanmaktadır.
    `;
  gsap.to(".flaneur-text-relative", {
    duration: 0.3,
    opacity: 0,
    onComplete: showNewText,
    onCompleteParams: [text]
  });
}

;

function workOnAddClass6() {
  let text = `
        Bu noktada atölye Flaneur kavramı üzerine kurulmuştur; gündelik göçlerden yola çıkarak, kentin aslında 
        bir ev gibi kullanılabilir oluşu ve evin bize hissettirdiği çeşitli duyguların sorgulanması hedeflenmiştir. 
        Eğer bir Flaneur ait olduğu mekandan koparılırsa ne tepki verir? Alışık olduğu araçlardan uzakta kalırsa nasıl 
        hayatta kalır? 
    `;
  gsap.to(".flaneur-text-relative", {
    duration: 0.3,
    opacity: 0,
    onComplete: showNewText,
    onCompleteParams: [text]
  });
}

;

function workOnAddClass7() {
  let text = `
    Kent, aslında tamamı bilmeceden oluşan kompleks bir olgudur; tamamen kavranılamaz ve kavranılan duygular da 
    son derece subjektiftir. Bununla birlikte bir Flaneur kentin kendisini ev gibi kullanıyorsa, yabancı olduğu bu 
    habitat karşısında ne tepki vereceği önemlidir; çünkü flaneur konforunu tekrar elde etmeye çalışacak, bir noktada 
    gezginlik ile üretim dengesini kurması gerecektir.
    `;
  gsap.to(".flaneur-text-relative", {
    duration: 0.3,
    opacity: 0,
    onComplete: showNewText,
    onCompleteParams: [text]
  });
}

;

function workOnAddClass8() {
  let text = `
        Sonuç itibariyle kenti tekrar ev yapmaya çalışacaktır. Atölye, kentin gündelik kullanımlarını sorgulamak, 
        konfor araçlarının üretimlerini gerçekleştirmek ve kenti ev gibi kullanmanın mümkünlüğünü tartışmaktadır.<br><br>

        Kurgu kenti anlamaya çalışıp, ona üretmek üzerine kuruludur. 
    `;
  gsap.to(".flaneur-text-relative", {
    duration: 0.3,
    opacity: 0,
    onComplete: showNewText,
    onCompleteParams: [text]
  });
}

;

function workOnAddClass9() {
  let text = `
        Çatı örtüsü olarak Adana'nın sıcak iklimi göz önüne alınmış ve amerikan bezlerinden bir hafif örtü tasarlanmıştır.

    `;
  gsap.to(".flaneur-text-relative", {
    duration: 0.3,
    opacity: 0,
    onComplete: showNewText,
    onCompleteParams: [text]
  });
}

;

function workOnAddClass10() {
  let text = `
    Döşemenin taşınabilirliği için yaklaşık 35cm aralıklarla 5x10 kirişler çakılmış, döşeme olarak kullanılan 
    osb nin mukavemetini arttırmak içinde 2 adet üst üste konulmuştur.
    `;
  gsap.to(".flaneur-text-relative", {
    duration: 0.3,
    opacity: 0,
    onComplete: showNewText,
    onCompleteParams: [text]
  });
}

;

function workOnAddClass11() {
  let text = `
        Pavyonun salınımını engellemek için zemin katta çaprazlamalar vardır. Rijitliği önemli ölçüde arttırmıştır.
    `;
  gsap.to(".flaneur-text-relative", {
    duration: 0.3,
    opacity: 0,
    onComplete: showNewText,
    onCompleteParams: [text]
  });
}

;

function workOnAddClass12() {
  let text = `
        Ahşap boyutlarından dolayı yekpare dikey ve yatay taşıyıcılar elde edilemediği için, çeşitli profil çözümleri 
        yapılmıştır. Birbirlerine geçmeli şeklinde üretilen bu şablon sayesinde birleşim noktaları sağlamlaştırılmıştır.
    `;
  gsap.to(".flaneur-text-relative", {
    duration: 0.3,
    opacity: 0,
    onComplete: showNewText,
    onCompleteParams: [text]
  });
}

;