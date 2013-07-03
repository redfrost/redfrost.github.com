// Hide content until the page is fully loaded
    $(document).ready(function() {
        $(window).load(function() {
          // When the page has loaded
          $("body").fadeTo("slow", 1);
        });
    });



// Scrolling
	$(document).ready(function() {
		$('.navbar .nav a').smoothScroll({offset: 0});
		$('.back-top').smoothScroll({offset: 0});
        $('[data-spy="scroll"]').scrollspy({ offset: 0 }); 
	});



// Carousel	Auto
    jQuery(document).ready(function() {
		$('#myCarousel.slide').carousel({
		    interval: 6000,
			    cycle: true
		    });
		});
	var $ = jQuery.noConflict();	
	
	
	
// Tooltip & Popover
    jQuery(document).ready(function () {
        $("[rel=popover]").popover();
        $("[rel=tooltip]").tooltip();
    });



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
        var embed ="<iframe width='100%' height='350' frameborder='0' scrolling='no'  marginheight='0' marginwidth='0'   src='https://maps.google.com/maps?&amp;q="+ encodeURIComponent( $(this).text() ) +"&amp;output=embed'></iframe>";
          $(this).html(embed);                               
       });
    });



// Dropdown Menu Fade    
    jQuery(document).ready(function(){
        $(".no-touch ul.nav li.dropdown").hover(
             function() { $('ul', this).fadeIn("fast");
            },
            function() { $('ul', this).fadeOut("fast");
        });
    });
    


// iPhone pull addressbar
/mobile/i.test(navigator.userAgent) && !window.location.hash && setTimeout(function () {
  window.scrollTo(0, 1);
}, 1000);



 