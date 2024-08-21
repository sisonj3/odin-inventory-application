const pool = require("./pool");

async function getAllItems() {
    const { rows } = await pool.query(`
        SELECT items.id, items.name, type.name AS category, items.price
        FROM items JOIN type ON items.typeID = type.id;
        `);
    return rows;
}

async function getAllCategories() {
    const { rows } = await pool.query("SELECT * FROM type;");
    return rows;
}

module.exports = {
    getAllItems,
    getAllCategories
}