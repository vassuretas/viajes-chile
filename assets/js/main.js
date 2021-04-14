$(function () {

// transcision para fondo de nav
	$(window).scroll(function(){
         if ($(this).scrollTop() > 200) {
          $('.navscroll').addClass("black");
         } else {
          $(".navscroll").removeClass("black");
         }
      });

// scrool smoth

		//  $("a").click(function(event){
		//  		if (this.hash !== ""){
		//  		 event.preventDefault();

		// 	var gato = this.hash;

		// 	$("html, body").animate({
		// 		scrollTop: $(gato).offset().top
		// 	}, 800, function(){
		// 		window.location.hash = gato;
		// 	});
		// }

		//  });

		$('[data-toggle="popover"]').popover()
  		$('[data-toggle="tooltip"]').tooltip()


// Animacion Botones quienes somos


var ocultar = $(".card-qs").children().find("p");
console.log( "llama a ocultar--->", ocultar);
var textcard1 = ocultar.eq(0).hide();
var textcard2 = ocultar.eq(1).hide();
var textcard3 = ocultar.eq(2).hide();

var cardtitle = $(".card-qs").children().find("i");
console.log( "llama a cardtitle--->", cardtitle);
var titlecard1 = cardtitle.eq(0);
var titlecard2 = cardtitle.eq(1);
var titlecard3 = cardtitle.eq(2);

titlecard1.click(function(event){
	textcard1.toggle("fast");
});

titlecard2.click(function(event){
	textcard2.toggle("fast");
});
titlecard3.click(function(event){
	textcard3.toggle("fast");
});


});