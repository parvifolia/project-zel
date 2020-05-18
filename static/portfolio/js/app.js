const cvItemWrap = document.querySelectorAll('.cv-item-wrap');
const cvItemText = document.querySelector('.cv-item-text');

cvItemWrap.forEach( item => {
    item.addEventListener('click', e =>{
        e.target.classList.toggle('cv-items-open');
        //console.log(e.target.nextElementSibling.children[0].classList.toggle('cv-items-text-open'));
        e.target.children[1].children[0].classList.toggle('cv-items-text-open');
    })
})

