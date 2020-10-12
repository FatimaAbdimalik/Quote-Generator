import React, { useState, useEffect } from "react";
import "./Quotes.css";
import Loader from "react-loader-spinner";

const Quotes = () => {
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
      <div style={{ marginTop: "3rem", marginLeft: "2.5rem" }}>
        <Loader type="Bars" color="#00BFFF" height={80} width={80} />{" "}
      </div>
    );
  } else {
    return (
      <div>
        <div>
          {" "}
          {nextQuote
            ? `"${nextQuote.quote}"`
            : `"${pickRandomQuote(quote).quote}"`}
        </div>
        <div>
          {nextQuote ? nextQuote.author : pickRandomQuote(quote).author}
        </div>
        <div className="button">
          <button onClick={chooseNextQuote}>Next Quote</button>
        </div>
      </div>
    );
  }
};

export default Quotes;
