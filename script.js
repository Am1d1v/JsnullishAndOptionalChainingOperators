
/*

let box = document.querySelector('.box');

let newHeight = 100,
    newWidth = 300;

function changeBox(elem, h, w) {
    elem.style.height = `${h ?? 200}px`;
    elem.style.width = `${w ?? 600}px`;
    elem.innerHTML = (h ?? 200) * (w ?? 200);
    
}    

changeBox(box, newHeight, newWidth);

let userName,
    userKey;

console.log(userName ?? userKey ?? 'User');


*/


// =========== Optional Chaining Operator ============================================================================

/*

let box = document.querySelector('.box'),
    block = document.querySelector('.block');

console.log(block);    

*/

//console.log(block.textContent); // Error

/*

if (block) {
    console.log(block.textContent);
}

*/

/*

console.log(block?.textContent);

console.log(1 + 2);


let userData = {
    name: 'Name',
    age: null,
    say: function() {
        console.log('Hello');
    } 
}

userData.say();
userData.hey?.();


/*

if (userData && userData.skills && userData.skills.js) {
    console.log(userData.skills.js);
} 

*/

//console.log(userData.skills?.js);

//=========================== Big Int =====================================================================================================================

//console.log(Number.MAX_SAFE_INTEGER); // (2 ** 53) - 1

//let bigInt = 7821748178470470184718471740174014717n;

//let sameBigInt = BigInt(7821748178470470184718471740174014717);

//console.log(sameBigInt);
//console.log(typeof(bigInt));

//console.log(5n + 10); Error
//console.log(Math.round(5n));  Error
//console.log(1n + 10n); 

console.log(5n / 2n); 
console.log(5 > 2n); 
console.log(5 < 2n); 

console.log(2 == 2n); 
console.log(2 === 2n); 

let bigInt = 1n;
let number = 2;

console.log(bigInt + BigInt(number)); 
console.log(Number(bigInt) + number); 



