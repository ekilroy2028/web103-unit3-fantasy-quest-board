import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import LocationsAPI from '../services/LocationsAPI'
import '../css/Locations.css'

const Locations = () => {

    const [venueNames, setVenueNames] = useState({venue1: '', venue2: '', venue3: '', venue4: ''})

    useEffect(() => {
        (async () => {
            try {
                const locationsData = await LocationsAPI.getAllLocations()
                setVenueNames({venue1: locationsData[0].name, venue2: locationsData[1].name, venue3: locationsData[2].name, venue4: locationsData[3].name})
            }
            catch (error) {
                console.error('Error loading locations:', error)
            }
        }) ()
    }, [])

    return (
        <div className='available-locations'>
            <Link to='/echolounge' id='venue1button' className='venue1-button-overlay'>
                <button>{venueNames.venue1}</button>
            </Link>

            <Link to='/houseofblues' id='venue2button' className='venue2-button-overlay'>
                <button>{venueNames.venue2}</button>
            </Link>

            <Link to='/pavilion' id='venue3button' className='venue3-button-overlay'>
                <button>{venueNames.venue3}</button>
            </Link>

            <Link to='/americanairlines' id='venue4button' className='venue4-button-overlay'>
                <button>{venueNames.venue4}</button>
            </Link>
        </div>
    )
}

export default Locations