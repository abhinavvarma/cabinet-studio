window.cabinetstudio = window.cabinetstudio || {};
window.cabinetstudio.EdgeBinding = function (thickness) {
    "use strict";
    window.cabinetstudio.Finishing.call(this, thickness);
};

window.cabinetstudio.EdgeBinding.prototype = Object.create(window.cabinetstudio.Finishing.prototype);
window.cabinetstudio.EdgeBinding.prototype.constructor = window.cabinetstudio.EdgeBinding;