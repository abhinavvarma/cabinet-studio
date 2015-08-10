window.cabinetstudio = window.cabinetstudio || {};

window.cabinetstudio.utils = window.cabinetstudio.utils || {};

window.cabinetstudio.utils.math = window.cabinetstudio.utils.math || {};

(function (math) {
    "use strict";
    math.modulo = function (i, i_max) {
        return ((i % i_max) + i_max) % i_max;
    };
}(window.cabinetstudio.utils.math));