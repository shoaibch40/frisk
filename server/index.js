const express = require('express');
const app = express();
const cors = require('cors');
const client = require('./connection.js')


app.use(cors());
app.use(express.json());


/**
 * create page for user creation
*/

app.post('/create',(req,res)=>{
    const name = req.body.name;
    const pin = req.body.pin;
    const message = req.body.message;
    const email = req.body.email;
    const date = new Date().toISOString();
  
client.query("insert into users(name,pin,message,email,date) values ($1,$2,$3,$4,$5)",
        [name,pin,message,email,date],
        (err,result)=>{
            if(err)
            {
                console.log(err);
            }
            else
            {
                res.send("Values inserted");
            }
        });
});

/**
 * users list page
 */
app.get('/users',(req,res)=>{
    client.query("select * from users",(err,result)=>{
        if(err)
        {
            console.log(err);
        }
        else
        {
            res.send(result.rows);
        }
    });
    
});
/**
 * user pin verify
 */

app.post('/revealmessagess',(req,res)=>{
    
    let test = req.body.modalpin;

    
    console.log(test);
   
});


app.post('/revealmessage',(req,res)=>{
    let pinn = req.body.modalpin;
    let idd = req.body.id;
    
client.query("select * from users where pin = $1 and ID = $2",
        [pinn,idd],
        (err,result)=>{
            if(err)
            {
                console.log(err);
            }
            else
            {

               if(result.rowCount>0)
               {
                   
                res.send('success');
                }
               else
               {
                    res.send("Please enter valid pin");
               }
                
            }
        });
});

/**
 * server port
 */

app.listen(3001,()=>{console.log("yayy your function is running on 3001")});