import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";
import {useStore} from "../state.js";

type GLTFResult = GLTF & {
  nodes: {
    ["Airplane-Gpa"]: THREE.Mesh;
  };
  materials: {
    ["white plastic"]: THREE.MeshStandardMaterial;
  };
};

export default function Airplane(props: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group>();
	const {printText, texts} = props;
	const {  airplane, collectAirplane, setButton, hideButton, addToInventory, inventory } = useStore();
  const { nodes, materials } = useGLTF("/airplane.glb") as GLTFResult;

const pickUpPlane = () => {
	printText(["You pick up the airplane"]);
	collectAirplane();
}

	const handlePlaneClick = (e) => {
		e.stopPropagation();
		printText(texts.airplane);
		setButton({
			text: "Pick it up",
			click: () => addToInventory("airplane"),
			afterClick: pickUpPlane,
			hideButton: hideButton,
		});

	}

  return (
		<>
   {airplane.printed && !airplane.inInventory && <group ref={group} {...props} dispose={null} onClick={handlePlaneClick}  >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Airplane-Gpa"].geometry}
        material={materials["white plastic"]}
				
      />
    </group>}
		</>
  );
}

useGLTF.preload("/airplane.glb");