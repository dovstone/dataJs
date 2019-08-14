(function ( $ ) {

    "use strict";

    if (window.datajs === undefined) {
        window.datajs = {};
    }
    
    datajs.fnLibs = [];

    $.extend({
        dataJs: function(fn__lib) {
            if (!datajs.cached) {
                datajs.cached = [];
            }
            datajs.cached.push(fn__lib);
            datajs.cached.forEach(function(fn_lib_from_cache, i) {
                for (var Obj in fn_lib_from_cache) {
                    if (fn_lib_from_cache[Obj]) {
                        datajs.fnLibs[Obj] = fn_lib_from_cache[Obj];
                    }
                }
                $('[data-js]').not('[data-js-bound="true"]').each(function() {
                    var that = $(this),
                        datajs = that.attr('data-js'),
                        obj = datajs.split('{')[0].replace('=', ''),
                        functions = [];
                    if (datajs) {
                        var data = datajs.split('{')[1].replace('}', '').split(';');
                        data.forEach(function(data, i) {
                            data = data.split(':');
                            // More than one event
                            if (data[1].indexOf('|') !== 0) {
                                functions = data[1].split('|');
                            }
                            nextStep(that, obj, data, functions);
                        });
                    }
                });
            });

            function nextStep(that, obj, data, functions) {
                that.on(data[0].dataJsReplaceAll('|', ' '), function(e) {
                    e.stopPropagation();
                    e.stopImmediatePropagation();
                    if (!$(e.target).is(this.selector)) {
                        var that = $(this);
                        if (that.is('a[href]') || that.is('form') || that.is('[disabled]')) {
                            e.preventDefault();
                        }
                        if (!that.is('[disabled]')) {
                            functions.forEach(function(func, i) {
                                if ((datajs.fnLibs[obj] && datajs.fnLibs[obj][func])) {
                                    e.dataJslistenedEvent = func;
                                    return eval(datajs.fnLibs[obj][func])(that, e, datajs.fnLibs[obj]);
                                } else {
                                    return alert(obj + ' = { ' + data[i] + ' : ' + func + ' } not found !');
                                }
                            });
                        }
                    }
                }).attr('data-js-bound', 'true');
            }
        },
        rebindDataJs: function(delay) {
            datajs.set({
                suspendMouseUp: true
            });
            $('[data-js]').removeAttr('data-js-bound').off();
            _.delay(function() {
                datajs.dataJs(datajs.fnLibs);
            }, delay ? delay : 100);
        }
    });

    String.prototype.dataJsReplaceAll = function(search, replacement) {
        var target = this;
        //return target.replace(new RegExp(search, 'g'), replacement);
        return target.split(search).join(replacement);
    };

}( jQuery ));