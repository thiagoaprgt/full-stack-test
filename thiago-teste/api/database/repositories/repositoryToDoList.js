import { connection } from "../connection.js";


export class repositoryToDoList {
   
   
    static async getAllTask() {
        
        let conn = await connection.open();
        let [rows, fields] = await conn.query("SELECT * FROM taskToDoList");  

        return await rows;        
    
    }

    static async getAllTaskToDoByUserId(userId) {

        let conn = await connection.open();
        let [rows, fields] = await conn.query(`SELECT * FROM taskToDoList WHERE user_id = ${userId}`);  

        return await rows;

    }


    static async createUser(data) {

        try {

            let conn = await connection.open();
            await conn.query(`INSERT INTO users (name, user, email, password) VALUES ('${data.name}', '${data.user}',  '${data.email}', '${data.password}')`); 

            
        } catch (error) {
            
            
            return {problem : "usuário ou email duplicado"}
            
        }
    }


    static async findUser(data) {

        try {

            let conn = await connection.open();
            let [rows, fields] = await conn.query(`
                SELECT * FROM users WHERE
                    user = "${data.user}" AND 
                    password = "${data.password}" 
            `);  

        return await rows;
            
        } catch (error) {
               
            return {problem : "Ocorreu um erro"}
            
        }

    }    

    

}