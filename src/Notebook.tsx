import { useStore } from './state.js';
import { useState } from 'react';

export default function Notebook() {
  const { notebook, hideNotebook } = useStore();
  // const [selected, setSelected] = useState('airplane');
  // console.log(screen);

  return (
    <>
      {notebook.visible && (
        <div className='notebook'>
          <div className='page left'>
            {' '}
            <div className='notebook-dismiss' onClick={hideNotebook}>
              Close X
            </div>
            <div className='screen-title'>ULTRA SECRET NOTES</div>
            <div>Note to self: You can do it!</div>
            <div>Unguessable computer password: password54321</div>
            <div>
              Secret email address:
              <a href='mailto:jordan@jordandavis.ca?subject=I want to give you money for no reason!'>
                {' '}
                jordan@jordandavis.ca
              </a>
            </div>
            <div>
              Secret twitter:<a href='https://twitter.com/jrdndvs'>@jrdndvs</a>
            </div>
            {/* <div className='button-container'>
              <div className='screen-button' onClick={() => {}}>
                Print Object...
              </div>
              <div className='screen-button inactive'>Load Object...</div>
            </div> */}
          </div>
          <div className='pageMiddle'></div>
          <div className='page right'>
            Asset credits.
            <div>Autonomous chair - Me</div>
            <div>Speakers - Moi</div>
            <div>Room - The Self</div>
            <div>Cardboard box - Ya boi</div>
            <div>Autonomous desk - *points thumbs at self*</div>
          </div>
        </div>
      )}
    </>
  );
}
