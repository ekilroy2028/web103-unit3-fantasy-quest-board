import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import LocationsAPI from '../services/LocationsAPI'
import '../css/Locations.css'

const Locations = () => {

    const [locations, setLocations] = useState([])

    useEffect(() => {
        (async () => {
            try {
                const locationsData = await LocationsAPI.getAllLocations()
                setLocations(locationsData)
            }
            catch (error) {
                console.error('Error loading locations:', error)
            }
        })()
    }, [])

    return (
        <div className='available-locations'>
            {locations.map(location =>
                <Link
                    key={location.id}
                    to={`/locations/${location.id}`}
                    className='venue-button-overlay'
                >
                    <button>{location.name}</button>
                </Link>
            )}
        </div>
    )
}

export default Locations