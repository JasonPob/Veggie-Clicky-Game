
import React from "react";


//Create cards
const Card = props => (
  <div className="card img-container hover">
      <img alt={props.name} src={props.image} id={props.id}
        onClick={() => props.shuffleCards(props.id)} className='shuffleScore'/>
  </div>
);

export default Card;