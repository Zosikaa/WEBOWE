const { MongoClient } = require('mongodb');
const client = new MongoClient("mongodb://localhost:27017");

const dbName = 'pierwsza_baza';
const kolekcjaNazwa = 'TODO';

//--------------------------------------------------------------------------

async function dodajTODO(produkty) {
    await client.connect();
    //console.log('Połączono z MongoDB (dodawanie)');
  
    const db = client.db(dbName);
    const kolekcja = db.collection(kolekcjaNazwa);
  
    const wynik = await kolekcja.insertMany(produkty);
    console.log('Dodano TODO:', wynik.insertedIds);
  
    await client.close();
    //console.log("Połączenie z MongoDB zamknięte (dodawanie)");
  }


//--------------------------------------------------------------------------



  async function main() {
    const TODO = [
        { nazwa: 'Zakupy', opis: "Kupic mleko", wyknonanie: False},
        { nazwa: 'Podadtki', opis: "Zaplacic za prund", wyknonanie: False}
    ];
  
    await dodajTODO(TODO);
  
  }
  
  
  main();
    