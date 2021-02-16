import React from 'react'
import {Link} from 'react-router-dom'
import {FiPlus, FiArrowRight} from 'react-icons/fi'
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'

import mapMarkerImg from '../images/map-marker.svg'
import '../styles/pages/orphanages-map.css'
import mapIcon from '../utils/mapIcons'

function OrphanagesMap() {
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Happy"/>

                    <h2>Escolha um orfanato no mapa</h2>
                    <p>muitas crianças estão esperando a sua visita :)</p>
                </header>

                <footer>
                    <strong>Porto Alegre</strong>
                    <span>Rio Grande do Sul</span>
                </footer>
            </aside>

            <MapContainer 
                center={[-30.0122112,-51.1705088]}
                zoom={15}
                style={{width: '100%', height: '100%'}}
            >
                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />

                <Marker 
                    icon={mapIcon}
                    position={[-30.0122112,-51.1705088]}
                >
                    <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
                        Lar das Meninas
                        <Link to="/orphanages/1">
                            <FiArrowRight size={20} color="#FFF" />
                        </Link>
                    </Popup>
                </Marker>
            </MapContainer>

            <Link to="/orphanages/create" className="create-orphanage">
                <FiPlus size={32} color="#FFF" />
            </Link>
        </div>
    )
}

export default OrphanagesMap