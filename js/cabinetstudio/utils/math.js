window.cabinetstudio = window.cabinetstudio || {};

window.cabinetstudio.utils = window.cabinetstudio.utils || {};

window.cabinetstudio.utils.math = {
    toRadians: function toRadians(angle) {
        "use strict";
        return angle * (180 / Math.PI);
    },
    modulo: function (i, i_max) {
        "use strict";
        return ((i % i_max) + i_max) % i_max;
    }
};
