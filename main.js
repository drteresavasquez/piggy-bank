console.log("main.js");

let piggyBank = {
    "pennies": 23,
    "nickels": 20,
    "dimes": 10,
    "quarters": 250
};

console.log(piggyBank);

let dollarAmount = 0;
dollarAmount+=piggyBank.pennies*.01;
dollarAmount+=piggyBank.nickels*.05;
dollarAmount+=piggyBank.dimes*.10;
dollarAmount+=piggyBank.quarters*.25;
piggyBank.dollars = 50;
dollarAmount+=piggyBank.dollars*1;

console.log("Dollar Amount", `$${dollarAmount}`);
