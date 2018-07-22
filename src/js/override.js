import Err from './errors';

if(document.querySelector) {
    let _querySelector = document.querySelector;
	document.querySelector = function(selector=null) {
        if(!selector) throw Err.querySelector.missing_selector.toConsole();
        if(typeof selector != 'string') throw Err.querySelector.invalid_selector.toConsole();
        var elm = _querySelector.apply(this, [selector]);
        if(!elm) throw Err.querySelector.element_not_found.toConsole();
        return elm;
	};
}

if(!window.onload || typeof window.onload == 'undefined'){
    setTimeout(() => {
        if(!window.onload || typeof window.onload == 'undefined')
            throw Err.window.missing_onload.toConsole();
    },1000);
}

if(document.addEventListener) {
    let _addEventListener = document.addEventListener;
	document.addEventListener = function(event=null, callback=null) {
        //if(typeof event != 'string') throw new DashPrototypeError('The first parameter of the function document.addEventListener must be a string that identifies the name of the event you want to listen to');
        //if(typeof callback != 'function') throw new DashPrototypeError('The second parameter of the function document.addEventListener must be a variable that contains a function');
        _addEventListener.apply(this, [event, callback]);
	};
}