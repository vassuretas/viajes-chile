$(function () {

// transcision para fondo de nav
	$(window).scroll(function(){
         if ($(this).scrollTop() > 100) {
          $('.navscroll').addClass("black");
         } else {
          $(".navscroll").removeClass("black");
         }
      });


  // $('[data-toggle="tooltip"]').tooltip()


//   $("#enviarCorreo").click(function (){
//   alert("El correo fue enviado correctamente...");
//   });

//   $("#agregarFavoritos").click(function (){
//   alert("¡Felicidades! La receta se ha agregado a tus favoritos.");
//   });


//   $("h5").dblclick(function(){
//   	$(this).css("color", "red");
//   });


// var ocultar = $(".card").children().find("p");
// console.log( "llama a ocultar--->", ocultar);
// var textcard1 = ocultar.eq(0).hide();
// var textcard2 = ocultar.eq(1).hide();
// var textcard3 = ocultar.eq(2).hide();

// var cardtitle = $(".card").children().find("h4");
// console.log( "llama a cardtitle--->", cardtitle);
// var titlecard1 = cardtitle.eq(0);
// var titlecard2 = cardtitle.eq(1);
// var titlecard3 = cardtitle.eq(2);

// titlecard1.click(function(event){
// 	textcard1.toggle("fast");
// });

// titlecard2.click(function(event){
// 	textcard2.toggle("fast");
// });
// titlecard3.click(function(event){
// 	textcard3.toggle("fast");
// });



})