import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const App = (props) => {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Array(6).fill(0));

  const selectAnecdote = () => {
    const randomSelect = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomSelect);
  };
  const voteAnecdote = () => {
    let newVotes = votes.slice();
    newVotes[selected] += 1;
    setVotes(newVotes);
  };

  const indexOfAnecdote = votes.indexOf(Math.max(...votes));

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>
        {props.anecdotes[selected]} <br />
        has <b>{votes[selected]}</b> votes
      </p>
      <button onClick={voteAnecdote}>vote</button>
      <button onClick={selectAnecdote}>next anecdote</button>
      <h1>Anecdote with most votes</h1>
      <p>
        {props.anecdotes[indexOfAnecdote]}
        <br />
        has <b>{votes[selected]}</b> votes
      </p>
    </div>
  );
};

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App anecdotes={anecdotes} />);
