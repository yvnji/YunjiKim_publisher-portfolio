/* 

작성자 : 김윤지
포스코케미칼 개요 스크립트
update : 22.07.19

*/

$('.goTop').click(function () {
    $('body,html').stop().animate({
        scrollTop: 0
    }, 800);
})