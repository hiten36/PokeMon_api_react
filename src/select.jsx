import React from 'react';

function Select(props)
{
    return(
        <div className="select">
        <div className="op1">
          <h1>Select from list</h1>
          <select name="sel" id="sel">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <button onClick={props.f1} className="btn">Get Data</button>
        </div>
        <div className="op2">
          <h1>Or Enter a number</h1>
          <input type="text"/>
          <button onClick={props.f2} className="btn">Get Data</button>
        </div>
      </div>
    )
}
export default Select;