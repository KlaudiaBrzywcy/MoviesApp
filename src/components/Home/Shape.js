import React from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import texture from './texture.jpg';



export function Box () {
    const colorMap = useLoader(TextureLoader, texture);

    return (
        <mesh rotation={[90,0,20]}>
            <boxBufferGeometry attach="geometry" args={[3,3,3]}/>
            {/* <meshLambertMaterial attach="material" color="pink"/>  */}
            <meshStandardMaterial map={colorMap}/>

        </mesh>
    )
}
