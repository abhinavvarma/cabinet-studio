/**
 * Created by Techyard Systems PVT LTD on 7/7/2015.
 */
window.cabinetStudio.cfViewPort = window.cabinetStudio.cfViewPort || {};
(function (v) {

    'use strict';

    v.Viewport = function (editor) {

        var signals = editor.signals, container = $('#cf-Editor'),
            scene = editor.scene,
            sceneHelpers = editor.sceneHelpers,
            objects = [],
            camera = editor.camera,
            config = editor.config.configData,
            controls,raycaster;


        container.dom = $(container).get(0);


        camera.position.set(config.cameraPosition.x, config.cameraPosition.y, config.cameraPosition.z);
        camera.lookAt(new THREE.Vector3().fromArray(config.cameraTarget));


        controls = new THREE.OrbitControls(camera, container.dom);
        controls.rotateUp(Math.PI / 4);
        controls.target.set(
                camera.position.x + 0.1,
            camera.position.y,
            camera.position.z
        );




        // object picking

         raycaster = new THREE.Raycaster();
         var mouse = new THREE.Vector2(),
            getIntersects = function (point, object) {

                mouse.set(( point.x * 2 ) - 1, -( point.y * 2 ) + 1);

                raycaster.setFromCamera(mouse, camera);

                if (object instanceof Array) {

                    return raycaster.intersectObjects(object);

                }

                return raycaster.intersectObject(object);

            };

        var onDownPosition = new THREE.Vector2();
        var onUpPosition = new THREE.Vector2();
        var onDoubleClickPosition = new THREE.Vector2();

        var getMousePosition = function (dom, x, y) {

            var rect = dom.getBoundingClientRect();
            return [ ( x - rect.left ) / rect.width, ( y - rect.top ) / rect.height ];

        };



        var createRenderer = function (type, antialias) {

            if (type === 'WebGLRenderer') {

                // type = 'CanvasRenderer';

            }

            var renderer = new THREE[ type ]({ antialias: antialias });0
            renderer.setPixelRatio(window.devicePixelRatio);
            renderer.autoClear = false;
            renderer.autoUpdateScene = false;




            return renderer;

        };


        var renderer = createRenderer(config.renderer, true);
        container.dom.appendChild(renderer.domElement);


        return container;

    };


}(window.cabinetStudio.cfViewPort));