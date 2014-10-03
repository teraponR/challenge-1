$(window).load(function(){
	var pageWrap = document.getElementById( 'pagewrap' ),
	pages = [].slice.call( pageWrap.querySelectorAll( '.section-page' )),
	currentPage = 0,
	loader = new SVGLoader( document.getElementById('loader'), {speedIn : 400, easingIn : mina.easeinout });
	//Set Cookie
    if( $.cookie('firstLoad') == 'unloaded' || $.cookie('firstLoad') == 'null' || $.cookie('firstLoad') == null ) {
        var time_exp = 1;
        $.cookie('firstLoad','loaded',{ expires: time_exp });
		loader.show();
		// after some time hide loader
		setTimeout( function() {
			loader.hide();
			classie.removeClass( pages[currentPage], 'show' );
			// update..
			currentPage = currentPage ? 0 : 1;
			classie.addClass( pages[currentPage], 'show' );

		}, 3600 );						
    }else{
		loader.show();
		setTimeout( function() {
			loader.hide();
			classie.removeClass( pages[currentPage], 'show' );
			// update..
			currentPage = currentPage ? 0 : 1;
			classie.addClass( pages[currentPage], 'show' );

		}, 900 );				        		      	
    }
}); 