$(function () {
    let scrollTop;
    $(window).on("scroll", function () {
        scrollTop = $(this).scrollTop();
        if (scrollTop > 30) $("#header-fixed").addClass("active");
        else $("#header-fixed").removeClass("active");
    });

    if ($("#mobileMenu-open-btn").length > 0) {
        $("#mobileMenu-open-btn").on("click", function (e) {
            e.preventDefault();
            $("#header-fixed").addClass("active");
            $(".mobile-menu").addClass("active");
            $(this).css({ display: "none" });
            $("#mobileMenu-close-btn").css({ display: "block" });
            $("body").addClass("overflow-hidden");
        });
    }

    if ($("#mobileMenu-close-btn").length > 0) {
        $("#mobileMenu-close-btn").on("click", function (e) {
            e.preventDefault();
            if (scrollTop > 30) $("#header-fixed").addClass("active");
            else $("#header-fixed").removeClass("active");

            $(".mobile-menu").removeClass("active");
            $(this).css({ display: "" });
            $("#mobileMenu-open-btn").css({ display: "" });
            $("body").removeClass("overflow-hidden");
        });
    }
});
