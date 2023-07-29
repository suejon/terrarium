import { forwardRef, useMemo } from "react";
import { useGLTF } from "@react-three/drei";
import { Vector3 } from "three";
import { GhibliShader } from "./GhibliShader";

export const Trees = forwardRef((props, ref) => {
  const { nodes } = useGLTF("/trees.glb");

  const uniforms = useMemo(
    () => ({
      colorMap: {
        value: props.colors,
      },
      brightnessThresholds: {
        value: [0.6, 0.35, 0.001],
      },
      lightPosition: { value: new Vector3(15, 15, 15) },
    }),
    [props.colors]
  );

  return (
    <group {...props} ref={ref} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Foliage.geometry}
        position={[0.33, -0.05, -0.68]}
      >
        <shaderMaterial
          attach="material"
          {...GhibliShader}
          uniforms={uniforms}
        />
      </mesh>
      <mesh
        position={[0.33, -1.05, -0.68]}
      >
        <cylinderGeometry args={[0.5, 0.5, 4, 16]} />
        <meshBasicMaterial color={0x654321} />
      </mesh>
    </group>
  );
});

useGLTF.preload("/trees.glb");
