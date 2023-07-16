/* 

작성자 : 김윤지
별마당도서관 개요 스크립트
update : 22.07.19

*/

$('.goTop').click(function () {
    $('body,html').stop().animate({
        scrollTop: 0
    }, 800);
})