const { PrismaClient } = require('@prisma/client');
const { PrismaNeon } = require('@prisma/adapter-neon');

const dotenv = require('dotenv');
dotenv.config();

const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
    throw new Error('DATABASE_URL environment variable is not set');
    process.exit(1);
}else{
    console.log('DATABASE_URL environment variable is set');
    console.log('DATABASE_URL:', connectionString);
}

const adapter = new PrismaNeon( { connectionString } );
const prisma = new PrismaClient({ adapter });

module.exports = prisma;