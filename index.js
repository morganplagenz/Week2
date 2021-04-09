//this is number 2 on the assignment
var isHotOutside = false;
var isWeekday = true;
var hasMoneyInPocket = false; //this is veryyyy false unfortunatley


//this is number 3 on the assignment
var costOfMilk = 2;
var moneyInWallet = 10;
var thirstLevel = 10;

//this is number 4 on the assignment
var shouldBuyIcecream = (isHotOutside == true && hasMoneyInPocket == true);

console.log(shouldBuyIcecream); 
//came up as false because it's not hot in Milwaukee and I don't have money

var willGoSwimming = (isHotOutside == true && isWeekday == false);

console.log(willGoSwimming);
//came up as false because it's not hot in Milwaukee and it's Tuesday

var isAGoodDay = (isHotOutside == true && hasMoneyInPocket == true && isWeekday == false);

console.log(isAGoodDay);
//came up as false because it's not hot, I have no money, and it's Tuesday

var willBuyMilk = (isHotOutside == true && thirstLevel >= 3 && moneyInWallet >= (2 * costOfMilk));

console.log(willBuyMilk);

//did double check my expressions and logic by changing around values
