import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />

        <footer>
          This project was coded by{" "}
          <a
            href="https://www.linkedin.com/in/tatiana-oliveira-46ab7388/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tatiana Oliveira
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/toliveira90"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://suspicious-beaver-111c4d.netlify.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}