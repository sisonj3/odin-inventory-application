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

async function editItem(id, newName, newTypeID, newPrice) {
    await pool.query(`UPDATE items
                        SET name = '${newName}', typeID = ${newTypeID}, price = ${newPrice}
                        WHERE id = ${id};`);
}


async function getItem(id) {
    const { rows } = await pool.query(`SELECT * FROM items WHERE id = ${id};`);
    return rows;
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
    editItem,
    getItem,
    getAllItems,
    getAllCategories
}