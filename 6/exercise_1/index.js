const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'));

app.get('/', (req, res) => {
    console.log("Somebody called!");
    res.redirect('/info.html')
})

app.get('/randomtext', (req, res) => {
    console.log("Somebody needed text!")
    res.send('Here is some pretty random text!');
});

app.get('/getData', (req, res) => {
    console.log("Transmitted data!");
    let exampleData = {
        name: 'Sam',
        age: '23'
    }
    res.send(exampleData);
});


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})