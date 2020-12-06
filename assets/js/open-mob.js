$(".open-mob").click(function(){
    $(".mob").toggleClass("display-block");
    $(".open-mob").toggleClass("display-block text-right");
    $(".menusup ul").toggleClass("menumob");
    $(".infossup").toggleClass("invi")
    $(".open-mob i").toggleClass("fal fa-times-hexagon");
});
var scre = $("body").width();
if (scre<852){
    $(".mob").click(function(){
        $(".open-mob").trigger("click");
    });
}
