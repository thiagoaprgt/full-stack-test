import express from 'express'
import formData from 'express-form-data';


import { repositoryToDoList } from './database/repositories/repositoryToDoList.js';
import cors from 'cors'


const api = express();



// api.use((req, res, next) => {
//     res.append('Access-Control-Allow-Origin', 'http://127.0.0.1:8001/');
//     res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
//     res.append('Access-Control-Allow-Headers', 'Content-Type');
//     next();
// });

api.use(cors()); 

// parse data with connect-multiparty. 
api.use(formData.parse());

api.use(express.json());

 // para usar o body do método http post
api.use(express.urlencoded({ extended: false }))


api.get('/api', async (request, response) => {    

    response.json( await repositoryToDoList.getAllTask());

})


api.get('/api/toDo/:userId', async (request, response) => {    

    try {

        response.json( await repositoryToDoList.getAllTaskToDoByUserId(request.params.userId));
        
    } catch (error) {

        return {problem: "Ocorreu um problema"}
        
    }

})

api.get('/api/inProgress/:userId', async (request, response) => {    

    try {

        response.json( await repositoryToDoList.getAllTaskInProgressByUserId(request.params.userId));
        
    } catch (error) {

        return {problem: "Ocorreu um problema"}
        
    }

})

api.get('/api/done/:userId', async (request, response) => {    

    try {

        response.json( await repositoryToDoList.getAllTaskDoneByUserId(request.params.userId));
        
    } catch (error) {

        return {problem: "Ocorreu um problema"}
        
    }

})

api.post('/api/createUser', async (request, response) => {  
    
    let data = {
        name: request.body.name,
        user: request.body.user,
        email: request.body.email,
        password: request.body.password
    }   


    response.json(await repositoryToDoList.createUser(data));

    

})

api.post('/api/doLogin', async (request, response) => {  

        
    let data = {       
        user: request.body.user,        
        password: request.body.password
    } 

    response.json(await repositoryToDoList.findUser(data))    
    
})

api.listen(8001)