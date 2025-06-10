import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: "Surat",
    };

    this.fetchWeatherData = this.fetchWeatherData.bind(this);
  }

  fetchWeatherData = async () => {
    console.log("Loading...");
  };

  render() {
    return (
      <div className="app">
        <h1>Classy Weather</h1>
        <input
          type="text"
          placeholder="Search for location..."
          value={this.state.location}
          onChange={(e) => this.setState({ location: e.target.value })}
        />
        <button type="" onClick={this.fetchWeatherData}>
          Get Weather
        </button>
      </div>
    );
  }
}

export default App;
