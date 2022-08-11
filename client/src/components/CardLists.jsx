import React from 'react';
import Card from './Card.jsx'

function CardLists({lists, handleDelete}) {

  return (
    <div className='row' style={{marginTop: '50px'}}>
      <h3>WHERE I HAVE BEEN TO</h3>
      {lists && lists.map(list => {
        return (
          <Card list={list} handleDelete={handleDelete}/>
        )
      })}
    </div>
  );
}

export default CardLists;