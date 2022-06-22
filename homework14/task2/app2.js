$(function () {
    const next = $('#next');
    const prev = $('#prev');
    next.on('click', function () {
            let current = $('p.current')
            let next = current.next();

            current.hide('slow').removeClass('current');
            next.show('slow').addClass('current');
            btnState($(next));
        }
    )
    prev.on('click', function () {
        let current = $('p.current');
        let prev = current.prev();

        current.hide('slow').removeClass('current');
        prev.show('slow').addClass('current');
        btnState($(prev));

    })

    btnState($('p.current'));

    function btnState(elem) {
        next.removeAttr('disabled');
        prev.removeAttr('disabled');

        if (elem.index() === $('p').length - 1) {
            next.attr('disabled', 'true');
        } else if (elem.index() === 0) {
            prev.attr('disabled', 'true');
        }
    }

})
