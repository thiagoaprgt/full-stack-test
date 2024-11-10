import { connection } from "../connection.js";


export class repositoryToDoList {

    static async createToDoTask(data) {

        try {

            let conn = await connection.open();

            let sql = `INSERT INTO taskToDoList (title, description, taskProgress_id, user_id) VALUES('${data.title}', '${data.description}', 1, ${data.user_id})`;

            let [rows, fields] = await conn.query(sql); 
            
            return {success: "Tarefa criada com sucesso"}
            
        } catch (error) {

            return {problem: "Ocorreu um erro"}
            
        }

    }
   
   
    static async getAllTask() {
        
        let conn = await connection.open();
        let [rows, fields] = await conn.query("SELECT * FROM taskToDoList");  

        return await rows;        
    
    }

    static async getAllTaskToDoByUserId(userId) {

        let conn = await connection.open();
        let [rows, fields] = await conn.query(`SELECT * FROM taskToDoList WHERE user_id = ${userId} AND taskProgress_id = 1`);  

        return await rows;

    }

   

    static async getAllTaskDoneByUserId(userId) {

        let conn = await connection.open();
        let [rows, fields] = await conn.query(`SELECT * FROM taskToDoList WHERE user_id = ${userId} AND taskProgress_id = 3`);  

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
    
    
    static async updateTask(data) {

        try {

            let sql = `UPDATE taskToDoList SET title = '${data.title}', description = '${data.description}', taskProgress_id = ${data.taskProgress_id}, user_id = ${data.user_id} WHERE id = ${data.id}`;
           
            let conn = await connection.open();
            await conn.query(sql); 

            
        } catch (error) {
            
            
            return {problem : "Ocorreu um problema"}
            
        }
    }

    

}