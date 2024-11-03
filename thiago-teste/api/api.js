import express from 'express'
import { repositoryToDoList } from './database/repositories/repositoryToDoList.js';


const api = express();

api.get('/', async (request, response) => {    

    response.json( await repositoryToDoList.getAllTask());

})

api.listen(8001)