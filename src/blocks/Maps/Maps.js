import React from 'react';
import {
  GeoObject, Map, YMaps, ZoomControl,
} from 'react-yandex-maps';

import './Maps.css';

export default class Maps extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      map: {
        center: [51.712814, 39.166564], // координаты Воронежа
        zoom: 15,
        behaviors: ['drag', 'dblClickZoom', 'multiTouch'],
      },
    };
  }

  render() {
    return (
      <div
        id="Maps"
        className="Maps"
      >
        <YMaps
          version={2.1}
        >
          <Map
            style={{ width: '100%', height: '100%' }}
            defaultState={this.state.map}
          >
            <ZoomControl
              options={{
                size: 'small',
                zoomDuration: 300,
              }}
            />
            <GeoObject
              geometry={{
                type: 'Point',
                coordinates: this.state.map.center,
              }}
            />
          </Map>
        </YMaps>
      </div>
    );
  }
}
