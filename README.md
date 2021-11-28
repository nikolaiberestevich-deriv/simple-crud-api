## CRUD API
##how to install and use:
1. Clone the repo
2. use develop1 branch
3. install node_modules : "npm i"
4. if you want to change port, use ".env" file ( now it's 5500)
4. for developer mode use "npm run dev" 
5. for production mode use "npm run prod"
6. fot testing: a) run server "npm run dev" b) run tests "npm run test"

app is be used for storage persons array.

Person{
"name":"SomeName",
age:"18",
hobbies: [] of String of empty array
}

request examples:
1. to get all persons 
GET  http://localhost:5500/person    (without "/" in the end of the link!!)
2. to get person by id
GET  http://localhost:5500/person/${id}    (without "/" in the end of the link!!)
3. to add new  person
POST  http://localhost:5500/person   (without "/" in the end of the link!!)
request body: {
  "name": "Kolia",
  "age": "33",
  "hobbies": 
  [
    "Rock", "cooking"
  ]
}
response : request person with id

4. to change any object property of person by id
PUT  http://localhost:5500/person/${id}  (without "/" in the end of the link!!)
request body: {
  "name": "SomeNewName"
}
or you can change 2-3 object properties at one time 

5. to delete any person by id
DELETE  http://localhost:5500/person/${id}  (without "/" in the end of the link!!)
