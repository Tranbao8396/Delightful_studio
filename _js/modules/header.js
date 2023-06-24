$(window).on("scroll", function() {
  var scroll = $(this).scrollTop();
  var fv_height = $("#fv").outerHeight();

  if (scroll >= fv_height) {
    $("header").addClass("is-white");
  } else {
    $("header").removeClass("is-white");
  }
});
