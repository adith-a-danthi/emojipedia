import "./styles.css";
import React, { useState } from "react";
import { emojiDictionary, emojis } from "./data";

export default function App() {
  const [meaning, setMeaning] = useState("Translation will appear here");

  function emojiInputHandler(event) {
    const input = event.target.value;

    let meaning = emojiDictionary[input];
    if (input.match(/[\w\d]/g)) {
      meaning = "Please enter an emoji.";
    }
    if (meaning === undefined) {
      meaning = "We don't have this in our database.";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(item) {
    const meaning = emojiDictionary[item];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Emojipedia</h1>
      <input
        onChange={emojiInputHandler}
        placeholder="Search your emoji"
      ></input>
      <h2> {meaning} </h2>
      <div className="emoji-list">
        {emojis.map((emoji) => {
          return (
            <span
              className="emoji"
              key={emoji}
              onClick={() => emojiClickHandler(emoji)}
            >
              {emoji}
            </span>
          );
        })}
      </div>
    </div>
  );
}
