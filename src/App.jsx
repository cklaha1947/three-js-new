

import React from 'react'
//import "./style.css";

import Canvasc from './Canvasc';

const App = () => {
  return (
    <>
    <div className='w-full  bg-[url("https://t4.ftcdn.net/jpg/08/47/61/47/360_F_847614742_sPEZU8n7oCD9ZlW5zobbtYJvtc6e7Rj2.jpg")] bg-cover bg-center h-screen'>
    <Canvasc/>
    </div>
    <div className='w-full  bg-[url("https://thumbs.dreamstime.com/b/sunrise-beach-sun-warm-morning-light-black-sand-background-natural-backgrounds-sunset-366985098.jpg")] bg-cover bg-center h-screen'>
    <Canvasc/>
    </div>
    
    
    </>
  )
}

export default App












/* import { Canvas } from '@react-three/fiber'
import React from 'react'
//import { MeshBasicMaterial } from 'three'
import "./style.css";
import { OrbitControls } from '@react-three/drei';
import Cyl from './Cyl';
//import { AmbientLight } from 'three';
//

const App = () => {
  return (
    <>
     <div className='w-full h-full bg-yellow-600'>
     <Canvas camera={{ fov: 25 }}>
          <OrbitControls />
          <ambientLight />
          <Cyl />
        </Canvas>
     </div>
       
      
      



    </>

  )
}

export default App */