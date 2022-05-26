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

    if (val === '12345password54321') {
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
          <form onSubmit={(e) => handleSubmit(e)}>
            <input type='text' />
            <div style={{ marginTop: 20 }}>{loginMessage}</div>
          </form>
        </div>
      </div>
    );
  };

  const ScreenTwo = () => {
    return (
      <div className='computer-screen'>
        <div className='computer-dismiss' onClick={hideComputerScreen}>
          close X
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
