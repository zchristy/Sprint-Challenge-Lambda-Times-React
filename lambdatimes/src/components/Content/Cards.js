import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

const Cards = props => {
  const { cards } = props;

  const card = cards.map(card => {
    return <Card
              key={card.headline}
              card={card}
            />

  });

  return (
    <div className="cards-container">
      {card}
    </div>
  )
}

// Make sure you include prop types for all of your incoming props
Cards.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object).isRequired,
}
export default Cards;
/* Using the cards prop, map over the list creating a
    new Card component for each passing the card as the only prop*/
