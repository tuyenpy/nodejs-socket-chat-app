require('dotenv').config();
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const PORT = process.env.PORT || 5000;
const URI = process.env.URI;

//user CORS
app.use(cors());

//body-parse
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

//folder public
app.use(express.static('public'));


app.get('/', (req, res) => {
    res.send("hi");
})

//route api
app.use('/api/user', require('./api/route/user.route'));

//DeprecationWarning: Mongoose: `findOneAndUpdate()` and `findOneAndDelete()` without the `useFindAndModify` option set to false are deprecated. See: https://mongoosejs.com/docs/deprecations.html#findandmodify
mongoose.set('useFindAndModify', false);

//connect to Cluster MongoDB Atlas
mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(_ => console.log('Database connected!'))
    .then(_ => start(PORT))
    .catch(({ message }) => console.log(message));

function start(PORT) {
    server.listen(PORT, () => {
        console.log(`Server is listening at ${PORT}`)
    });
}

//socket io
io.on('connect', async (socket) => {

})

