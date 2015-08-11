window.cabinetstudio = window.cabinetstudio || {};
window.cabinetstudio.Face = function Face(finishType) {
    "use strict";
    this.finishing = null;
    if (finishType) {
        if (finishType === window.cabinetstudio.constants.FINISHINGS.EDGE_BINDING) {
            this.finishing = new window.cabinetstudio.EdgeBinding(0);
        } else if (finishType === window.cabinetstudio.constants.FINISHINGS.LAMINATION) {
            this.finishing = new window.cabinetstudio.Lamination(0);
        }
    }
};