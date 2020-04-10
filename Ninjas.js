import React from 'react';

/*const Ninjas=(props)=>
  {
  
    const { ninjas } = props; or */

  const Ninjas=({ninjas,deleteNinja})=>
  {  
    const ninjaList = ninjas.map(ninja => {
      return (
        <div className="ninja" key={ninja.id}>
          <div>Name: { ninja.name }</div>
          <div>Age: { ninja.age }</div>
          <div>Belt: { ninja.belt }</div>
          <button onClick={() =>{deleteNinja(ninja.id)}}> Delete me</button>
        </div>
      )
    });
    return (
      <div className="ninja-list">
        { ninjaList }
      </div>
    )
  }

export default Ninjas