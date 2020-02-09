window.onscroll = function () {
  fix_nav_bar()
};

$('#blogCarousel').carousel({
  interval: 5000
});
function fix_nav_bar() {
  if (window.scrollY > 20) {
    $(".img-logo img").css("width", "120px");
    $(".navigation").css({
      "background-color": "rgba(0,0,0,0.8",
      "height": "80px"
    });
    $(".bar_navigation >ul >li a").css({
      "color": "white"
    });
  } else {
    $(".img-logo img").css("width", "200px");
    $(".navigation").css({
      "background": "rgba(0,0,0,0.0)"
    });
    $(".bar_navigation  >ul >li a").css({
      "color": "white"
    });
  }
}
var i = 0;

function show_more() {

  $(".show").toggle("slow");
  if (i == 0) {
    i = 1;
    $(".read").text("Read More");
  } else {
    $(".read").text("Read Less");
    i = 0;
  }
}
