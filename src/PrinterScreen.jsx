import { useStore } from "./state";
import { useState, useEffect } from "react";

export default function PrinterScreen() {
  const screen = useStore((state) => state.screen);
  const hideScreen = useStore((state) => state.hideScreen);
  const printObject = useStore((state) => state.printObject);
  const sdCard = useStore((state) => state.sdCard);
  const printer = useStore((state) => state.printer);
  const playSound = useStore((state) => state.playSound);
  const [selected, setSelected] = useState("ringOne");

  const handlePrintObject = () => {
    printObject(selected);
    playSound("printerPrint");
    hideScreen();
  };

  useEffect(() => {
    if (printer.printed.includes("ringOne") && sdCard.installed) {
      setSelected("ringTwo");
    }
  }, [selected, printer, sdCard.installed]);

  return (
    <>
      {screen.visible && (
        <div className="printer-screen">
          <div className="dismiss" onClick={hideScreen}>
            X Close
          </div>
          <div className="screen-title">ANYCUBIC MEGA S</div>
          <div>Files to print:</div>
          {!printer.printed.includes("ringOne") && (
            <div
              className={selected === "ringOne" ? "selected" : ""}
              onClick={() => setSelected("ringOne")}
            >
              strange medallion.gcode
            </div>
          )}
          {sdCard.installed && !printer.printed.includes("ringTwo") && (
            <div
              className={selected === "ringTwo" ? "selected" : ""}
              onClick={() => setSelected("ringTwo")}
            >
              ANOTHER strange medallion.gcode
            </div>
          )}
          <div className="button-container">
            <div className="screen-button" onClick={handlePrintObject}>
              Print Object...
            </div>
          </div>
        </div>
      )}
    </>
  );
}
