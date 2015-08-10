window.cabinetstudio = window.cabinetstudio || {};

(function (exceptions) {
    "use strict";
    exceptions.Exception = function (message) {
        this.message = message;
        this.name = 'Exception';
    };

    exceptions.NotImplementedException = function (message){
        exceptions.Exception.call(this, message);
        this.name = 'NotImplementedException';
    }

})(window.cabinetstudio.exceptions = window.cabinetstudio.exceptions || {});