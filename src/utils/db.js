//config lowdb
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync(process.cwd() + '/db.json');
const db = low(adapter);

// Set some defaults
db.defaults({ books: [], users: [], transactions: [] }).write();

module.exports = db;
