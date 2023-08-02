import pg from 'pg';
const {Client} = pg;


// mi string de conexion
const conexion_string = "sql://postgres:dialum2020@localhost:5432/ercompleto";

// mi objeto de conexion
const conexion_obj = {
    host: "localhost",
    user: "postgres",
    password: "dialum2020",
    database: "ercompleto",
    port: 5432
}

const client = new Client(conexion_obj); //creando el cliente de la base de

client.connect();

client.query("select * from usuarios",(err, res)=>{
    if(err){
        console.log(err);
    }else{
        console.table(res.rows);
    }
});

client.end
