import { useState, useCallback, useRef, useEffect } from "react";

function Card() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [character, setCharacter] = useState(false);

  const [theme, setTheme] = useState("bg-gray-700");
  const [status, setStatus] = useState(false);
  const [txt, setTxt] = useState("white");
  const [img, setImg] = useState(
    "https://cdn3.iconfinder.com/data/icons/camera-scene-mode-glyph-16px/16/night_mode_moon_scene_dark-64.png"
  );
 
  const change = () => {
    setStatus((prev) => !prev);

    if (status) {
      setTheme("bg-gray-700");
      console.log(theme);
      setTxt("white");
    

       
     setImg(
       "https://cdn3.iconfinder.com/data/icons/camera-scene-mode-glyph-16px/16/night_mode_moon_scene_dark-64.png"
     );
     ;
    } else {
      setTheme("bg-white");
        console.log(theme);
      setTxt("blue-600");
    

       setImg(
         "https://cdn3.iconfinder.com/data/icons/ink-basic/35/dark-mode-64.png"
       );
    }
  };

  const passwordRef = useRef(null);
  const copy = useCallback(() => {
    passwordRef.current?.select();

    //selecting the particular of a element
    // passwordRef.current?.setSelectionRange(0, 20);

    window.navigator.clipboard.writeText(password);
  }, [password]);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxy";
    if (number) str += "0123456789";
    if (character) str += "!#$%^&*()_><?[]{}+,;=";

    for (let i = 1; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(char);
    }

    setPassword(pass);
    console.log(password);
  }, [length, number, character, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, number, character, passwordGenerator]);

  return (
    <div>
      <div
        className={`h-screen w-screen flex flex-col items-center justify-center ${theme} duration-500 `}
      >
        <h1 className={`text-3xl font-mono text-${txt} font-bold`}>
          Password Genertor
        </h1>
        <div
          className={`bg-white border-2 border-white rounded-md p-5 shadow-xl `}
        >
          <div>
            <input
              type="text"
              readOnly
              value={password}
              className="border-2 border-blue-600 text-blue-600 rounded-md"
              ref={passwordRef}
            />{" "}
            &nbsp;
            <button
              className="bg-blue-600 text-white px-2 border-1 border-blue-600 rounded-md"
              onClick={copy}
            >
              copy
            </button>{" "}
            &nbsp; &nbsp;
            <span onClick={change} className="cursor-pointer">
              <img src={img} alt="" className="w-5 inline" />
            </span>
          </div>
          <div>
            <input
              type="range"
              id="length"
              value={length}
              onChange={(e) => {
                setLength(e.target.value);
              }}
              min={4}
              max={40}
            />
            <label htmlFor="length">{length}</label>{" "}
            <input
              type="checkbox"
              id="check"
              defaultChecked={character}
              onChange={() => {
                setCharacter((prev) => !prev);
                console.log(character);
              }}
            />
            <label htmlFor="check">Character</label>{" "}
            <input
              type="checkbox"
              defaultChecked={number}
              id="num"
              onChange={() => {
                setNumber((prev) => !prev);
                console.log(number);
              }}
            />
            <label htmlFor="num">Number</label>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
