import { createRoot } from "react-dom/client";

const message = 'How are you?'
const greeting = <h2>Hello World, {message}</h2>;

const fruits = [
  'Apple',
  'Banana',
  'Guava',
  'Orange'
];

const fruitsILove = <ul>{fruits.map(f => <li>{f}</li>)}</ul>;

const isTaskDone = true;
const taskOutput = <h3>Task is {isTaskDone ? 'done': 'not done'}</h3>;

const final = <div>
  {greeting} 
  <hr/>
  {fruitsILove}
  <hr/>
  {taskOutput}
</div>;

createRoot(document.getElementById("root")).render(final);
