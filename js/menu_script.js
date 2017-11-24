// JavaScript Document
//Para que el menu despliegue/oculte
$(".menu").click(function(){
	$(this).children("ul").slideToggle();
})

//Para que el submenu despliegue/oculte
$(".submenu").click(function(){
	$(this).children("ul").slideToggle();
})

//Para que el padre no se esconda  
$("ul").click(function(p){
	p.stopPropagation(); //Para q
})
