const pool = require("./pool");

async function addItem(name, typeID, price) {
    await pool.query(`INSERT INTO items (name, typeID, price)
                        VALUES
                        ('${name}', ${typeID}, ${parseFloat(price).toFixed(2)});`);
}

async function addCategory(name) {
    await pool.query(`INSERT INTO type (name)
                        VALUES
                        ('${name}');`);
}

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
    addItem,
    addCategory,
    getAllItems,
    getAllCategories
}