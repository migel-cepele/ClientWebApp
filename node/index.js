//importojme dependencies
import pg from 'pg';
import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';


dotenv.config();



//lidhemi me db
const { Client } = pg;

const client = new Client({
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DB,
  password: process.env.POSTGRES_PASSWORD,
  port: parseInt(process.env.POSTGRES_PORT),
});

client.connect();

//ne databaze krijojme nje tabele testimi "users"
const createTable = async () => { 
    await client.query(`CREATE TABLE IF NOT EXISTS users 
    (id serial PRIMARY KEY, 
    name VARCHAR (255) UNIQUE NOT NULL, 
    email VARCHAR (255) UNIQUE NOT NULL, 
    age INT NOT NULL);
    `)
};
  
createTable();
  

//perdorim express per te bere parse nje metode POST
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//vendosim nje route aksesimi, qe by default kthen "Hello world"
app.get('/api', (req, res) => res.send('Hello World!'));


//query qe merr gjithe users
app.get('/api/all', async (req, res) => {
    try {
      const response = await client.query(`SELECT * FROM users`);
      
      if(response){
        res.status(200).send(response.rows);
      }
      
    } 
    catch (error) {
      res.status(500).send('Error');
      console.log(error);
    } 
});

//post method qe insert users
app.post('/api/form', async (req, res) => {
    try {
      const name  = req.body.name;
      const email = req.body.email;
      const age   = req.body.age;
  
      const response = await client.query(`INSERT INTO users(name, email, age) VALUES ('${name}', '${email}', ${age});`);
  
      if(response){
        res.status(200).send(req.body);
      }
    } catch (error) {
      res.status(500).send('Error');
      console.log(error);
    }    
});

//porta e ekspozimit te api
app.listen(3000, () => console.log(`App running on port 3000.`));