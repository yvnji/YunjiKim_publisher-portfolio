/* 

작성자 : 김윤지
별마당도서관_스크립트문서
update : 22.07.12

*/

// a태그 명령 return false
$('.art_more a').click(function () {
    return false;
})

//스크롤 이벤트 =================================
$('.h_logo').click(function () {
    $('body,html').stop().animate({
        scrollTop: 0
    }, 1000);
    return false;
});

//헤더-gnb슬라이드================================
$('.gnb_pc').mouseenter(function () {
    $(this).find('.depth2').stop().slideDown();
    $('.gnbBg').stop().slideDown();
}).mouseleave(function () {
    $(this).find('.depth2').stop().slideUp();
    $('.gnbBg').stop().slideUp();
});

//헤더-언어선택================================
$('.h_icon .lang button').click(function () {
    $('.search_box').hide();
    $('.h_icon .search_close').removeClass('up');
    $(this).siblings('.lang ul').stop().slideToggle();
    return false;
});
$('.h_icon .lang li').click(function () {
    $('.h_icon .lang li').removeClass('on');
    $(this).addClass('on');
    return false;
});

//헤더-검색창================================
$('.h_icon .search_close').click(function () {
    $('.lang_list').hide();
    let d = $('.search_box').css('display');
    if (d == 'block') {
        $(this).siblings('.search_box').stop().slideUp();
        $(this).removeClass('up');
    } else {
        $(this).siblings('.search_box').stop().slideDown();
        $(this).addClass('up');
    }
});

//메인 이미지 확대 애니메이션======================
$('.m1Bg_mo img').css({
    transform: 'scale(1.2)',
    transition: '18s'
})
$('.m1Bg_pc img').css({
    transform: 'scale(1.2)',
    transition: '18s'
})

//art섹션-카드슬라이드============================
$('.art_list').slick({
    prevArrow: '.art_slider_prev',
    nextArrow: '.art_slider_next',
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1500
});

//video섹션-비디오슬라이드=========================
$('.video_slide_list').slick({
    mobileFirst: true,
    prevArrow: '.video_prev',
    nextArrow: '.video_next',
    slidesToShow: 1,
    autoplay: true,
    speed: 1300,
    autoplaySpeed: 3500,
    responsive: [{
            //테블릿 768px
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                centerPadding: '20px'
            }
        },
        {
            // PC 1440px
            breakpoint: 1439,
            settings: {
                slidesToShow: 3,
                centerMode: true,
                centerPadding: '70px'
            }
        }
    ]
}).on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    /* 자바스크립트
    if (currentSlide !== nextSlide) {
        document.querySelectorAll('.slick-center + .slick-cloned').forEach((next) => {
            // timeout required or Slick will overwrite the classes
            setTimeout(() => next.classList.add('slick-current', 'slick-center'));
        });
    }
    */
    // IE 호환성을 고려한 제이쿼리
    if (currentSlide !== nextSlide) {
        $('.slick-center + .slick-cloned').each(function (index, node) {
            var $node = $(node);

            setTimeout(function () {
                $node.addClass('slick-current');
                $node.addClass('slick-center');
            });
        });
    }
}); // 이 코드는 slick infinite 가 맨끝에서 다시 처음으로 돌아가거나 할때도 트랜지션이 적용되기 위한 코드입니다. (centerMode 에서)

//푸터-패밀리사이트============================
$('.siteBtn').click(function () {
    let d = $('.siteList').css('display')
    if (d == 'block') {
        $('.siteList').stop().slideUp();
        $(this).removeClass('close');
    } else {
        $('.siteList').stop().slideDown();
        $(this).addClass('close');
    }
    return false;
});