const request = require('supertest')
// require('../server') //uncomment this and uncomment line in the end of tests, if you want to start/stop server for every testr
require('dotenv').config();
const PORT = process.env.PORT


describe('Get person', () => {

    it('get array of persons', async () => {
        const res = await request(`http://localhost:${PORT}`).get('/person')
        expect(res.statusCode).toEqual(200)
        expect(Array.isArray(res.body)).toBe(true)
    })


    it('get one person', async () => {
        const newPerson = { "name": "Vasia", "age": 126, "hobbies": ["PSgames", "Alchogol"] }

        const res = await request(`http://localhost:${PORT}`)
            .post('/person')
            .send(newPerson)

        const id = res.body.id

        const get_res = await request(`http://localhost:${PORT}`)
            .get(`/person/${id}`)

        expect(get_res.statusCode).toEqual(200)
        expect(get_res.body).toEqual({ ...newPerson, id: id })
    })
})


describe('Post person', () => {
    it('post one person', async () => {
        const newPerson = { "name": "Vasia", "age": 126, "hobbies": ["PSgames", "girls", "Alchogol"] }

        const res = await request(`http://localhost:${PORT}`)
            .post('/person')
            .send(newPerson)

        const id = res.body.id

        const get_res = await request(`http://localhost:${PORT}`)
            .get(`/person/${id}`)

        expect(get_res.statusCode).toEqual(200)
        expect(get_res.body).toEqual({ ...newPerson, id: id })
    })

})


//it needs to stop testing server after all tests
// afterAll(() => setTimeout(() => process.exit(), 950))

