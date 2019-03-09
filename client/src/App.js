import React, { Component } from 'react';
import Card from "./components/Card";
import chars from "./cards.json";
import Wrapper from "./components/Wrapper";
import Score from "./components/Score";
import './App.css';


class App extends Component {
  // Setting this.state.chars to the cards json array
  state = {
    chars,
    score: 0,
    topScore: 0

  };
  shuffleScoreCard = userid => {

    chars.forEach(element => {
      if (userid === element.id) {
        if (element.clicked === false) {
        element.clicked = true;
          this.setState({ chars, score: this.state.score + 1, topScore: this.state.topScore + 1 });
        }
        else {
          if (element.clicked === true) {
          //  alert("clicked already!");
            this.setState({ score: 0 });
          }
        }
      }
    });

    chars.sort(() => Math.random() - 0.5);
    //let clickedChars = this.state.clickedChars;

    // if (clickedChars.includes(id)) {
    //   this.setState({ clickedChars: [], score: 0, status: "Game Over!" });
    //   return;
    // } else {
    //   clickedChars.push(id)

    //   if (clickedChars.length === 9) {
    //     this.setState({ score: 9, status: "Winner,Winner,Winner", clickedChars: [] });
    //     console.log('You Win');
    //     return;
    //   }

    //   this.setState({ chars, clickedChars, score: clickedChars.length, status: " " });

    //   for (let i = chars.length - 1; i > 0; i--) {
    //     let j = Math.floor(Math.random() * (i + 1));
    //     [chars[i], chars[j]] = [chars[j], chars[i]];
    //   }
    // }


  }

  // I wanted to use this method. I could get the score to go up but i couldnt figure out the loop and conditonals//
  //   shuffleScoreCard = id => {

  //     chars.sort(() => Math.random() - 0.5);

  //     this.setState({ chars, score:   this.state.score +1 });
  // };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Car Clicker</h1>
          <p className="App-intro">
            Try not to click the same image twice!
        </p>
        </header>
        <Score total={this.state.score}
          topScore={this.state.topScore}
          status={this.state.status}
        />
        <Wrapper>
          {this.state.chars.map(data => (
            <Card
              shuffleScoreCard={this.shuffleScoreCard}
              id={data.id}
              key={data.id}
              image={data.image}
            />
          ))}
        </Wrapper>

      </div>
    );
  }
}

export default App;
