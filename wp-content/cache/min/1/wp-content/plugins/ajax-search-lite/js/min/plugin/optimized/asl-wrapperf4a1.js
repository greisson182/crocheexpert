window._ASL_load=function(){let e=WPD.dom;window.ASL.instances={instances:[],get:function(b,c){this.clean();if("undefined"===typeof b||0==b)return this.instances;if("undefined"===typeof c){c=[];for(var a=0;a<this.instances.length;a++)this.instances[a].o.id==b&&c.push(this.instances[a]);return 0<c.length?c:!1}for(a=0;a<this.instances.length;a++)if(this.instances[a].o.id==b&&this.instances[a].o.iid==c)return this.instances[a];return!1},set:function(b){if(this.exist(b.o.id,b.o.iid))return!1;this.instances.push(b);return!0},exist:function(b,c){this.clean();for(let a=0;a<this.instances.length;a++)if(this.instances[a].o.id==b&&("undefined"===typeof c||this.instances[a].o.iid==c))return!0;return!1},clean:function(){let b=[],c=this;this.instances.forEach(function(a,d){0==e(".asl_m_"+a.o.rid).length&&b.push(d)});b.forEach(function(a){"undefined"!==typeof c.instances[a]&&(c.instances[a].destroy(),c.instances.splice(a,1))})},destroy:function(b,c){let a=this.get(b,c);if(!1!==a)if(Array.isArray(a))a.forEach(function(d){d.destroy()}),this.instances=[];else{let d=0;this.instances.forEach(function(f,g){f.o.id==b&&f.o.iid==c&&(d=g)});a.destroy();this.instances.splice(d,1)}}};window.ASL.initialized=!1;window.ASL.initializeSearchByID=function(b){let c=ASL.getInstances();if("undefined"!==typeof b&&"object"!=typeof b)if("undefined"!==typeof c[b]){let d=[];d[b]=c[b];c=d}else return!1;let a=0;c.forEach(function(d,f){e(".asl_m_"+f).forEach(function(g){let h=e(g);if("undefined"!=typeof h.get(0).hasAsl)return++a,!0;g.hasAsl=!0;++a;return h.ajaxsearchlite(d)})})};window.ASL.getInstances=function(){if("undefined"!==typeof window.ASL_INSTANCES)return window.ASL_INSTANCES;let b=[];e(".asl_init_data").forEach(function(c){if("undefined"===typeof c.dataset.asldata)return!0;let a=WPD.Base64.decode(c.dataset.asldata);if("undefined"===typeof a||""==a)return!0;b[c.dataset.aslId]=JSON.parse(a)});return b};window.ASL.initialize=function(b){if("undefined"==typeof ASL.version)return!1;if(window.IntersectionObserver)if(ASL.script_async_load||ASL.init_only_in_viewport){if(b=document.querySelectorAll(".asl_w_container"),b.length){let c=new IntersectionObserver(function(a){a.forEach(function(d){d.isIntersecting&&(ASL.initializeSearchByID(d.target.dataset.id),c.unobserve(d.target))})});b.forEach(function(a){c.observe(a)})}}else ASL.initializeSearchByID(b);else ASL.initializeSearchByID(b);ASL.initializeMutateDetector();ASL.initializeHighlight();ASL.initializeOtherEvents();ASL.initialized=!0};window.ASL.initializeHighlight=function(){if(this.highlight.enabled){let b=localStorage.getItem("asl_phrase_highlight");localStorage.removeItem("asl_phrase_highlight");null!=b&&(b=JSON.parse(b),this.highlight.data.forEach(function(c){var a=""!=c.selector&&0<e(c.selector).length?c.selector:"article";a=0<e(a).length?a:"body";e(a).highlight(b.phrase,{element:"span",className:"asl_single_highlighted",wordsOnly:c.whole,excludeParents:".asl_w, .asl-try"});a=e(".asl_single_highlighted");if(c.scroll&&0<a.length){a=a.offset().top-120;let d=e("#wpadminbar");0<d.length&&(a-=d.height());a+=c.scroll_offset;a=0>a?0:a;e("html").animate({scrollTop:a},500)}return!1}))}};window.ASL.initializeOtherEvents=function(){let b,c=this;e("body").on("click touchend","#menu-item-search, .fa-search, .fa, .fas, .fusion-flyout-menu-toggle, .fusion-main-menu-search-open, #search_button, .mini-search.popup-search, .icon-search, .menu-item-search-dropdown, .mobile-menu-button, .td-icon-search, .tdb-search-icon, .side_menu_button, .search_button, .raven-search-form-toggle, [data-elementor-open-lightbox], .elementor-button-link, .elementor-button, i[class*=-search], a[class*=-search]",function(){clearTimeout(b);b=setTimeout(function(){c.initializeSearchByID()},300)});if("undefined"!=typeof jQuery)jQuery(document).on("elementor/popup/show",function(){setTimeout(function(){c.initializeSearchByID()},10)})};window.ASL.initializeMutateDetector=function(){let b;"undefined"!=typeof ASL.detect_ajax&&1==ASL.detect_ajax&&(new MutationObserver(function(){clearTimeout(b);b=setTimeout(function(){ASL.initializeSearchByID()},500)})).observe(document.querySelector("body"),{subtree:!0,childList:!0})};window.ASL.ready=function(){if("complete"===document.readyState||"loaded"===document.readyState||"interactive"===document.readyState)this.initialize();else e(document).on("DOMContentLoaded",this.initialize)};window.ASL.loadScriptStack=function(b){let c;0<b.length&&(c=document.createElement("script"),c.src=b.shift().src,c.onload=function(){0<b.length?window.ASL.loadScriptStack(b):window.ASL.ready()},document.body.appendChild(c))};window.ASL.init=function(){ASL.script_async_load?window.ASL.loadScriptStack(ASL.additional_scripts):"undefined"!==typeof WPD.ajaxsearchlite&&window.ASL.ready()};window.WPD.intervalUntilExecute(window.ASL.init,function(){return"undefined"!=typeof window.ASL.version&&"undefined"!=e.fn.ajaxsearchlite})};(function(){"undefined"!=typeof WPD&&"undefined"!=typeof WPD.dom?window._ASL_load():document.addEventListener("wpd-dom-core-loaded",window._ASL_load)})()