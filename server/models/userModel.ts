import { Pool } from 'pg';
import dotenv from 'dotenv'
dotenv.config();

const PG_URI = process.env.PG_URI || 'postgres://htefxrkr:aP-bOwlNcJEmj4bA1JPld5JqL994JNc_@drona.db.elephantsql.com/htefxrkr';

const pool = new Pool({
    connectionString: PG_URI
});

export default function query (text: any, params?, callback?) {
    console.log('executed query', text);
    return pool.query(text, params, callback);
}
