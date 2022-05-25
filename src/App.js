import "./styles.css";
import React from "react";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.updateSubmit = this.updateSubmit.bind(this);
    this.input = React.createRef();
  }
  updateSubmit(event) {
    alert("You have entered the UserName and CompanyName successfully.");
    event.preventDefault();
  }
  render() {
    return (
      <form onSubmit={this.updateSubmit}>
        <h1>Uncontrolled Form</h1>
        <label>
          Name:
          <input type="text" ref={this.input} />
        </label>
        <label>
          CompanyName:
          <input type="text" ref={this.input} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
export default App;
