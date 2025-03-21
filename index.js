const pg = require('pg');

const client = new pg.Client({
    user: 'user2',
    host: '192.168.0.207',
    database: 'user2_db',
    password: 'skibidi',
    port: 5432,
});

const getFromDb = async () => {

    const res = await client.query('SELECT * FROM grades');
    console.log(res.rows);
}

const insertToDb = async (student_id, course_id, grade) => {


    const res = await client.query('INSERT INTO grades(student_id, course_id, grade) VALUES($1, $2, $3)', [student_id, course_id, grade]);
    console.log(res.rows);

}

const main = async ()=> {
    await client.connect()
    await insertToDb(1, 1, 4);
    await getFromDb();
    await client.end();
}

main();