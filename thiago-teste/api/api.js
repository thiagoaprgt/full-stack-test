import express from 'express'
import { repositoryToDoList } from './database/repositories/repositoryToDoList.js';


const api = express();

api.get('/', async (request, response) => {    

    response.json( await repositoryToDoList.getAllTask());

})


api.get('/toDo/:userId', async (request, response) => {    

    response.json( await repositoryToDoList.getAllTaskToDoByUserId(request.params.userId));

})

api.listen(8001)