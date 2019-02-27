import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

export default class App extends React.Component {
  state = {
    beers: []
  };
  constructor() {
    super();
    this.getBeers();
  }

  getBeers() {
    fetch(`https://private-76a34-firstapi529.apiary-mock.com/name`)
      .then(data => data.json())
      .then(beers => {
        this.setState({ beers: beers.arrNames });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    let beerNames = this.state.beers.map(beer => (
      <body>
        <li>
          <strong>
            {" "}
            {beer.name} - {beer.surname}
          </strong>
        </li>
      </body>
    ));
    return <div> {beerNames}</div>;
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
