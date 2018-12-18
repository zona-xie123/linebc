$(function () {
    FastClick.attach(document.body);
    $('.owl-carousel').owlCarousel({
        loop: true,
        items: 1,
        margin: 10,
        nav: true
    })
$('.owl-prev,.owl-next').text('');
    $('.faq section').each(function (i) {
        var _number = i;
        $(this).click(function () {
            $(this).toggleClass('h3_open')
            $('.faq section p').eq(_number).slideToggle(200);
            // $('.faq ul li').eq(_number).children().children('.math').toggle();
            // $('.faq ul li').eq(_number).toggleClass('toggle-color')
        });
    });
    if ($(window).width()>601){
        $(window).scroll(function () {
            if ($(this).scrollTop() > 110) { /* 要滑動到選單的距離 */
              $('.navbar-default').addClass('navFixed').addClass('animated slideInDown'); /* 幫選單加上固定效果 */
            } else {
              $('.navbar-default').removeClass('navFixed animated slideInDown'); /* 移除選單固定效果 */
            }
          });
    }
    if ($(window).width()<600){
        $('.kv .col-sm-7').after($('.kv .col-sm-5'))
        $('.navbar-default').addClass('navFixed').addClass('animated slideInDown'); /* 幫選單加上固定效果 */
    }
    // nav
$('.navbar-nav li a').click(function (){
    $('.navbar-collapse').removeClass('in')
    $('.navbar-toggle').removeClass('active-toggle')
})
$('.navbar-toggle').click(function () {
    $(this).toggleClass('active-toggle');
})
})