const BASE_URL = '/api/events'

const getAllEvents = async () => {
    try {
        const response = await fetch(BASE_URL)
        const data = await response.json()
        return data
    }
    catch (error) {
        console.error('Error fetching events:', error)
        throw error
    }
}

const getEventsById = async (id) => {
    try {
        const response = await fetch(`${BASE_URL}/${id}`)
        const data = await response.json()
        return data
    }
    catch (error) {
        console.error('Error fetching event:', error)
        throw error
    }
}

const getEventsByLocationId = async (locationId) => {
    try {
        const response = await fetch(`${BASE_URL}/location/${locationId}`)
        const data = await response.json()
        return data
    }
    catch (error) {
        console.error('Error fetching events for location:', error)
        throw error
    }
}

const EventsAPI = {
    getAllEvents,
    getEventsById,
    getEventsByLocationId
}

export default EventsAPI