let aboutOffest = $("#about").offset().top;
$(window).scroll(function () {
  let wScroll = $(window).scrollTop();

  if (wScroll >= aboutOffest - 100) {
    $("#main-nav").css("cssText", "background-color:rgba(0,0,0,.4)!important");
    $("#btnUp").fadeIn(500);
  } else {
    $("#main-nav").css(
      "cssText",
      "background-color:rgba(transparent)!important"
    );
    $("#btnUp").fadeOut(500);
  }
});

$("#btnUp").on("click", function () {
  $("html , body").animate({ scrollTop: "0px" }, 500);
});

$('.nav-link[href^="#"]').click(function (e) {
  let linkHref = $(e.target).attr("href");
  let linkOffset = $(linkHref).offset().top;
  $("html , body").animate({ scrollTop: `${linkOffset}px` }, 1000);
});

$(document).ready(function(){
  $('#loading .loader').fadeOut(1000,()=>{
    $('#loading').fadeOut(1000)
    $('body').css('overflow-y','auto')
  })
})
