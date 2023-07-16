/* 

작성자 : 김윤지
쿠팡_스크립트문서
update : 22.07.12

*/

// h_f2_category_wrap 카테고리 depth1 나타내기
$('.h_f2_category_wrap').mouseenter(function () {
    $(this).find('.depth1').stop().slideDown();
});
// h_f2_category_wrap 카테고리 depth1  없애기
$('.h_f2_category_wrap').mouseleave(function () {
    $(this).find('.depth1').stop().slideUp();
});

// h_f2_category_wrap 카테고리 depth2 나타내기
$('.h_f2_category .depth1').mouseenter(function () {
    $(this).find('.depth2').stop().show();
})
// h_f2_category_wrap 카테고리 depth2 없애기
$('.h_f2_category .depth1').mouseleave(function () {
    $(this).find('.depth2').stop().hide();
})