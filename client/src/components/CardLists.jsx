import React from 'react';
import Card from './Card.jsx'

function CardLists({lists, handleDelete}) {

  return (
    <div className='row'>
      {lists && lists.map(list => {
        return (
          <Card list={list} handleDelete={handleDelete}/>
        )
      })}
    </div>
  );
}

export default CardLists;