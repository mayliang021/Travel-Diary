import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import React from 'react'
import L from "leaflet";
import custionIcon from './plane-arrival-solid.svg'

function MyMap({lists}) {
  const position = [51.505, -0.09]

  const myIcon = new L.Icon({
    iconUrl: custionIcon,
    iconAnchor: [12, 41],
    iconSize: [40, 40]
});


  return (
    <MapContainer
      center={position}
      zoom={13}
      scrollWheelZoom={false}
      style={{height: '650px', width: '58vw'}}
    >
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    {lists && lists.map(list => {
      return <Marker
        position ={[
          list.geolocation.coordinates[1],
          list.geolocation.coordinates[0],
        ]}
        icon={myIcon}
      >
        <Popup>
          {/* <h5>{list.title}</h5>
          <p>{list.date}</p>
          {list.body} */}
          <div className="card m-2 p-3" style={{width: '18rem'}}>
            <img src={list.photosUrl} class="card-img-top" alt="..." />
            <div className="card-body">
              <h4 className="card-title">{list.title}</h4>
              <div className='row'>
                <h6 class="card-subtitle mb-2 text-muted col">{list.location}</h6>
                {/* <h6 class="card-subtitle mb-2 text-muted col">{list.date}</h6> */}
              </div>
              {/* <p className="card-text">{list.body}</p> */}
            </div>
          </div>
          </Popup>
      </Marker>
    })}
  </MapContainer>
  )
}

export default MyMap;