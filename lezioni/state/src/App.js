import React from 'react';

class App extends React.Component {
  render(){
    return (
      <div>
          <Header username="tizio" />
          <Greeting />
      </div>
    )
  }
}

class Header extends React.Component {
  render() {
    return (
      <header>
        <p>Benvenuto, {this.props.username}!</p>
      </header>
    )
  }
}

class Greeting extends React.Component {
  render() {
    const date = new Date();
    const hours = date.getHours();
    let timeOfDay;

    if (hours < 12) {
      timeOfDay = "Buongiorno"
    } else if (hours >= 12 && hours < 17) {
      timeOfDay = "Buon pomeriggio"
    } else {
      timeOfDay = "Buona sera"
    }
    return (
      <h1>{timeOfDay} a te!</h1>
    )
  }
}

export default App;