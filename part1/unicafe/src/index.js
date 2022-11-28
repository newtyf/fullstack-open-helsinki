import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;
  const average = (good + neutral * 0 + bad * -1) / all;
  const postives = (good / all) * 100;

  return (
    <div className="Statistics">
      <h2>statics</h2>
      <table border="true">
        <tbody>
          <tr align="left">
            <th>type</th>
            <th>points</th>
          </tr>
          <Static text={"good"} value={good}></Static>
          <Static text={"neutral"} value={neutral}></Static>
          <Static text={"bad"} value={bad}></Static>
          <Static text={"all"} value={all}></Static>
          <Static text={"average"} value={average}></Static>
          <Static
            text={"positives"}
            value={postives.toString() + " %"}
          ></Static>
        </tbody>
      </table>
    </div>
  );
};

const Static = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

const Button = ({ text, value, setValue }) => {
  return (
    <button
      onClick={() => {
        setValue(value + 1);
      }}
    >
      {text}
    </button>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div className="Feedback">
      <h2>give feedback</h2>
      <Button text={"good"} value={good} setValue={setGood} />
      <Button text={"neutral"} value={neutral} setValue={setNeutral} />
      <Button text={"bad"} value={bad} setValue={setBad} />
      {good > 0 || neutral > 0 || bad > 0 ? (
        <Statistics bad={bad} good={good} neutral={neutral} />
      ) : (
        <p>No feedback given</p>
      )}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
