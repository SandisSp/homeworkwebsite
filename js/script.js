$(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
        $(".navbar").removeClass("bg-dark");
    } else {
        $(".navbar").addClass("bg-dark");
    }

});

$(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
        $(".navbar-brand").addClass("opacity");
    } else {
        $(".navbar-brand").removeClass("opacity");
    }

});

$(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
        $(".nav-item").addClass("opacity1");
    } else {
        $(".nav-item").removeClass("opacity1");
    }

});

$(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
        $(".input").addClass("opacity1");
    } else {
        $(".input").removeClass("opacity1");
    }

});

$(window).scroll(function(){
    if($(this).scrollTop() > 100) {
        $(".back_to_top").show();
} else {
    $(".back_to_top").hide();
}

});

$(".back_to_top").click(function(){
    $("html, body").animate({scrollTop:0}, 400);
});