import React, { Component } from 'react';
import blank from './images/blank.png';
import cheeseburger from './images/cheeseburger.png';
import fries from './images/fries.png';
import hotdog from './images/hotdog.png';
import icecream from './images/ice-cream.png';
import milkshake from './images/milkshake.png';
import pizza from './images/pizza.png';
import white from './images/white.png';

import './style.css';

class MemoryGame extends Component {
  constructor(props) {
    super(props);

    this.cardArray = [
      { name: 'fries', img: fries },
      { name: 'cheeseburger', img: cheeseburger },
      { name: 'ice-cream', img: icecream },
      { name: 'pizza', img: pizza },
      { name: 'milkshake', img: milkshake },
      { name: 'hotdog', img: hotdog },
      { name: 'fries', img: fries },
      { name: 'cheeseburger', img: cheeseburger },
      { name: 'ice-cream', img: icecream },
      { name: 'pizza', img: pizza },
      { name: 'milkshake', img: milkshake },
      { name: 'hotdog', img: hotdog }
    ];

    this.state = {
      cardsChosen: [],
      cardsChosenId: [],
      cardsWon: [],
      resultDisplay: null,
    };
  }

  componentDidMount() {
    this.cardArray.sort(() => 0.5 - Math.random());

    const grid = document.querySelector('.grid');
    if (!grid) {
      console.error("Cannot find .grid element");
      return;
    }

    for (let i = 0; i < this.cardArray.length; i++) {
      const card = document.createElement('img');
      card.setAttribute('src', blank);
      card.setAttribute('data-id', i);
      card.addEventListener('click', this.flipCard.bind(this));
      grid.appendChild(card);
    }

    const resultDisplay = document.createElement('div');
    resultDisplay.id = 'result';
    document.body.appendChild(resultDisplay);
    this.setState({ resultDisplay });
  }

  checkForMatch() {
    const cards = document.querySelectorAll('img');
    const optionOneId = this.state.cardsChosenId[0];
    const optionTwoId = this.state.cardsChosenId[1];

    if (optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute('src', blank);
      cards[optionTwoId].setAttribute('src', blank);
      alert('You have clicked the same image!');
    } else if (this.state.cardsChosen[0] === this.state.cardsChosen[1]) {
      alert('You found a match');
      cards[optionOneId].setAttribute('src', white);
      cards[optionTwoId].setAttribute('src', white);
      cards[optionOneId].removeEventListener('click', this.flipCard);
      cards[optionTwoId].removeEventListener('click', this.flipCard);
      this.state.cardsWon.push(this.state.cardsChosen);
    } else {
      cards[optionOneId].setAttribute('src', blank);
      cards[optionTwoId].setAttribute('src', blank);
      alert('Sorry, try again');
    }

    this.setState({
      cardsChosen: [],
      cardsChosenId: [],
    });

    const resultDisplay = document.querySelector('#result');
    if (resultDisplay) {
      resultDisplay.textContent = this.state.cardsWon.length;
      if (this.state.cardsWon.length === this.cardArray.length / 2) {
        resultDisplay.textContent = 'Congratulations! You found them all!';
      }
    }
  }

  flipCard(event) {
    let cardId = event.target.getAttribute('data-id');
    this.state.cardsChosen.push(this.cardArray[cardId].name);
    this.state.cardsChosenId.push(cardId);
    event.target.setAttribute('src', this.cardArray[cardId].img);
    if (this.state.cardsChosen.length === 2) {
      setTimeout(this.checkForMatch.bind(this), 500);
    }
  }

  render() {
    return (
      <div className='screen'>
        <div className='heading'>Match the cliparts</div>
        <div className="grid"></div>
        {this.state.resultDisplay?.textContent}
      </div>
    );
  }
}

// Exporting as a function to create a new instance using the 'new' keyword
export default function NewMemoryGame() {
  return new MemoryGame();
}
