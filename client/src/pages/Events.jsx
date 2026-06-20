import React, { useState, useEffect } from 'react'
import Event from '../components/Event'
import EventsAPI from '../services/EventsAPI'
import LocationsAPI from '../services/LocationsAPI'
import '../css/LocationEvents.css'

const Events = () => {
    const [events, setEvents] = useState([])
    const [locations, setLocations] = useState([])
    const [selectedLocation, setSelectedLocation] = useState('all')

    useEffect(() => {
        (async () => {
            try {
                const eventsData = await EventsAPI.getAllEvents()
                setEvents(eventsData)

                const locationsData = await LocationsAPI.getAllLocations()
                setLocations(locationsData)
            }
            catch (error) {
                console.error('Error loading events:', error)
            }
        })()
    }, [])

    const filteredEvents = selectedLocation === 'all'
        ? events
        : events.filter(event => event.location_id === parseInt(selectedLocation))

    return (
        <div className='location-events'>
            <div style={{ textAlign: 'center', margin: '20px 0' }}>
                <label htmlFor='locationFilter' style={{ marginRight: '10px', fontWeight: 'bold' }}>
                    Filter by location:
                </label>
                <select
                    id='locationFilter'
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                >
                    <option value='all'>All Locations</option>
                    {locations.map(location =>
                        <option key={location.id} value={location.id}>{location.name}</option>
                    )}
                </select>
            </div>

            <main>
                {
                    filteredEvents && filteredEvents.length > 0 ? filteredEvents.map((event) =>
                        <Event
                            key={event.id}
                            id={event.id}
                            title={event.title}
                            date={event.date}
                            time={event.time}
                            image={event.image}
                        />
                    ) : <h2><i className="fa-regular fa-calendar-xmark fa-shake"></i> {'No events scheduled yet!'}</h2>
                }
            </main>
        </div>
    )
}

export default Events