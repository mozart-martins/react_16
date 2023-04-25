import React, { useState } from "react";
import data from "./data";
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const randomStringsFromArray = (stringArray, numStrings) => {
    let resultStringArray = [];

    for (let i = 0; i < numStrings; i++) {
      let randomString =
        stringArray[Math.floor(Math.random() * stringArray.length)];
      resultStringArray.push(randomString);
    }

    return resultStringArray;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    if (amount < 1) amount = 1;
    setText(randomStringsFromArray(data, amount));
  };

  return (
    <section className="section-center">
      <h3>tired of boring lorem ipsun?</h3>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">paragraphs:</label>
        <input
          type="text"
          name="amount"
          id="amount"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button type="submit" className="btn">
          generate
        </button>
      </form>
      <article className="lorem-text">
        {text.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </article>
    </section>
  );
}

export default App;
