import { useState, Suspense, useEffect } from 'react';
import './App.css';
import { BakeShadows } from '@react-three/drei';

import OfficeBase from './items/OfficeBase';
import ThreePrinter from './items/3dPrinter';
import { Desktop } from './items/DeskTop';
import Chair from './items/Chair';
import { ChairTop } from './items/Chair';
import PrinterCord from './items/PrinterCord';
import { Outlet, CordFloor, CordPlugged } from './items/Cord.js';
import Discs from "./items/Discs";
// import NotebookClosed from './items/NotebookClosed';
import { texts } from './text.js';
import { useStore } from './state.js';

export default function Office({ printText }) {
  const defaults = { position: [0, 0, 0], scale: 1, printText, texts };

  // drcmda pointer hover code
  // const [hovered, setHovered] = useState(false)

  // useEffect(() => {
  //   document.body.style.cursor = hovered ? 'pointer' : 'auto'
  // }, [hovered])
  // return (
  //   <mesh
  //     onPointerOver={() => setHovered(true)}
  //     onPointerOut={() => setHovered(false)} />
  // )

  //cursor
  //.pointer {cursor: pointer;}
  // .svg {cursor: url("data:image/svg+xml,%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='32px' height='32px' viewBox='0 0 512 512' style='enable-background:new 0 0 512 512;' xml:space='preserve'%3E %3Cpath d='M443.6,387.1L312.4,255.4l131.5-130c5.4-5.4,5.4-14.2,0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4 L256,197.8L124.9,68.3c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4L68,105.9c-5.4,5.4-5.4,14.2,0,19.6l131.5,130L68.4,387.1 c-2.6,2.6-4.1,6.1-4.1,9.8c0,3.7,1.4,7.2,4.1,9.8l37.4,37.6c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1L256,313.1l130.7,131.1 c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1l37.4-37.6c2.6-2.6,4.1-6.1,4.1-9.8C447.7,393.2,446.2,389.7,443.6,387.1z'/%3E %3C/svg%3E"), pointer;}
  // <div class="pointer">POINTER</div>
  // <div class="svg">SVG</div>

  return (
    <group position={[0, -1, 1.5]}>
      <OfficeBase {...defaults} />
      <Desktop {...defaults} />
      <ThreePrinter {...defaults} />
      <Chair {...defaults} />
      <ChairTop {...defaults} />
      <Outlet {...defaults} />
      <CordFloor {...defaults} />
      <CordPlugged />
      <PrinterCord {...defaults} />
      <Discs {...defaults} />
      {/* <BakeShadows /> */}
    </group>
  );
}
