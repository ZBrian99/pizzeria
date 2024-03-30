import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons'; // Importa todos los íconos sólidos

import '../styles/Services.scss';



export const Services = () => {
    return (
        <div className='Service'>
            <h2 className='Service-Title'>Lorem, ipsum dolor.</h2>
            <p className='Service-Description'>Lorem, ipsum dolor. Lorem, ipsum dolor.</p>
            <div className='Service-Section'>
                <div className='Service-BackgroundEfect'>
                    <FontAwesomeIcon icon={fas.faPizzaSlice} className='Service-Icon' />
                </div>
                <h3 className='Service-Subtitle'>Lorem, ipsum dolor.</h3>
                <p className='Service-Description'>Lorem, ipsum dolor. Lorem, ipsum dolor.</p>
            </div>
            <div className='Service-Section'>
                <div className='Service-BackgroundEfect'>
                    <FontAwesomeIcon icon={fas.faShop} className='Service-Icon' /></div>
                <h3 className='Service-Subtitle'>Lorem, ipsum dolor.</h3>
                <p className='Service-Description'>Lorem, ipsum dolor. Lorem, ipsum dolor. Lorem, ipsum dolor. Lorem, ipsum dolor.</p>
            </div>
            <div className='Service-Section'>
                <div className='Service-BackgroundEfect'>
                    <FontAwesomeIcon icon={fas.faGifts} className='Service-Icon' /></div>
                <h3 className='Service-Subtitle'>Lorem, ipsum dolor. Lorem, ipsum dolor. Lorem, ipsum dolor. Lorem, ipsum dolor. Lorem, ipsum dolor. Lorem, ipsum dolor.</h3>
                <p className='Service-Description'>Lorem, ipsum dolor. Lorem, ipsum dolor. Lorem, ipsum dolor. Lorem, ipsum dolor. Lorem, ipsum dolor. Lorem, ipsum dolor.</p>
            </div>
        </div>
    );
}


