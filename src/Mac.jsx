import React from 'react'
import {useGLTF, useScroll, useTexture} from '@react-three/drei'
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

const Mac = () => {
    const model = useGLTF("./mac.glb");
    const tex = useTexture("./red.jpg");
    
    const meshes = {};

    model.scene.traverse((e) => {       
    meshes[e.name] = e;
        });

        // console.log(meshes.screen);
        
         meshes.screen.rotation.x = THREE.MathUtils.degToRad(180);
         meshes.matte.material.map = tex;
         meshes.matte.material.emissiveIntensity = 0;
         meshes.matte.material.metalness = 0;
         meshes.matte.material.roughness = 1;

          let data = useScroll();
         useFrame((state,delta) => {
            meshes.screen.rotation.x = THREE.MathUtils.degToRad(180 - data.offset * 90);
    });

        return (    
    <group position={[0,-10,20]}>
        <primitive object={model.scene} />
    </group>

    );
};

export default Mac;



   // data will provide how much scroll have done
   
   // hook from react fibre it accept two thing state and delta 
   // delta is time frame it support according to sytem configuration.from(selector, {duration: 1, fromVars}) 
    // if(e instanceof THREE.Mesh || e instanceof THREE.Group){
   
        // }
                // condition wherdescribe that the three.mesh is presh or gropu is present
        // if any condition becomes true than it should be added on meshes
///  traverse is used for go to each frames 
 // if(e instanceof THREE.Mesh || e instanceof THREE.Group){
 //}