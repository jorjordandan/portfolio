import { Suspense, useState, useEffect } from 'react';
import './App.css';
import { Canvas } from '@react-three/fiber';
import { useProgress } from '@react-three/drei'
import useSound from 'use-sound';
import {
  OrbitControls,
  PerspectiveCamera,
  Environment,
} from '@react-three/drei';

// import ambientMusic from "/ambient_music.m34a";
import Office from './Office';
import { useStore } from './state.js';
import Typer from './Typer.jsx';
import Button from './Button';
import PrinterScreen from './PrinterScreen';
import Notebook from './Notebook';
import ComputerScreen from './ComputerScreen';
import Inventory from './items/Inventory';
import CongratsScreen from './CongratsScreen';
import SoundManager from "./SoundManager"


function Loader() {
  const { progress } = useProgress()
  return (<>
  <h2 className="loader-title">Welcome. Optimized for desktop, mobile devices may be janky.<br/> I don't know I haven't honestly checked.</h2>
 <div className="loader" style={{width: progress.toString() + "%",}}>Loading</div>
 </>)
}

function App() {
  const [currentObj, setCurrentObj] = useState('none');
  const [currentTextIdx, setCurrentTextIdx] = useState(0);

  const text = useStore((state) => state.text);
  const button = useStore((state) => state.button);
  const hideButton = useStore((state) => state.hideButton);
  const setText = useStore((state) => state.setText);
  const dragging = useStore((state) => state.dragging);
  const inventory = useStore((state) => state.inventory);
  const won = useStore((state) => state.won);
  const playSound = useStore((state) => state.playSound);
  const winWindowVisible = useStore((state) => state.winWindowVisible);

  const closeInventory = useStore((state) => state.closeInventory);

  useEffect( () => {
      //need to change the word in order to trigger the useEffect in
      // the sound manager.
  
      playSound('typing')
    
  }, [text])

  const printText = (inText: string[], item: string) => {
    if (inText.length === 1) {
      setText([inText[0]]);
      // playSound('typing')
    } else {
      if (item === currentObj) {
        // playSound('typing')
        setText([inText[currentTextIdx]]);
        setCurrentTextIdx(
          currentTextIdx === inText.length - 1
            ? inText.length - 1
            : currentTextIdx + 1
        );
      } else {
        // playSound('typing')
        hideButton();
        setText([inText[0]]);
        setCurrentTextIdx(1);
        setCurrentObj(item);
      }
    }
  };




  return (
    <div className='App'>
      <Suspense fallback={<Loader />}>
        <SoundManager />
        <Typer dataText={text} />
        {button && <Button {...button} />}
        {inventory.open && (
          <div className='inventory-close' onClick={closeInventory}>
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
            color='#ccccff'
            intensity={1}
            position={[10, 20, 10]}
            angle={0.5}
            penumbra={2} 
            shadow-mapSize={[512, 512]}
            shadow-bias={0.0004}
          />

          <Environment preset='apartment' />
          <fog attach='fog' args={['#ffffff', 0, 20]} />

          <Office printText={printText} />
          {true && <Inventory />}
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
