$(".ocmenu").click(function(){
    $('.btnoc').toggleClass('width100');
    $('span').toggleClass('hidden');
    if($(".btnoc").hasClass("fas fa-angle-left")){
        $(".btnoc").removeClass("fas fa-angle-left");
        $('.btnoc').addClass("fas fa-angle-right");
        $('.titlelateral h1').text('RG');
        $('.menulateral').animate({width:"5%"},1000);
        $('.meio').animate({marginLeft:"5%",width:"95%"},1000);
    }else{
        $(".btnoc").removeClass("fas fa-angle-right");
        $('.btnoc').addClass("fas fa-angle-left");
        $('.titlelateral h1').text('Restaurante Gostozin');
        $('.menulateral').animate({width:"25%"},1000)
        $('.meio').animate({marginLeft:"25%",width:"75%"},1000);
    }
    
});
