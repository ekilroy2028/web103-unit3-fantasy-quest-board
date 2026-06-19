import express from 'express'
import { getAllEvents, getEventById, getEventsByLocationId } from '../controllers/events.js'

const router = express.Router()

router.get('/', getAllEvents)
router.get('/:id', getEventById)
router.get('/location/:locationId', getEventsByLocationId)

export default router