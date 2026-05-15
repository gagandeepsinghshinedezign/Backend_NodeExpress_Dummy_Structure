

const dns = require('dns');
dns.setServers(['8.8.8.8', '1.1.1.1']);

const db = require("../connection");
const { createRole } = require('./createRole');

async function seeder() {
    try {
        await db.connectDB()

        await createRole()

        console.log("Seeding done.")
    } catch (error) {
        console.log("Error in seeder")

    }
}

seeder()