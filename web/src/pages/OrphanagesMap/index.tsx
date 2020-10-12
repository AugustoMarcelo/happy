import React from 'react';
import { FiPlus } from 'react-icons/fi';
import { Map, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import mapMarkerImg from '../../images/map-marker.svg';

import { Container, Sidebar, CreateOrphanageButton } from './styles';

function OrphanagesMap() {
  return (
    <Container>
      <Sidebar>
        <header>
          <img src={mapMarkerImg} alt="Happy" />

          <h2>Escolha <br /> um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>

        <footer>
          <strong>Rio Grande do Norte</strong>
          <span>Caicó</span>
        </footer>
      </Sidebar>

      <Map 
        center={[-6.4793281,-37.0722295]}
        zoom={15}
        style={{
          width: '100%',
          height: '100%'
        }}
      >
        {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        />
      </Map>

      <CreateOrphanageButton to="">
        <FiPlus size={32} color="#FFF" />
      </CreateOrphanageButton>
    </Container>
  )
}

export default OrphanagesMap;
