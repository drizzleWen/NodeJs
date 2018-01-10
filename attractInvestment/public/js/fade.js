$(function() {
    $('.title ul li').eq(1).hover(function() {
        $('.qygk').fadeIn();
        $(this).children("span").addClass("glyphicon-menu-down").removeClass("glyphicon-menu-up");
    }, function() {
        $('.qygk').fadeOut();
        $(this).children("span").addClass("glyphicon-menu-up").removeClass("glyphicon-menu-down");
    });

    $('.title ul li').eq(2).hover(function() {
        $('.zxzx').fadeIn();
        $(this).children("span").addClass("glyphicon-menu-down").removeClass("glyphicon-menu-up");
    }, function() {
        $('.zxzx').fadeOut();
        $(this).children("span").addClass("glyphicon-menu-up").removeClass("glyphicon-menu-down");
    });
});