var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

var s = jQuery.noConflict();

// s(function() {	
// 	s('a[href*=#]:not([href=#]):not([href=#inline])').click(function() {
// 		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
// 	  		var target = s(this.hash);
// 	  		target = target.length ? target : s('[name=' + this.hash.slice(1) +']');
// 	  		if (target.length) {
// 	    		s('html,body').animate({
// 	      			scrollTop: target.offset().top		
// 	    		}, 500);
// 	    		return false;
// 	  		}
// 		}
// 	});
// });

var h = jQuery.noConflict();

//首屏下载
h(document).ready(function() {
	if (Modernizr.touch) { 
	} else { 
		h('.systems').hover(
			function () {
	      		h('.download').addClass('download-pressed');
	        	h('.systems-options').addClass('systems-options-show');
			}, 
			function () {
		   		h('.download').removeClass('download-pressed');
		    	h('.systems-options').removeClass('systems-options-show');
			}
		)
	}
	
});

var d = jQuery.noConflict();

d(document).ready(function(){
	
	d('ul.tabs li').click(function(){
		var tab_id = d(this).attr('data-tab');

		d('ul.tabs li').removeClass('current');
		d('.tab-content').removeClass('current');

		d(this).addClass('current');
		d("#"+tab_id).addClass('current');
	})

})

}
/*
     FILE ARCHIVED ON 08:00:21 Jan 12, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 07:27:49 Feb 22, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.424
  captures_list: 84.488
  LoadShardBlock: 54.448 (3)
  RedisCDXSource: 0.788
  PetaboxLoader3.datanode: 56.896 (4)
  esindex: 0.015
  PetaboxLoader3.resolve: 38.708
  exclusion.robots.policy: 0.407
  CDXLines.iter: 24.383 (3)
  load_resource: 51.82
*/