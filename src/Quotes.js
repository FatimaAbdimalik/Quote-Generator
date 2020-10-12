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
        <h2 className="quote-style">
          {" "}
          {nextQuote
            ? `"${nextQuote.quote}"`
            : `"${pickRandomQuote(quote).quote}"`}
        </h2>
        <h4>{nextQuote ? nextQuote.author : pickRandomQuote(quote).author}</h4>
        <div>
          <button className="button" onClick={chooseNextQuote}>
            Next Quote
          </button>
        </div>
      </div>
    );
  }
};

export default Quotes;
