import pg from 'pg';
const { Pool } = pg;

const pool = new Pool({
    connectionString: "postgres://postgres:abbos@localhost:5432/node-bot"
})

export const fetchData = async(SQL, ...params) => {
    const client = await pool.connect();
    try {
        const { rows } = await client.query(SQL, params.length ? params : null);
        return rows
    } catch (error) {
        console.log(error);
    } finally {
        client.release()
    }
}