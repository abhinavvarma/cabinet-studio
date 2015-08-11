window.cabinetstudio = window.cabinetstudio || {};
window.cabinetstudio.Face = function Face(finishType, thickness) {
    "use strict";
    this.finishing = null;
    this.setFinishing(finishType, thickness);

};

window.cabinetstudio.Face.prototype = {
    constructor: window.cabinetstudio.Face,

    setFinishing: function (finishType, thickness) {
        "use strict";
        var tempThickness = 0;
        if (thickness) {
            tempThickness = thickness;
        }
        if (finishType) {
            if (finishType === window.cabinetstudio.constants.Finishings.EDGE_BINDING) {
                this.finishing = new window.cabinetstudio.EdgeBinding(tempThickness);
            } else if (finishType === window.cabinetstudio.constants.Finishings.LAMINATION) {
                this.finishing = new window.cabinetstudio.Lamination(tempThickness);
            }
        }
    }

};