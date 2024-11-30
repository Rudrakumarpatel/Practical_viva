const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/payment',(req,res)=>{
    let a = req.body.data;
    res.send('Payment Gateway');
})

app.get("/auth",(req,res)=>
{
    let a = req.body.data;
    res.send("Authentication successfully");
})
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
