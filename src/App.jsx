import React from 'react'
import { Canvas } from '@react-three/fiber'
import './style.css';
import Mac from './Mac'
import { Environment, OrbitControls, ScrollControls } from '@react-three/drei';


const App = () => {
  return (
 
  <Canvas camera={{fov : 12, position: [0,-10,220]}}>
    {/* position gives for xaxis ,  yaxis and zaxis */}
  
<OrbitControls/>
    <Environment 
      files={[
        "https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_09_4k.exr"
      ]}
// HDRI Download
    />


    {/* it is used for movement  fov is used for field of view*/}
       <ScrollControls pages={3}>
        <Mac />      
        </ScrollControls>

    </Canvas>

  );
};

export default App;

// iScroll controller is helpful for doing an animations.

    
   {/* <div className=" flex flex-col items-center absolute top-32 text-white left-1/2 -translate-x-1/2 font-['Helvetica_Now_Display']">
 <h3 className='text-7xl absolute flex  tracking-lighter font-[700]'>Macbook Pro</h3> 
   </div>   */}