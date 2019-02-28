"use strict";

// Make sure we use an empty jQuery variable
var $jq = jQuery.noConflict(); // Get the header

var navbar = document.getElementById('site-navigation'); // Get the offset position of the navbar

var sticky = navbar.offsetTop; // Current hash

var currentHash = ''; // When the user scrolls the page, execute myFunction

window.onscroll = function () {
  myFunction();
}; // console.log( 'test' );


function myFunction() {
  // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
  if (window.pageYOffset > sticky) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }

  $jq('.page').each(function () {
    var top = window.pageYOffset;
    var distance = top - $jq(this).offset().top;
    var hash = $jq(this).attr('id'); // 30 is an arbitrary padding choice,
    // if you want a precise check then use distance===0

    if (50 > distance && -50 < distance && currentHash != hash) {
      window.location.hash = hash;
      currentHash = hash;
    }

    $jq('.menu a').each(function () {
      if (window.location == $jq(this).href) {
        console.log($jq(this));
      }
    });
    $jq('.menu a').each(function () {
      var menuitem = $jq(this).parent();
      var link = $jq(this).attr('href');
      console.log(link);
      console.log(window.location.hash);

      if (window.location.hash == link) {
        console.log('success at', link);
        menuitem.addClass('active');
      } else {
        menuitem.removeClass('active');
      }
    });
  });
} // add active class on hover


$jq('.menu a').on('mouseover', function () {
  $jq(this).addClass('active');
}).on('mouseout', function () {
  $jq(this).removeClass('active');
});
$jq(document).ready(function () {
  var url = window.location;
  var element = $jq('.menu a').filter(function () {
    return this.href == url || 0 == url.href.indexOf(this.href);
  }).parent().addClass('active');

  if (element.is('li')) {
    element.addClass('active').parent().parent('li').addClass('active');
  }
});