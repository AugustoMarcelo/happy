import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiPlus } from 'react-icons/fi';
import { Map, TileLayer, Marker } from 'react-leaflet';

import mapMarkerImg from '../../images/map-marker.svg';
import mapIcon from '../../utils/mapIcon';
import api from '../../services/api';

import {
  Container,
  Sidebar,
  CreateOrphanageButton,
  CustomPopup,
} from './styles';

interface Orphanage {
  id: number;
  latitude: number;
  longitude: number;
  name: string;
}

function OrphanagesMap() {
  const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

  useEffect(() => {
    api.get('/orphanages').then((response) => {
      setOrphanages(response.data);
    });
  }, []);

  return (
    <Container>
      <Sidebar>
        <header>
          <img src={mapMarkerImg} alt="Happy" />

          <h2>
            Escolha <br /> um orfanato no mapa
          </h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>

        <footer>
          <strong>Rio Grande do Norte</strong>
          <span>Caicó</span>
        </footer>
      </Sidebar>

      <Map
        center={[-6.4793281, -37.0722295]}
        zoom={15}
        style={{
          width: '100%',
          height: '100%',
        }}
      >
        {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        />
        {orphanages.map((orphanage) => (
          <Marker
            key={orphanage.id}
            icon={mapIcon}
            position={[orphanage.latitude, orphanage.longitude]}
          >
            <CustomPopup closeButton={false} minWidth={240} maxWidth={240}>
              {orphanage.name}
              <Link to={`/orphanages/${orphanage.id}`}>
                <FiArrowRight size={20} color="#fff" />
              </Link>
            </CustomPopup>
          </Marker>
        ))}
      </Map>

      <CreateOrphanageButton to="/orphanages/create">
        <FiPlus size={32} color="#FFF" />
      </CreateOrphanageButton>
    </Container>
  );
}

export default OrphanagesMap;
