window.cabinetstudio = window.cabinetstudio || {};

window.cabinetstudio.Lamination = function (thickness) {
    "use strict";
    window.cabinetstudio.Finishing.call(this, thickness);
};

window.cabinetstudio.utils.oops.inherit(window.cabinetstudio.Lamination, window.cabinetstudio.Finishing);
