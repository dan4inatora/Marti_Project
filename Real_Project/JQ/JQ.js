$(document).ready(function(){
    	
    	$('.Login').click(function(){

    		$('.LoginForm').css('display', 'block');
    		$('.FullScreen').css('display', 'block');

		
    	});

$('.Register').click(function(){

    		$('.RegisterForm').css('display', 'block');
    		$('.FullScreen').css('display', 'block');

		
    	});
$('.FullScreen').click(function(){

	$('.RegisterForm').css('display', 'none');
	$('.LoginForm').css('display', 'none');
	$('.FullScreen').css('display', 'none');


	});
document.onkeydown = function(evt) {
    evt = evt || window.event;
    if (evt.keyCode == 27) {
    	
    	$('.RegisterForm').css('display', 'none');
	$('.LoginForm').css('display', 'none');
	$('.FullScreen').css('display', 'none');
        
    }
};


});