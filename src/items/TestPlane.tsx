
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export const TestPlane = React.forwardRef((props, ref) => {
  const group = useRef();
  const { nodes, materials } = useGLTF("/testPlane.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
			ref={ref}
        castShadow
        receiveShadow
        geometry={nodes["Airplane-Gpa"].geometry}
        material={nodes["Airplane-Gpa"].material}
				scale={100}
				position={0}
      />
    </group>
  );
})

useGLTF.preload("/testPlane.glb");