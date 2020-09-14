$(function () {
    $l = $('.left')
    $r = $('.right')
    $m = $('.middle')

    $l.mouseenter(function () {
        $('.container').addClass('left-is-hovered');
    }).mouseleave(function () {
        $('.container').removeClass('left-is-hovered');
    });

    $r.mouseenter(function () {
        $('.container').addClass('right-is-hovered');
    }).mouseleave(function () {
        $('.container').removeClass('right-is-hovered');
    });

    $m.mouseenter(function () {
        $('.container').addClass('middle-is-hovered');
    }).mouseleave(function () {
        $('.container').removeClass('middle-is-hovered');
    });
});

