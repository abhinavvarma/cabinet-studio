/**
 * Created by Techyard Systems PVT LTD on 7/7/2015.
 */
window.cabinetStudio.cfUtils = window.cabinetStudio.cfUtils || {};
(function (u) {

    'use strict';

    u.checkStorage = function () {

        if (Modernizr.localstorage) {

            return true;

        } else {

            //show error
        }

    };
    u.checkWebgl = function (success) {

        if (Modernizr.webgl) {

            success();

        }

    };
    u.FeetToCm = function (feet) {

        return parseFloat((feet / 0.032808).toFixed(2));

    };
    u.InchToCm = function (inches) {

        return parseFloat((inches / 2.54).toFixed(2));
    };

    u.FtToPx = function () {

    };
    u.CanvasVisibleDimensions = function (camera) {

        var viewDimensions = {};
        var dist = camera.position.z;
        var vFOV = camera.fov * Math.PI / 180;
        var height = 2 * Math.tan(vFOV / 2) * dist;
        viewDimensions.width = height * camera.aspect;
        viewDimensions.height = height;

    };
    u.setGlobalSetting = function (roomDimensions) {

       /* var csFurnish = window.CFurniture, csCamera = window.CCamera, csScene = window.CScene;
        csFurnish.dimensions = {

            fov: 55,
            near: 1,
            far: u.feetToMm(roomDimensions.depth)/100,
            height: 0,
            width: 0,
            depth: 0,
            aspect: window.innerWidth / window.innerHeight,
            cameraPosition: {
                x: 0,
                y: 0,
                z: 0
            }

        };
        csCamera.defaultCamera(1, csFurnish.dimensions.far, csFurnish.dimensions.cameraPosition);
        csFurnish.dimensions.height = 2 * Math.tan(csFurnish.dimensions.fov / 2) * (csFurnish.dimensions.far - 2);
        csFurnish.dimensions.width = csFurnish.dimensions.height * csFurnish.dimensions.aspect;*/

    };


}(window.cabinetStudio.cfUtils));