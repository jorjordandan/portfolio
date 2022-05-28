import { useStore } from './state.js';
import { useState } from 'react';

export default function PrinterScreen() {
  const screen = useStore((state) => state.screen);
  const hideScreen = useStore((state) => state.hideScreen);
  const printObject = useStore((state) => state.printObject);
  const [selected, setSelected] = useState('airplane');
  // console.log(screen);

  const handlePrintObject = () => {
    printObject('ringOne');
    hideScreen();
  };

  return (
    <>
      {screen.visible && (
        <div className='printer-screen'>
          <div className='dismiss' onClick={hideScreen}>
            X Close
          </div>
          <div className='screen-title'>ANYCUBIC MEGA S</div>
          <div>Files to print:</div>
          <div
            className={selected === 'airplane' ? 'selected' : ''}
            onClick={() => setSelected('airplane')}
          >
            strange_medallion_lg.gcode
          </div>
          {screen.keyLoaded && (
            <div
              className={selected === 'handle' ? 'selected' : ''}
              onClick={() => setSelected('handle')}
            >
              strange_medallion_sm.gcode
            </div>
          )}
          <div className='button-container'>
            <div className='screen-button' onClick={handlePrintObject}>
              Print Object...
            </div>
            <div className='screen-button inactive'>Load Object...</div>
          </div>
        </div>
      )}
    </>
  );
}
