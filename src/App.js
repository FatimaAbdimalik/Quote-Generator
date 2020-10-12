import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

function App() {
  const [quote, setQuote] = useState();
  const [nextQuote, setNextQuote] = useState();
  console.log(quote);
  useEffect(() => {
    fetch("https://fatima-node1-quote.glitch.me/quotes")
      .then((res) => res.json())
      .then((data) => {
        setQuote(data);
      });
  }, []);

  const pickRandomQuote = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
  };

  const chooseNextQuote = () => {
    return setNextQuote(pickRandomQuote(quote));
  };

  if (!quote) {
    return (
      <div>
        <Loader type="Bars" color="#00BFFF" height={80} width={80} />{" "}
      </div>
    );
  } else {
    return (
      <div>
        <h1>Quote Generator</h1>
        <div> {nextQuote ? nextQuote.quote : pickRandomQuote(quote).quote}</div>
        <div>
          {nextQuote ? nextQuote.author : pickRandomQuote(quote).author}
        </div>
        <button onClick={chooseNextQuote}>Next Quote</button>
      </div>
    );
  }
}

export default App;
