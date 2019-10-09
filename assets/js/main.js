$(function() {
  // prevent user from typing characters in input zipCode field!
  $("input.numbers").keypress(function(event) {
    return /\d/.test(String.fromCharCode(event.keyCode));
  });


  // toggle_nav
  $("#toggle-nav").click(function() {
    $(this).toggleClass("open");
    $(".collapse").toggleClass("active");
  });

  $("#toggle__menu").click(function() {
    $(this).toggleClass("open");
    $(".header__navbar__mobile").toggleClass("visible");
  });
});
