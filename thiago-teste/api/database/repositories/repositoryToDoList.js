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

        let conn = await connection.open();
        await conn.query(`INSERT INTO users (name, user, email, password) VALUES ('${data.name}', '${data.user}',  '${data.email}', '${data.password}')`); 

    }


    static async findUser() {

        let conn = await connection.open();
        let [rows, fields] = await conn.query(`
            SELECT * FROM users WHERE
                email = '${email}' && 
                password = '${pass} 
        `);  

        return await rows;

    }    

    

}