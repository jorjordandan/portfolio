import { useStore } from "./state";
import { useState, useEffect } from "react";

export default function ComputerScreen() {
  const [loginMessage, setLoginMessage] = useState("");
  const [screen, setScreen] = useState(1);
  const hideComputerScreen = useStore((state) => state.hideComputerScreen);
  const computerScreen = useStore((state) => state.computerScreen);
  const collectSdCard = useStore((state) => state.collectSdCard);
  const sdCard = useStore((state) => state.sdCard);
  const setText = useStore((state) => state.setText);
  const playSound = useStore((state) => state.playSound);

  useEffect(() => {
    let timeout;
    if (loginMessage === "unlocked!") {
      timeout = setTimeout(() => {
        setScreen(2);
      }, 1000);
    }
    return () => clearTimeout(timeout);
  }, [loginMessage]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const val = e.target[0].value;
    console.log(val);

    if (val === "password54321") {
      setLoginMessage("unlocked!");
    } else {
      setLoginMessage("nope");
    }
  };

  const getSDCard = () => {
    setText(["I load the file and unplug the SD Card...."]);
    collectSdCard();
    playSound("pickup");
    hideComputerScreen();
  };

  const ScreenOne = () => {
    return (
      <div className="computer-screen">
        <div className="computer-dismiss" onClick={hideComputerScreen}>
          close X
        </div>
        <div>
          <img className="computer-profile" src="/profile.png" alt="" />
          <div style={{ paddingBottom: 10 }}>Jordan Davis</div>
          {loginMessage !== "unlocked!" && (
            <form onSubmit={(e) => handleSubmit(e)}>
              <input type="text" />
              <div style={{ marginTop: 20 }}>{loginMessage}</div>{" "}
            </form>
          )}
        </div>
      </div>
    );
  };

  const ScreenTwo = () => {
    return (
      <div className="computer-screen two">
        <div className="computer-dismiss" onClick={hideComputerScreen}>
          close X
        </div>
        <div className="fake-cura">
          <div className="cura-app-bar">
            <div className="dots">
              <div className="red-dot"></div>
              <div className="yellow-dot"></div>
              <div className="green-dot"></div>
            </div>
            <div className="cura-title">Fake Cura Dialogue</div>
          </div>
          <div className="cura-body">
            <div className="body-title">Slicing complete.</div>
            {!sdCard.collected && (
              <>
                <div className="body-text">
                  Medallion_lower.stl is ready to download for 3d printing.
                  Would you like to load it onto the usb key?
                </div>
                <div className="body-button" onClick={getSDCard}>
                  Load it up!
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    );
  };

  const ScreenManager = ({ currentScreen }) => {
    if (currentScreen === 1) return <ScreenOne />;
    if (currentScreen === 2) return <ScreenTwo />;
    return null;
  };

  return (
    <>{computerScreen.visible && <ScreenManager currentScreen={screen} />}</>
  );
}
