import { useState, Suspense, useEffect } from "react";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  PerspectiveCamera,
  Environment,
} from "@react-three/drei";
import { BakeShadows } from "@react-three/drei";
import OfficeBase from "./items/OfficeBase";
import ThreePrinter from "./items/3dPrinter";
import { Desktop } from "./items/DeskTop";
import Chair from "./items/Chair";
import { ChairTop } from "./items/Chair";
import PrinterCord from "./items/PrinterCord";
import Typer from "./Typer.jsx";
import { Outlet, CordFloor, CordPlugged } from "./items/Cord.js";
import Button from "./Button.jsx";
import { texts } from "./text.js";
import { useStore } from "./state.js";

interface IButton {
  text: string;
  click: () => void;
  afterClick: React.Dispatch<React.SetStateAction<string[]>>;
  hideButton: () => void;
}

function App() {
  const [text, setText] = useState(["Step into my office."]);
  const [currentObj, setCurrentObj] = useState("none");
  const [currentTextIdx, setCurrentTextIdx] = useState(0);
  const [button, setButton] = useState<IButton | undefined>(undefined);
  const defaults = { position: [0, 0, 0], scale: 1 };
  const deskState = useStore((state) => state.desk);
  const printerState = useStore((state) => state.printer);
  const plugInDesk = useStore((state) => state.powerOnDesk);
  const powerOnPrinter = useStore((state) => state.powerOnPrinter);
  const state = useStore((state) => state);

  const printText = (inText: string[], item: string) => {
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

  const keebClick = () => {
    printText(texts.keeb, "keeb");
  };

  const printerClick = () => {
   printerState.power 
   ? printText(texts.printer.on, "printer")
   : printText(texts.printer.off, "printer")

   if (deskState.up) {
    setButton({
      text: "Look at screen",
      click: () => {},
      afterClick: () => setText(["You look at the screen..."]),
      hideButton: hideButton,
    });

  }
  }

  const speakerClick = () => {
    printText(texts.speaker, "speaker");
  };

  const hideButton = () => {
    setButton(undefined);
  };

  const floorPlugClick = () => {
    
    printText(texts.floorPlug, "floorPlug");
    setButton({
      text: "Plug in cord",
      click: plugInDesk,
      afterClick: () => setText(["Okay it's plugged in now."]),
      hideButton: hideButton,
    });
  };

  const printerPlugClick = () => {
   deskState.up 
    ?  printText(texts.printerPlug.deskUp, "printerPlug") 
    : printText(texts.printerPlug.deskDown, "printerPlug");

    if (deskState.up) {
      setButton({
        text: "Plug in 3d printer",
        click: powerOnPrinter,
        afterClick: () => setText(["Okay all set."]),
        hideButton: hideButton,
      });

    }
  }

  const printerOutletClick = () => {
   deskState.up 
    ?  printText(texts.printerOutlet.visible, "printerOutlet")
    : printText(texts.printerOutlet.hidden, "printerOutlet");
  }

  console.log(state);
  return (
    <div className="App">
      <Suspense>
        <Typer dataText={text} />
        {button && <Button {...button} />}
        <Canvas dpr={[1, 2]} shadows>
          <spotLight
            castShadow
            color="#ccccff"
            intensity={1}
            position={[10, 20, 10]}
            angle={0.5}
            penumbra={2}
            shadow-mapSize={[512, 512]}
            shadow-bias={0.0004}
          />

          <Environment preset="apartment" />
          <fog attach="fog" args={["#ffffff", 0, 20]} />

          <group position={[0, -1, 1.5]}>
            <OfficeBase {...defaults} />
            <Desktop
              {...defaults}
              setText={printText}
              speakerClick={speakerClick}
              keebClick={keebClick}
            />
            <ThreePrinter {...defaults} click={printerClick} />
            <Chair {...defaults} />
            <ChairTop {...defaults} />
            <Outlet {...defaults} />
            <CordFloor {...defaults} onClick={floorPlugClick} />
            <CordPlugged/>
            <PrinterCord  clicks={[printerPlugClick, printerOutletClick]} />
            <BakeShadows />
          </group>
          <OrbitControls
            makeDefault
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 3}
            maxAzimuthAngle={Math.PI / 3}
            minAzimuthAngle={-Math.PI / 3}
            enableZoom={true}
            enablePan={false}
          />
          <PerspectiveCamera
            makeDefault
            fov={50}
            position={[0, 0, 4]}
          ></PerspectiveCamera>
        </Canvas>
      </Suspense>
    </div>
  );
}

export default App;
