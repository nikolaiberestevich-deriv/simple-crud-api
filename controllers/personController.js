const Person = require('../models/personModel')
const { getPostData } = require('../utils')
const validate = require('uuid-validate');
// @desc Get all persons
// @route GET /person
async function getPersons(req, res) {
    try {
        const persons = await Person.findAll()
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(persons))
    } catch {
        res.writeHead(500, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({ message: '500 error - server error' }))
    }
}

// @desc Get person by id
// @route GET /person/id
async function getPersonById(req, res, id) {
    try {
        const person = await Person.findById(id)
        if (!validate(id)) {
            res.writeHead(400, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ message: 'id is not valid!!' }))
        } else if (!person) {
            res.writeHead(404, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ message: 'person is not found!!' }))
        } else {
            res.writeHead(200, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify(person))
        }
    } catch {
        res.writeHead(500, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({ message: '500 error - server error' }))
    }
}

// @desc add new person
// @route POST /person
async function createPerson(req, res) {
    try {
        const body = await getPostData(req)
        const { name, age, hobbies } = JSON.parse(body)

        const person = { name, age, hobbies }
        if (!name || !age || !Array.isArray(hobbies)) {
            res.writeHead(400, { 'Content-Type': 'application/json' })
            return res.end(JSON.stringify({ message: " server can't find name/age/ hobbies, or hobbies is not an array" }))
        }
        const newPerson = await Person.create(person);

        res.writeHead(201, { 'Content-Type': 'application/json' })
        return res.end(JSON.stringify(newPerson))

    } catch (error) {
        res.writeHead(500, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({ message: '500 error - server error' }))
    }
}

// @desc update person
// @route PUT /person/id
async function updatePerson(req, res, id) {
    try {
        if (!validate(id)) {
            res.writeHead(400, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ message: 'id is not valid!!' }))
        } else {
            const person = await Person.findById(id)


            if (!person) {
                res.writeHead(404, { 'Content-Type': 'application/json' })
                res.end(JSON.stringify({ message: 'person Not Found' }))
            } else {
                const body = await getPostData(req)
                const { name, age, hobbies } = JSON.parse(body)

                const personData = {
                    name: name || person.name,
                    age: age || person.age,
                    hobbies: hobbies || person.hobbies
                }
                const updPerson = await Person.update(id, personData)

                res.writeHead(201, { 'Content-Type': 'application/json' })
                return res.end(JSON.stringify(updPerson))
            }
        }

    } catch (error) {
        res.writeHead(500, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({ message: '500 error - server error' }))
    }
}
// @desc delete person
// @route DELETE /person/id
async function deletePerson(req, res, id) {
    try {
        if (!validate(id)) {
            res.writeHead(400, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ message: 'id is not valid!!' }))
        } else {

            const person = await Person.findById(id)

            if (!person) {
                res.writeHead(404, { 'Content-Type': 'application/json' })
                res.end(JSON.stringify({ message: `Can't delete: Person Not Found` }))
            } else {
                await Person.remove(id)

                res.writeHead(204, { 'Content-Type': 'application/json' })
                return res.end(JSON.stringify({}))
            }
        }
    } catch (error) {
        res.writeHead(500, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({ message: '500 error - server error' }))
    }
}


module.exports = {
    getPersons,
    getPersonById,
    createPerson,
    updatePerson,
    deletePerson
}