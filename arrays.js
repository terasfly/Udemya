// Slice
// let arr = ['a', 'b', 'c', 'd', 'e'];
/*
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-1));
console.log(arr.slice(1, -1));
console.log(arr.slice());
*/
// Splice
/*
console.log(arr.splice(2))
arr.splice(-1);
console.log(arr);

let arrr = ['a', 'b', 'c', 'd', 'e'];
console.log(arrr)
console.log(arrr.splice(1, 3));
console.log(arrr)
console.log(arrr.splice());


let names = ['tomas', 'matas'];
let names2 = ['titas', 'Laura']

let names3 = names.concat(names2)
console.log(names3)

console.log([names])

*/
/*
const arr = [23, 11, 54,]
console.log(arr[0]);
console.log(arr.at(0));

console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-2));



const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const movement of movements) {
    if (movement > 0) {
        console.log(`You deposited ${movement}`);


    } else {
        console.log(`You withdraw ${Math.abs(movement)}`)


    }
}
console.log('-------------------')

movements.forEach(function (movement, i) {
    if (movement > 0) {
        console.log(`Movement ${i + 1}: You deposited ${movement}`);


    } else {
        console.log(`You withdraw ${Math.abs(movement)}`)


    }

})

// Map
const currencies = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['GPB', 'Pound Sterling'],
])
currencies.forEach(function (value, key, map) {
    console.log(`${key}: ${value}`);
})
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR'])
console.log(currenciesUnique)
currenciesUnique.forEach(function (value, key, map) {
    console.log(`${key}: ${value}`)
})







const checkDogs = function (dogsJulia, dogsKate) {
    const dogsJuliaCorrected = dogsJulia.slice();
    dogsJuliaCorrected.splice(0, 1)
    dogsJuliaCorrected.splice(-2)

    const dogs = dogsJuliaCorrected.concat(dogsKate)
    console.log(dogs)

    console.log(dogsJuliaCorrected)
    dogs.forEach(function (dog, i) {
        if (dog >= 3) {
            console.log(`Dog number ${i + 1} is an adult, and he is ${dog} years old`)
        } else {
            console.log(`Dog number ${i + 1}is still a puppy`)
        }
    })

};



checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3])

const checkDogs = function (MatasDogs, lauraDogs) {
    const matasCorrection = MatasDogs.slice()
    console.log(matasCorrection)
    matasCorrection.splice(0, 1);
    console.log(matasCorrection)
    matasCorrection.splice(-2)
    console.log(matasCorrection)
    const correctDogs = matasCorrection.concat(lauraDogs)
    console.log(correctDogs)

    correctDogs.forEach(function (dog, i) {
        if (dog >= 3) {
            console.log(`Dog number is : ${i + 1} and dogs age is ${dog} he is adult`)
        } else {
            console.log(`dog is ${i + 1} and ${dog} old  and its puppy`)
        }

//     });
// }
// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
// */
// const checkDogs = function (matas, laura) {
//     const matasCorrection = matas.slice()
//     // const lauraCorrection = laura.splice(1, 2)
//     matasCorrection.splice(0, 3);
//     matasCorrection.splice(-2)
//     const dogCorrected = matasCorrection.concat(laura);


//     dogCorrected.forEach(function (dog, i) {
//         if (dog >= 3) {
//             console.log(`dog number is ${i + 1} and he is ${dog}age he is adult`)
//         } else {
//             console.log(`dog number is ${i + 1} and he is ${dog} age he is puppy`)
//         }
//     })
// }
// checkDogs([3, 5, 1, 10, 4, 2], [4, 6, 2, 9])

// const numbers = [1, 9, 34, 4, 5]
// numbers.forEach(function (numeris, i) {
//     console.log(`vieta yra ${i + 1} numeris : ${numeris + 6} `)
// })
const tortaiStalams1 = [2, 1, 4, 1]
tortaiStalams1.forEach(function (tortaiStalams, i) {
    if (tortaiStalams > 1) {
        console.log(`${i + 1} stalas gauna  ${tortaiStalams} tortus`)
    } else {
        console.log(`${i + 1} stalas gauna ${tortaiStalams} torta`)
    }
})