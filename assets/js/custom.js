
// Smooth Scroll
    $(document).ready(function() {
        $('.nav a').smoothScroll({offset: -50});
	});

    // To Top
    $(document).ready(function() {
        $('.back_top a').smoothScroll({offset: 0});
    });


// Scrollspy offset
    jQuery(document).ready(function () {
        $('[data-spy="scroll"]').scrollspy({ offset: 100 });
    });


// Parallax 
    jQuery(document).ready(function () {
        var fadeStart=0 // 100px scroll or less will equiv to 1 opacity
            ,fadeUntil=360 // 200px scroll or more will equiv to 0 opacity
            ,fading = $('.scroll-fade');
        
        $(window).bind('scroll', function(){
            var offset = $(document).scrollTop()
                ,opacity=0;
            
            if( offset<=fadeStart ){
                opacity=1;
            
            }else if ( offset<=fadeUntil ){
                opacity=1-offset/fadeUntil;
            }
            
            fading.css('opacity',opacity);
        });
    });

    

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
	
	   setTimeout(function(){

        $('.progress .bar').each(function() {
            var me = $(this);
            var perc = me.attr("data-percentage");

            //TODO: left and right text handling

            var current_perc = 0;

            var progress = setInterval(function() {
                if (current_perc>=perc) {
                    clearInterval(progress);
                } else {
                    current_perc +=1;
                    me.css('width', (current_perc)+'%');
                }

                me.text((current_perc)+'%');

            }, 50);

        });

    },300);

		
// Preloader - Hide content until the page is fully loaded
    $(document).ready(function() {
        $(window).load(function() {
          // When the page has loaded
          $("#master-wrap").fadeTo("slow", 1);
		  $("#preloader").fadeOut(); // will first fade out the loading animation
	    });
    });


    // Hide scroll-fading back image until page is fully loaded -> Causing FF active menu jumpy bug
    //$(document).ready(function() {
    //    $(window).load(function() {
    //      $(".scroll-fade-back").fadeIn(1000);
    //    });
    //});
		
 