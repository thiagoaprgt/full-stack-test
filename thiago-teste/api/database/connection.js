import mysql from 'mysql2/promise';

export class connection { 

    teste() {
        return "Thiago teste"
    }

    static async open() {
      

        this.conn = await mysql.createConnection(
            'mysql://root:thiago@localhost:33060/coopers'
        );

        return await this.conn;
    }


    static close() {

        this.conn = null;
        
    }

}