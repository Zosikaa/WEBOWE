import express from 'express';
const app = express();
const PORT = 3000;

app
    .get('/bambik', (req, res) => {
        var dodaj = (a, b) => a + b;
        res.send('wynik ' + dodaj(3, 5)); 
    })
    .listen(PORT, () => {
        console.log('\nSerwer działa na porcie: ' + PORT);
    });
