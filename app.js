 const express = require('express');
 require('dotenv').config();
 const dbConnect =require('./models/dbConnect')  // diger tarafta olusturulan baglanma fonksiyonunun calsmasi icin
const router = require('./routers/router');



 // server
 const app = express();
 const port = process.env.port || 5000;
app.listen(port, () => {
    console.log(`I am listening on port ${port}`);
})

//database connect
dbConnect();

app.use(express.json());
app.use('/api', router);