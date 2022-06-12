    const input = document.querySelector('input');
    const list  = document.querySelectorAll('li');

    input.addEventListener('input', (event)=>{
        (event.target.value.match(/[A-Z]/)) ? list[0].style.background=('red') : list[0].style.background=('transparent');
        (event.target.value.match(/\d/)) ? list[1].style.background=('red') : list[1].style.background=('transparent');
        (event.target.value.match(/\W/)) ? list[2].style.background=('red') : list[2].style.background=('transparent');
        (event.target.value.match(/\S{8}/)) ? list[3].style.background=('red') : list[3].style.background=('transparent');
    })
















