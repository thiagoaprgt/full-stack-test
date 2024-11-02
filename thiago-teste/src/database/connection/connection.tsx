import mysql from 'mysql2/promise';

export class connection {

    private conn: null | object = null;

    public async open() {

        try {

            this.conn = await mysql.createConnection({
              host: 'localhost',
              user: 'root',
              database: 'coopers',
              port: 3306,
              password: 'thiago',
            });

            return this.conn;

        }catch (err) {
            console.log(err);
        }

       

    }


    public close() {

        this.conn = null;
        
    }

}