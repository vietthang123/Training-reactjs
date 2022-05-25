import React from "react";

//parent comp
export function LevelChild() {
  return (
    <div>
      <div>===Level child example===</div>
      <Student name="Mathew" physics="45" chemistry="49" biology="53" />
      <Student name="John" physics="75" chemistry="71" biology="78" />
      <Student name="Robin" physics="95" chemistry="91" biology="88" />
    </div>
  );
}

export default LevelChild;

//first child comp
export function Student(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <Marks {...props} />
    </div>
  );
}

//second child comp
export function Marks(props) {
  return (
    <div>
      <ul>
        <li>{props.physics}</li>
        <li>{props.chemistry}</li>
        <li>{props.biology}</li>
      </ul>
    </div>
  );
}
