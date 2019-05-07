import MapboxGL from 'mapbox-gl';
import React from 'react';

MapboxGL.accessToken = 'Get access token from mapbox.com';

const Mapbox = () => {
  const mapRef = React.useRef(null);
  React.useEffect(() => {
    const map = new MapboxGL.Map({
      container: mapRef.current,
      style: 'mapbox://styles/mapbox/dark-v10',
      center: [-74.0066, 40.7135],
      zoom: 15.5,
      pitch: 45,
      bearing: -17.6
    });

    map.on('load', () => {
      // Insert the layer beneath any symbol layer.
      const { layers } = map.getStyle();

      let labelLayerId;
      for (let i = 0; i < layers.length; i += i + 1) {
        if (layers[i].type === 'symbol' && layers[i].layout['text-field']) {
          labelLayerId = layers[i].id;
          break;
        }
      }

      map.addLayer(
        {
          id: '3d-buildings',
          source: 'composite',
          'source-layer': 'building',
          filter: ['==', 'extrude', 'true'],
          type: 'fill-extrusion',
          minzoom: 15,
          paint: {
            'fill-extrusion-color': '#fff',

            // use an 'interpolate' expression to add a smooth transition effect to the
            // buildings as the user zooms in
            'fill-extrusion-height': [
              'interpolate',
              ['linear'],
              ['zoom'],
              15,
              0,
              15.05,
              ['get', 'height']
            ],
            'fill-extrusion-base': [
              'interpolate',
              ['linear'],
              ['zoom'],
              15,
              0,
              15.05,
              ['get', 'min_height']
            ],
            'fill-extrusion-opacity': 0.6
          }
        },
        labelLayerId
      );
    });
  }, []);

  return <div ref={mapRef} />;
};

export default Mapbox;
