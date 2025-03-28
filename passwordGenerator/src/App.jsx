import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [Password, setPassword] = useState("");

  //useRef hook
  const passwordRef = useRef(null);

  const genreatePassword = 2(() => {
    // concept of memoization where we store the previous value and return the previous value in cache
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()[]+={}";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numAllowed, charAllowed, setPassword]); //Dependency array. useCallback keeps the changes in the cache or in its memory
  // We provide those things in the dependency array that have dependency and will possibly runs, to optimize that method

  const copyPasswordToClipBoard = useCallback(() => {
    passwordRef.current.select();
    passwordRef.current.setSelectionRange(0, 4);
    window.navigator.clipboard
      .writeText(Password)
      // .then(() => {
      //   alert("Password copied to clipboard!"); // Show alert
      // })
      // .catch((err) => {
      //   console.error("Failed to copy password: ", err);
      // });
  }, [Password]);

  useEffect(() => {
    genreatePassword();
  }, [length, numAllowed, charAllowed, genreatePassword]); // Here if there is any changes made then again run these methods
  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-pink-800 text-orange-500">
      <h1 className="text-white text-center my-5 text-bold">
        PASSWORD GENERATOR
      </h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={Password}
          className="w-full px-3 py-2 bg-white text-orange-500"
          placeholder="Password"
          readOnly
          ref={passwordRef}
        />
        <button
          onClick={copyPasswordToClipBoard}
          className="outline-none px-4 py-1 shadow-lg bg-pink-300 text-black cursor-pointer"
        >
          Copy
        </button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={8}
            max={20}
            value={length}
            className="cursor-pointer"
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label>Length:{length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={numAllowed}
            id="numberInput"
            onChange={() => {
              setNumAllowed((prev) => !prev);
            }}
          />
          <label>Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label>Characters</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
