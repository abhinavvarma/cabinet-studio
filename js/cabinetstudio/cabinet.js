(function (cs) {
    "use strict";
    cs.Cabinet = function (width, height, depth, plankConfig, jointConfig) {
        cs.Entity.call(this); //extends Entity
        this.width = width;
        this.height = height;
        this.depth = depth;
        this.plankConfig = plankConfig;
        this.jointConfig = jointConfig;
        this.leftPlanks = new Array();
        this.rightPlanks = new Array();
        this.topPlanks = new Array();
        this.bottomPlanks = new Array();
    };

    cs.Cabinet.prototype.constructFacePlanks = function (face) {
        var plankConfig = this.plankConfig[face];
        var plankWidth,plankHeight,plankThickness;
        switch(face) {
            case 'left':
                break;
            case 'right':
                break;
        }
    };

}) (window.cabinetstudio = window.cabinetstudio || {});

var plankConfig = {
    'left': {
        isStretchered:false
    },
    'right': {
        isStretchered:false
    },
    'top': {
        isStretchered:true,
        noOfStretchers:2
    },
    'bottom': {
        isStretchered:false
    }
};

var jointConfig = {
    'leftTop': {
        'type':'butt',
        'primaryFace':'top'
    },
    'topRight': {
        'type':'butt',
        'primaryFace':'top'
    },
    'rightBottom': {
        'type':'butt',
        'primaryFace':'bottom'
    },
    'bottomLeft': {
        'type':'butt',
        'primaryFace':'bottom'
    },
    'back': {
        'type':'groove'
    }
}