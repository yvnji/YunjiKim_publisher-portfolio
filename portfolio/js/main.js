/* 

작성자 : 김윤지
김윤지 포트폴리오 스크립트문서
update : 22.07.25

*/

//스크롤 이벤트 ======================================
$(window)
  .scroll(function () {
    let sct = $(window).scrollTop();

    // about me 영역 떠오르는 애니메이션 ==========================
    let aboutMETop = $('.aboutMe').offset().top - 300;
    if (sct >= aboutMETop) {
      $('.up').addClass('on');
    } else {
      $('.up').removeClass('on');
    }

    // aboutMe -> project 영역 이동시 백그라운드 색 변환 ===========================================================
    let $window = $(window),
      $body = $('body'),
      $panel = $('.panel');
    // 스크롤 위치보다 33% 빠르게 색상 변환.
    let scroll = $window.scrollTop() + $window.height() / 3;

    $panel.each(function () {
      let $this = $(this);

      // 해당 영역 범위 내에 포지션이 존재할 경우.
      // So position of (position of top of div <= scroll position) && (position of bottom of div > scroll position).
      if (
        $this.position().top <= scroll &&
        $this.position().top + $this.height() > scroll
      ) {
        // 모든 영역에 'color-'클래스 삭제
        $body.removeClass(function (index, css) {
          return (css.match(/(^|\s)color-\S+/g) || []).join(' ');
        });

        // 현재 활성화된 영역에 'color-'클래스 추가
        $body.addClass('color-' + $(this).data('color'));
      }
    });

    // project 영역 떠오르는 애니메이션 =================================
    let projectTop = $('.project').offset().top - 600;
    if (sct >= projectTop) {
      $('.upper').addClass('on');
    } else {
      $('.upper').removeClass('on');
    }
  })
  .scroll();

//모바일 gnb 창 여닫기 ==================================
$('.gnb_btn').click(function () {
  let d = $(this).siblings('.gnb_list').css('display');
  if (d == 'block') {
    $(this).siblings('.gnb_list').stop().slideUp();
    $(this).removeClass('on');
  } else {
    $(this).siblings('.gnb_list').stop().slideDown();
    $(this).addClass('on');
  }
});

// 반응형 스크립트 ======================================================
$(window)
  .resize(function () {
    if (window.innerWidth < 1024) {
      // 모바일 ========

      // gnb 클릭했을 때 화면이동 이벤트 =============================
      // main으로 이동
      $('.gnb_list .gl01').click(function () {
        $('body,html').stop().animate(
          {
            scrollTop: 0
          },
          600
        );
        $('.gnb_list').stop().slideUp();
        $('.gnb_btn').removeClass('on');
      });
      // aboutMe로 이동
      $('.gnb_list .gl02').click(function () {
        let i = $('.aboutMe').offset().top;
        $('body,html').stop().animate(
          {
            scrollTop: i
          },
          600
        );
        $('.gnb_list').stop().slideUp();
        $('.gnb_btn').removeClass('on');
      });
      // project로 이동
      $('.gnb_list .gl03').click(function () {
        let i = $('.project').offset().top + 100;
        $('body,html').stop().animate(
          {
            scrollTop: i
          },
          600
        );
        $('.gnb_list').stop().slideUp();
        $('.gnb_btn').removeClass('on');
      });
    } else {
      // PC===========================

      // gnb 클릭했을 때 화면이동 이벤트 =============================
      // main으로 이동
      $('.gnb_list .gl01').click(function () {
        $('body,html').stop().animate(
          {
            scrollTop: 0
          },
          600
        );
      });
      // aboutMe로 이동
      $('.gnb_list .gl02').click(function () {
        let i = $('.aboutMe').offset().top;
        $('body,html').stop().animate(
          {
            scrollTop: i
          },
          600
        );
      });
      // project로 이동
      $('.gnb_list .gl03').click(function () {
        let i = $('.project').offset().top + 120;
        $('body,html').stop().animate(
          {
            scrollTop: i
          },
          600
        );
      });
    }
  })
  .resize();

// parallax 효과 ========================================
const elements = {
  bg: document.getElementById('bg'),
  star: document.getElementById('star'),
  sun: document.getElementById('sun'),
  mount02: document.getElementById('mount02'),
  mount01: document.getElementById('mount01'),
  lake: document.getElementById('lake'),
  textLeft: document.getElementById('text_left'),
  textRight: document.getElementById('text_right'),
  ground: document.getElementById('ground'),
  cliff: document.getElementById('cliff')
};

const parallax = (element, multiplier) => {
  element.style.transform = `translateY(${window.scrollY * multiplier}px)`;
};

window.addEventListener('scroll', () => {
  parallax(elements.bg, 1);
  parallax(elements.star, 1);
  elements.star.style.transform = `translate(${window.scrollY * -0.5}px, ${
    window.scrollY * 1
  }px)`;
  parallax(elements.sun, 0.2);
  parallax(elements.mount02, 0.8);
  parallax(elements.mount01, 1.5);
  parallax(elements.lake, 0.7);
  elements.textLeft.style.transform = `translateX(${window.scrollY * 4}px)`;
  elements.textRight.style.transform = `translateX(${-window.scrollY * 4}px)`;
  parallax(elements.cliff, -0.3);
});

// project영역 swiper 3D 슬라이드 ========================
const swiper = new Swiper('.project .swiper-container', {
  loop: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  slideToClickedSlide: true,
  effect: 'coverflow',
  speed: '0.5s',
  coverflowEffect: {
    rotate: 55,
    slideShadows: false
  },
  navigation: {
    prevEl: '.swiper_prev',
    nextEl: '.swiper_next'
  },
  on: {
    slideChange: function () {
      $('.project_list li').removeClass('on');
      $('.project_list li').eq(this.realIndex).addClass('on');
    }
  }
});
