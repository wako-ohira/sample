$(document).ready(function() {
  $('.drawer').drawer();
});


var pageTopBtn = function(){
	var $pageTopBtn = $('#page-top');
	$(window).on('scroll', function(){
		$scrollPosition = $(window).scrollTop();
		if($scrollPosition > 80){
			$pageTopBtn.fadeIn('0.3s');
		}else{
			$pageTopBtn.fadeOut('0.3s');
		}
	});
}();

$( '.clear_img' ).click(
	function()
	{
		$( 'html,body' ).animate( {scrollTop:0} , '0.5' ) ;
	}
) ;

