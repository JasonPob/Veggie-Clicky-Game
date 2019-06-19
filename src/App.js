import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Score from "./components/Score";
import veggies from "./cards.json";
import "./App.css";

class App extends Component {
  // Setting this.state.veggies to the cards json array
  state = {
    veggies,
    clickedVeggies: [],
    score: 0,
    goal: 9,
    status: ""
  };

  //shuffle the veggies cards in the browser when clicked
  shuffleCards = id => {
    let clickedVeggies = this.state.clickedVeggies;

    if(clickedVeggies.includes(id)){
      this.setState({ clickedVeggies: [], score: 0, status:  "Game Over! Better luck next time! Click to play again!" });
      return;
    }else{
      clickedVeggies.push(id)

      if(clickedVeggies.length === 9){
        this.setState({score: 9, status: "Congrats!", clickedVeggies: []});
        return;
      }

      this.setState({ veggies, clickedVeggies, score: clickedVeggies.length, status: " " });

      for (let i = veggies.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [veggies[i], veggies[j]] = [veggies[j], veggies[i]];
      }
    }
  }

  // Map over this.state.cards and render a Card component for each card object
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Veggie Click Game!</h1>
          <p className="App-intro">
            Click all the veggies without clicking the same veggie twice!
          </p>
        </header>
        <Score total={this.state.score}
               goal={9}
               status={this.state.status}
               />
        <Wrapper>
          {this.state.veggies.map(veg => (
            <Card
              shuffleCards={this.shuffleCards}
              id={veggies.id}
              key={veggies.id}
              image={veggies.image}
            />
          ))}
        </Wrapper>
        <footer>
          
        </footer>
    </div>
    );
  }
}

export default App;