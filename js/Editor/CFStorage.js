/**
 * Created by Techyard Systems PVT LTD on 7/7/2015.
 */
(function (s) {

    'use strict';

    s.IsAvailable = false;

    s.confKey = 'CF_VIEWER_CONF_KEY';

    s.saveToStore = function (config) {

        s.IsAvailable = true;

        localStorage.setItem(s.confKey, JSON.stringify(config));

    };
    s.getValueFromStore = function (key) {

        if(s.IsAvailable) {

          return JSON.parse(localStorage.getItem(key));

        }else{

            return false;
        }
    };
    s.addKeyToStore = function (key, value) {

        if(s.IsAvailable)
        {
             return localStorage.setItem(key, value);
        }


    };
    s.clearStorage = function () {

        localStorage.clear();

    };

})(window.CFStorage = window.CFStorage || {});