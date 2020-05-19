// Query Selectors
const cvItemWrap = document.querySelectorAll('.cv-item-wrap');
const cvItemText = document.querySelector('.cv-item-text');

// Tab Expanding and Text Appearing
cvItemWrap.forEach( item => {
    item.addEventListener('click', e =>{
        if (e.target.classList.contains('cv-item-wrap-1')){
            console.log(e.target)
            e.target.children[1].children[0].classList.toggle('cv-items-text-open-1');
        }
        else if (e.target.classList.contains('cv-item-wrap-2')){
            e.target.children[1].children[0].classList.toggle('cv-items-text-open-2');
        }
        else if (e.target.classList.contains('cv-item-wrap-3')){
            e.target.children[1].children[0].classList.toggle('cv-items-text-open-3');
        }
        else if (e.target.classList.contains('cv-item-wrap-4')){
            e.target.children[1].children[0].classList.toggle('cv-items-text-open-4');
        }
        else if (e.target.classList.contains('cv-item-wrap-5')){
            e.target.children[1].children[0].classList.toggle('cv-items-text-open-5');
        }
        else if (e.target.classList.contains('cv-item-wrap-6')){
            e.target.children[1].children[0].classList.toggle('cv-items-text-open-6');
        }
        else if (e.target.classList.contains('cv-item-wrap-7')){
            e.target.children[1].children[0].classList.toggle('cv-items-text-open-7');
        }
        else if (e.target.classList.contains('cv-item-wrap-8')){
            e.target.children[1].children[0].classList.toggle('cv-items-text-open-8');
        }
        else if (e.target.classList.contains('cv-item-wrap-9')){
            e.target.children[1].children[0].classList.toggle('cv-items-text-open-9');
        }
    })
})

