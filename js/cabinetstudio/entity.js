window.cabinetstudio = window.cabinetstudio || {};
(function (cs) {
    "use strict";
    cs.Entity = function () {
        // abstract class
    };

    cs.Entity.prototype.translate = function (axis,offset) {
        throw new cs.exceptions.NotImplementedException("This is an abstract method and to be implemented by inheriting class");
    };

    cs.Entity.prototype.rotate = function (axis,angle) {
        throw new cs.exceptions.NotImplementedException("This is an abstract method and to be implemented by inheriting class");
    };

    cs.Entity.prototype.to3JSObject = function () {
        throw new cs.exceptions.NotImplementedException("This is an abstract method and to be implemented by inheriting class");
    };

}(window.cabinetstudio));