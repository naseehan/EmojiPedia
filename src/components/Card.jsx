import React from "react";
import App from "./App";
import Emoji from "./Emoji";

function Card(props){
    return(
        <div className="term">
        <dt>
          {/* <span className="emoji" role="img" aria-label="Tense Biceps">
            {props.emoji}
          </span> */}

          <Emoji 
            emoji={props.emoji}
          />

          <span>{props.name}</span>
        </dt>
        <dd>
         {props.meaning}
        </dd>
      </div>
    )
}

export default Card;