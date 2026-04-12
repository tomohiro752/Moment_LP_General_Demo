
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

})



