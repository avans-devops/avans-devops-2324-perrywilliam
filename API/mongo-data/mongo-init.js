/* eslint-disable no-undef */
// Create a new database and switch to it
db = db.getSiblingDB('example');

// Create a new collection and insert documents
db.testcollection.insert([
    { name: 'Document 1' },
    { name: 'Document 2' },
    { name: 'Document 3' }
]);

// Create a user with read and write privileges for the database
db.createUser({
    user: 'myuser',
    pwd: 'mypassword',
    roles: [
        { role: 'readWrite', db: 'mydatabase' }
    ]
});
