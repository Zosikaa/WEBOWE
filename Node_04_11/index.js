import express from 'express';
const app = express();
const PORT = 3000;

app
    .get('/details/:id', (req, res) => {
        res.send('id jest ' + req.params.id);
    })
    .post('/user',(req, res) =>{
        res.write('zmieniono dane użytkownika');
        res.end();
    } )
    .listen(PORT, () => {
        console.log(`\nExample app listening at http://localhost:${PORT}`);
    });
