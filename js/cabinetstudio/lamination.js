window.cabinetstudio = window.cabinetstudio || {};

window.cabinetstudio.Lamination = function (thickness) {
    "use strict";
    window.cabinetstudio.Finishing.call(this, thickness);
};

window.cabinetstudio.Lamination.prototype = Object.create(window.cabinetstudio.Finishing.prototype);
window.cabinetstudio.Lamination.prototype.constructor = window.cabinetstudio.Lamination;
