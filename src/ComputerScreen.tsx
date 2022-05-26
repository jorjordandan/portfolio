import { useStore } from './state.js';
import { useState, useEffect } from 'react';

export default function ComputerScreen() {
  const [loginMessage, setLoginMessage] = useState('');
  const [screen, setScreen] = useState(1);
  const { hideComputerScreen, computerScreen } = useStore();
  console.log(computerScreen.visible);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    if (loginMessage === 'unlocked!') {
      timeout = setTimeout(() => {
        setScreen(2);
      }, 1000);
    }
    return () => clearTimeout(timeout);
  }, [loginMessage]);

  interface Ihandler {
    target: [{ value: string }];
    preventDefault: () => void;
  }

  const handleSubmit = (e: Ihandler) => {
    e.preventDefault();
    const val = e.target[0].value;

    if (val === 'password54321') {
      setLoginMessage('unlocked!');
    } else {
      setLoginMessage('nope');
    }
  };

  const ScreenOne = () => {
    return (
      <div className='computer-screen'>
        <div className='computer-dismiss' onClick={hideComputerScreen}>
          close X
        </div>
        <div>
          <img className='computer-profile' src='/profile.png' alt='' />
          <div style={{ paddingBottom: 10 }}>Jordan Davis</div>
          {loginMessage !== 'unlocked!' && (
            <form onSubmit={(e) => handleSubmit(e)}>
              <input type='text' />
              <div style={{ marginTop: 20 }}>{loginMessage}</div>{' '}
            </form>
          )}
        </div>
      </div>
    );
  };

  const ScreenTwo = () => {
    return (
      <div className='computer-screen two'>
        <div className='computer-dismiss' onClick={hideComputerScreen}>
          close Xe
        </div>
        <div className='fake-cura'>
          <div className='cura-app-bar'>
            <div className='dots'>
              <div className='red-dot'></div>
              <div className='yellow-dot'></div>
              <div className='green-dot'></div>
            </div>
            <div className='cura-title'>Fake Cura Dialogue</div>
          </div>
          <div className='cura-body'>
            <div className='body-title'>Slicing complete.</div>
            <div className='body-text'>
              Medallion_lower.stl is ready to download for 3d printing. Would
              you like to load it onto the usb key?
            </div>
            <div className='body-button'>Yeah, for sure, load it up!</div>
          </div>
        </div>
        <div>This is a completely different screen, man.</div>
      </div>
    );
  };

  const ScreenManager = ({ currentScreen }: { currentScreen: number }) => {
    if (currentScreen === 1) return <ScreenOne />;
    if (currentScreen === 2) return <ScreenTwo />;
    return null;
  };

  return (
    <>{computerScreen.visible && <ScreenManager currentScreen={screen} />}</>
  );
}
