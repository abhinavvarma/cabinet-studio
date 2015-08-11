/**
 * Created by Techyard Systems PVT LTD on 7/8/2015.
 */

window.cabinetStudio.cfScene = window.cabinetStudio.cfScene || {};
(function (s) {

    'use strict';

    s.Scene = function (editor) {

        var scene = new THREE.Scene();
        scene.editor = editor;
        return scene;


    };
    // scene utils;


}(window.cabinetStudio.cfScene));