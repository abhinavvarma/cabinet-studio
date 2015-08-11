(function(cs){
    "use strict";
    cs.ToObject = function(input){
        var plankGeometry = new THREE.Geometry();
        for(var i=0;i<8;i++){
            plankGeometry.vertices.push(new THREE.Vector3(input[0][i],input[1][i],input[2][i]));
        }

        //bottom face
        plankGeometry.faces.push(new THREE.Face3(0,1,3));
        plankGeometry.faces.push(new THREE.Face3(1,2,3));

        //top face
        plankGeometry.faces.push(new THREE.Face3(7,6,5));
        plankGeometry.faces.push(new THREE.Face3(7,5,4));

        //left face
        plankGeometry.faces.push(new THREE.Face3(0,3,7));
        plankGeometry.faces.push(new THREE.Face3(0,7,4));

        //front face
        plankGeometry.faces.push(new THREE.Face3(3,2,6));
        plankGeometry.faces.push(new THREE.Face3(3,6,7));

        //right face
        plankGeometry.faces.push(new THREE.Face3(2,1,5));
        plankGeometry.faces.push(new THREE.Face3(2,5,6));

        //back face
        plankGeometry.faces.push(new THREE.Face3(1,0,4));
        plankGeometry.faces.push(new THREE.Face3(1,4,5));

        var plankMaterial = new THREE.MeshBasicMaterial({color:0x404040});

        var plank = new THREE.Mesh(plankGeometry , plankMaterial);
        plank.name = "PLANK";
        scene.add(plank);

    };

})(window.cabinetstudio = window.cabinetstudio || {});