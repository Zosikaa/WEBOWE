const PRAWO_ZAPISU = 1;
const PRAWO_ODCZYTU = 2;
const PRAWO_WYKONANIA = 3;

var user = {
    Name: "Ala",
    LastName: "Makota"
};

var szkola = 'T1';
var miasto = "Piaseczno";

export default user;
export {
    PRAWO_ZAPISU,
    PRAWO_ODCZYTU,
    PRAWO_WYKONANIA,
    szkola,
    miasto
};

class User {
    setName = function(name) {
        this.name = name;
    }
    setLastName = lastName => this.lastName = lastName; 

    dodaj = (a, b) => a + b;                   //te 2 dodaj to to samo
    dodaj = (a, b) => {
        return a + b;
    }
}

user = new User()
user.setName('Ala');                    // user.name = 'ala'
user.setLastName('Makota');             //window/lastName = 'Makota'

var dodaj = (pierwotne, ...liczby) => { // kropki ... to nieskonczona ilosc argumentuf

    for (index in liczby) {             // for in iteruje po kluczach
        console.log(liczby[index]);
    }
    for (liczba of liczby) {            // for if iteruje po wartosciach
        console.log(liczba);
    }

    var wynik = 0;
    for (liczba of liczby) {
        wynik += liczba;
    }

};

var polaczTablice = (tablica1, ...tablica2) =>{

};

var liczby1 = [321,123,425,564,123,789]
var liczb2 = [231,952,563,567,268,907]