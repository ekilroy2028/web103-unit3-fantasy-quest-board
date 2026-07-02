import express from 'express'
import { getAllEvents, getEventById, getEventsByLocationId } from '../controllers/events.js'

const router = express.Router()

router.get('/', getAllEvents)
router.get('/location/:locationId', getEventsByLocationId)
router.get('/:id', getEventById)

export default router