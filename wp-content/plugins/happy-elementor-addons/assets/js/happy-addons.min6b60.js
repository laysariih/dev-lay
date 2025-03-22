function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ownKeys(t,e){var n,i=Object.keys(t);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(t),e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),i.push.apply(i,n)),i}function _objectSpread(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?ownKeys(Object(n),!0).forEach(function(e){_defineProperty(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function _defineProperty(e,t,n){return(t=_toPropertyKey(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _toPropertyKey(e){e=_toPrimitive(e,"string");return"symbol"==_typeof(e)?e:e+""}function _toPrimitive(e,t){if("object"!=_typeof(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0===n)return("string"===t?String:Number)(e);n=n.call(e,t||"default");if("object"!=_typeof(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}function haObserveTarget(e,n){new IntersectionObserver(function(e,t){e.forEach(function(e){e.isIntersecting&&n(e)})},2<arguments.length&&void 0!==arguments[2]?arguments[2]:{}).observe(e)}(c=>{var d=c(window);function h(i,a,o){var r;return function(){var e=this,t=arguments,n=o&&!r;clearTimeout(r),r=setTimeout(function(){r=null,o||i.apply(e,t)},a),n&&i.apply(e,t)}}function u(e,t){var e=e.find(".hajs-filter"),n=e.data("default-filter");e.length&&(e.on("click.onFilterNav","button",function(e){e.stopPropagation();e=c(this);e.addClass("ha-filter__item--active").siblings().removeClass("ha-filter__item--active"),t(e.data("filter"))}),e.find('[data-filter="'+n+'"]').click())}function g(e){var t,n,i;e.$element.on("click",e.selector,function(e){e.preventDefault()}),c.fn.magnificPopup&&(e.isEnabled?(t=c(window).width(),n=elementorFrontendConfig.breakpoints.md,i=elementorFrontendConfig.breakpoints.lg,e.$element.find(e.selector).magnificPopup({key:e.key,type:"image",image:{titleSrc:function(e){return e.el.attr("title")?e.el.attr("title"):e.el.find("img").attr("alt")}},gallery:{enabled:!0,preload:[1,2]},zoom:{enabled:!0,duration:300,easing:"ease-in-out",opener:function(e){return e.is("img")?e:e.find("img")}},disableOn:function(){return!(e.disableOnMobile&&t<n||e.disableOnTablet&&n<=t&&t<i)}})):c.magnificPopup.close())}function f(e){var t=e.find(".hajs-image-comparison"),n=t.getHappySettings();n[{on_hover:"move_slider_on_hover",on_swipe:"move_with_handle_only",on_click:"click_to_move"}[n.move_handle||"on_swipe"]]=!0,delete n.move_handle,t.imagesLoaded().done(function(){t.twentytwenty(n);var e=setTimeout(function(){d.trigger("resize.twentytwenty"),clearTimeout(e)},400)})}c.fn.getHappySettings=function(){return this.data("happy-settings")},d.on("elementor/frontend/init",function(){function e(e){e.hasClass("elementor-element-edit-mode")&&e.addClass("ha-has-bg-overlay")}var t=elementorModules.frontend.handlers.Base,n=t.extend({bindEvents:function(){this.removeArrows(),this.run()},removeArrows:function(){var e=this;this.elements.$container.on("init",function(){e.elements.$container.siblings().hide()})},getDefaultSettings:function(){return{autoplay:!0,arrows:!1,checkVisible:!1,container:".hajs-slick",dots:!1,infinite:!0,rows:0,slidesToShow:1,prevArrow:c("<div />").append(this.findElement(".slick-prev").clone().show()).html(),nextArrow:c("<div />").append(this.findElement(".slick-next").clone().show()).html()}},getDefaultElements:function(){return{$container:this.findElement(this.getSettings("container"))}},onElementChange:h(function(){this.elements.$container.slick("unslick"),this.run()},200),getSlickSettings:function(){var e=1==c('html[dir="rtl"]').length||c("body").hasClass("rtl");"yes"==this.getElementSettings("vertical")&&(e=!1);var t={fade:this.$element.hasClass("ha-slider")?"fade"===this.getElementSettings("slides_transition"):"fade"===this.getElementSettings("slides_transition")&&1===parseInt(this.getElementSettings("slides_to_show")),infinite:!!this.getElementSettings("loop"),autoplay:!!this.getElementSettings("autoplay"),autoplaySpeed:this.getElementSettings("autoplay_speed"),speed:this.getElementSettings("animation_speed"),centerMode:!!this.getElementSettings("center"),vertical:!!this.getElementSettings("vertical"),rtl:e};switch(this.getElementSettings("navigation")){case"arrow":t.arrows=!0;break;case"dots":t.dots=!0;break;case"both":t.arrows=!0,t.dots=!0}e=!!this.getElementSettings("slides_to_scroll");return t.slidesToShow=parseInt(this.getElementSettings("slides_to_show"))||1,t.slidesToScroll=e&&parseInt(this.getElementSettings("slides_to_show"))||1,t.responsive=[{breakpoint:elementorFrontend.config.breakpoints.lg,settings:{slidesToShow:parseInt(this.getElementSettings("slides_to_show_tablet"))||t.slidesToShow,slidesToScroll:e?parseInt(this.getElementSettings("slides_to_show_tablet"))||t.slidesToShow:1}},{breakpoint:elementorFrontend.config.breakpoints.md,settings:{slidesToShow:parseInt(this.getElementSettings("slides_to_show_mobile"))||parseInt(this.getElementSettings("slides_to_show_tablet"))||t.slidesToShow,slidesToScroll:e?parseInt(this.getElementSettings("slides_to_show_mobile"))||parseInt(this.getElementSettings("slides_to_show_tablet"))||t.slidesToShow:1}}],c.extend({},this.getSettings(),t)},run:function(){this.elements.$container.slick(this.getSlickSettings())}}),i=t.extend({onInit:function(){t.prototype.onInit.apply(this,arguments),this.run(),this.runFilter(),d.on("resize",h(this.run.bind(this),100))},getLayoutMode:function(){var e=this.getElementSettings("layout");return"even"===e?"masonry":e},getDefaultSettings:function(){return{itemSelector:".ha-image-grid__item",percentPosition:!0,layoutMode:this.getLayoutMode()}},getDefaultElements:function(){return{$container:this.findElement(".hajs-isotope")}},getLightBoxSettings:function(){return{key:"imagegrid",$element:this.$element,selector:".ha-js-lightbox",isEnabled:!!this.getElementSettings("enable_popup"),disableOnTablet:!!this.getElementSettings("disable_lightbox_on_tablet"),disableOnMobile:!!this.getElementSettings("disable_lightbox_on_mobile")}},runFilter:function(){var t=this,n=this.getLightBoxSettings();u(this.$element,function(e){t.elements.$container.isotope({filter:e}),"*"!==e&&(n.selector=e),g(n)})},onElementChange:function(e){-1!==["layout","image_height","columns","image_margin","enable_popup"].indexOf(e)&&this.run()},run:function(){var e=this;e.elements.$container.isotope(e.getDefaultSettings()).imagesLoaded().progress(function(){e.elements.$container.isotope("layout")}),g(e.getLightBoxSettings())}}),a=t.extend({onInit:function(){t.prototype.onInit.apply(this,arguments),this.run(),this.runFilter(),d.on("resize",h(this.run.bind(this),100))},getDefaultSettings:function(){var e={rowHeight:+this.getElementSettings("row_height.size")||150,lastRow:this.getElementSettings("last_row"),margins:+this.getElementSettings("margins.size"),captions:!!this.getElementSettings("show_caption")},t={};return"yes"==this.getElementSettings("max_row_height")&&(t={maxRowHeight:+this.getElementSettings("row_height.size")||150}),c.extend(e,t)},getDefaultElements:function(){return{$container:this.findElement(".hajs-justified-grid")}},getLightBoxSettings:function(){return{key:"justifiedgallery",$element:this.$element,selector:".ha-js-lightbox",isEnabled:!!this.getElementSettings("enable_popup"),disableOnTablet:!!this.getElementSettings("disable_lightbox_on_tablet"),disableOnMobile:!!this.getElementSettings("disable_lightbox_on_mobile")}},runFilter:function(){var t=this,n=this.getLightBoxSettings(),i={lastRow:this.getElementSettings("last_row")};u(t.$element,function(e){"*"!==e&&(i.lastRow="nojustify",n.selector=e),i.filter=e,t.elements.$container.justifiedGallery(i),g(n)})},onElementChange:function(e){-1!==["row_height","max_row_height","last_row","margins","show_caption","enable_popup"].indexOf(e)&&this.run()},run:function(){this.elements.$container.justifiedGallery(this.getDefaultSettings()),g(this.getLightBoxSettings())}}),o=t.extend({onInit:function(){t.prototype.onInit.apply(this,arguments),this.wrapper=this.$element.find(".ha-news-ticker-wrapper"),this.run()},onElementChange:function(e){"item_space"!==e&&"title_typography_font_size"!==e||this.run()},run:function(){var e,t,n,i,a,o,r,s;0!=this.wrapper.length&&(i=this.wrapper.innerHeight(),s=this.wrapper.innerWidth(),t=(e=this.wrapper.find(".ha-news-ticker-container")).find(".ha-news-ticker-item"),i="scroll"+(n=this.wrapper.data("scroll-direction"))+parseInt(i)+parseInt(s),a=this.wrapper.data("duration"),o="normal",r=10,s={transform:"translateX(0"+s+"px)"},"right"===n&&(o="reverse"),t.each(function(){r+=c(this).outerWidth(!0)}),e.css({width:r,display:"flex"}),c.keyframe.define([{name:i,"0%":s,"100%":{transform:"translateX(-101%)"}}]),e.playKeyframe({name:i,duration:a.toString()+"ms",timingFunction:"linear",delay:"0s",iterationCount:"infinite",direction:o,fillMode:"none",complete:function(){}}))}}),r=t.extend({onInit:function(){t.prototype.onInit.apply(this,arguments),this.wrapper=this.$element.find(".ha-post-tab"),this.run()},run:function(){var r=this.wrapper.find(".ha-post-tab-filter").find("li"),e=this.wrapper.data("event"),s=this.wrapper.data("query-args");r.on(e,h(function(e){e.preventDefault();var e=c(this),n=e.data("term"),t=e.closest(".ha-post-tab").find(".ha-post-tab-content"),i=t.find(".ha-post-tab-loading"),a=t.find(".ha-post-tab-item-wrapper"),o=!1;0===i.length&&(r.removeClass("active"),a.removeClass("active"),e.addClass("active"),a.each(function(){var e=c(this),t=e.data("term");n===t&&(e.addClass("active"),o=!0)}),!1===o)&&c.ajax({url:HappyLocalize.ajax_url,type:"POST",data:{action:"ha_post_tab_action",security:HappyLocalize.nonce,post_tab_query:s,term_id:n},beforeSend:function(){t.append('<span class="ha-post-tab-loading"><i class="eicon-spinner eicon-animation-spin"></i></span>')},success:function(e){t.find(".ha-post-tab-loading").remove(),t.append(e)},error:function(e){}})},200))}}),i=(elementorFrontend.hooks.addAction("frontend/element_ready/ha-slider.default",function(e){elementorFrontend.elementsHandler.addHandler(n,{$element:e})}),elementorFrontend.hooks.addAction("frontend/element_ready/ha-carousel.default",function(e){elementorFrontend.elementsHandler.addHandler(n,{$element:e})}),elementorFrontend.hooks.addAction("frontend/element_ready/ha-horizontal-timeline.default",function(e){elementorFrontend.elementsHandler.addHandler(n,{$element:e,autoplay:!1,container:".ha-horizontal-timeline-wrapper",navigation:"arrow",arrows:!0});e=e.find(".ha-horizontal-timeline-image");void 0!==e.data("mfp-src")&&e.magnificPopup({type:"image",gallery:{enabled:!0}})}),c("body").on("click.onWrapperLink","[data-ha-element-link]",function(){var e,t,n=c(this),i=n.data("ha-element-link"),n=n.data("id"),a=document.createElement("a");a.id="happy-addons-wrapper-link-"+n,a.href=i.url,a.target=i.is_external?"_blank":"_self",a.rel=i.nofollow?"nofollow noreferer":"",a.style.display="none",document.body.appendChild(a),(e=document.getElementById(a.id)).click(),t=setTimeout(function(){document.body.removeChild(e),clearTimeout(t)})}),c.each({"ha-image-compare.default":f,"ha-number.default":function(t){haObserveTarget(t[0],function(){var e=t.find(".ha-number-text");e.numerator(e.data("animation"))})},"ha-skills.default":function(e){haObserveTarget(e[0],function(){e.find(".ha-skill-level").each(function(){var e=c(this),t=e.find(".ha-skill-level-text"),n=e.data("level");e.animate({width:n+"%"},500),t.numerator({toValue:n+"%",duration:1300,onStep:function(){t.append("%")}})})})},"ha-fun-factor.default":function(t){haObserveTarget(t[0],function(){var e=t.find(".ha-fun-factor__content-number");e.numerator(e.data("animation"))})},"ha-bar-chart.default":function(i){haObserveTarget(i[0],function(){var e=i.find(".ha-bar-chart-container"),t=i.find("#ha-bar-chart"),n=e.data("settings");e.length&&new Chart(t,n)})},"ha-twitter-feed.default":function(a){var e=a.find(".ha-twitter-load-more"),o=a.find(".ha-tweet-items");e.on("click",function(e){e.preventDefault();var t=c(this),e=t.data("settings"),n=t.data("total"),i=a.find(".ha-tweet-item").length;c.ajax({url:HappyLocalize.ajax_url,type:"POST",data:{action:"ha_twitter_feed_action",security:HappyLocalize.nonce,query_settings:e,loaded_item:i},success:function(e){i<n?c(e).appendTo(o):(t.text("All Loaded").addClass("loaded"),setTimeout(function(){t.css({display:"none"})},800))},error:function(e){}})})},"ha-threesixty-rotation.default":function(i){var e,a=i.find(".ha-threesixty-rotation-inner"),t=a.data("selector"),n=a.data("autoplay"),o=i.find(".ha-threesixty-rotation-magnify"),r=i.find(".ha-threesixty-rotation-360img"),s=o.data("zoom"),l=i.find(".ha-threesixty-rotation-play"),d=circlr(t,{play:!0});"on"===n?((e=i.find(".ha-threesixty-rotation-autoplay")).on("click",function(e){e.preventDefault(),d.play(),r.remove()}),setTimeout(function(){e.trigger("click"),e.remove()},1e3)):l.on("click",function(e){e.preventDefault();e=c(this).find("i");e.hasClass("hm-play-button")?(e.removeClass("hm-play-button"),e.addClass("hm-stop"),d.play()):(e.removeClass("hm-stop"),e.addClass("hm-play-button"),d.stop()),r.remove()}),o.on("click",function(e){i.find("img").each(function(){-1!==c(this).attr("style").indexOf("block")&&(HappySimplaMagnify(c(this)[0],s),o.css("display","none"),r.remove())})}),c(document).on("click",function(e){var e=c(e.target),t=i.find(".ha-img-magnifier-glass"),n=o.find("i");t.length&&e[0]!==n[0]&&(t.remove(),o.removeAttr("style")),e[0]===a[0]&&r.remove()}),a.on("mouseup mousedown touchstart touchend",function(e){r.remove()})},"ha-data-table.default":function(e){var n=e.find(".ha-table__head-column-cell");e.find(".ha-table__body-row").each(function(e,t){c(t).find(".ha-table__body-row-cell").each(function(e,t){c(t).prepend('<div class="ha-table__head-column-cell">'+n.eq(e).html()+"</div>")})})},section:e,column:e,"ha-event-calendar.default":function(b){var e=b.find(".ha-ec"),S=b.find(".ha-ec-popup-wrapper"),t=b.find(".ha-ec-popup-close"),n=e.data("initialview"),i=e.data("firstday"),a=e.data("locale"),x=e.data("show-popup"),k=e.data("allday-text"),C=e.data("time-format"),o=window["HaECjson"+b.data("id")];void 0!==o&&(new FullCalendar.Calendar(e[0],{stickyHeaderDates:!1,locale:a,headerToolbar:{left:"prev,next today",center:"title",right:"dayGridMonth,timeGridWeek,timeGridDay,listMonth"},initialView:n,firstDay:i,eventTimeFormat:{hour:"numeric",minute:"2-digit",meridiem:"short"},events:o,height:"auto",eventClick:function(e){if("yes"==x){var t=function(e){return new Date(e)},n=function(e){var t,n,i=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"g:i a";return t=(e=e).getHours(),n=e.getMinutes(),(e=new Date).setHours(t),e.setMinutes(n),t={},i.includes("H")?(t.hour="2-digit",t.hour12=!1):(t.hour="numeric",t.hour12=!0,(i.includes("a")||i.includes("A"))&&(t.hour="numeric")),t.minute="2-digit",n=new Intl.DateTimeFormat("en-US",t).format(e),n=i.includes("a")?n.toLowerCase():n},i=(e.jsEvent.preventDefault(),e.view.calendar.currentData.currentDate.toString(),e.event.allDay),a=e.event.title,o=e.event.startStr,r=e.event.endStr,s=e.event.extendedProps.guest,l=e.event.extendedProps.location,d=e.event.extendedProps.description,c=e.event.url,h=e.event.extendedProps.image,u=S.find(".ha-ec-event-title"),g=S.find(".ha-ec-event-time-wrap"),f=S.find(".ha-ec-event-guest-wrap"),p=S.find(".ha-ec-event-location-wrap"),m=S.find(".ha-ec-popup-desc"),y=S.find(".ha-ec-popup-readmore-link"),v=S.find(".ha-ec-popup-image");v.css("display","none"),u.css("display","none"),g.css("display","none"),f.css("display","none"),p.css("display","none"),m.css("display","none"),y.css("display","none"),S.addClass("ha-ec-popup-ready"),h&&(v.removeAttr("style"),v.find("img").attr("src",h),v.find("img").attr("alt",a)),a&&(u.removeAttr("style"),u.text(a)),s&&(f.removeAttr("style"),f.find("span.ha-ec-event-guest").text(s)),l&&(p.removeAttr("style"),p.find("span.ha-ec-event-location").text(l)),d&&(m.removeAttr("style"),m.html(d)),!0!==i?(g.removeAttr("style"),o=Date.parse(t(o)),r=Date.parse(t(r)),h=n(t(o),C),v="Invalid Data",o<r&&(v=n(t(r),C)),g.find("span.ha-ec-event-time").text(h+" - "+v)):(g.removeAttr("style"),g.find("span.ha-ec-event-time").text(k)),c&&(y.removeAttr("style"),y.attr("href",c),"on"===e.event.extendedProps.external&&y.attr("target","_blank"),"on"===e.event.extendedProps.nofollow)&&y.attr("rel","nofollow")}else{var w,_;if(e.event.url&&e.event.extendedProps.external)return e.jsEvent.preventDefault(),u=b.data("id"),(a=document.createElement("a")).id="happy-even-calender-link-"+u,a.href=e.event.url,a.target=e.event.extendedProps.external?"_blank":"_self",a.rel=e.event.extendedProps.nofollow?"nofollow noreferer":"",a.style.display="none",document.body.appendChild(a),(w=document.getElementById(a.id)).click(),_=setTimeout(function(){document.body.removeChild(w),clearTimeout(_)}),!1}},dateClick:function(e){itemDate=e.date.toUTCString()}}).render(),b.find(".ha-ec-popup-wrapper").on("click",function(e){e.stopPropagation(),e.target!==e.currentTarget&&e.target!=t[0]&&e.target!=t.find(".eicon-editor-close")[0]||S.addClass("ha-ec-popup-removing").removeClass("ha-ec-popup-ready")}))},"ha-mailchimp.default":function(e){var n=e.find(".ha-mailchimp-form"),i=e.find(".ha-mc-response-message"),a=n.data("success-message");n.on("submit",function(e){e.preventDefault();e={action:"ha_mailchimp_ajax",security:HappyLocalize.nonce,subscriber_info:n.serialize(),list_id:n.data("list-id"),post_id:n.parent().data("post-id"),widget_id:n.parent().data("widget-id")};c.ajax({type:"post",url:HappyLocalize.ajax_url,data:e,success:function(e){n.trigger("reset"),e.status?(i.removeClass("error"),i.addClass("success"),i.text(a)):(i.addClass("error"),i.removeClass("success"),i.text(e.msg));var t=setTimeout(function(){i.removeClass("error"),i.removeClass("success"),clearTimeout(t)},5e3)},error:function(e){}})})},"ha-image-accordion.default":function(e){var n;e.hasClass("ha-image-accordion-click")&&(n=e.find(".ha-ia-item")).each(function(e,t){c(this).on("click",function(e){c(this).hasClass("active")||(n.removeClass("active"),c(this).addClass("active"))})})},"ha-content-switcher.default":function(e){var n,i,t,a,o,r,s,l=e.find(".ha-content-switcher-wrapper");"button"==l.data("design-type")?(n=l.find(".ha-cs-button"),i=l.find(".ha-cs-content-section"),n.each(function(e,t){c(this).on("click",function(e){e.preventDefault(),c(this).hasClass("active")||(n.removeClass("active"),c(this).addClass("active"),i.removeClass("active"),e=c(this).data("content-id"),l.find("#"+e).addClass("active"))})})):(e=l.find(".ha-cs-switch.ha-input-label"),t=l.find("input.ha-cs-toggle-switch"),a=l.find(".ha-cs-switch.primary"),o=l.find(".ha-cs-switch.secondary"),r=l.find(".ha-cs-content-section.primary"),s=l.find(".ha-cs-content-section.secondary"),e.on("click",function(e){(t.is(":checked")?(a.removeClass("active"),r.removeClass("active"),o.addClass("active"),s):(o.removeClass("active"),s.removeClass("active"),a.addClass("active"),r)).addClass("active")}))},"ha-member.default":function(e){var t,n=e.find(".ha-btn"),i=e.find(".ha-member-lightbox");0<i.length&&(t=i.find(".ha-member-lightbox-close"),n.on("click",function(){i.addClass("ha-member-lightbox-show")}),i.on("click",function(e){!i.hasClass("ha-member-lightbox-show")||e.target!=i[0]&&e.target!=t[0]&&e.target!=t.find("i.eicon-editor-close")[0]||i.removeClass("ha-member-lightbox-show")}))},"ha-creative-button.default":function(e){var n=e.find(".ha-creative-btn-wrap"),t=n.data("magnetic"),i=n.find("a.ha-creative-btn"),t=("yes"==t&&(n.on("mousemove",function(e){var t=e.pageX-(n.offset().left+n.outerWidth()/2),e=e.pageY-(n.offset().top+n.outerHeight()/2);i.css("transform","translate("+.3*t+"px, "+.5*e+"px)")}),n.on("mouseout",function(e){i.css("transform","translate(0px, 0px)")})),e.find(".ha-eft--expandable")),a=t.find(".text");0<t.length&&0<a.length&&(a[0].addEventListener("transitionend",function(){a[0].style.width&&(a[0].style.width="auto")}),t[0].addEventListener("mouseenter",function(e){e.currentTarget.classList.add("hover"),a[0].style.width="auto";e=a[0].offsetWidth;a[0].style.width="0",window.getComputedStyle(a[0]).transform,a[0].style.width="".concat(e,"px")}),t[0].addEventListener("mouseleave",function(e){e.currentTarget.classList.remove("hover"),a[0].style.width="".concat(a[0].offsetWidth,"px"),window.getComputedStyle(a[0]).transform,a[0].style.width=""}))},"ha-pdf-view.default":function(e){var t=e.data("id"),e=e.find(".viewer-"+t).data("pdf-settings"),t={width:e.width,height:e.height,page:e.page_number};PDFObject.embed(e.pdf_url,"#"+e.unique_id,t)},"ha-comparison-table.default":function(e){var t=e.find(".ha-comparison-table-wrapper"),n=e.find(".ha-comparison-table__head"),i=n.data("sticky-header"),a=(e.height(),t.innerHeight()),o=t.offset().top;"yes"===i&&d.scroll(function(){var e=c(this).scrollTop();o<=e?n.addClass("table-sticky"):a<e&&n.removeClass("table-sticky")})}},function(e,t){elementorFrontend.hooks.addAction("frontend/element_ready/"+e,t)}),{"ha-image-grid.default":i,"ha-justified-gallery.default":a,"ha-news-ticker.default":o,"ha-post-tab.default":r}),s=(c.each(i,function(e,t){elementorFrontend.hooks.addAction("frontend/element_ready/"+e,function(e){elementorFrontend.elementsHandler.addHandler(t,{$element:e})})}),elementorFrontend.hooks.addAction("frontend/element_ready/ha-navigation-menu.default",function(e){var i=e.find(".ha-nav-menu");function t(){jQuery(window).width()<768?(i.removeClass("ha-navigation-menu-wrapper"),i.addClass("ha-navigation-burger-menu"),i.find(".ha-submenu-indicator-wrap").on("click",function(e){e.preventDefault();e=c(this).parent("li.menu-item-has-children");e&&e.children("ul.sub-menu").slideToggle()})):(i.addClass("ha-navigation-menu-wrapper"),i.removeClass("ha-navigation-burger-menu"),i.find("ul.menu").removeAttr("style"),i.find("ul.sub-menu").removeAttr("style"))}jQuery(window).width()<1025&&767<jQuery(window).width()&&i.find(".ha-submenu-indicator-wrap").on("click",function(e){e.preventDefault();e=c(this).parent("li.menu-item-has-children");e&&e.children("ul.sub-menu").slideToggle()}),i.find(".ha-menu-toggler").on("click",function(e){var t=c(this).data("humberger"),n=i.find("ul.menu");"open"==t?(c(".ha-menu-open-icon").addClass("hide-icon"),c(".ha-menu-close-icon").removeClass("hide-icon"),c(".ha-menu-close-icon").addClass("show-icon"),n.slideDown()):(c(".ha-menu-close-icon").addClass("hide-icon"),c(".ha-menu-open-icon").removeClass("hide-icon"),c(".ha-menu-open-icon").addClass("show-icon"),n.slideUp())}),t(),d.on("resize",h(t,100))}),elementorFrontend.hooks.addAction("frontend/element_ready/ha-age-gate.default",function(e,t){var n,i,a,o,r,s;elementorFrontend.isEditMode()?(localStorage.removeItem("ha-age-gate-expire-time"),e.find(".ha-age-gate-wrapper").length&&"no"==e.find(".ha-age-gate-wrapper").data("editor_mood")&&e.find(".ha-age-gate-wrapper").hide()):elementorFrontend.isEditMode()||(i=(n=e.find(".ha-age-gate-wrapper")).data("age_gate_cookies_time"),a=localStorage.getItem("ha-age-gate-expire-time"),n.closest("body").css("overflow","hidden"),o=new Date,(r=new Date).setDate(o.getDate()+i),t("body,html,document").scrollTop(e.offset().top),s=setTimeout(function(){t("body,html,document").scrollTop(t("body").offset().top),clearTimeout(s)},1e3),""!=a&&null!=a&&new Date(o)<=new Date(a)?(t(".ha-age-gate-wrapper").hide(),n.closest("body").css("overflow","")):(""!=a&&null!=a&&new Date(o)>new Date(a)&&localStorage.removeItem("ha-age-gate-expire-time"),t(".ha-age-gate-wrapper").show()),e.find(".ha-age-gate-wrapper.ha-age-gate-confirm-age").length&&t(".ha-age-gate-confirm-age-btn").on("click",function(){localStorage.setItem("ha-age-gate-expire-time",r),t(this).closest(".ha-age-gate-wrapper").hide(),t(this).closest("body").css("overflow","")}),e.find(".ha-age-gate-wrapper.ha-age-gate-confirm-dob").length&&t(".ha-age-gate-confirm-dob-btn").on("click",function(){var e=new Date(Date.parse(t(this).closest(".ha-age-gate-form-body").find(".ha-age-gate-date-input").val())).getFullYear();o.getFullYear()-e<t(this).closest(".ha-age-gate-wrapper").data("userbirth")?t(this).closest(".ha-age-gate-boxes").find(".ha-age-gate-warning-msg").show():(localStorage.setItem("ha-age-gate-expire-time",r),t(this).closest(".ha-age-gate-wrapper").hide(),t(this).closest("body").css("overflow",""))}),e.find(".ha-age-gate-wrapper.ha-age-gate-confirm-by-boolean").length&&(t(".ha-age-gate-wrapper .ha-age-gate-confirm-yes-btn").on("click",function(){localStorage.setItem("ha-age-gate-expire-time",r),t(this).closest(".ha-age-gate-wrapper").hide(),t(this).closest("body").css("overflow","")}),t(".ha-age-gate-wrapper .ha-age-gate-confirm-no-btn").on("click",function(){t(this).closest(".ha-age-gate-boxes").find(".ha-age-gate-warning-msg").show()})))}),t.extend({onInit:function(){t.prototype.onInit.apply(this,arguments),this.run()},onElementChange:h(function(e){-1!==["width","title_typography_typography","title_typography_font_size","title_typography_line_height","title_typography_font_weight","sub_title_typography_typography","sub_title_typography_font_size","sub_title_typography_line_height","sub_title_typography_font_weight"].indexOf(e)&&this.run()},300),run:function(){var i,e,t,n,a,o,r=this,s=JSON.parse(r.$element.find(".ha-lhi-image-area").attr("data-settings")),l=r.$element.find(".ha-lhi-image"),d=r.$element.find(".ha-lhi-title h2"),c=r.$element.find(".ha-lhi-title p"),h=r.$element.find("canvas"),u=s.hover_style,g=s.plugin_url+"liquid-hover-image/"+s.hover_effect;"custom"==s.hover_effect&&(g=s.custom_effect||""),h&&h.remove(),new hoverEffect({parent:l[0],intensity:s.intensity,image1:s.first_image,image2:s.second_image,displacementImage:g,imagesRatio:l.height()/l.width(),angle1:(s.angle-45)*(Math.PI/180)*-1,angle2:(s.angle-45)*(Math.PI/180)*-1,speedIn:s.speed,speedOut:s.speed});"style-1"==u&&(d.length||c.length)&&(i=s.style_1_direction,d.length&&(d[0].innerHTML=d[0].textContent.replace(/\S/g,"<span class='letter'>$&</span>")),c.length&&c.addClass("letter"),e=[0,0],t=[0,0],n=[0,0],a=[0,0],"left"==i?(e=[80,0],t=[0,-80]):"right"==i?(e=[0,80],t=[80,200]):"up"==i?(n=[80,0],a=[0,-80]):"down"==i&&(n=[-80,0],a=[0,80]),r.$element.hover(function(){anime.timeline({loop:!1}).add({targets:".elementor-element-"+r.getID()+" .ha-lhi-title .letter",translateX:e,translateY:n,translateZ:0,opacity:[0,1],easing:"easeOutExpo",duration:800,delay:function(e,t){return 40*t}})},function(){anime.timeline({loop:!1}).add({targets:".elementor-element-"+r.getID()+" .ha-lhi-title .letter",translateX:t,translateY:a,opacity:[1,0],duration:850,delay:function(e,t,n){return t=t,n=n,"right"==i?40*(n-t):40*t}})})),"style-2"==u&&(d.length||c.length)&&(d.length&&(o=d.find(".normal").outerHeight(),d.height(o)),c.length&&(o=c.find(".normal").outerHeight(),c.height(o)),r.$element.hover(function(){d.addClass("play"),c.addClass("play")},function(){d.removeClass("play"),c.removeClass("play")})),"style-5"==u&&(d.length||c.length)&&d.length&&(o=d.find(".normal").outerHeight(),d.attr("style","--ha-lhi-style-5-height:"+o+"px"))}})),l=(elementorFrontend.hooks.addAction("frontend/element_ready/ha-liquid-hover-image.default",function(e){elementorFrontend.elementsHandler.addHandler(s,{$element:e})}),t.extend({onInit:function(){t.prototype.onInit.apply(this,arguments),this.run()},onElementChange:h(function(e){-1!==["text_scroll_type"].indexOf(e)&&this.run()},300),getReadySettings:function(){var e={},t=this.getElementSettings("text_scroll_type");return t&&(e.scroll_type=t),c.extend({},this.getSettings(),e)},run:function(){var e=this.getReadySettings(),t=this.$element,n=t.find(".ha-split-lines")[0],i=[],a=e.scroll_type;"undefined"==typeof gsap||"undefined"==typeof ScrollTrigger||(gsap.registerPlugin(ScrollTrigger),n.length<=0)||("horizontal_line_mask"===a||"vertical_line_mask"===a?(c(n).each(function(e){var t=c(this);i[e]=new SplitType(t,{types:"lines, words"})}),c(n).find(".line").each(function(e){c(this).append("<div class='ha-line-mask'></div>")})):"horizontal_line_highlight"===a?c(n).each(function(e){var t=c(this);i[e]=new SplitType(t,{types:"words, chars"})}):new SplitType(n,{types:"lines, words"}),"horizontal_line_mask"===a||"vertical_line_mask"===a?t.find(".line").each(function(e,t){var n,i=c(t).find(".ha-line-mask");i.length<=0||(c(t).addClass("mask-active"),n="horizontal_line_mask"===a?{width:"0%"}:{height:"0%"},gsap.timeline({scrollTrigger:_objectSpread({trigger:t},{start:"horizontal_line_mask"===a?"bottom 50%":"bottom center",end:"bottom center",scrub:3})}).to(i,_objectSpread(_objectSpread({},n),{},{duration:1})))}):"horizontal_line_highlight"===a?(e=t.find(".word .char"),n=t.find(".ha-split-lines"),0<=e.length&&0<=n.length&&gsap.to(e,{scrollTrigger:{trigger:n,start:"top 40%",end:"bottom center",scrub:1},opacity:1,duration:2,stagger:1})):t.find(".line").each(function(){var e=this;gsap.to(this,{scrollTrigger:{trigger:this,start:"top 50%",end:"bottom 50%",onEnter:function(){c(e).addClass("highlight")},onLeaveBack:function(){c(e).removeClass("highlight")}}})}))}}));elementorFrontend.hooks.addAction("frontend/element_ready/ha-text-scroll.default",function(e){elementorFrontend.elementsHandler.addHandler(l,{$element:e})})})})(jQuery);