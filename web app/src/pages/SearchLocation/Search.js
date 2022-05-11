import React, { useState, useEffect } from "react";
import "./search.scss";

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const mic = new SpeechRecognition();

mic.continuous = true;
mic.interimResults = true;
mic.lang = "en-US";

function Search(props) {
  const [isListening, setIsListening] = useState(false);
  const [note, setNote] = useState(null);

  useEffect(() => {
    handleListen();
  }, [isListening]);

  // Method to Change status of mic
  const handleListen = () => {
    if (isListening) {
      mic.start();
      mic.onend = () => {
        console.log("continue..");
        mic.start();
      };
    } else {
      mic.stop();
      mic.onend = () => {
        console.log("Stopped Mic on Click");
      };
    }
    mic.onstart = () => {
      console.log("Mics on");
    };

    mic.onresult = (event) => {
      const transcript = Array.from(event.results)
        .map((result) => result[0])
        .map((result) => result.transcript)
        .join("");
      console.log(transcript);
      setNote(transcript);
      mic.onerror = (event) => {
        console.log(event.error);
      };
    };
  };

  return (
    <>
      <div className="container">
        <div className="box">
          <form
            className="region"
            onSubmit={(e) => {
              props.changeLocation(e);
            }}
          >
            <input
              type="text"
              value={note}
              className="regioninput"
              placeholder="Search a place ..."
              onChange={(e) => {
                props.changeRegion(e.target.value);
              }}
              // onClick={() => setIsListening((prevState) => !prevState)}
              onBlur={(e) => {
                props.changeRegion(e.target.value);
              }}
            />
          </form>
          <button
            onClick={() => setIsListening((prevState) => !prevState)}
            className="btnmic"
          >
            {isListening ? (
              <span>
                <i class="fa-solid fa-microphone-lines-slash"></i>
              </span>
            ) : (
              <span>
                <i class="fa-solid fa-microphone-lines"></i>
              </span>
            )}
          </button>
        </div>
      </div>
    </>
  );
}

export default Search;
