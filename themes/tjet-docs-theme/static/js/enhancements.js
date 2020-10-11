$(function () {
    // Scroll to top button
    $("#backToTop").show();
    $("#backToTop").click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, "fast");
    });

    $(".noJsHidden").removeClass("noJsHidden");
});