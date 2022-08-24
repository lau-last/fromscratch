const obj = {
  // index:value
  pseudo: "Laurent",
  ville: "Paris",
  ville2: "bordeaux",

  direBonjour: function () {
    console.log("Bonjour je suis " + this.pseudo);
  },
  //   direBonjour(){
  //     console.log("Bonjour je suis " + this.pseudo);
  //   }
};

// Ajouter
obj.age = 33;
obj["admin"] = true;

// Modifier
obj.pseudo = "Lau-Last";

// Supprimer
delete obj.ville2;

// console.log(obj);

// Checker si une propriété existe
// console.log("pseudo" in obj);

// Parcourir l'objet
for (const key in obj) {
  //   console.log(key + " : " + obj[key]);
}
// console.log(obj.direBonjour());

// Obtenir les clés
const keys = Object.keys(obj);
// console.log(keys);

// Obtenir les valeurs
const values = Object.values(obj);
// console.log(values);

const nestedArray = Object.entries(obj);
// console.log(nestedArray);

const obj2 = {
  taille: "1m75",
  poids: "75kg",
  pseudo: "Laurent-Last",
};

// Fusionner objet
const fusion = Object.assign({}, obj, obj2);
// console.log(fusion);

// Empecher les modification
const newObj = Object.freeze(obj);
newObj.pseudo = "Test";
newObj.adresse = "1 rue de paris";
// console.log(newObj);

// Empecher de rajouter
const newObj2 = Object.seal(obj);
newObj2.pseudo = "Test";
newObj2.adresse = "1 rue de paris";
// console.log(newObj2);

//---------------------
// Construire des objets
//---------------------

// Fonction constructeur
function User(pseudo, ville) {
  this.pseudo = pseudo;
  this.ville = ville;
  this.getCity = function () {
    console.log(this.pseudo + " habite à " + this.ville);
  };
}
const user1 = new User("Laurent", "Paris");
const user2 = new User("Denis", "Nantes");
// console.log(user1.getCity(), user2.getCity());

//---------------------
// Factory functions
//---------------------

function User3(pseudo, ville) {
  return {
    pseudo,
    ville,
  };
}
const user4 = User3("Lau", "nice");
// console.log(user4);

//---------------------
// Class
//---------------------

class Utilisateur {
  constructor(pseudo, ville) {
    this.pseudo = pseudo;
    this.ville = ville;
  }
  sayMyName = function () {
    console.log("Bonjour je suis " + this.pseudo);
  };
}
const user5 = new Utilisateur("laurent", "Lyon");
Utilisateur.prototype.sayCity = function () {
  console.log("J'habite à " + this.ville);
};

Object.assign(Utilisateur.prototype, {
  method1() {
    // ma méthode
  },
  method2() {
    // ma méthode
  },
});
// console.log(user5);

//---------------------
// L'héritage
//---------------------

class Animal {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    saySomething(text){
        console.log(this.name + " dit : " + text);
    }
}
class Dog extends Animal {
    run(){
        console.log("Le chien cours");
    }
}
const rintintin = new Dog("rintintin", 9)
// console.log(rintintin);