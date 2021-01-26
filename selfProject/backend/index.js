const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.set('port', process.env.PORT || 8080);

app.get('/', function(req, res) {
    res.json({
        msg: 'hello'
    })
})

app.listen(app.get('port'), function() {
    console.log(`Express started on http://localhost:${app.get('port')}; press Ctrl-C to terminate.`);
})