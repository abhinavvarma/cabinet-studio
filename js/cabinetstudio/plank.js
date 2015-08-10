window.cabinetstudio = window.cabinetstudio || {};
window.cabinetstudio.Plank = function (width, depth, thickNess) {
    "use strict";
    this.depth = depth;
    this.width = width;
    this.thickNess = thickNess;
    var vertices = new Array(3);
    var i;

    for (i = 0; i < vertices.length; i += 1) {
        vertices[i] = new Array(8);
    }

    vertices[0][0] = 0;
    vertices[1][0] = 0;
    vertices[2][0] = 0;

    vertices[0][1] = width;
    vertices[1][1] = 0;
    vertices[2][1] = 0;

    vertices[0][2] = width;
    vertices[1][2] = 0;
    vertices[2][2] = depth;

    vertices[0][3] = 0;
    vertices[1][3] = 0;
    vertices[2][3] = depth;

    vertices[0][4] = 0;
    vertices[1][4] = thickNess;
    vertices[2][4] = 0;

    vertices[0][5] = width;
    vertices[1][5] = thickNess;
    vertices[2][5] = 0;

    vertices[0][6] = width;
    vertices[1][6] = thickNess;
    vertices[2][6] = depth;

    vertices[0][7] = 0;
    vertices[1][7] = thickNess;
    vertices[2][7] = depth;

    this.vertices = vertices;

    this.faces = [];

    for (i = 0; i < 6; i += 1) {
        this.faces.push(new window.cabinetstudio.Face("LAMINATION"));
    }
};

window.cabinetstudio.Plank.prototype.translate = function (xShift, yShift, zShift) {
    "use strict";
    var translationMatrix = window.cabinetstudio.utils.matrix.getIdentityMatrix(4);
    translationMatrix[0][3] = xShift;
    translationMatrix[1][3] = yShift;
    translationMatrix[2][3] = zShift;

    this.vertices = window.cabinetstudio.utils.math.multiplyMatrices(translationMatrix, this.vertices);

};

window.cabinetstudio.Plank.prototype.rotateAroundXAxis = function (angleTheta) {
    "use strict";
    // angle with the xy plane
    if (angleTheta !== 0) {
        var cosTheta = Math.cos(window.cabinetstudio.utils.math.toRadians(angleTheta));
        var sinTheta = Math.sin(window.cabinetstudio.utils.math.toRadians(angleTheta));
        var rotationMatrix = window.cabinetstudio.utils.matrix.getIdentityMatrix(4);
        rotationMatrix[1][1] = cosTheta;
        rotationMatrix[1][2] = -sinTheta;
        rotationMatrix[2][1] = sinTheta;
        rotationMatrix[2][2] = cosTheta;

        this.vertices = window.cabinetstudio.utils.matrix.multiplyMatrices(rotationMatrix, this.vertices);
    }

};

window.cabinetstudio.Plank.prototype.rotateAroundYAxis = function (angleTheta) {
    "use strict";
    // angle with yz plane
    if (angleTheta !== 0) {
        var rotationMatrix = window.cabinetstudio.utils.matrix.getIdentityMatrix(4);
        var cosTheta = Math.cos(window.cabinetstudio.utils.math.toRadians(angleTheta));
        var sinTheta = Math.sin(window.cabinetstudio.utils.math.toRadians(angleTheta));

        rotationMatrix[0][0] = sinTheta;
        rotationMatrix[0][2] = cosTheta;
        rotationMatrix[2][0] = -sinTheta;
        rotationMatrix[2][2] = cosTheta;

        this.vertices = window.cabinetstudio.utils.matrix.multiplyMatrices(rotationMatrix, this.vertices);
    }
};

window.cabinetstudio.Plank.prototype.rotateAroundZAxis = function (angleTheta) {
    "use strict";
    // angle with the xz plane
    if (angleTheta !== 0) {
        var rotationMatrix = window.cabinetstudio.utils.matrix.getIdentityMatrix(4);
        var cosTheta = Math.cos(window.cabinetstudio.utils.math.toRadians(angleTheta));
        var sinTheta = Math.sin(window.cabinetstudio.utils.math.toRadians(angleTheta));

        rotationMatrix[0][0] = cosTheta;
        rotationMatrix[0][1] = -sinTheta;
        rotationMatrix[1][0] = sinTheta;
        rotationMatrix[1][1] = cosTheta;

        this.vertices = window.cabinetstudio.utils.matrix.multiplyMatrices(rotationMatrix, this.vertices);
    }
};

window.cabinetstudio.Plank.prototype.rotate = function (xAngle, yAngle, zAngle) {
    "use strict";
    this.rotateAroundXAxis(xAngle);
    this.rotateAroundYAxis(yAngle);
    this.rotateAroundZAxis(zAngle);
};

