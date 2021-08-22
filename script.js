let calcAvarag = (a, b, c) => (a + b +c) / 3;
console.log(calcAvarag (3, 4, 5));


// Test 1 
let scoreDolphins = calcAvarag (44, 23, 71);
let scoreKoales = calcAvarag (65,54, 49);
console.log(scoreDolphins , scoreKoales);

let checkWinner = function (avgDolhins,avgKoalas ){
    if(avgDolhins >= 2 * avgKoalas){
    console.log(` Dolphins win 🏆(${avgKoalas} vs. ${avgDolhins} )`);  
    }
    else if (avgKoalas >= 2 * avgDolhins){
        console.log(`Koalas wi 🏆(${avgKoalas} vs.${avgDolhins})`);
    }else{
        console.log('No team wins...')
    }
}

checkWinner(scoreKoales, scoreKoales);
checkWinner(576 , 111);

// Test 2

scoreDolphins = calcAvarag  (85 , 54 ,41);
scoreKoalas =calcAvarag (23, 34, 27);
console.log(scoreDolphins, scoreKoales);
checkWinner(scoreDolphins, scoreKoales);
