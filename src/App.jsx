import { Suspense, useState, useEffect } from "react";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  PerspectiveCamera,
  Environment,
} from "@react-three/drei";

// import ambientMusic from "/ambient_music.m34a";
import Office from "./Office";
import { useStore } from "./state";
import Typer from "./Typer";
import Button from "./Button";
import PrinterScreen from "./PrinterScreen";
import Notebook from "./Notebook";
import ComputerScreen from "./ComputerScreen";
import Inventory from "./items/Inventory";
import CongratsScreen from "./CongratsScreen";
import SoundManager from "./SoundManager";
import { Loader } from "./Loader";


// return (
//   <div className="App">
//     <Canvas>
//       <mesh position={[-1, 0, 0]}>
//         <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
//         <meshStandardMaterial attach="material" color="hotpink" />
//       </mesh>
//     </Canvas>
//   </div>

function App() {
  const [currentObj, setCurrentObj] = useState("none");
  const [currentTextIdx, setCurrentTextIdx] = useState(0);

  const text = useStore((state) => state.text);
  const button = useStore((state) => state.button);
  const hideButton = useStore((state) => state.hideButton);
  const setText = useStore((state) => state.setText);
  const dragging = useStore((state) => state.dragging);
  const inventory = useStore((state) => state.inventory);
  const playSound = useStore((state) => state.playSound);
  const winWindowVisible = useStore((state) => state.winWindowVisible);
  const closeInventory = useStore((state) => state.closeInventory);

  // play typing sound whenever the text changes
  useEffect(() => {
    playSound("typing");
  }, [text]);

  // handles setting the text, and ensuring the text index is reset when a different
  // multi-string text is set, and also hiding the button if
  // new text is set when a button is visible.
  // this solution is not elegant, and should be combined with the typer
  // component.
  const printText = (inText, item) => {
    if (inText.length === 1) {
      setText([inText[0]]);
    } else {
      if (item === currentObj) {
        setText([inText[currentTextIdx]]);
        setCurrentTextIdx(
          currentTextIdx === inText.length - 1
            ? inText.length - 1
            : currentTextIdx + 1
        );
      } else {
        hideButton();
        setText([inText[0]]);
        setCurrentTextIdx(1);
        setCurrentObj(item);
      }
    }
  };

  // returns the canvas with the office component,
  // which contains every other threes object in the main scene,
  // and the inventory which is a portal.
  // Also contains all the html screens, such as
  // the printer, computer, and notebook
  // and the typer component, which handles the text,

  return (
    <div className="App">
      <Suspense fallback={<Loader />}>
        <SoundManager />
        <Typer dataText={text} />
        {button && <Button {...button} />}
        {inventory.open && (
          <div className="inventory-close" onClick={closeInventory}>
            Close
          </div>
        )}

        <Notebook />
        <PrinterScreen />
        <ComputerScreen />
        {winWindowVisible && <CongratsScreen />}

        <Canvas dpr={[1, 2]} shadows colormanagement="none">
          <spotLight
            castShadow
            color="#ccccff"
            intensity={0.5}
            position={[10, 20, 10]}
            angle={0.5}
            penumbra={2}
            shadow-mapSize={[512, 512]}
            shadow-bias={0.0004}
          />

          <Environment files="/city.hdr" />
          <fog attach="fog" args={["#ffffff", 0, 20]} />

          <Office printText={printText} />
          <Inventory />
          <OrbitControls
            makeDefault
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 3}
            maxAzimuthAngle={Math.PI / 3}
            minAzimuthAngle={-Math.PI / 3}
            enableZoom={false}
            enablePan={false}
            enabled={!dragging.inProgress}
          />
          <PerspectiveCamera makeDefault fov={50} position={[0, 0, 4]} />
        </Canvas>
      </Suspense>
    </div>
  );
}

export default App;
