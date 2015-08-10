window.cabinetstudio = window.cabinetstudio || {};
window.cabinetstudio.EdgeBinding = function (thickNess) {
    "use strict";
    this.thickNess = thickNess;
};

window.cabinetstudio.EdgeBinding.prototype = window.cabinetstudio.Finishing.prototype;
window.cabinetstudio.EdgeBinding.prototype.constructor = window.cabinetstudio.EdgeBinding;