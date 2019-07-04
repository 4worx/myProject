/*
const coffeeOrder = (type, size) => {
    console.log(`Here's your ${size} ${type}`);
}
coffeeOrder (`espresso`, `small`);
coffeeOrder(`black coffee`, `medium`);

let orderCount = 0;
const takeOrder = (topping, topping2) => {
 console.log(`Here's your Pizza with ${topping} ${topping2}`);
 console.log(orderCount++);
}
takeOrder(`pineapple`, `Papper`);
takeOrder(`pineapple`, `Papper`);
takeOrder(`pineapple`, `Papper`);



let pin = 1234; //pin variable for the account

const cashWithdrawal = (balance, amount) => { //connected to the
    //function at the end
    if (pin == 1234 && amount <= balance){ 
        //in here amount is placed equal tothe balance
        console.log("You're allowed to withdraw this amount!");
        console.log(`Withdrawing ${amount} from the account `);
        //this shows the amount withdrwan
    }
    else if(pin != 1234 && amount <= balance){
        //if pin is incorrect
        console.log("Invalid pin");
    }

    else {console.log("Invalid amount!");}
    //no clue       
}
cashWithdrawal(900, 9900); // balance and amount
*/

let orderCount = 1;

const subSandwich = (topping, topping2, topping3, topping4, topping5) => {
 console.log(`Here's your sandwich with ${topping} ${topping2} ${topping3} ${topping4} and ${topping5}`);
 console.log(orderCount++);
}
subSandwich(`tomatoes`, `onions`, `cheese`, `lettuce`,`egg`);

