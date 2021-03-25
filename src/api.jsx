import React from 'react';

function Api(props)
{
    return(
        <div className="api">
        <h1>Results</h1>
        <div className="res">
          <h2>Name: {props.poke_name}</h2>
          <img src={props.imgsrc} alt="pokemon image"/>
          <h4>Moves: {props.move}</h4>
          <h4>height: {props.poke_height}</h4>
        </div>
      </div>
    )
}
export default Api;