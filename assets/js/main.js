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


$(document).ready(function(){
  $(".filtro").click(function(){
     const value = $(this).attr('data-filter');
     if(value == "todos"){
       $('.list-card').show('1000')
     }else{
       $('.list-card').not('.'+value).hide('1000');
       $('.list-card').filter('.'+value).show('1000')
     }
  });
});

$('.filtro').click(function(){
  $(this).addClass("active").siblings().removeClass('active');

});
