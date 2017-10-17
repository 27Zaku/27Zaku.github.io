$(function() {
    //caches a jQuery object containing the header element
    var welmenu = $("li:first-child");
    var welmenu2 = $("li:nth-child(2)");
    var welmenu3 = $("li:nth-child(3)");
    var welmenu4 = $("li:nth-child(4)");
    var welmenu5 = $("li:nth-child(5)");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if ($(window).width() < 1024) {
        // scripts
        } else {
            if (scroll < 1200) {
                welmenu.addClass('active');
            } else {
                welmenu.removeClass('active');
            }
            if (scroll >= 1200 && scroll < 2400) {
                welmenu2.addClass('active');
            } else {
                welmenu2.removeClass('active');
            }
            if (scroll >= 2400 && scroll < 3200) {
                welmenu3.addClass('active');
            } else {
                welmenu3.removeClass('active');
            }
            if (scroll >= 3200 && scroll < 4100) {
                welmenu4.addClass('active');
            } else {
                welmenu4.removeClass('active');
            }
            if (scroll >= 4100) {
                welmenu5.addClass('active');
            } else {
                welmenu5.removeClass('active');
            }
        }
    });
});