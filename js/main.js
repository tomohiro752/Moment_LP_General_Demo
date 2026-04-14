
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
  カード fade-up
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

/*=================================================
  検証 fade in
===================================================*/

const parent = document.querySelector(".fade-parent");

const observer = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    const items = parent.querySelectorAll(".fade-child");

    items.forEach((el, i) => {
      setTimeout(() => {
        el.classList.add("show");
      }, i * 150);
    });
  }
}, { threshold: 0.2 });

observer.observe(parent);


/*=================================================
  header 切り替え
===================================================*/

$(window).on('scroll', function () {
  if ($(this).scrollTop() > 200) {
    $('#header').addClass('is-scrolled');
  } else {
    $('#header').removeClass('is-scrolled');
  }
});


})



