// Make sure we use an empty jQuery variable
var $jq = jQuery.noConflict();

// Get the header
var navbar = document.getElementById( 'site-navigation' );

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Current hash
var currentHash = '';

// When the user scrolls the page, execute myFunction
window.onscroll = function() {
	myFunction();
};

// console.log( 'test' );

function myFunction() {

	// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position

	if ( window.pageYOffset > sticky ) {
		navbar.classList.add( 'sticky' );
	} else {
		navbar.classList.remove( 'sticky' );
	}

	$jq( '.page' ).each( function() {
		var top = window.pageYOffset;
		var distance = top - $jq( this ).offset().top;
		var hash = $jq( this ).attr( 'id' );

		// 30 is an arbitrary padding choice,
		// if you want a precise check then use distance===0
		if ( -15 > distance && -15 < distance && currentHash != hash ) {
			window.location.hash = ( hash );
			currentHash = hash;
		}
		$jq( '.menu a' ).each( function() {
			var menuitem = $jq( this ).parent();
			var link = $jq( this ).attr( 'href' );
			if ( window.location.hash == link ) {
				menuitem.addClass( 'active' );
			} else {
				menuitem.removeClass( 'active' );
			}
		});
	});

}


// add active class on hover
$jq( '.menu a' ).on( 'mouseover', function() {
	$jq( this ).parent().addClass( 'active' );
}).on( 'mouseout', function() {
	$jq( this ).parent().removeClass( 'active' );
});
