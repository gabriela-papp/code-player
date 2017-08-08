
$(".toggleButton").hover(function(){
	$(this).css("background-color", "grey");
	
}, function() {
	$(this).css("background-color", "#EEEEEE");
});

$(".panel").height($(window).height()-$("#header").height()- 15);
$(".panel").width(($(window).width()/2)-10);