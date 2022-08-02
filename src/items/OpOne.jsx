

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import {useStore} from "../state";

export default function Model(props) {
  const group = useRef();
	const setText = useStore((state) => state.setText);
  const { nodes, materials } = useGLTF("/op_one.glb");
	const handleClick = () => {
		setText(["This is the OP-1 which was used to make all the sounds and music."]);
	}
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow	
        receiveShadow
        geometry={nodes.Object_2.geometry}
        material={materials["palette.002"]}
				onClick={handleClick}
      />
    </group>
  );
}

useGLTF.preload("/op_one.glb");
