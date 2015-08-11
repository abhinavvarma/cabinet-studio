/**
 * Created by Techyard Systems PVT LTD on 7/7/2015.
 */
window.cabinetStudio.cfMaterial  = window.cabinetStudio.cfMaterial || {};
(function(m){

    'use strict';

     m.material = function (type, options) {

        this.type = type;
        this.options = options;
        this.shading = THREE.SmoothShading;

    };
    m.material.prototype = function () {
    };
    m.material.prototype.setMaterial = function (object, success) {

        if (this.options) {


            if (this.options.image) {
                var imgTexture = new THREE.ImageUtils.loadTexture(this.options.image);
                imgTexture.wrapS = imgTexture.wrapT = THREE.RepeatWrapping;
                 imgTexture.repeat.set(this.options.repeatU, this.options.repeatV);
                imgTexture.anisotropy = this.options.anisotropy;
                imgTexture.minFilter = THREE.NearestFilter;
                 imgTexture.mapping = THREE.UVMapping;
                imgTexture.magFilter = THREE.NearestFilter;
                imgTexture.side = this.options.side;

                this.texture = imgTexture;
            }
            if (this.options.bump) {

                var bumpTexture = new THREE.ImageUtils.loadTexture(this.options.bump);
                bumpTexture.wrapS = imgTexture.wrapT = THREE.RepeatWrapping;
                bumpTexture.repeat.set(this.options.repeatU, this.options.repeatV);
                bumpTexture.minFilter = THREE.NearestFilter;
                bumpTexture.mapping = THREE.UVMapping;
                bumpTexture.magFilter = THREE.NearestFilter;
                bumpTexture.anisotropy = this.options.anisotropy;
                this.bump = bumpTexture;

            } else {

                this.bump = imgTexture;
            }

            switch (this.type) {

                case 'face':

                    var materials = [];
                    if (this.options.materials.length > 0) {
                        var face = new THREE.MeshFaceMaterial(materials);
                        success(new THREE.Mesh(object, face));
                    }
                    break;
                case 'lambert':
                    var matLam;
                    if (this.texture != null) {
                        matLam = new THREE.MeshLambertMaterial({ map: this.texture,shading: this.shading });
                        matLam.combine = THREE.MixOperation;
                        success(new THREE.Mesh(object, matLam));
                    } else if (this.options.color) {
                        matLam = new THREE.MeshLambertMaterial({color: new THREE.Color(this.options.color), shading: this.shading, combine: THREE.MixOperation, reflectivity: 1});
                        matLam.combine = THREE.AddOperation;
                        success(new THREE.Mesh(object, matLam));
                    }
                    break;
                case 'phong':
                    var matphong;
                    if (this.options.image == null) {
                        matphong = new THREE.MeshPhongMaterial({bumpScale:0.5,specular:0x00ffaa,color:this.options.color, shading: this.shading, combine: THREE.MixOperation, reflectivity: 0.2});
                        success(new THREE.Mesh(object, matphong));
                    }else{

                        matphong = new THREE.MeshPhongMaterial({map:this.texture,bumpScale:0.5,shading: this.shading, combine: THREE.MixOperation, reflectivity: 0});
                        success(new THREE.Mesh(object, matphong));


                    }
                    break;
                case 'depth':
                    var matDepth;
                    matDepth = new THREE.MeshDepthMaterial({ wireframe: this.wireframe});
                    success(new THREE.Mesh(object, matDepth));
                    break;
                case 'line':
                    var matlinebase;
                    matlinebase = new THREE.LineBasicMaterial({ vertexColors: this.color});
                    success(new THREE.Mesh(object, matlinebase));
                    break;
                case 'normal':
                    var matnormal;
                    matnormal = new THREE.MeshNormalMaterial({wireframe: this.wireframe});
                    success(new THREE.Mesh(object, matnormal));
                    break;
                case 'basic':
                    var matbasic;

                    if (this.texture != null) {
                        matbasic = new THREE.MeshBasicMaterial({ map: this.texture, color: 'rgb(255,255,255)', shading: this.shade, reflectivity: 0.5 });
                        success(new THREE.Mesh(object, matLam));
                    } else if (this.options.color) {
                        matbasic = new THREE.MeshBasicMaterial({wireframe: this.wireframe, vertexColors: this.color, shading: this.shade, combine: THREE.MixOperation, reflectivity: 0.5});
                        success(new THREE.Mesh(object, matLam));
                    }
                    break;
                default:

                    break;

            }


        }


    };




}(window.cabinetStudio.cfMaterial));