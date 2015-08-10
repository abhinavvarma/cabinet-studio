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
        this.stretcherWidth = 10;
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

    cs.Cabinet.prototype.constructBottomFace = function () {
        var face = window.cabinetstudio.constants.Faces.BOTTOM;
        var plankConfig = this.plankConfig[face];
        var leftJointConfig = this.jointConfig[window.cabinetstudio.constants.Corners.BOTTOM_LEFT];
        var rightJointConfig = this.jointConfig[window.cabinetstudio.constants.Corners.RIGHT_BOTTOM];
        var leftOffset=0,rightOffset=0;
        if(leftJointConfig.primaryFace != face && (leftJointConfig.type==window.cabinetstudio.constants.Joints.BUTT
            || leftJointConfig.type==window.cabinetstudio.constants.Joints.GROOVE)){
            leftOffset = this.plankConfig[window.cabinetstudio.constants.LEFT].thickness;
        }
        if(rightJointConfig.primaryFace != face && (rightJointConfig.type==window.cabinetstudio.constants.Joints.BUTT
            || rightJointConfig.type==window.cabinetstudio.constants.Joints.GROOVE)){
            rightOffset = this.plankConfig[window.cabinetstudio.constants.RIGHT].thickness;
        }
        var length = this.width-leftOffset-rightOffset;
        var width = this.depth;
        var thickness= this.plankConfig[window.cabinetstudio.constants.BOTTOM].thickness;
        return new cs.Plank(length,width,thickness);
    }

}) (window.cabinetstudio = window.cabinetstudio || {});

var plankConfig = {
    'left': {
        isStretchered:false,
        thickness:10
    },
    'right': {
        isStretchered:false,
        thickness:10
    },
    'top': {
        isStretchered:true,
        noOfStretchers:2,
        thickness:10
    },
    'bottom': {
        isStretchered:false,
        thickness:10
    }
};

var jointConfig = {
    'leftTop': {
        'type':window.cabinetstudio.constants.Joints.BUTT,
        'primaryFace':window.cabinetstudio.constants.Faces.TOP
    },
    'topRight': {
        'type':window.cabinetstudio.constants.Joints.BUTT,
        'primaryFace':window.cabinetstudio.constants.Faces.TOP
    },
    'rightBottom': {
        'type':window.cabinetstudio.constants.Joints.BUTT,
        'primaryFace':window.cabinetstudio.constants.Faces.BOTTOM
    },
    'bottomLeft': {
        'type':window.cabinetstudio.constants.Joints.BUTT,
        'primaryFace': window.cabinetstudio.constants.Faces.BOTTOM
    },
    'back': {
        'type':window.cabinetstudio.constants.Joints.GROOVE
    }
}