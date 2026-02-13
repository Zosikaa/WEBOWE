const { MongoClient } = require('mongodb');
const client = new MongoClient("mongodb://localhost:27017");

const dbName = 'pierwsza_baza';
const kolekcjaNazwa = 'produkty';

//--------------------------------------------------------------------------

// Zadanie 1

async function dodajProdukty(produkty) {
  await client.connect();
  //console.log('Połączono z MongoDB (dodawanie)');

  const db = client.db(dbName);
  const kolekcja = db.collection(kolekcjaNazwa);

  const wynik = await kolekcja.insertMany(produkty);
  console.log('Dodano dokumenty z ID:', wynik.insertedIds);

  await client.close();
  //console.log("Połączenie z MongoDB zamknięte (dodawanie)");
}

//--------------------------------------------------------------------------

// Zadanie 2

async function odczytajProdukty(filtr = {}) {
  await client.connect();
  //console.log('Połączono z MongoDB (odczyt)');

  const db = client.db(dbName);
  const kolekcja = db.collection(kolekcjaNazwa);

  const wyniki = await kolekcja.find(filtr).toArray();

  await client.close();
  //console.log("Połączenie z MongoDB zamknięte (odczyt)");

  return wyniki;
}

//--------------------------------------------------------------------------

// Wywolywanie

async function main() {
  const produkty = [
    { nazwa: 'Laptop', cena: 3200, zapas: 10 },
    { nazwa: 'Smartfon', cena: 2100, zapas: 25 },
    { nazwa: 'Mysz', cena: 89, zapas: 50 }
  ];

  await dodajProdukty(produkty);

  const wszystko = await odczytajProdukty();
  console.log("Wszystkie produkty:", wszystko);

  const drogie = await odczytajProdukty({ cena: { $gt: 100 } });
  console.log("Produkty droższe niż 100:", drogie);
}


main();
