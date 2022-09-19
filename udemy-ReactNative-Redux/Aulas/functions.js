/* Functions */

// Named Function
function soma1(x, y)
{
    return x + y;
}

// Anonymous function
var soma2 = function(x, y)
{
    return x + y;
}

/* **** ES6 **** */

/* Arrow function */
const soma3 = (x , y) =>
{
    return x + y;
}

const soma4 = (x , y) => x + y;

// versão longa
const array = [1, 2, 3, 4, 5].map(function(x)
{
    return x * 10;
})

// versão curta
const array2 = [1, 2, 3, 4, 5].map(x => x * 10);

console.log(array2)
//console.log(soma4(7, 5))