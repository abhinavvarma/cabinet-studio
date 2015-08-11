/**
 * Created by Techyard Systems PVT LTD on 7/7/2015.
 */
window.cabinetStudio.cfLight = window.cabinetStudio.cfLight || {};
(function (l) {

    'use strict';
    l.light = function (editor, type, color, distance, intensity, position, rotation, height, width, hastarget) {

        this.editor = editor;
        this.color = color;
        this.skyColor = 0x0000ff;
        this.groundColor = 0x00ff00;
        this.type = type;
        this.intensity = intensity;
        this.distance = distance;
        this.position = position;
        this.rotation = rotation;
        this.height = height;
        this.width = width;
        this.angle = 120;
        this.exponent = 15;
        this.target = hastarget;
    };
    l.light.prototype.set = function () {

        switch (this.type) {

            case 'ambient':

                var ambient = new THREE.AmbientLight(this.color);
                ambient.shadowDarkness = 0.9;
                ambient.castShadow = true;
                this.editor.addObject(ambient);
                break;
            case 'area':
                var area = new THREE.AreaLight(this.color, this.intensity);
                area.position.set(this.position.x, this.position.y, this.position.z);
                area.width = this.width;
                area.height = this.height;
                area.shadowDarkness = 0.9;
                area.castShadow = true;
                this.editor.addObject(area);
                break;
            case 'directional':
                var directional = new THREE.DirectionalLight(this.color, this.intensity);
                directional.position.set(this.position.x, this.position.y, this.position.z);
                this.editor.addObject(directional);
                break;

            case 'hemi':

                var hemisphere = new THREE.HemisphereLight(this.skyColor, this.groundColor, this.intensity);
                hemisphere.position.set(this.position.x, this.position.y, this.position.z);
                this.editor.addObject(hemisphere);

                break;
            case 'point':

                var point = new THREE.PointLight(this.color, this.intensity, this.distance);
                point.position.set(this.position.x, this.position.y, this.position.z);
                this.editor.addObject(point);

                break;
            case 'spot':

                var spotLight = new THREE.SpotLight(this.color);
                spotLight.intensity = this.intensity;
                spotLight.angle = this.angle;
                spotLight.exponent = this.exponent;
                spotLight.position.set(this.position.x, this.position.y, this.position.z);

                spotLight.shadowCameraVisible = false;
                spotLight.shadowDarkness = 0.9;


                spotLight.castShadow = true;
                spotLight.shadowMapWidth = 1024;
                spotLight.shadowMapHeight = 512;

                spotLight.shadowCameraNear = 0;
                spotLight.shadowCameraFar = 25;
                spotLight.shadowCameraFov = 35;

                if (this.target) {


                    var obj = new THREE.Object3D();
                    obj.position.set(this.rotation.x, this.rotation.y, this.rotation.z);
                    this.editor.addObject(obj);
                    spotLight.target = obj;
                }
                this.editor.addObject(spotLight);
                break;

            default:

                var defambient = new THREE.AmbientLight(this.color);
                this.editor.addObject(defambient);
                break;


        }
    };
    l.update = function (objId) {



    };
    l.setDefault = function () {


    };
    l.setRoomLight = function () {




    };


}(window.cabinetStudio.cfLight));