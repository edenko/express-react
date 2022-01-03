const express = require('express');
const path = require('path');
const app = express();

const http = require('http').createServer(app);
const port = 8080;
http.listen(port, function() {
    console.log(`listening on ${port}`);
});

// html, css, js, image 파일 담긴 곳 명시
app.use('/', express.static(path.join(__dirname, 'public')))
app.use('/react', express.static(path.join(__dirname, 'react-project/build/')))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/main.html'))
})

app.get('/react', (req, res) => {
    res.sendFile(path.join(__dirname, 'react-project/build/index.html'))
})

// used react router
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'react-project/build/index.html'))
// })