import React from 'react'
import { Canvas } from '@react-three/fiber'
import "./style.css";
import { OrbitControls } from '@react-three/drei';
import Cyl from './Cyl';

const Canvasc = () => {
    return (
        <>
           
                <Canvas camera={{ fov: 20 }}>
                    <OrbitControls />
                    <ambientLight />
                    <Cyl />
                </Canvas>
           
        </>
    )
}

export default Canvasc