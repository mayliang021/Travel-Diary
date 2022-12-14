import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken = ''


function Map() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(2.35);
  const [lat, setLat] = useState(48.82);
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    if (map.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom
    });
  });

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on('move', () => {
    setLng(map.current.getCenter().lng.toFixed(4));
    setLat(map.current.getCenter().lat.toFixed(4));
    setZoom(map.current.getZoom().toFixed(2));
    });
  });

  // useEffect(() => {
  //   new mapboxgl.Marker()
  //   .setLngLat([48.82, 2.35])
  //   .setPopup(
  //     new mapboxgl.Popup({offset: 25})
  //     .setHTML('<h1>Hello World!</h1>')
  //   )
  //   .addTo(map)

  // },[])



  return (
    <div>
      <div ref={mapContainer} className="map-container"/>


    </div>
  );
}

export default Map;