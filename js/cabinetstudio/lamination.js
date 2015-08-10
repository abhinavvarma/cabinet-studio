window.cabinetstudio = window.cabinetstudio || {};

window.cabinetstudio.Lamination = function (thickNess) {
    "use strict";
    this.thickNess = thickNess;
};

window.cabinetstudio.Lamination.prototype = window.cabinetstudio.Finishing.prototype;
window.cabinetstudio.Lamination.prototype.constructor = window.cabinetstudio.Lamination;
