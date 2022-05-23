/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";
import {useStore} from "../state.js";

type GLTFResult = GLTF & {
  nodes: {
    ["3dPrinterPlugPluggedIn"]: THREE.Mesh;
    ["3dPrinterPlugFloor"]: THREE.Mesh;
    Outlet__0001: THREE.Mesh;
  };
  materials: {
    ["black plastic"]: THREE.MeshStandardMaterial;
    ["Scene_-_Root"]: THREE.MeshStandardMaterial;
  };
};

export default function PrinterCord(props: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group>();
  const { nodes, materials } = useGLTF("/printerCord.glb") as GLTFResult;
	const powered = useStore((state) => state.printer.power);
  const {powerOnPrinter, setText, setButton, hideButton, desk: deskState} = useStore();
  const {printText, texts } = props

  const printerPlugClick = () => {
    deskState.up
      ? printText(texts.printerPlug.deskUp, "printerPlug")
      : printText(texts.printerPlug.deskDown, "printerPlug");

    if (deskState.up) {
      setButton({
        text: "Plug in 3d printer",
        click: powerOnPrinter,
        afterClick: () => setText(["Okay all set."]),
        hideButton: hideButton,
      });
    }
  };

  const printerOutletClick = () => {
    deskState.up
      ? printText(texts.printerOutlet.visible, "printerOutlet")
      : printText(texts.printerOutlet.hidden, "printerOutlet");
  };

  return (
    <group ref={group}  dispose={null}>
    {powered &&  <mesh
        castShadow
        receiveShadow
        geometry={nodes["3dPrinterPlugPluggedIn"].geometry}
        material={nodes["3dPrinterPlugPluggedIn"].material}
        position={[-0.86, 0.72, -1.22]}
      />}
     {!powered && <mesh
        castShadow
        receiveShadow
        geometry={nodes["3dPrinterPlugFloor"].geometry}
        material={nodes["3dPrinterPlugFloor"].material}
        position={[-0.86, -0.02, -0.73]}
        rotation={[-Math.PI, 0, -Math.PI]}
				onClick={printerPlugClick}
      />}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Outlet__0001.geometry}
        material={materials["Scene_-_Root"]}
        position={[-0.86, 0.74, -1.25]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.02}
				onClick={printerOutletClick}
      />
    </group>
  );
}

