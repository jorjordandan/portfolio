import { Suspense, useState } from 'react';
import './App.css';
import { Canvas } from '@react-three/fiber';
import {
  OrbitControls,
  PerspectiveCamera,
  Environment,
} from '@react-three/drei';
import Office from './Office';
import { useStore } from './state.js';
import Typer from './Typer.jsx';
import Button from './Button';
import PrinterScreen from './PrinterScreen';
import Notebook from './Notebook';
import ComputerScreen from './ComputerScreen';
import Inventory from './items/Inventory';

function App() {
  const [currentObj, setCurrentObj] = useState('none');
  const [currentTextIdx, setCurrentTextIdx] = useState(0);
  const { text, button, hideButton, setText, airplane } = useStore(
    (state) => state
  );

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

  return (
    <div className='App'>
      <Suspense>
        <Typer dataText={text} />
        {button && <Button {...button} />}
        <Notebook />
        <PrinterScreen />
        <ComputerScreen />
        <Canvas dpr={[1, 2]} shadows>
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
            enableZoom={true}
            enablePan={false}
          />
          <PerspectiveCamera makeDefault fov={50} position={[0, 0, 4]} />
        </Canvas>
      </Suspense>
    </div>
  );
}

export default App;
