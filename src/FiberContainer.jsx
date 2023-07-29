import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei";
import { Scene } from "./Scene";
import { Ground } from "./Ground";

export function FiberContainer() {
  return (
    <Canvas
      camera={{ position: [10, 10, 50], fov: 10 }} shadows>
      <Scene />
      <Ground />
      <OrbitControls minDistance={1} maxDistance={200} />
    </Canvas>
  )

}
