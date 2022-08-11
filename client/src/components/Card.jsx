import React, {useState} from 'react';

function Card({list, handleDelete}) {
  const [showMore, setShowMore] = useState(false)
  const {body, title, location, date, photosUrl, _id} = list;

  const renderBody = (body) => {
    if(body.length > 250) {
      return (
      <p className='card-text'>
        {showMore ? body : body.slice(0, 250) + '...'}
        <button className='showMore' onClick={() => setShowMore(!showMore)}>
          {showMore ? 'Show less' : 'Show more'}
        </button>
      </p>)
    } else {
      return <p className='card-text'>{body}</p>
    }
  }
  return (
          <div className="card col-6 m-3 p-3" style={{width: '30rem'}}>
            <img src={photosUrl} class="card-img-top" alt="..." />
            <div className="card-body">
              <h4 className="card-title text-uppercase">{title}</h4>
              <div className='row'>
                <h6 class="card-subtitle mb-2 text-muted col text-uppercase">{location}</h6>
                <h6 class="card-subtitle mb-2 text-muted col">{date}</h6>
              </div>
              {/* <p className="card-text">{body.length < 200 ? body : body.slice(0, 200)}</p> */}
              {renderBody(body)}
              <button onClick={() => handleDelete(_id)} className='btn btn-outline-secondary myBtn2'>DELETE</button>
            </div>
          </div>

  );
}

export default Card;