let rep = 1;
while ( rep <= 10) {
    // console.log( `WHILE; Lifting weights repetition ${rep}`);
    rep++;
}
let Dice =Math.trunc(  Math.random() * 6)+ 1;
 while(Dice !== 6){
     console.log(` You rolled a ${Dice}`);
     Dice = Math.trunc(Math.random() * 6) + 1;
 if ( Dice === 6 )console.log( 'loop is about to end...');
 }