import { useEffect, useState } from "react";
import useSound from "use-sound";
import { useStore } from "./state";

export default function SoundManager() {
  const currSound = useStore((state) => state.sound);
  const currText = useStore((state) => state.text);
  const [audioOn, setAudioOn] = useState(false);

  const offset = 100;
  const [play] = useSound("soundEffects.m4a", {
    sprite: {
      typing: [0, 1000],
      pickup: [8000, 3000],
      deskPower: [16000, 4000],
      deskUp: [24000, 1500],
      deskDown: [28000, 1500],
      printerPower: [12000, 2000],
      printerPrint: [32000, 1000],
      click: [36000, 1000],
      clickOne: [36110, 1000],
      clickTwo: [36100, 1000],
      win: [20000, 4000],
    },
    interrupt: false,
  });

  const [playMusic, api] = useSound("/ambient_music.m4a", { volume: 0.5 });

  useEffect(() => {
    if (audioOn && currSound) {
      play({ id: currSound });
    }
  }, [currSound, currText, audioOn]);

  const handleMusic = () => {
    if (audioOn) {
      api.stop();
      setAudioOn(false);
    } else {
      playMusic();
      setAudioOn(true);
    }
  };

  // const [play] = useSound(currSound);

  return (
    <div className="music" onClick={handleMusic}>
      🎶 <br />
      {audioOn ? "on" : "off"}
    </div>
  );
}
