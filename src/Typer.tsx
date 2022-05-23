import React, { useState, useEffect } from "react";
const Typer = ({ dataText }: TyperProps) => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150);
  const [done, setDone] = useState(false);
  const [isPrepared, setIsPrepared] = useState(false);
  const [startReverse, setStartReverse] = useState(0);
  const [endReverse, setEndReverse] = useState(0);
  const [fullText, setFullText] = useState(dataText[0]);
  const [removeString, setRemoveString] = useState("");

  // prepare text function finds the ~ in the text, sets the start
  // and end of the reverse (the splits), sets the string to be removed, creates
  // the full text without the ~ , and sets the isPrepared to true
  const prepareText = () => {
    const arrayText = fullText.split("");
    let splits: number[] = [];
    arrayText.forEach((letter, idx) => {
      letter === "~" ? splits.push(idx) : null;
    });
    if (splits.length === 0) return; // if there is no ~ in the text, do nothing
    const newArr = arrayText.filter((letter) => letter !== "~");
    const newString = newArr.join("");
    setRemoveString(fullText.substring(splits[0] + 1, splits[1]));
    setStartReverse(splits[1]);
    setEndReverse(splits[0]);
    setIsPrepared(true);
    setFullText(newString);
  };

  const handleTyping = () => {
    if (!isPrepared) prepareText();
    if (done) return;
    let current = fullText.substring(0, text.length + 1);

    if (startReverse && current.length  === startReverse) {
      setStartReverse(0);
      setIsDeleting(true);
    }

    if (isDeleting && current.length === endReverse) {
      setFullText(fullText.replace(removeString, ""));
      setEndReverse(0);
      setIsDeleting(false);
    }

    setText(isDeleting ? fullText.substring(0, text.length - 1) : current);

    setSpeed(isDeleting ? 30 : 30);

    //check if we are done
    if (!isDeleting && text === fullText) {
      setDone(true);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      handleTyping();
    }, speed);
    return () => clearTimeout(timer);
  });

  useEffect(() => {
    setText("");
    setFullText(dataText[0]);
    setDone(false);
    setIsPrepared(false);
  }, [dataText]);

  return (
    <h1 className="text-display">
{text}
    </h1>
  );
};

interface TyperProps {
  dataText: string[];

}

export default Typer;
