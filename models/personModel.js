const { v4: uuidv4 } = require('uuid')

let persons = require('../data/persons')
const { writeDataToFile } = require('../utils')

function findAll() {
    return new Promise((resolve, reject) => {
        resolve(persons)
    })
}


function findById(id) {
    return new Promise((resolve, reject) => {
        const person = persons.find((pers => pers.id === id))
        resolve(person)
    })
}


function create(person) {
    return new Promise((resolve, reject) => {
        const newPerson = { "id": uuidv4(), ...person }
        persons.push(newPerson)

        if (process.env.NODE_ENV !== 'test') {
            writeDataToFile('./data/persons.json', persons);
        }
        resolve(newPerson)
    })
}


function update(id, person) {
    return new Promise((resolve, reject) => {
        const index = persons.findIndex((p) => p.id === id)
        persons[index] = { id, ...person }
        if (process.env.NODE_ENV !== 'test') {
            writeDataToFile('./data/persons.json', persons);
        }
        resolve(persons[index])
    })
}


function remove(id) {
    return new Promise((resolve, reject) => {
        persons = persons.filter((p) => p.id !== id)

        if (process.env.NODE_ENV !== 'test') {
            writeDataToFile('./data/persons.json', persons);
        }
        resolve()
    })
}

module.exports = {
    findAll,
    findById,
    create,
    update,
    remove
}