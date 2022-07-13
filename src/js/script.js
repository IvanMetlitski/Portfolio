const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      close = document.querySelector('.menu__close');

hamburger.addEventListener('click',()=> {
    menu.classList.add('active')
})
close.addEventListener('click', ()=> {
    menu.classList.remove('active')
})

const percents = document.querySelectorAll('.skills__toddler-text'),
      lines = document.querySelectorAll('.skills__toddler-line-2');

percents.forEach((item, i)=>{
    lines[i].style.width = item.innerHTML
})

const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};



