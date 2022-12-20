//2.1 En base al siguiente javascript, crea variables en base a las propiedades 
//del objeto usando object destructuring e imprimelas por consola. Cuidado, 
//no hace falta hacer destructuring del array, solo del objeto.

const game = {title: 'The last us 2', gender: ['action', 'zombie', 'survival'], year: 2020}
const destruct = ({title: name, gender: [genero], year: año}) => {
 console.log(`El juego ${name} de los generos ${genero} fue publicado en el año ${año}` ); 
}
destruct(game);


//2.2 En base al siguiente javascript, usa destructuring para crear 3 variables 
//llamadas fruit1, fruit2 y fruit3, con los valores del array. Posteriormente
//imprimelo por consola.

const fruits = ['Banana', 'Strawberry', 'Orange'];

const fruitDes = (
    [fruit1 = 'Banana', fruit2 = 'Strawberry', fruit3 = 'Orange']
) => { return console.log(fruit1, fruit2, fruit3); }

fruitDes(fruits)

//2.3 En base al siguiente javascript, usa destructuring para crear 2 
//variables igualandolo a la función e imprimiendolo por consola.

const animalFunction = () => {
return {name: 'Bengal Tiger', race: 'Tiger'}
};

//2.4 En base al siguiente javascript, usa destructuring para crear las 
//variables name y itv con sus respectivos valores. Posteriormente crea 
//3 variables usando igualmente el destructuring para cada uno de los años 
//y comprueba que todo esta bien imprimiendolo.

const car = {name: 'Mazda 6', itv: [2015, 2011, 2020] }

const carDes = ({name: name, itv: itv }) => {
const itvDes = ([año1 = 2015, año2 = 2011, año3 = 2020]) => {
    return console.log(name, año1, año2, año3);
} 
itvDes(itv)
}
carDes(car)