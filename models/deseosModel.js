const db = require('./db');

const getAllDeseos = async () => {
    const [rows] = await db.query('SELECT * FROM deseos');
    return rows;
};

const createDeseo = async (texto) => {
    const [result] = await db.query('INSERT INTO deseos (texto) VALUES (?)', [texto]);
    return result.insertId;
};

const deleteDeseo = async (id) => {
    await db.query('DELETE FROM deseos WHERE id = ?', [id]);
};

const addDeseo = async () => {
    const nuevo = "Nuevo deseo";
    await db.query('INSERT INTO deseos(texto) VALUES (?)', [nuevo]);
};

module.exports = { getAllDeseos, createDeseo, deleteDeseo, addDeseo };



// docker run --name mysql-demo -e MYSQL_ROOT_PASSWORD=password \
// -e MYSQL_USER=demo -e MYSQL_PASSWORD=password -e MYSQL_DATABASE=demo \
// -p 3306:3306 -d mysql:5.7
