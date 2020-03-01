$(function () {
    $(".center-hero").hide().fadeIn(1800);
    $("#guaranteed").hide().fadeIn(2800);

    let pageEl = $(document),
        fadeElem = $('.fade-scroll');

    pageEl.on('scroll', function () {
        let currScrollPos = pageEl.scrollTop();

        fadeElem.each(function () {
            let $this = $(this),
                elemOffsetTop = $this.offset().top;
            if (currScrollPos > elemOffsetTop) $this.css('opacity', 1 - (currScrollPos - elemOffsetTop) / 400);
        });
    });

});
