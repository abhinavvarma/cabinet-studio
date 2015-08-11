window.cabinetstudio = window.cabinetstudio || {};

window.cabinetstudio.utils = window.cabinetstudio.utils || {};

window.cabinetstudio.utils.oops = window.cabinetstudio.utils.oops || {};

(function (oops) {
    "use strict";
    oops.inherit = function (childClass, parentClass) {
        childClass.prototype = Object.create(parentClass.prototype);
        childClass.prototype.constructor = childClass;
    };
}(window.cabinetstudio.utils.oops));