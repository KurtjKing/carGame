import React from "react";
import "./Card.css";

const Card = props => (
  <div className="card img-container hover">
    <img alt={props.name} src={props.image} id={props.id} />
    <span onClick={() => props.shuffleScoreCard(props.id)} className="remove">X</span>
  </div>
);

export default Card;