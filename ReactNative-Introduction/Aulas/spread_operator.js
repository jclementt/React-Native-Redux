/* Spread Operator (...) 
-> União de objetos ou arrays*/

const unidades = [1, 2, 3];
const dezenas = [10, 20, 30];

const uniao = [...unidades, ...dezenas];
console.log(uniao)

const obj1 = {
    a: 123
};

const obj2 = {
    b: "Olá"
};

const obj3 = {...obj1, ...obj2};
console.log(obj3)