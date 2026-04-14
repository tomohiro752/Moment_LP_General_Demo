
$(function () {

  /*=================================================
  ハンバーガ―メニュー
  ===================================================*/
  $(".hamburger").on("click", function () {
    $("header").toggleClass("open");
  });

  $(".hamburger-nav-list li a, .hamburger-nav-list li btn").on("click", function () {
    $("header").toggleClass("open");
  });


/*=================================================
  カード scale
  ===================================================*/

  $(window).on('scroll', function(){

    $('.fade-up').each(function () {
      const elemPos = $(this).offset().top;
      const scroll = $(window).scrollTop();
      const windowHeight = $(window).height();

      if(scroll > elemPos - windowHeight + 100) {
        $(this).addClass('is-show');
      }
    });

  });








})



