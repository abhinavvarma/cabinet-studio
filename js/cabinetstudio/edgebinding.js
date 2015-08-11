window.cabinetstudio = window.cabinetstudio || {};
window.cabinetstudio.EdgeBinding = function (thickness) {
    "use strict";
    window.cabinetstudio.Finishing.call(this, thickness);
};

window.cabinetstudio.utils.oops.inherit(window.cabinetstudio.EdgeBinding, window.cabinetstudio.Finishing);