/* eslint react-hooks/exhaustive-deps : off */
import React, { useEffect, useState } from "react";
import ColorfulMessage from "./components/ColorfullMessage";

const App = () => {
  console.log("最初");
  const [num, setNum] = useState(0);
  const [faceShowLFlag, setFaceShowFlag] = useState(false);

  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowLFlag);
  };

  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowLFlag || setFaceShowFlag(true);
      } else {
        faceShowLFlag && setFaceShowFlag(false);
      }
    }
  }, [num]);

  return (
    <>
      <h1 style={{ color: "blue" }}>こんにちはー</h1>
      <ColorfulMessage color="red">元気にやってます</ColorfulMessage>
      <ColorfulMessage color="pink">元気です</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>ON/OFF</button>
      <p>{num}</p>
      {faceShowLFlag && <p>(￣▽￣)</p>}
    </>
  );
};

export default App;
