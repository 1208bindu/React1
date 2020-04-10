import React from 'react';

/*const Ninjas=(props)=>
  {
  
    const { ninjas } = props; or */

/* using if---

    const Details=({dets})=>
  {  
    const dList = dets.map(dd => {
      if(dd.age>25)
      {
        return 
        (
          <div className="dd" key={dd.id}>
            <div>Name: { dd.name }</div>
            <div>Age: { dd.age }</div>
            <div>Belt: { dd.belt }</div>
          </div>
        )
      }
      else
      {
        return null;
      }
    }); 
    
    */
  const Details=({dets})=>
  {  
    const dList = dets.map(dd => {
      return dd.age>25?(
        <div className="dd" key={dd.id}>
          <h2>Name: { dd.name }</h2>
          <h2>Age: { dd.age }</h2>
          <h2>Belt: { dd.belt }</h2>
        </div>
      ):null
    });
    return (
      <div className="d-list">
        { dList }
      </div>
    )
  }

export default Details