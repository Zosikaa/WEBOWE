import express from 'express';
const app = express();
const PORT = 3000;

app
    .get('/', (req, res) => {
        res.send('Hello Worlds!');
    })
    .post('/user',(req, res) =>{
        res.write('zmieniono dane użytkownika');
        res.end();
    } )
    .listen(PORT, () => {
        console.log(`\nExample app listening at http://localhost:${PORT}`);
    });
