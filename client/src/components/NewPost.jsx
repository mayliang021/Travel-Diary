import React, {useState, useEffect} from 'react';
import PhotoUpload from './PhotoUpload.jsx';
import mbxGeocoding from '@mapbox/mapbox-sdk/services/geocoding';




function NewPost({handleNewPost}) {
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [photosUrl, setPhotosUrl] = useState('');
  const [body, setBody] = useState('');
  const [geolocation, setGeolocation] = useState();

  const date = new Date().toDateString()

  const geocoder = mbxGeocoding({accessToken: 'pk.eyJ1IjoibWF5NjY4OCIsImEiOiJja3h6YjRmdGQwOXcxMm5tOGV5ZXBiNXJsIn0.foxgtrkWwXfIurLQkIyArg'})

  useEffect(() => {
    geocoder.forwardGeocode({
      query: `${location} ? paris: ${location}`,
      limit: 1
    })
    .send()
    .then(res => setGeolocation(res.body.features[0].geometry))
  }, [location, geocoder])


  const handleSubmit = (e) => {
    e.preventDefault();
    handleNewPost({title, location, photosUrl, body, geolocation, date})
    setBody('');
    setTitle('');
    setLocation('');
    setGeolocation();
  }


  return (
    <div className='card'>
      <div className='card-body'>
        <form onSubmit = {handleSubmit}>
          {/* <div className='fw-semibold'>{date}</div> */}
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label fw-bolder">Title</label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              value={title}
              onChange = {e => setTitle(e.target.value)}
              required
            />

          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label fw-bolder">Location</label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              value={location}
              onChange={e => setLocation(e.target.value)}
              required
             />
          </div>
          <div className="mb-3">
            <PhotoUpload setPhotosUrl={setPhotosUrl}/>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label fw-bolder">How do you feel</label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="10"
              value={body}
              onChange={e => setBody(e.target.value)}
             >

             </textarea>
          </div>
          <button className='btn btn-dark myBtn'>SUBMIT</button>
        </form>
    </div>
    </div>
  );
}

export default NewPost;