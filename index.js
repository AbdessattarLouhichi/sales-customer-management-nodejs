//  Environment Variables
require('dotenv').config()
//  require express and middleware
let express = require('express')
let app = express();
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const authRole = require('./passport/authRole')
const passport = require('passport');
require('./passport/bearer');




// connect to database
require('./database/connect');

// use middleware
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));

//EJS TEMPLATE
app.set('view engine', 'ejs');
app.set('views',path.join('views'))


 //Get request
app.get('/',(req, res)=>{
     res.status(200).render('index')
}); 

app.get('/dashboard',passport.authenticate('bearer', { session: false }),authRole(["admin"]),(req,res)=>{
    res.send('Dashboard')
})



// initialize routes
app.use('/api',require('./routes/authApi'));
app.use('/api',require('./routes/customerApi'));
app.use('/api',require('./routes/coursApi'));

// listen for requests
app.listen(process.env.PORT || 4000,()=>{
    console.log('listen on port 4000');
})

