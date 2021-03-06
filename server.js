const express = require('express');
const app = express();
const path = require('path');
const port = 9999;

app.use(express.static(path.join(__dirname,'dist')));

app.get('/', (req, res) => {
		res.sendFile(path.join(__dirname,'dist/index.html'))
});

app.listen(port);