/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { texts } from '../text';
import { useStore } from '../state';

export default function ThreePrinter({ printText }) {
  const group = useRef();
  const {
    printer: printerState,
    desk: deskState,
    setButton,
    hideButton,
    setText,
    showScreen,
    dragging,
    installSdCard,
  } = useStore();
  const { nodes, materials } = useGLTF('/3d_printer.glb');

  const handleHover = () => {
    if (dragging.item === 'SDCard') {
      installSdCard();
      setText(['I install the SD card in the 3d printer. Nice.']);
    }
  };

  const printerClick = () => {
    printerState.power
      ? printText(texts.printer.on, 'printer')
      : printText(texts.printer.off, 'printer');

    if (deskState.up && printerState.power) {
      setButton({
        text: 'Look at screen',
        click: showScreen,
        afterClick: () => setText(['You look at the screen...']),
        hideButton: hideButton,
      });
    }
  };

  return (
    <group
      ref={group}
      onClick={printerClick}
      dispose={null}
      onPointerOver={handleHover}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve_Material_0.geometry}
        material={nodes.BezierCurve_Material_0.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve001_Black_resin_0.geometry}
        material={nodes.BezierCurve001_Black_resin_0.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bolts_cyl__0.geometry}
        material={nodes.Bolts_cyl__0.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bolts_cyl001_White_metal_0.geometry}
        material={nodes.Bolts_cyl001_White_metal_0.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bolts_cyl002_White_metal_0.geometry}
        material={nodes.Bolts_cyl002_White_metal_0.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bolts_cyl003_White_metal_0.geometry}
        material={nodes.Bolts_cyl003_White_metal_0.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bolts_cyl004_White_metal_0.geometry}
        material={nodes.Bolts_cyl004_White_metal_0.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bolts_cyl006_White_metal_0.geometry}
        material={nodes.Bolts_cyl006_White_metal_0.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube_Black_base_0.geometry}
        material={nodes.Cube_Black_base_0.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001_Black_base_0.geometry}
        material={nodes.Cube001_Black_base_0.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube002_Black_base_0.geometry}
        material={nodes.Cube002_Black_base_0.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube003_Black_resin_0.geometry}
        material={nodes.Cube003_Black_resin_0.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube003_White_metal_0.geometry}
        material={nodes.Cube003_White_metal_0.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube004_Black_base_table_0.geometry}
        material={materials.Black_base_table}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube006_Black_base_0.geometry}
        material={nodes.Cube006_Black_base_0.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube009_Black_base_0.geometry}
        material={nodes.Cube009_Black_base_0.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube010_White_metal_boxes_0.geometry}
        material={nodes.Cube010_White_metal_boxes_0.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube012_Black_base_0.geometry}
        material={nodes.Cube012_Black_base_0.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube013_White_metal_boxes_0.geometry}
        material={nodes.Cube013_White_metal_boxes_0.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere005_White_metal_0.geometry}
        material={nodes.Sphere005_White_metal_0.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere006_White_metal_0.geometry}
        material={nodes.Sphere006_White_metal_0.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube014_Black_base_0.geometry}
        material={nodes.Cube014_Black_base_0.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube015_Black_base_0.geometry}
        material={nodes.Cube015_Black_base_0.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube016_Black_base_0.geometry}
        material={nodes.Cube016_Black_base_0.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube017_Black_base_0.geometry}
        material={nodes.Cube017_Black_base_0.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube018__0.geometry}
        material={nodes.Cube018__0.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube019__0.geometry}
        material={nodes.Cube019__0.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube020_Black_base_0.geometry}
        material={nodes.Cube020_Black_base_0.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube021_Black_base_0.geometry}
        material={nodes.Cube021_Black_base_0.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube022_Black_base_0.geometry}
        material={nodes.Cube022_Black_base_0.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube023_Black_base_0.geometry}
        material={nodes.Cube023_Black_base_0.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube024_Black_base_0.geometry}
        material={nodes.Cube024_Black_base_0.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube005_Black_resin_0.geometry}
        material={nodes.Cube005_Black_resin_0.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube007_White_metal_boxes_0.geometry}
        material={nodes.Cube007_White_metal_boxes_0.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube008_Display_0.geometry}
        material={materials.Display}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube008_White_metal_0.geometry}
        material={nodes.Cube008_White_metal_0.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder002_Black_base_0.geometry}
        material={nodes.Cylinder002_Black_base_0.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder004_Shiny_metal_0.geometry}
        material={nodes.Cylinder004_Shiny_metal_0.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder_Shiny_metal_gold001_0.geometry}
        material={materials['Shiny_metal_gold.001']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder001_Black_base_0.geometry}
        material={nodes.Cylinder001_Black_base_0.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder003_Shiny_metal_0.geometry}
        material={nodes.Cylinder003_Shiny_metal_0.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder005_Black_base_0.geometry}
        material={nodes.Cylinder005_Black_base_0.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder007__0.geometry}
        material={nodes.Cylinder007__0.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder008_White_metal_0.geometry}
        material={nodes.Cylinder008_White_metal_0.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder009_White_metal_0.geometry}
        material={nodes.Cylinder009_White_metal_0.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder006_White_metal_0.geometry}
        material={nodes.Cylinder006_White_metal_0.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder010_Black_base_0.geometry}
        material={nodes.Cylinder010_Black_base_0.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder011__0.geometry}
        material={nodes.Cylinder011__0.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder012_White_metal_0.geometry}
        material={nodes.Cylinder012_White_metal_0.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder013_White_metal_0.geometry}
        material={nodes.Cylinder013_White_metal_0.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder014_Black_base_0.geometry}
        material={nodes.Cylinder014_Black_base_0.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder015_Black_base_0.geometry}
        material={nodes.Cylinder015_Black_base_0.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder016_White_metal_0.geometry}
        material={nodes.Cylinder016_White_metal_0.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder017_Black_resin_0.geometry}
        material={nodes.Cylinder017_Black_resin_0.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder020_White_metal_0.geometry}
        material={nodes.Cylinder020_White_metal_0.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder021_White_metal_0.geometry}
        material={nodes.Cylinder021_White_metal_0.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder022_Shiny_metal_0.geometry}
        material={nodes.Cylinder022_Shiny_metal_0.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder023_Shiny_metal_0.geometry}
        material={nodes.Cylinder023_Shiny_metal_0.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder024_Shiny_metal_0.geometry}
        material={nodes.Cylinder024_Shiny_metal_0.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder029_Black_base_0.geometry}
        material={nodes.Cylinder029_Black_base_0.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder029_Shiny_metal_0.geometry}
        material={nodes.Cylinder029_Shiny_metal_0.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder029_White_metal_0.geometry}
        material={nodes.Cylinder029_White_metal_0.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder025_Shiny_metal_0.geometry}
        material={nodes.Cylinder025_Shiny_metal_0.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder026_Shiny_metal_gold_0.geometry}
        material={materials.Shiny_metal_gold}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder027_Shiny_metal_2_0.geometry}
        material={nodes.Cylinder027_Shiny_metal_2_0.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder028_Black_resin_0.geometry}
        material={nodes.Cylinder028_Black_resin_0.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder030_Black_base_0.geometry}
        material={nodes.Cylinder030_Black_base_0.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder031_Black_resin_0.geometry}
        material={nodes.Cylinder031_Black_resin_0.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder032_Black_base_0.geometry}
        material={nodes.Cylinder032_Black_base_0.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder033_Shiny_metal_2_0.geometry}
        material={nodes.Cylinder033_Shiny_metal_2_0.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder034_Black_base_0.geometry}
        material={nodes.Cylinder034_Black_base_0.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder018_White_metal_boxes_0.geometry}
        material={nodes.Cylinder018_White_metal_boxes_0.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder035_White_metal_0.geometry}
        material={nodes.Cylinder035_White_metal_0.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder036_Black_base_0.geometry}
        material={nodes.Cylinder036_Black_base_0.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder037_White_metal_0.geometry}
        material={nodes.Cylinder037_White_metal_0.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Grid_Shiny_metal_0.geometry}
        material={nodes.Grid_Shiny_metal_0.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Legs_White_metal_0.geometry}
        material={nodes.Legs_White_metal_0.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere_White_metal_0.geometry}
        material={nodes.Sphere_White_metal_0.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere001_White_metal_0.geometry}
        material={nodes.Sphere001_White_metal_0.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere002_White_metal_0.geometry}
        material={nodes.Sphere002_White_metal_0.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere003_White_metal_0.geometry}
        material={nodes.Sphere003_White_metal_0.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere004_White_metal_0.geometry}
        material={nodes.Sphere004_White_metal_0.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere007__0.geometry}
        material={nodes.Sphere007__0.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere008_White_metal_0.geometry}
        material={nodes.Sphere008_White_metal_0.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere009_Material_0.geometry}
        material={nodes.Sphere009_Material_0.material}
      />
    </group>
  );
}

useGLTF.preload('/3d_printer.glb');
