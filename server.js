const { match } = require('assert')
const http = require('http')
const { getPersons, getPersonById, createPerson, updatePerson, deletePerson } = require('./controllers/personController')

const server = http.createServer((req, res) => {

    if (req.url === '/person' && req.method === 'GET') {
        getPersons(req, res)
    } else if (req.url.match(/\/person\/([0-9]+)/) && req.method === 'GET') {
        const id = req.url.split('/')[2].toString()
        getPersonById(req, res, id)

    } else if (req.url === '/person' && req.method === 'POST') {
        createPerson(req, res)
    }
    else if (req.url.match(/\/person\/([0-9]+)/) && req.method === 'PUT') {
        const id = req.url.split('/')[2].toString()
        updatePerson(req, res, id)

    } else if (req.url.match(/\/person\/([0-9]+)/) && req.method === 'DELETE') {
        const id = req.url.split('/')[2].toString()
        deletePerson(req, res, id)

    } else {
        res.writeHead(404, { 'Content-Type': 'application/json' })
        //res.write(JSON.stringify(persons)) // if we don't end response
        res.end(JSON.stringify({ message: 'rote is not found' }))
    }
})
// const PORT = process.env.PORT || 5000
const PORT = 5500

server.listen(PORT, () => console.log(`Server running at port ${PORT}`))