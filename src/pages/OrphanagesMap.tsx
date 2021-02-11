import React from 'react'
import {Link} from 'react-router-dom'
import {FiPlus} from 'react-icons/fi'

import mapMarkerImg from '../images/map-marker.svg'
import '../styles/pages/orphanages-map.css'

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

            <div></div>

            <Link to="" className="create-orphanage">
                <FiPlus size={32} color="#FFF" />
            </Link>
        </div>
    )
}

export default OrphanagesMap