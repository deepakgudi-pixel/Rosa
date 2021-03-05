const express = require('express');

const path = require('path');

const app = express();

const PORT = process.env.PORT || 5000;

//set static folder
app.use(express.static(path.join(__dirname, 'public')));



app.get('/about', (req, res)=>{
    res.send('<h2>Web Developer</h2>');
})


app.listen(PORT, () => console.log(`server started on ${PORT}`));
