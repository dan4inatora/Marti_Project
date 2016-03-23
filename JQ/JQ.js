$(document).ready(function(){
    	
    	$('.Login').click(function(){

    		$('.LoginForm').fadeIn(250);
    		$('.FullScreen').fadeIn(250);

		
    	});

$('.Register').click(function(){

    		$('.RegisterForm').fadeIn(250);
    		$('.FullScreen').fadeIn(250);

		
    	});
$('.FullScreen').click(function(){

	$('.RegisterForm').fadeOut(250);
	$('.LoginForm').fadeOut(250);
	$('.FullScreen').fadeOut(250);


	});
document.onkeydown = function(evt) {
    evt = evt || window.event;
    if (evt.keyCode == 27) {
    	
    	$('.RegisterForm').fadeOut(250);
	$('.LoginForm').fadeOut(250);
	$('.FullScreen').fadeOut(250);        
    }
};

$('.RegisterDiv img').click(function(){

 $('.RegisterForm').fadeOut(250);
 $('.LoginForm').fadeOut(250);
 $('.FullScreen').fadeOut(250);


 });
$('.LoginDiv img').click(function(){

 $('.RegisterForm').fadeOut(250);
 $('.LoginForm').fadeOut(250);
 $('.FullScreen').fadeOut(250);


 });


});

