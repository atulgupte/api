/*! jQuery UI - v1.10.3 - 2013-09-16
* http://jqueryui.com
* Includes: jquery.ui.widget.js
* Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
!function(t,e){var i=0,n=Array.prototype.slice,o=t.cleanData;t.cleanData=function(e){for(var i,n=0;null!=(i=e[n]);n++)try{t(i).triggerHandler("remove")}catch(r){}o(e)},t.widget=function(i,n,o){var r,s,a,c,h={},l=i.split(".")[0];i=i.split(".")[1],r=l+"-"+i,o||(o=n,n=t.Widget),t.expr[":"][r.toLowerCase()]=function(e){return!!t.data(e,r)},t[l]=t[l]||{},s=t[l][i],a=t[l][i]=function(t,i){return this._createWidget?(arguments.length&&this._createWidget(t,i),e):new a(t,i)},t.extend(a,s,{version:o.version,_proto:t.extend({},o),_childConstructors:[]}),c=new n,c.options=t.widget.extend({},c.options),t.each(o,function(i,o){return t.isFunction(o)?(h[i]=function(){var t=function(){return n.prototype[i].apply(this,arguments)},e=function(t){return n.prototype[i].apply(this,t)};return function(){var i,n=this._super,r=this._superApply;return this._super=t,this._superApply=e,i=o.apply(this,arguments),this._super=n,this._superApply=r,i}}(),e):(h[i]=o,e)}),a.prototype=t.widget.extend(c,{widgetEventPrefix:s?c.widgetEventPrefix:i},h,{constructor:a,namespace:l,widgetName:i,widgetFullName:r}),s?(t.each(s._childConstructors,function(e,i){var n=i.prototype;t.widget(n.namespace+"."+n.widgetName,a,i._proto)}),delete s._childConstructors):n._childConstructors.push(a),t.widget.bridge(i,a)},t.widget.extend=function(i){for(var o,r,s=n.call(arguments,1),a=0,c=s.length;c>a;a++)for(o in s[a])r=s[a][o],s[a].hasOwnProperty(o)&&r!==e&&(i[o]=t.isPlainObject(r)?t.isPlainObject(i[o])?t.widget.extend({},i[o],r):t.widget.extend({},r):r);return i},t.widget.bridge=function(i,o){var r=o.prototype.widgetFullName||i;t.fn[i]=function(s){var a="string"==typeof s,c=n.call(arguments,1),h=this;return s=!a&&c.length?t.widget.extend.apply(null,[s].concat(c)):s,this.each(a?function(){var n,o=t.data(this,r);return o?t.isFunction(o[s])&&"_"!==s.charAt(0)?(n=o[s].apply(o,c),n!==o&&n!==e?(h=n&&n.jquery?h.pushStack(n.get()):n,!1):e):t.error("no such method '"+s+"' for "+i+" widget instance"):t.error("cannot call methods on "+i+" prior to initialization; attempted to call method '"+s+"'")}:function(){var e=t.data(this,r);e?e.option(s||{})._init():t.data(this,r,new o(s,this))}),h}},t.Widget=function(){},t.Widget._childConstructors=[],t.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(e,n){n=t(n||this.defaultElement||this)[0],this.element=t(n),this.uuid=i++,this.eventNamespace="."+this.widgetName+this.uuid,this.options=t.widget.extend({},this.options,this._getCreateOptions(),e),this.bindings=t(),this.hoverable=t(),this.focusable=t(),n!==this&&(t.data(n,this.widgetFullName,this),this._on(!0,this.element,{remove:function(t){t.target===n&&this.destroy()}}),this.document=t(n.style?n.ownerDocument:n.document||n),this.window=t(this.document[0].defaultView||this.document[0].parentWindow)),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:t.noop,_getCreateEventData:t.noop,_create:t.noop,_init:t.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(t.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:t.noop,widget:function(){return this.element},option:function(i,n){var o,r,s,a=i;if(0===arguments.length)return t.widget.extend({},this.options);if("string"==typeof i)if(a={},o=i.split("."),i=o.shift(),o.length){for(r=a[i]=t.widget.extend({},this.options[i]),s=0;o.length-1>s;s++)r[o[s]]=r[o[s]]||{},r=r[o[s]];if(i=o.pop(),n===e)return r[i]===e?null:r[i];r[i]=n}else{if(n===e)return this.options[i]===e?null:this.options[i];a[i]=n}return this._setOptions(a),this},_setOptions:function(t){var e;for(e in t)this._setOption(e,t[e]);return this},_setOption:function(t,e){return this.options[t]=e,"disabled"===t&&(this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!e).attr("aria-disabled",e),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")),this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_on:function(i,n,o){var r,s=this;"boolean"!=typeof i&&(o=n,n=i,i=!1),o?(n=r=t(n),this.bindings=this.bindings.add(n)):(o=n,n=this.element,r=this.widget()),t.each(o,function(o,a){function c(){return i||s.options.disabled!==!0&&!t(this).hasClass("ui-state-disabled")?("string"==typeof a?s[a]:a).apply(s,arguments):e}"string"!=typeof a&&(c.guid=a.guid=a.guid||c.guid||t.guid++);var h=o.match(/^(\w+)\s*(.*)$/),l=h[1]+s.eventNamespace,u=h[2];u?r.delegate(u,l,c):n.bind(l,c)})},_off:function(t,e){e=(e||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,t.unbind(e).undelegate(e)},_delay:function(t,e){function i(){return("string"==typeof t?n[t]:t).apply(n,arguments)}var n=this;return setTimeout(i,e||0)},_hoverable:function(e){this.hoverable=this.hoverable.add(e),this._on(e,{mouseenter:function(e){t(e.currentTarget).addClass("ui-state-hover")},mouseleave:function(e){t(e.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(e){this.focusable=this.focusable.add(e),this._on(e,{focusin:function(e){t(e.currentTarget).addClass("ui-state-focus")},focusout:function(e){t(e.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(e,i,n){var o,r,s=this.options[e];if(n=n||{},i=t.Event(i),i.type=(e===this.widgetEventPrefix?e:this.widgetEventPrefix+e).toLowerCase(),i.target=this.element[0],r=i.originalEvent)for(o in r)o in i||(i[o]=r[o]);return this.element.trigger(i,n),!(t.isFunction(s)&&s.apply(this.element[0],[i].concat(n))===!1||i.isDefaultPrevented())}},t.each({show:"fadeIn",hide:"fadeOut"},function(e,i){t.Widget.prototype["_"+e]=function(n,o,r){"string"==typeof o&&(o={effect:o});var s,a=o?o===!0||"number"==typeof o?i:o.effect||i:e;o=o||{},"number"==typeof o&&(o={duration:o}),s=!t.isEmptyObject(o),o.complete=r,o.delay&&n.delay(o.delay),s&&t.effects&&t.effects.effect[a]?n[e](o):a!==e&&n[a]?n[a](o.duration,o.easing,r):n.queue(function(i){t(this)[e](),r&&r.call(n[0]),i()})}})}(jQuery);