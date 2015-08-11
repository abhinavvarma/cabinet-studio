/*jslint vars:true */

window.cabinetstudio = window.cabinetstudio || {};

(function (cs) {
    "use strict";
    cs.Cabinet = function (width, height, depth, plankConfig, jointConfig) {
        cs.Entity.call(this); //extends Entity
        this.width = width;
        this.height = height;
        this.depth = depth;
        this.plankConfig = plankConfig;
        this.jointConfig = jointConfig;
        this.leftPlanks = null;
        this.rightPlanks = null;
        this.topPlanks = null;
        this.bottomPlanks = null;
    };

    cs.utils.oops.inherit(cs.Cabinet, cs.Entity);

    cs.Cabinet.facesIndexed = [
        window.cabinetstudio.constants.Faces.BOTTOM,
        window.cabinetstudio.constants.Faces.LEFT,
        window.cabinetstudio.constants.Faces.TOP,
        window.cabinetstudio.constants.Faces.RIGHT
    ];

    cs.Cabinet.cornersIndexed = [
        window.cabinetstudio.constants.Corners.BOTTOM_LEFT,
        window.cabinetstudio.constants.Corners.LEFT_TOP,
        window.cabinetstudio.constants.Corners.TOP_RIGHT,
        window.cabinetstudio.constants.Corners.RIGHT_BOTTOM
    ];

    cs.Cabinet.getAdjacentJoints = function (face) {
        var faceIndex = cs.Cabinet.facesIndexed.indexOf(face);
        return [
            cs.Cabinet.cornersIndexed[faceIndex],
            cs.Cabinet.cornersIndexed[window.cabinetstudio.utils.math.modulo(faceIndex - 1, cs.Cabinet.cornersIndexed.length)]];
    };

    cs.Cabinet.getAdjacentFaces = function (face) {
        var faceIndex = cs.Cabinet.facesIndexed.indexOf(face);
        return [
            cs.Cabinet.facesIndexed[window.cabinetstudio.utils.math.modulo(faceIndex - 1, cs.Cabinet.facesIndexed.length)],
            cs.Cabinet.facesIndexed[window.cabinetstudio.utils.math.modulo(faceIndex + 1, cs.Cabinet.facesIndexed.length)]
        ];
    };

    cs.Cabinet.prototype.constructFaces = function () {
        this.bottomPlanks = this.constructFace(cs.constants.Faces.BOTTOM);
        this.leftPlanks = this.constructFace(cs.constants.Faces.LEFT);
        this.topPlanks = this.constructFace(cs.constants.Faces.TOP);
        this.rightPlanks = this.constructFace(cs.constants.Faces.RIGHT);
    };

    cs.Cabinet.prototype.constructFace = function (face) {
        var adjacentJoints = cs.Cabinet.getAdjacentJoints(face);
        var adjacentFaces = cs.Cabinet.getAdjacentFaces(face);
        var leftJointConfig = this.jointConfig[adjacentJoints[0]];
        var rightJointConfig = this.jointConfig[adjacentJoints[1]];
        var leftOffset = 0, rightOffset = 0;
        if (leftJointConfig.primaryFace !== face && (leftJointConfig.type === window.cabinetstudio.constants.Joints.BUTT
            || leftJointConfig.type === window.cabinetstudio.constants.Joints.GROOVE)) {
            leftOffset = this.plankConfig[adjacentFaces[0]].thickness;
        }
        if (rightJointConfig.primaryFace !== face && (rightJointConfig.type === window.cabinetstudio.constants.Joints.BUTT
            || rightJointConfig.type === window.cabinetstudio.constants.Joints.GROOVE)) {
            rightOffset = this.plankConfig[adjacentFaces[1]].thickness;
        }
        var planks = [];
        var length = (cs.Cabinet.facesIndexed.indexOf(face) % 2 === 0 ? this.width : this.height) - leftOffset - rightOffset;
        var thickness = this.plankConfig[face].thickness;
        var width;
        if (this.plankConfig[face].isStretchered) {
            width = this.plankConfig[face].stretcherWidth;
            var currentStretcher;
            for (currentStretcher = 0; currentStretcher < this.plankConfig[face].noOfStretchers; currentStretcher++) {
                planks.push(new cs.Plank(length, width, thickness));
            }
        } else {
            width = this.depth;
            planks.push(new cs.Plank(length, width, thickness));
        }
        return planks;
    };

    cs.Plank = function (length, width, thickness) {
        console.log([length, width, thickness]);
    };

}(window.cabinetstudio));

var plankConfig = {
    'left': {
        isStretchered: false,
        thickness: 10
    },
    'right': {
        isStretchered: false,
        thickness: 10
    },
    'top': {
        isStretchered: true,
        noOfStretchers: 2,
        stretcherWidth: 30,
        thickness: 10
    },
    'bottom': {
        isStretchered: false,
        thickness: 10
    }
};

var jointConfig = {
    'leftTop': {
        'type': window.cabinetstudio.constants.Joints.BUTT,
        'primaryFace': window.cabinetstudio.constants.Faces.TOP
    },
    'topRight': {
        'type': window.cabinetstudio.constants.Joints.BUTT,
        'primaryFace': window.cabinetstudio.constants.Faces.TOP
    },
    'rightBottom': {
        'type': window.cabinetstudio.constants.Joints.BUTT,
        'primaryFace': window.cabinetstudio.constants.Faces.BOTTOM
    },
    'bottomLeft': {
        'type': window.cabinetstudio.constants.Joints.BUTT,
        'primaryFace': window.cabinetstudio.constants.Faces.BOTTOM
    },
    'back': {
        'type': window.cabinetstudio.constants.Joints.GROOVE
    }
};