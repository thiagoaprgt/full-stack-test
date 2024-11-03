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

    

}