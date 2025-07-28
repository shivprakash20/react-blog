import React, { useState, useEffect } from "react";
import "./UseStateComponent.scss";

//Toggling Boolean
const UseStateComponent = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <div>
      <h4>Toggle Switch</h4>
      <button onClick={() => setIsOn(!isOn)}>{isOn ? "ON" : "OFF"}</button>
    </div>
  );
};

// Increment/Decrement Counter
const NumberCounter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h4>Number Counter</h4>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

//Controlled Input
const TextInput = () => {
  const [text, setText] = useState('');
  return <input value={text} onChange={(e) => setText(e.target.value)} />;
};

// Checkbox / Toggle Input
const AcceptTerms = () => {
  const [accepted, setAccepted] = useState(false);
  return (
    <label>
      <input type="checkbox" checked={accepted} onChange={(e) => setAccepted(e.target.checked)} />
      Accept Terms
    </label>
  );
};

// Array State to Do List
const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => setTodos([...todos, todo]);

  return (
    <>
      <button onClick={() => addTodo("New Task")}>Add</button>
      <ul>{todos.map((todo, i) => <li key={i}>{todo}</li>)}</ul>
    </>
  );
};

//Loading Success Error Flags
const DataLoader = () => {
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    await fetch("https://api.restful-api.dev/objects?id=1");
    setLoading(false);
  };

  return (
    <button onClick={fetchData}>{loading ? "Loading..." : "Fetch Data"}</button>
  );
};


// Date and Time Handling
const DatePicker = () => {
  const [date, setDate] = useState('');

  return (
    <input
      type="date"
      value={date}
      onChange={(e) => setDate(e.target.value)}
    />
  );
};

//Uppercase Preview (Dependent State Change)
const UppercaseInput = () => {
  const [input, setInput] = useState('');
  const [preview, setPreview] = useState('');

  useEffect(() => {
    setPreview(input.toUpperCase());
  }, [input]);

  return (
    <>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <p>{preview}</p>
    </>
  );
};

// Show and Hide
const ToggleComponent = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <button onClick={() => setVisible(!visible)}>Toggle</button>
      {visible && <p>Now you see me!</p>}
    </>
  );
};


//Select from Dropdown
const SelectCountry = () => {
  const [country, setCountry] = useState('India');
  return (
    <select value={country} onChange={(e) => setCountry(e.target.value)}>
      <option value="India">India</option>
      <option value="USA">USA</option>
    </select>
  );
};

//Game Logic and State Machine
const Game = () => {
  const [choice, setChoice] = useState('');
  const options = ['Rock', 'Paper', 'Scissors'];

  return (
    <div>
      {options.map(opt => (
        <button key={opt} onClick={() => setChoice(opt)}>{opt}</button>
      ))}
      <p>Your choice: {choice}</p>
    </div>
  );
};



export default UseStateComponent;
export { NumberCounter, TextInput, AcceptTerms, TodoList, DataLoader, DatePicker, UppercaseInput, ToggleComponent, SelectCountry, Game };
