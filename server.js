const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");

let corsOptions = {
    origin: "http://localhost:4001"
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(express.json());

app.use(bodyParser.urlencoded({extended:true}));



const db = require("./app/models");


// db.sequelize.sync({ force: true }).then(() => {
//     console.log("Drop and re-sync db.");
// });


require('./app/routes/auth')(app);
require('./app/routes/verifyToken')(app);

app.post('/', (req, res)=>{
    res.json({message : "Running"})
});

const PORT = process.env.PORT || 4000;


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});