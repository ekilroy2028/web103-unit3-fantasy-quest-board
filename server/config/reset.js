import { pool } from './database.js'

const createLocationsTable = async () => {
    await pool.query(`
        DROP TABLE IF EXISTS events;
        DROP TABLE IF EXISTS locations;

        CREATE TABLE locations (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            image VARCHAR(500),
            address VARCHAR(255),
            city VARCHAR(100),
            state VARCHAR(50),
            zip VARCHAR(20)
        );
    `)
}

const createEventsTable = async () => {
    await pool.query(`
        CREATE TABLE events (
            id SERIAL PRIMARY KEY,
            title VARCHAR(255) NOT NULL,
            date VARCHAR(50),
            time VARCHAR(50),
            image VARCHAR(500),
            location_id INTEGER REFERENCES locations(id)
        );
    `)
}

const seedLocations = async () => {
    await pool.query(`
        INSERT INTO locations (name, image, address, city, state, zip)
        VALUES
        ('The Rusty Tankard', '', '12 Cobblestone Way', 'Eldermoor', 'Vaelthorn', '00112'),
        ('The Whispering Woods', '', '1 Forest Path', 'Eldermoor', 'Vaelthorn', '00113'),
        ('Crumbled Spire', '', '99 Ruin Road', 'Eldermoor', 'Vaelthorn', '00114'),
        ('Obsidian Hollow', '', '666 Shadow Pass', 'Eldermoor', 'Vaelthorn', '00115');
    `)
}

const seedEvents = async () => {
    await pool.query(`
        INSERT INTO events (title, date, time, image, location_id)
        VALUES
        ('Bards Night Brawl', '2026-07-01', '19:00', '', 1),
        ('Adventurers Welcome Feast', '2026-07-10', '18:00', '', 1),
        ('Moonlit Hunt', '2026-07-03', '21:00', '', 2),
        ('Druid Gathering', '2026-07-15', '12:00', '', 2),
        ('Ruins Excavation Tour', '2026-07-05', '10:00', '', 3),
        ('Dragonfire Trial', '2026-07-20', '17:00', '', 4);
    `)
}

const reset = async () => {
    try {
        await createLocationsTable()
        await createEventsTable()
        await seedLocations()
        await seedEvents()
        console.log('Database reset and seeded successfully! 🐉')
    }
    catch (error) {
        console.error('Error resetting database:', error)
    }
    finally {
        pool.end()
    }
}

reset()