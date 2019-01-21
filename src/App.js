import React from 'react';
import './App.css';
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";

class App extends React.Component {
  state = {
    images: [{
      "id": 1,
      "name": "SpongeBob",
      "image": "https://upload.wikimedia.org/wikipedia/en/thumb/4/47/Spongebob-squarepants.svg/666px-Spongebob-squarepants.svg.png",
      "count": 0
    },
    {
      "id": 2,
      "name": "Mr. Krabs",
      "image": "https://vignette3.wikia.nocookie.net/vsbattles/images/8/80/Mr._Krabs.png/revision/latest?cb=20150919162131",
      "count": 0
    },
    {
      "id": 3,
      "name": "Squidward",
      "image": "https://vignette2.wikia.nocookie.net/fictionalcharacters/images/a/ac/Squidward.png/revision/latest?cb=20131121012626",
      "count": 0
    },
    {
      "id": 4,
      "name": "Dexter",
      "image": "https://s-media-cache-ak0.pinimg.com/originals/fe/32/49/fe32495d45283cd6860ae122f0aeaad9.png",
      "count": 0
    },
    {
      "id": 5,
      "name": "Courage",
      "image": "https://vignette4.wikia.nocookie.net/vsbattles/images/3/39/Courage-0.png/revision/latest?cb=20160719055423",
      "count": 0
    },
    {
      "id": 6,
      "name": "Bugs Bunny",
      "image": "https://vignette2.wikia.nocookie.net/deathbattlefanon/images/2/2b/Bugs_Bunny.png/revision/latest?cb=20151206010607",
      "count": 0
    },
    {
      "id": 7,
      "name": "Johnny Bravo",
      "image": "http://vignette3.wikia.nocookie.net/p__/images/9/9a/Johnny_Bravo.png/revision/latest?cb=20131031233339&path-prefix=protagonist",
      "count": 0
    },
    {
      "id": 8,
      "name": "Captain Planet",
      "image": "http://vignette2.wikia.nocookie.net/dragon-rap-battles/images/b/b6/Captain_Planet.png/revision/latest?cb=20160911200836",
      "count": 0
    }],
    chosenImages: [],
    isSelected: false,
    titleTag: "",
    score: 0,
    highScore: 0
  };

  shuffle = array => {
    let counter = array.length;

    while (counter > 0) {
        let index = Math.floor(Math.random() * counter);

        counter--;

        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }
    return array;
  }

  shuffleCards = () => {
    this.setState({ images: this.shuffle(this.state.images) });
  }

  selectCheck = (id) => {
    if(this.state.chosenImages.index(id) === -1){
      this.setState({ chosenImages: this.state.chosenImages.concat(id) });
      this.setState({ titleTag: "You got it right!" });
      this.setState({ score: this.state.score + 1 });
      if(this.state.score >= this.state.highScore){ this.setState({ highScore: this.state.highScore + 1 }); }
      this.shuffleCards();
    } else {
      this.setState({ titleTag: "You got it wrong!" });
      this.shuffleCards();
    }
  }

  gameOver = () => {
    if (this.state.score > this.state.highscore) {
      this.setState({highscore: this.state.score}, function() {
        console.log(this.state.highscore);
      });
    }
    this.state.images.forEach(images => {
      images.count = 0;
    });
    alert(`Game Over :( \nscore: ${this.state.score}`);
    this.setState({score: 0});
    return true;
  }

  clickCount = id => {
    this.state.images.find((o, i) => {
      if (o.id === id) {
        if(this.state.images[i].count === 0){
          this.state.images[i].count = this.state.images[i].count + 1;
          this.setState({score : this.state.score + 1}, function(){
            console.log(this.state.score);
          });
          this.shuffleCards();
          return true; 
        } else {
          this.gameOver();
          return false;
        }
      }
    });
  }

  render() {
    return (
      <Wrapper>
        <Header score={this.state.score} highscore={this.state.highScore}>Clicky Game</Header>
        {this.state.images.map(card => (
          <Card
            clickCount={this.clickCount}
            id={card.id}
            image={card.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
