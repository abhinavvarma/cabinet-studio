window.cabinetstudio = window.cabinetstudio || {};
window.cabinetstudio.Face = function Face(finishType) {
    "use strict";
    this.finishing = null;
    if (finishType) {
        if (finishType === "EDGEBINDING") {
            this.finishing = new window.cabinetstudio.EdgeBinding(0);
        } else if (finishType === "LAMINATION") {
            this.finishing = new window.cabinetstudio.Lamination(0);
        }
    }
};