import { pool } from '../config/database.js'

const getAllEvents = async (req, res) => {
    try {
        const results = await pool.query('SELECT * FROM events ORDER BY date ASC')
        res.status(200).json(results.rows)
    }
    catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Failed to get events' })
    }
}

const getEventById = async (req, res) => {
    try {
        const { id } = req.params
        const results = await pool.query('SELECT * FROM events WHERE id = $1', [id])

        if (results.rows.length === 0) {
            return res.status(404).json({ error: 'Event not found' })
        }

        res.status(200).json(results.rows[0])
    }
    catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Failed to get event' })
    }
}

const getEventsByLocationId = async (req, res) => {
    try {
        const { locationId } = req.params
        const results = await pool.query('SELECT * FROM events WHERE location_id = $1 ORDER BY date ASC', [locationId])
        res.status(200).json(results.rows)
    }
    catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Failed to get events for location' })
    }
}

export { getAllEvents, getEventById, getEventsByLocationId }