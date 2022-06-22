$(function () {

    function nextSlide() {
        let currentItem = $('p.current');
        let currentItemIndex = currentItem.index();
        let nextCurrentItem = currentItem.next();
        let nextCurrentItemIndex = currentItemIndex + 1;
        currentItem.fadeOut(1000).removeClass('current');

        if (nextCurrentItemIndex === $('div > p').length) {
            $('p#first').fadeIn(1000).addClass('current');
        } else {
            nextCurrentItem.fadeIn(1000).addClass('current');
        }
    }

    function prevSlide() {
        let currentItem = $('div > p.current');
        let currentItemIndex = currentItem.index();
        let prevCurrentItem = currentItem.prev();
        let prevCurrentItemIndex = currentItemIndex - 1;
        currentItem.fadeOut(1000).removeClass('current');

        if (prevCurrentItemIndex === ($('div > p:first-child').index() - 1)) {
            $('p#last').fadeIn(1000).addClass('current');
        } else {
            prevCurrentItem.fadeIn(1000).addClass('current');
        }
    }

    //timer
    let timerId;

    function timer() {
        timerId = setInterval(() => {
            nextSlide();
        }, 5000);
    }

    timer();

    //hover
    $('.slider').hover(function () {
        clearInterval(timerId);
        $('.current').css({
            'transform': 'scale(1.2)',
            'background-color': 'lightblue',
            'transition': 'all 0.5s',
        })

    }, function () {
        timer();
        $('.current').css({
            'transform': 'scale(1)',
            'transition': 'all 0.5s',
            'background-color': '#c9c9c9',
        })
    });

    //btns methods
    $('#next').on('click', function () {
        nextSlide();
    });
    $('#prev').on('click', function () {
        prevSlide();
    })
})