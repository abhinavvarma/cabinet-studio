/**
 * Created by Techyard Systems PVT LTD on 7/7/2015.
 */
window.cabinetStudio.cfConfig =window.cabinetStudio.cfConfig || {};
(function (c) {

    'use strict';

    c.EditorConfig = {

        name : 'CFurnish_Editor',
        configData : {

            save: true,
            cameraPosition: {x:0, y:-2, z:12},
            cameraTarget: [0, -2,0],
            renderer:'WebGLRenderer',
            units: 'cm',
            selected:null

        }

    };




    c.Editor = function () {

    };

    c.Editor.init = function () {


        this.setConfig(c.EditorConfig);

    };
    c.Editor.getConfig = function () {

        if (window.CFStorage.IsAvailable) {

            var config = window.CFStorage.getValueFromStore(window.CFStorage.confKey);
            if (!config) {

               return  this.defaultConfig();

            }

        } else {

            return window.CFStorage.getValueFromStore(window.CFStorage.confKey);

        }

    };
    c.Editor.setConfig = function (config) {

        if (window.CFUtils.checkStorage()) {

            window.CFStorage.saveToStore(config);
        }

    };
    c.Editor.updateConfig = function (key,value) {




    };
    c.Editor.defaultConfig = function () {


    };


}(window.cabinetStudio.cfConfig));