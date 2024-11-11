import express from 'express'
import formData from 'express-form-data';
import { repositoryToDoList } from './database/repositories/repositoryToDoList.js';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

/**
    É necessário criar na pasta api um arquivo 
    com o nome .env com essa estrutura

    driver= smtp,
    user= email usado para enviar os emails,
    host= smtp.gmail.com,
    passwordr= coloque a senha do servidor smtp gerado pelo gmail
    port= 587,
    encription= TLS
    
*/


// import { sendEmail } from './sendEmail.js';

const api = express();
dotenv.config({path: ".env"});


api.use(cors()); 

// parse data with connect-multiparty. 
api.use(formData.parse());

api.use(express.json());

 // para usar o body do método http post
api.use(express.urlencoded({ extended: false }))


api.get('/api', async (request, response) => {    

    response.json( await repositoryToDoList.getAllTask());

})

api.post('/api/createToDoTask', async (request, response) => {    

    response.json( await repositoryToDoList.createToDoTask(request.body));

})


api.get('/api/toDo/:userId', async (request, response) => {    

    try {

        response.json( await repositoryToDoList.getAllTaskToDoByUserId(request.params.userId));
        
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

api.post('/api/updateToDoTask', async (request, response) => {  
    
    let data = {
        id: Number.parseInt(request.body.id),        
        description: request.body.description,
        taskProgress_id: 1,
        user_id: Number.parseInt(request.body.user_id)
        
    }   


    response.json(await repositoryToDoList.updateTask(data));

    

})



api.post('/api/updateDoneTask', async (request, response) => {  
    
    let data = { 
        id: Number.parseInt(request.body.id),        
        description: request.body.description,
        taskProgress_id: 2,
        user_id: Number.parseInt(request.body.user_id)
        
    }   


    response.json(await repositoryToDoList.updateTask(data));

    

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

api.get('/api/deleteTask/:id', async (request, response) => {  

        
     try {

        response.json(await repositoryToDoList.deleteTask(request.params.id))   
        
     } catch (error) {

        return {problem: "Ocorreu um erro"}
        
     }

     
    
})

api.get('/api/deleteAllToDoTask', async (request, response) => { 

    response.json(await repositoryToDoList.deleteAllToDoTask())    
    
})

api.get('/api/deleteAllDoneTask', async (request, response) => {  

    response.json(await repositoryToDoList.deleteAllDoneTask())    
    
})


api.post('/api/sendEmail', async (request, response) => {


    try {

        let transporter = nodemailer.createTransport({
           
            host: process.env.host,
            port: process.env.port,
            secure: false,
            auth: {
                user: process.env.user,
                pass: process.env.password,
            },
            tls: {
                rejectUnauthorized: false
            }
        });

        let options = {
            from: process.env.user,
            to: request.body.email,
            subject: "Formulário do site toDolist",
            html: `<p> ${request.body.message} </p>`
           
        }

   

        transporter.sendMail(options);        
        response.json(request.body);
    
   } catch (error) {

        console.log({problem: "Ocorreu um problema."})
    
   }
    

})

api.listen(8001)