import { Canvas } from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";

export default function Scene() {
  return (

    <Canvas>
        <OrbitControls/>
      <mesh>
        <boxGeometry/>
        <meshStandardMaterial/>
      </mesh>
    </Canvas>
  )
}
