const { match } = require('assert')
const http = require('http')
const { getPersons, getPersonById, createPerson, updatePerson, deletePerson } = require('./controllers/personController')

require('dotenv').config();
const PORT = process.env.PORT || 5000

const server = http.createServer((req, res) => {
    if (req.url === '/person' && req.method === 'GET') {
        getPersons(req, res)
    } else if (req.url.match(/\/person\/([\W\S_]+)/) && req.method === 'GET') {
        const id = req.url.split('/')[2].toString()
        getPersonById(req, res, id)

    } else if (req.url === '/person' && req.method === 'POST') {
        createPerson(req, res)
    }
    else if (req.url.match(/\/person\/([\W\S_]+)/) && req.method === 'PUT') {
        const id = req.url.split('/')[2].toString()
        updatePerson(req, res, id)

    } else if (req.url.match(/\/person\/([\W\S_]+)/) && req.method === 'DELETE') {
        const id = req.url.split('/')[2].toString()
        deletePerson(req, res, id)

    } else {
        res.writeHead(404, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({ message: 'route is not found' }))
    }
}
)


server.listen(PORT, () => console.log(`Server running at port ${PORT}`))