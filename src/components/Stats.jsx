import React from 'react'
import "../styles/Stats.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'; // Importa todos los íconos sólidos
const StatsObj = { branches: 100, awards: 85, customers: 10567, staff: 900 }
export const Stats = () => {

    return (

        <div className='Stats'>


            <div className='Stats-Section'>
                <div className='Stats-BackgroundEfect'>
                    <FontAwesomeIcon icon={fas.faPizzaSlice} className='Stats-Icon' /></div>


                <h3 className='Stats-Subtitle' > {StatsObj.branches}  </h3>
                <p className='Stats-Description'> Pizza Branches </p>



            </div>
            <div className='Stats-Section'>
                <div className='Stats-BackgroundEfect'>
                    <FontAwesomeIcon icon={fas.faPizzaSlice} className='Stats-Icon' /></div>


                <h3 className='Stats-Subtitle'>{StatsObj.awards}  </h3>
                <p className='Stats-Description'> Number of Awards </p>

            </div>
            <div className='Stats-Section'>
                <div className='Stats-BackgroundEfect'>
                    <FontAwesomeIcon icon={fas.faPizzaSlice} className='Stats-Icon' /></div>


                <h3 className='Stats-Subtitle'>{StatsObj.customers}  </h3>
                <p className='Stats-Description'> Happy Customer </p>

            </div>
            <div className='Stats-Section'>
                <div className='Stats-BackgroundEfect'>
                    <FontAwesomeIcon icon={fas.faPizzaSlice} className='Stats-Icon' /></div>


                <h3 className='Stats-Subtitle'>{StatsObj.staff}  </h3>
                <p className='Stats-Description'> Staff </p>
            </div>
        </div>


    )
}
