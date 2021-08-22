let friend1 = 'Michal';
let friend2 = 'Steven';
let friend3 = 'Peter';

let friends =['Michael', 'Steven', 'Peter'];
console.log(friends);
console.log(friends[0]);
console.log(friends[1]);

console.log(friends[friends.length-1]);

friends[2] = 'singh';
console.log(friends);

let firstName = 'jonas';
let jonas = [firstName, 'Schnedtmann', 2037- 1991, 'teachr', friends];
console.log(jonas);
console.log(jonas.length);

let calcAge = function(birthYeah){
    return 2037- birthYeah;

}
let Years = [1990, 1967, 2002,2010, 2018 ];
let age1 = calcAge (Years[0]);
let age2 = calcAge (Years[1]);
let age3 = calcAge (Years[Years.length -1]);
console.log(age1, age2, age3);

