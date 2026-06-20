const BASE_URL = '/api/locations'

const getAllLocations = async () => {
    try {
        const response = await fetch(BASE_URL)
        const data = await response.json()
        return data
    }
    catch (error) {
        console.error('Error fetching locations:', error)
        throw error
    }
}

const getLocationById = async (id) => {
    try {
        const response = await fetch(`${BASE_URL}/${id}`)
        const data = await response.json()
        return data
    }
    catch (error) {
        console.error('Error fetching location:', error)
        throw error
    }
}

const LocationsAPI = {
    getAllLocations,
    getLocationById
}

export default LocationsAPI