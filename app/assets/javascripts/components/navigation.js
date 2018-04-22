function goTo(id, link) {
  if ($(id).length == 0) {
    return window.location.href = link;
  }
  $('html, body').animate({
    scrollTop: $(id).offset().top
  }, 800);
}

function toogle(id) {
  if($(id).is(":visible")) $(id).slideUp();
  else $(id).show('slow');
}

$( window ).resize(function() {
  $( "#nav-list" ).css("display", "");
});
