// Query Selectors
const cvItemWrap = document.querySelectorAll('.cv-item-wrap');
const cvItemText = document.querySelector('.cv-item-text');

//Tab Expanding and Text Appearing
cvItemWrap.forEach( item => {
    item.addEventListener('click', e =>{
        var sectionHeight = e.target.children[1].children[0].scrollHeight;
        e.target.children[1].children[0].classList.toggle('cv-items-text-open');
        e.target.classList.toggle('cv-items-wrap-open');
        if (e.target.children[1].children[0].style.height != sectionHeight+'px'){
            e.target.children[1].children[0].style.height=sectionHeight+'px';
        } else {
            e.target.children[1].children[0].style.height=0+'px';
        };
        cvItemWrap.forEach(diger =>{
            if (diger != e.target) {
                diger.classList.remove('cv-items-wrap-open');
                diger.children[1].children[0].classList.remove('cv-items-text-open');
                diger.children[1].children[0].style.height=0+'px';
            }
        })
    })
})

