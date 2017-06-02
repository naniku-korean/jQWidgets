/*
jQWidgets v4.5.3 (2017-June)
Copyright (c) 2011-2017 jQWidgets.
License: http://jqwidgets.com/license/
*/
!function(a){a.jqx.jqxWidget("jqxListMenu","",{});var b=0,c=0;a.extend(a.jqx._jqxListMenu.prototype,{defineInstance:function(){var b={filterCallback:function(b,c){return a.jqx.string.containsIgnoreCase(a.trim(b),c)},placeHolder:"Filter list items...",showFilter:!1,showHeader:!0,showBackButton:!0,showNavigationArrows:!0,alwaysShowNavigationArrows:!1,backLabel:"Back",width:"100%",height:"auto",animationType:"slide",animationDuration:0,headerAnimationDuration:0,autoSeparators:!1,readOnly:!1,roundedCorners:!0,disabled:!1,enableScrolling:!0,touchMode:!1,_childrenMap:{},_parentMap:{},_lock:!1,_backButton:null,_currentPage:null,_header:null,_oldHost:void 0,rtl:!1,aria:{"aria-disabled":{name:"disabled",type:"boolean"}}};return this===a.jqx._jqxListMenu.prototype?b:(a.extend(!0,this,b),b)},destroy:function(){this.host.remove()},createInstance:function(){a.jqx.aria(this),this.host.attr("data-role","listmenu"),this.host.attr("role","tree")},refresh:function(a){this._render(),this._removeClasses(),this._addClasses(),this._currentPage=this._currentPage||this.host.children(".jqx-listmenu").first(),this._changeHeader(this._currentPage),this._removeEventHandlers(),this._addEventHandlers()},_render:function(){this._renderHost(),this._renderAutoSeparators(),this._renderSublists(),this._renderFilterBar(),this._renderHeader(),this.host.css({width:this.width,height:this.height}),this.disabled&&this.disable(),this.enableScrolling&&this.host.jqxPanel&&this.panel&&this.panel.jqxPanel("_arrange")},resize:function(a,b){this.width=a,this.height=b,this.host.css({width:this.width,height:this.height}),this.panel&&this.panel.jqxPanel("_arrange")},_renderHost:function(){this.host.is("div")?this.element.style.overflow="hidden":(this._oldHost=this.host,this.host.wrap("<div/>"),this.host=this.host.parent(),this.element=this.host[0],this.host.jqxPanel&&this.enableScrolling&&(this.host.wrap("<div/>"),this.panel=this.host.parent(),this.panel[0].id="panel"+this.element.id,this.panel.jqxPanel({theme:this.theme,autoUpdate:!0,width:this.width,height:this.height,touchMode:this.touchMode}),this.host.css({width:"100%"}),this.host.css({height:"auto"}),this.host.css("border","none"))),this.enableScrolling||(this.element.style.overflow="hidden"),a.jqx.browser.msie&&a.jqx.browser.version<8&&(this.element.style.position="relative"),this.enableScrolling&&this.panel&&this.panel.jqxPanel("_arrange")},_renderAutoSeparators:function(b){var b,c,d=this.host.find(".jqx-listmenu-auto-separator"),e=this.host.find('[data-role="listmenu"]');for(d.remove(),c=0;c<e.length;c+=1)b=a(e[c]),(b.data("auto-separators")||this.autoSeparators)&&this._renderListAutoSeparators(b)},_renderSublists:function(){var b,c,d,e,f,g=[this.host.find(".jqx-listmenu").first()[0]||this.host.find("ul,ol").first()[0]];for(this._refreshList(g[0]);g.length;){d=g.pop(),b=this._getChildrenByTagName(d,"li","LI"),e=b.length;for(var h=0;h<e;h+=1)c=b[h],a(c).attr("role","treeitem"),f=this._getChildList(c),this._refreshLi(c,h,e),f&&(g.push(f),this._refreshList(f,c,!0))}},_refreshList:function(b,c,d){b=a(b),"listmenu"===b.data("role")&&(b.is(".jqx-listmenu")||(this._renderList(b),this._handleListId(b),this._addListClasses(b)),c&&this._expandHierarchy(b[0],c),d&&this._handleSublist(b[0]))},_renderList:function(b){b=a(b),b.is(".jqx-listmenu")||(b.detach(),b.appendTo(this.host))},_handleListId:function(a){a[0].id||(a[0].id="jqx-listmenu-"+c,c+=1)},_renderListAutoSeparators:function(b){for(var c,d,e=b.children("li"),f={},g=0;g<e.length;g+=1)if(d=a(e[g]),!d.data("role")){if(a.trim(d.text())[0]!==c){c=a.trim(d.text())[0];var h=a('<li data-role="separator" class="'+this.toThemeProperty("jqx-listmenu-auto-separator")+'">'+c+"</li>");h.insertBefore(d),h[0].items=new Array,f=h[0]}f.items&&(f.items[f.items.length]=d[0])}},_addListClasses:function(a){a.addClass("jqx-listmenu")},_expandHierarchy:function(a,b){if(b&&a){var c=b.id,d=a.id;this._childrenMap[c]=d,this._parentMap[d]=c}},_handleSublist:function(a){this._currentPage&&a===this._currentPage[0]?a.style.display="block":a.style.display="none"},_getChildrenByTagName:function(a,b,c){var d=[],e={};for(e[b]=e[c]=!0,a=a.firstChild;a;)e[a.nodeName]&&d.push(a),a=a.nextSibling;return d},_renderFilterBar:function(){this._filterBar||(this._filterBar=a("<div/>"),this._filterInput=a('<input type="text" />'),this._filterBar.append(this._filterInput),this.host.prepend(this._filterBar));var b=!1;a.jqx.browser.msie&&a.jqx.browser.version<8&&(b=!0),b||this._filterInput.attr("placeholder",this.placeHolder),this.showFilter?this._filterBar.css("display","block"):this._filterBar.css("display","none")},_renderHeader:function(){this._header||(this._header=a("<div/>"),this.host.prepend(this._header),this._renderHeaderLabel()),this._renderBackButton(),this.showHeader?this._header.css("display","block"):this._header.css("display","none")},_renderHeaderLabel:function(){this._headerLabel=a("<span/>"),this._headerLabel.addClass(this.toThemeProperty("jqx-listmenu-header-label")),this._header.append(this._headerLabel)},_renderBackButton:function(){if(!this._backButton&&(this._backButton=a('<div><div style="float: left;"></div><span style="float: left;">'+this.backLabel+'</span><div style="clear:both;"></div></div>'),this._header.prepend(this._backButton),this._backButton.jqxButton({theme:this.theme}),this._backButton.find("div:first").addClass(this.toThemeProperty("jqx-listmenu-backbutton-arrow")),this.showBackButton?this._backButton.css("display","inline-block"):this._backButton.css("display","none"),this.rtl)){a.jqx.browser.msie&&a.jqx.browser.version<8?(this._backButton.css("position","relative"),this._backButton.css("left","100%"),this._backButton.css("margin-left",-this._backButton.outerWidth()-45+"px")):(this._backButton.css("position","relative"),this._backButton.css("margin-left","100%"),this._backButton.css("left",-this._backButton.outerWidth()-15))}this.showBackButton?this._backButton.css("display","inline-block"):this._backButton.css("display","none")},_removeEventHandlers:function(){var b=this.isTouchDevice()&&!this.touchMode,c=a.jqx.mobile.getTouchEventName("touchstart");this.removeHandler(this._backButton,b?c:"click"),this.removeHandler(this._filterInput,"keyup"),this.removeHandler(this._filterInput,"change")},_addEventHandlers:function(){var b=this,c=this.isTouchDevice()&&!this.touchMode,d=a.jqx.mobile.getTouchEventName("touchstart");this.addHandler(this._backButton,c?d:"click",function(){b.back()}),this.addHandler(this._filterInput,"keyup change",function(){b._filter(a(this).val())})},_getChildList:function(a){if(a){var b=this._childrenMap[a.id];if(a.className.indexOf("jqx-listmenu-item")>=0&&b)return document.getElementById(b);var c=this._getChildrenByTagName(a,"ul","UL")[0],d=this._getChildrenByTagName(a,"ol","OL")[0];return c||d}},_refreshLi:function(a,b,c){if(a.parentNode&&"listmenu"===a.parentNode.getAttribute("data-role")){if(""==a.id);this._handleLiId(a),this._renderLi(a),this._removeLiEventHandlers(a),this._addLiEventHandlers(a),this._addLiClasses(a,b,c)}},_handleLiId:function(a){a.id||(a.id="jqx-listmenu-item-"+b,b+=1)},_renderLi:function(b){if(!(/(separator|header)/.test(a(b).data("role"))||a(b).children(".jqx-listmenu-arrow-right").length>0)&&(a(b).wrapInner('<span class="'+this.toThemeProperty("jqx-listmenu-item-label")+'"></span>'),this.showNavigationArrows||this.alwaysShowNavigationArrows)){var c=a("<span/>"),d=a(b).find("ul"),e=a(b).find("ol");(this.alwaysShowNavigationArrows||d.length>0&&/(listmenu)/.test(d.data("role"))||e.length>0&&/(listmenu)/.test(e.data("role")))&&(c.addClass(this.toThemeProperty("jqx-listmenu-arrow-right")),this.rtl?(c.addClass(this.toThemeProperty("jqx-icon-arrow-left")),c.addClass(this.toThemeProperty("jqx-listmenu-arrow-rtl")),c.prependTo(b)):(c.addClass(this.toThemeProperty("jqx-icon-arrow-right")),c.appendTo(b)))}},_removeLiEventHandlers:function(b){var c=this.isTouchDevice(),d=a.jqx.mobile.getTouchEventName("touchstart"),e=a.jqx.mobile.getTouchEventName("touchend"),f=(a.jqx.mobile.getTouchEventName("touchmove"),(c?d:"mousedown")+".listmenu"),g=(c?e:"mouseup")+".listmenu";this.removeHandler(a(b),f),this.removeHandler(a(document),g+"."+b.id)},isTouchDevice:function(){var b=a.jqx.mobile.isTouchDevice();return 1==this.touchMode&&(b=!0),b},_addLiEventHandlers:function(b){b=a(b);var c=this,d=this.toThemeProperty("jqx-listmenu-arrow-right-pressed"),e=b.children(".jqx-listmenu-arrow-right"),f=a.jqx.mobile.isTouchDevice(),g=a.jqx.mobile.getTouchEventName("touchstart"),h=a.jqx.mobile.getTouchEventName("touchend"),i=(a.jqx.mobile.getTouchEventName("touchmove"),(f?g:"mousedown")+".listmenu"),j=(f?h:"mouseup")+".listmenu",k=null,l="";/(separator|readonly)/.test(b.data("role"))||this.readOnly||(this.addHandler(b,"dragstart",function(){return!1}),this.addHandler(b,i,function(g){c.disabled||(k=g.target,l=a.jqx.position(g),0==b.find('div[data-role="content"]').length&&(f||(b.addClass(c.toThemeProperty("jqx-fill-state-pressed")),e.addClass(d))))}),this.addHandler(b,j,function(d){c.disabled||k!=d.target&&f||a.jqx.position(d).top===l.top&&c.next(b)}),this.addHandler(a(document),j+"."+b[0].id,function(){c.disabled||(b.removeClass(c.toThemeProperty("jqx-fill-state-pressed")),e.removeClass(d))}))},_addLiClasses:function(b,c,d){b=a(b),"separator"===b.data("role")?this._handleSeparatorStyle(b):"header"===b.data("role")?this._handleHeaderStyle(b):(this.readOnly||"readonly"===b.data("role")?b.addClass(this.toThemeProperty("jqx-listmenu-item-readonly")):b.removeClass(this.toThemeProperty("jqx-listmenu-item-readonly")),this._handleItemStyle(b)),0!==c||this.showHeader||this.showFilter||b.addClass(this.toThemeProperty("jqx-rc-t")),c===d-1&&b.addClass(this.toThemeProperty("jqx-rc-b"))},_handleSeparatorStyle:function(a){a.addClass(this.toThemeProperty("jqx-listmenu-separator")),a.addClass(this.toThemeProperty("jqx-fill-state-pressed")),a[0].style.listStyle="none"},_handleHeaderStyle:function(a){a.css("display","none")},_handleItemStyle:function(a){a.addClass(this.toThemeProperty("jqx-listmenu-item")),this.rtl&&a.addClass(this.toThemeProperty("jqx-rtl")),a.addClass(this.toThemeProperty("jqx-fill-state-normal")),a.addClass(this.toThemeProperty("jqx-item"))},back:function(){var b,c=this._currentPage;c&&(b=this._parentMap[c[0].id]),this._back=!0,a("#"+b).length>0&&a.jqx.aria(a("#"+b),"aria-expanded",!1),this._changePage(c,a("#"+b).parent(),this.animationDuration,!0),this._back=!1},next:function(b){var c=b.attr("id"),d=this._childrenMap[c],e=a("#"+d),f=a("#"+c).parent();a.jqx.aria(b,"aria-expanded",!0),this._changePage(f,e,this.animationDuration)},changePage:function(b){if("string"==typeof b&&(b=a(b)),!b[0]||"listmenu"!==b.attr("data-role")||b.parents().index(this.host)<0)throw new Error("Invalid newPage. The chosen newPage is not listmenu or it's not part of the selected jqxListMenu hierarchy.");this._currentPage[0]!=b[0]&&this._changePage(this._currentPage,b,this.animationDuration)},_changePage:function(b,c,d,e){if(!this._lock){var f="_"+this.animationType+"Change"+(e?"Back":"");c[0]&&(this.showFilter&&(c.find('div[data-role="content"]').length>0?(a.each(c.find("li"),function(){"separator"===a(this).data("role")&&a(this).hide()}),this._filterBar.css("display","none")):this._filterBar.css("display","block")),this._lock=!0,this[f](b,c,this.animationDuration,function(){this._lock=!1,this._changeHeader(c),this._currentPage=c}))}},_changeHeader:function(b){var c=a(b).find('li[data-role="header"]').first();if(c[0]){var d=this;this._headerLabel.fadeOut(this.headerAnimationDuration/2,function(){d._headerLabel.html(c.html()),d._headerLabel.fadeIn(d.headerAnimationDuration/2)})}},_slideChange:function(b,c,d,e){var f=this;this.enableScrolling&&null!=this.panel&&this.panel.jqxPanel("scrollTo",0,0);var g=this.rtl;this._initSlide(b,c),g?(b.animate({"margin-left":b.width()+parseInt(b.css("margin-right"),10)||0},d,"easeInOutSine"),c.animate({"margin-left":0},d,"easeInOutSine",function(){f._slideEnd(b,c),e.call(f,a(this))})):(b.animate({"margin-left":-b.width()-parseInt(b.css("margin-right"),10)||0},d,"easeInOutSine"),c.animate({"margin-left":0},d,"easeInOutSine",function(){f._slideEnd(b,c),e.call(f,a(this))}))},_initSlide:function(a,b){var c=this.rtl;a.width(a.width()),b.css({marginTop:-a.outerHeight(!0),marginLeft:c?-a.width()-(parseInt(a.css("margin-right"),10)||0):a.width()+(parseInt(a.css("margin-right"),10)||0),display:"block",height:"auto",width:a.width()})},_slideEnd:function(a,b){this.host.css("height","auto"),a.css({display:"none",width:"auto",height:"auto",marginTop:0,marginLeft:0}),b.css({marginTop:0,marginLeft:0,height:"auto",width:"auto",display:"block"})},_slideChangeBack:function(b,c,d,e){var f=this;this._initSlideBack(b,c),b.animate({"margin-left":this.rtl?-b.width()-parseInt(b.css("margin-right"),10)||0:b.width()+parseInt(b.css("margin-right"),10)||0},d),c.animate({"margin-left":0},d,function(){f._slideEnd(b,c),e.call(f,a(this))})},_initSlideBack:function(a,b){a.css({marginTop:-b.outerHeight(!0),width:a.width()}),b.css({width:a.width(),marginLeft:this.rtl?a.width()+parseInt(a.css("margin-right"),10)||0:-a.width()-parseInt(a.css("margin-right"),10)||0,display:"block",height:"auto"})},_fadeChangeBack:function(a,b,c,d){this._fadeChange(a,b,c,d)},_fadeChange:function(b,c,d,e){var f=this;b.fadeOut(d/2,function(){c.fadeIn(d/2,function(){e.call(f,a(this))})})},_removeClasses:function(){this._filterBar.removeClass(this.toThemeProperty("jqx-listmenu-filter")),this._filterBar.removeClass(this.toThemeProperty("jqx-widget-header")),this._filterInput.removeClass(this.toThemeProperty("jqx-listmenu-filter-input")),this._filterInput.removeClass(this.toThemeProperty("jqx-input")),this._header.removeClass(this.toThemeProperty("jqx-listmenu-header")),this._header.removeClass(this.toThemeProperty("jqx-widget-header")),this._header.removeClass(this.toThemeProperty("jqx-rc-t")),this.roundedCorners&&this.host.removeClass(this.toThemeProperty("jqx-rc-all")),this.host.removeClass(this.toThemeProperty("jqx-widget")),this.host.removeClass(this.toThemeProperty("jqx-listmenu-widget")),this.host.removeClass(this.toThemeProperty("jqx-fill-state-normal")),this.host.removeClass(this.toThemeProperty("jqx-reset")),this.host.find('div[data-role="content"]').length>0&&this.host.find('div[data-role="content"]').removeClass(this.toThemeProperty("jqx-widget-content"))},_addClasses:function(){this.roundedCorners?this.host.addClass(this.toThemeProperty("jqx-rc-all")):this.host.removeClass(this.toThemeProperty("jqx-rc-all")),this.host.addClass("jqx-widget"),this.host.addClass("jqx-listmenu-widget"),this.host.addClass("jqx-fill-state-normal"),this.host.addClass("jqx-reset"),this._filterBar.addClass(this.toThemeProperty("jqx-listmenu-filter")),this._filterBar.addClass(this.toThemeProperty("jqx-widget-header")),this._filterInput.addClass(this.toThemeProperty("jqx-listmenu-filter-input")),this._filterInput.addClass(this.toThemeProperty("jqx-input")),this._header.addClass(this.toThemeProperty("jqx-listmenu-header")),this._header.addClass(this.toThemeProperty("jqx-widget-header")),this._header.addClass(this.toThemeProperty("jqx-rc-t")),this.host.find('div[data-role="content"]').length>0&&this.host.find('div[data-role="content"]').addClass(this.toThemeProperty("jqx-widget-content"))},_raiseEvent:function(){},_filter:function(b){for(var c=this.host.find(".jqx-listmenu-item"),d=0;d<c.length;d+=1){var e=a.trim(a(c[d]).text());this.filterCallback(e,b)?c[d].style.display="block":c[d].style.display="none"}for(var c=this.host.find(".jqx-listmenu-separator"),d=0;d<c.length;d+=1){var f=!1;a.each(c[d].items,function(){if("none"!=a(this).css("display"))return f=!0,!1}),c[d].style.display=f?"block":"none"}},disable:function(){this.host.addClass(this.toThemeProperty("jqx-fill-state-disabled")),this.disabled=!0},enable:function(){this.host.removeClass(this.toThemeProperty("jqx-fill-state-disabled")),this.disabled=!1},propertyChangedHandler:function(a,b,c,d){if("disabled"==b&&(d?a.disable():a.enable()),"backLabel"===b)return void a._backButton.html(d);if("placeHolder"===b)a._filterInput.attr("placeholder",d);else if(/(showFilter|showHeader|showBackButton|width|height|autoSeparators|readOnly)/.test(b))return void a._render()}})}(jqxBaseFramework);

