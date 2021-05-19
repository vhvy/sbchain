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

var $page=$("#cnc-index");
var $item=$page.find(".j-team-item");
function IsPC() {
    var userAgentInfo = navigator.userAgent;
    var Agents = ["Android", "iPhone",
        "SymbianOS", "Windows Phone",
        "iPad", "iPod"];
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }
    return flag;
}

var pageUtility={
    init:function () {
        this.bind();
    },
    bind:function () {
        //team pc :hover
        $item.hover(function () {
            var $this=$(this);
            // console.log("IsPC:",!isMobile.phone);
            if(!(isMobile.apple.phone || isMobile.android.phone || isMobile.seven_inch)){
                $this.find(".member-avatar").fadeToggle(200);
                // $this.find(".member-medal").fadeToggle(200);
                $this.find(".member-info").fadeToggle(200);
                $this.find(".j-member-detail").fadeToggle(200);
                $this.find(".j-member-detail .member-name").show();
            }



        });

        //mobel click
        $item.on("click",function (e) {
            e.preventDefault();
            var $this=$(this);
            // console.log("IsPhone:",isMobile.phone);
            if (isMobile.apple.phone || isMobile.android.phone || isMobile.seven_inch) {
                $this.find(".j-down-arrow-wrap").fadeToggle(0);
                $this.find(".j-member-detail").fadeToggle(200);
                $page.find(".j-member-detail .member-name").hide();
            }
        });
    }
};
pageUtility.init();


}
/*
     FILE ARCHIVED ON 08:00:20 Jan 12, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 07:32:57 Feb 22, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots.policy: 0.322
  captures_list: 399.455
  exclusion.robots: 0.338
  RedisCDXSource: 0.685
  PetaboxLoader3.resolve: 18.265
  esindex: 0.014
  CDXLines.iter: 23.115 (3)
  LoadShardBlock: 371.095 (3)
  PetaboxLoader3.datanode: 67.35 (4)
  load_resource: 47.522
*/