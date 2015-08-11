window.cabinetstudio = window.cabinetstudio || {};
window.cabinetstudio.constants = window.cabinetstudio.constants || {};

(function (constants) {
    "use strict";
    constants.Joints = {
        BUTT : 'butt',
        GROOVE : 'groove'
    };
    constants.Faces = {
        BOTTOM : 'bottom',
        LEFT : 'left',
        TOP : 'top',
        RIGHT : 'right'
    };
    constants.Corners = {
        BOTTOM_LEFT : 'bottomLeft',
        LEFT_TOP : 'leftTop',
        TOP_RIGHT : 'topRight',
        RIGHT_BOTTOM : 'rightBottom'
    };

    constants.Finishings = {
        LAMINATION : "lamination",
        EDGE_BINDING: "edgeBinding",
        NO_FINISHING : "noFinishing"
    };

}(window.cabinetstudio.constants));