// iPhone pull addressbar
/mobile/i.test(navigator.userAgent) && !window.location.hash && setTimeout(function () {
  window.scrollTo(0, 1);
}, 1000);



// Smooth Scroll
		    $(document).ready(function() {
		    
		      $('.nav a').smoothScroll({offset: -73});
		    
		    });

    // To Top
		    $(document).ready(function() {
		    
		      $('.back_top a').smoothScroll({offset: 0});
		    
		    });



// Scrollspy offset
$('[data-spy="scroll"]').scrollspy({ offset: 100 });



// Tooltip
	  jQuery(document).ready(function () {
	    $("[rel=tooltip]").tooltip();
	  });

	
	
// Popover
	  jQuery(document).ready(function () {
	    $("[rel=popover]").popover();
	  });


// Carousel	Auto
		jQuery(document).ready(function() {
			 $('#myCarousel.slide').carousel({
				   interval: 6000,
					  cycle: true
			 });
		});
		var $ = jQuery.noConflict();
		


//Convert Address tags into a map link
	jQuery(document).ready(function () {
        $('address').each(function () {
            var link = "<a href='http://maps.apple.com/?q=" + encodeURIComponent( $(this).text() ) + "' target='_blank'>" + $(this).text() + "</a>";
            $(this).html(link);
        });
    });



//Convert Address into an embedded map
    jQuery(document).ready(function(){
      $(".mapaddress").each(function(){                        
        var embed ="<iframe width='425' height='350' frameborder='0' scrolling='no'  marginheight='0' marginwidth='0'   src='https://maps.google.com/maps?&amp;q="+ encodeURIComponent( $(this).text() ) +"&amp;output=embed'></iframe>";
          $(this).html(embed);                               
       });
    });

		
// Add your own		
		
		
		
		
		