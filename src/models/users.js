const dbPool = require('../config/db');

const getAllUsers = () => {
    const SQLQuery = 'SELECT * FROM USERS'

    return dbPool.execute(SQLQuery)
}

const createNewUser = (body) => {
    const SQLQuery = `INSERT INTO USERS (name, email, address) VALUES ('${body.name}', '${body.email}', '${body.address}')`

    return dbPool.execute(SQLQuery)
}

const updateDataUser = (id, body) => {
    const SQLQuery = `UPDATE USERS SET email = '${body.email}', address = '${body.address}' WHERE id = ${id}`
    
    return dbPool.execute(SQLQuery)
}

module.exports = {
    getAllUsers,
    createNewUser,
    updateDataUser,
}