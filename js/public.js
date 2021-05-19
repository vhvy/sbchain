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

var $header=$("#header");

//处理语言
var headerTips=new Follow({
    parent      : '#header-language-type',
    direction   :  "bottom",
    alignment   : "right"
});

var langVal;

var pageUtility={
    init:function () {
        this.bind();
    },
    bind:function () {
        var self=this;
        //顶部语言切换
        $header.on("click",".j-lang-link",function (e) {
            e.preventDefault();
            langVal=$(this).data("lang");
            self.sendLang();
        });

        $header.on("click",".j-phone-language-trigger",function (e) {
            e.preventDefault();
            langVal=$(this).data("lang");
            self.sendLang();
        });
    },
    sendLang:function () {
        $.ajax({
            url: "/api_changelanguage",
            type: 'POST',
            dataType: "json",
            data: {lang: langVal},
            success: function (data) {
                if (data.success) {
                    window.location.reload();
                } else {
                    // alert("请刷新重试 / Please refresh to try again")
                }
            },
            error: function () {
                // alert("请刷新重试 / Please refresh to try again")
            }
        });
    }
};
pageUtility.init();

}
/*
     FILE ARCHIVED ON 08:00:58 Jan 12, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 07:32:58 Feb 22, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 1086.904
  exclusion.robots: 0.23
  exclusion.robots.policy: 0.219
  RedisCDXSource: 1.935
  esindex: 0.01
  LoadShardBlock: 1055.351 (3)
  PetaboxLoader3.datanode: 1062.214 (4)
  CDXLines.iter: 25.608 (3)
  load_resource: 42.636
  PetaboxLoader3.resolve: 18.559
*/