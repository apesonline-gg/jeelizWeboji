"use strict";

// entry point:
function main(){
  JeelizWebojiThreeHelper.init({
    canvasThreeId: 'webojiCanvas',
    canvasId: 'jeelizFaceExpressionsCanvas',

    assetsParentPath: '../../../assets/3D/',
    NNCPath: '../../../dist/',

    // BOY:
    meshURL: 'meshes/headmorphs.json',
    matParameters: {
      render: 'BASIC',
      diffuseMapURL: 'textures/diffuse_boy.png',
      flexMapURL: 'textures/flex_boy.png'
    }, //*/

    successCallback: function(three){
      three.renderer.toneMapping = THREE.NoToneMapping;
      three.renderer.outputEncoding = THREE.LinearEncoding;
    },

    position: [0, -100, 0],
    rotation: [-10, 0, 0],
    scale: 1.2
  });
}
