import { useStore } from './state.js';
import { useState } from 'react';

export default function CongratsScreen() {
  const setWinWindowVisible = useStore((state) => state.setWinWindowVisible);
  // console.log(screen);

  return (
    <>
      {true && (
        <div className='printer-screen'>
          <div className='dismiss' onClick={() => setWinWindowVisible(false)}>
            X Close
          </div>
          <div className='screen-title'>You did it!</div>
          <div>What was in the box??</div>

          <div>
            Why it's a link to github where you can see the everything from this
            project.
          </div>

          <div className='button-container'>
            <div className='screen-button' onClick={() => setWinWindowVisible(false)}>
              Thanks, I guess!
            </div>
          </div>
        </div>
      )}
    </>
  );
}
