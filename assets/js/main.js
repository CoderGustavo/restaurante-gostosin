function goTo(element, speed){
  var href = element.attr('href');
  var top = $(href).offset().top;
  $("html,body").animate({scrollTop : top}, speed);
}

$(function(){
  $("#top a").click(function(e){
    e.preventDefault();
    goTo($(this), 1000);
  });
});
$(function(){
  $(".topicos a").click(function(e){
    e.preventDefault();
    goTo($(this), 1000);
  });
});
$(function(){
  $(".div_banner a").click(function(e){
    e.preventDefault();
    goTo($(this), 1000);
  });
});

$(document).ready(function() {
	$(document).scroll(function() {
  	if($(document).scrollTop() > 150) {
    	$('.menusup').addClass('menufixed');
    }
    else {
    $('.menusup').removeClass('menufixed');
    }
  });
});

