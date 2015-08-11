/**
 * Created by Techyard Systems PVT LTD on 7/7/2015.
 */

window.cabinetStudio.cfEditor = window.cabinetStudio.cfEditor ||{};
(function(e){

    'use strict';

     e.Editor = function () {


        this.config = new window.CFConfig.Config();
        this.storage = new window.CFStorage.Storage();
        this.loader = new window.CFLoader.Loader(this);
        this.camera = new THREE.PerspectiveCamera(45,window.innerWidth/window.innerHeight,1,100);
        this.camera.name = 'CFCamera';
        this.scene = new THREE.Scene();
        this.scene.name = 'CFScene';
        this.sceneHelpers = new THREE.Scene();
        this.object = {};
        this.geometries = {};
        this.materials = {};
        this.textures = {};
        this.selected = null;
        this.helpers = new THREE.Scene();
        this.components = {};

    };

    e.Editor.prototype = {


        setScene: function (scene) {

            this.scene.uuid = scene.uuid;
            this.scene.name = scene.name;
            this.scene.userData = JSON.parse(JSON.stringify(scene.userData));

            this.signals.sceneGraphChanged.active = false;

            while (scene.children.length > 0) {

                this.addObject(scene.children[ 0 ]);

            }


        },


        addObject: function (object) {

            var scope = this;

            object.traverse(function (child) {

                if (child.geometry !== undefined) { scope.addGeometry(child.geometry); }
                if (child.material !== undefined) { scope.addMaterial(child.material); }

                scope.addHelper(child);

            });

            this.scene.add(object);



        },

        moveObject: function (object, parent, before) {

            if (parent === undefined) {

                parent = this.scene;

            }
            parent.add(object);

            if (before !== undefined) {

                var index = parent.children.indexOf(before);
                parent.children.splice(index, 0, object);
                parent.children.pop();

            }


        },
        nameObject: function (object, name) {

            object.name = name;


        },

        removeObject: function (object) {

            if (object.parent === undefined) return; // avoid deleting the camera or scene

            var scope = this;

            object.traverse(function (child) {

                scope.removeHelper(child);

            });

            object.parent.remove(object);



        },

        addGeometry: function (geometry) {

            this.geometries[ geometry.uuid ] = geometry;

        },

        setGeometryName: function (geometry, name) {

            geometry.name = name;


        },

        addMaterial: function (material) {

            this.materials[ material.uuid ] = material;

        },

        setMaterialName: function (material, name) {

            material.name = name;


        },

        addTexture: function (texture) {

            this.textures[ texture.uuid ] = texture;

        },
        addHelper: function () {

            var geometry = new THREE.SphereGeometry(20, 4, 2);
            var material = new THREE.MeshBasicMaterial({ color: 0xff0000 });

            return function (object) {

                var helper;

                if (object instanceof THREE.Camera) {

                    helper = new THREE.CameraHelper(object, 10);

                } else if (object instanceof THREE.PointLight) {

                    helper = new THREE.PointLightHelper(object, 10);

                } else if (object instanceof THREE.DirectionalLight) {

                    helper = new THREE.DirectionalLightHelper(object, 20);

                } else if (object instanceof THREE.SpotLight) {

                    helper = new THREE.SpotLightHelper(object, 10);

                } else if (object instanceof THREE.HemisphereLight) {

                    helper = new THREE.HemisphereLightHelper(object, 10);

                } else if (object instanceof THREE.SkinnedMesh) {

                    helper = new THREE.SkeletonHelper(object);

                } else {

                    // no helper for this object type
                    return;

                }

                var picker = new THREE.Mesh(geometry, material);
                picker.name = 'picker';
                picker.userData.object = object;
                picker.visible = false;
                helper.add(picker);

                this.sceneHelpers.add(helper);
                this.helpers[ object.id ] = helper;



            };

        }(),

        removeHelper: function (object) {

            if (this.helpers[ object.id ] !== undefined) {

                var helper = this.helpers[ object.id ];
                helper.parent.remove(helper);

                delete this.helpers[ object.id ];



            }

        },
        select: function (object) {

            if (this.selected === object) return;

            var uuid = null;

            if (object !== null) {

                uuid = object.uuid;

            }

            this.selected = object;

            this.config.setConfig('selected', uuid);


        },

        selectById: function (id) {

            if (id === this.camera.id) {

                this.select(this.camera);
                return;

            }

            this.select(this.scene.getObjectById(id, true));

        },

        selectByUuid: function (uuid) {

            var scope = this;

            this.scene.traverse(function (child) {

                if (child.uuid === uuid) {

                    scope.select(child);

                }

            });

        },

        deselect: function () {

            this.select(null);

        },

        focus: function (object) {



        },

        focusById: function (id) {

            this.focus(this.scene.getObjectById(id, true));

        },

        clear: function () {

            this.camera.position.set(500, 250, 500);
            this.camera.lookAt(new THREE.Vector3());

            var objects = this.scene.children;

            while (objects.length > 0) {

                this.removeObject(objects[ 0 ]);

            }

            this.geometries = {};
            this.materials = {};
            this.textures = {};
            this.scripts = {};

            this.deselect();



        },

        fromJSON: function (json) {

            var loader = new THREE.ObjectLoader();

            if (json.scene === undefined) {

                var scene = loader.parse(json);

                this.setScene(scene);

                return;

            }

            // TODO: Clean this up somehow

            var camera = loader.parse(json.camera);
            this.camera.position.copy(camera.position);
            this.camera.rotation.copy(camera.rotation);
            this.camera.aspect = camera.aspect;
            this.camera.near = camera.near;
            this.camera.far = camera.far;
            this.setScene(loader.parse(json.scene));


        },

        toJSON: function () {

            return {

                camera: this.camera.toJSON(),
                scene: this.scene.toJSON()


            };

        },
        setParent:function() {

            var object = editor.selected;

            if (object !== null) {

                if (object.parent !== undefined) {

                    var newParentId = parseInt(objectParent.getValue());

                    if (object.parent.id !== newParentId && object.id !== newParentId) {

                        this.moveObject(object, this.scene.getObjectById(newParentId));

                    }

                }


            }
        }

    };



    e.initialize = function(){


        e.configuration.Editor.init();



    };


}(window.cabinetStudio.cfEditor));