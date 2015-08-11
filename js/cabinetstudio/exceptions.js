window.cabinetstudio = window.cabinetstudio || {};
window.cabinetstudio.exceptions = window.cabinetstudio.exceptions || {};

(function (exceptions) {
    "use strict";
    exceptions.Exception = function (message) {
        this.message = message;
        this.name = 'Exception';
    };

    exceptions.NotImplementedException = function (message) {
        exceptions.Exception.call(this, message);
        this.name = 'NotImplementedException';
    };
    exceptions.MatrixMultiplicationNotPossibleException = function (message) {
        exceptions.Exception.call(this, message);
        this.name = 'MatrixMultiplicationNotPossibleException';
    };

}(window.cabinetstudio.exceptions));