import express from 'express'
import { repositoryToDoList } from './database/repositories/repositoryToDoList.js';


const api = express();



api.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

api.get('/api', async (request, response) => {    

    response.json( await repositoryToDoList.getAllTask());

})


api.get('/api/toDo/:userId', async (request, response) => {    

    response.json( await repositoryToDoList.getAllTaskToDoByUserId(request.params.userId));

})

api.post('/api/createUser', async (request, response) => {    

    await repositoryToDoList.createUser($request);

    

})

api.listen(8001)