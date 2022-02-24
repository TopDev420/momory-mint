$(document).ready(function () {
    $(window).scroll(function () {
        const scroll = $(window).scrollTop();

        if (scroll < 50) {
            $(".scroller").css({
                "margin-top": "120px",
                'transition': ".4s ease-in-out"
            });
            $("#logo").css({ "display": "none" });
            $("#navBottom").css({
                "height": "80px",
                'transition': ".4s ease-in-out"
            });
        } else {
            $("#logo").css({ "display": "block" });
            $("#navBottom").css({
                "height": "54px",
                'transition': ".4s ease-in-out"
            });
            $(".scroller").css({
                "margin-top": "80px",
                'transition': ".4s ease-in-out"
            });
        }
    })
})