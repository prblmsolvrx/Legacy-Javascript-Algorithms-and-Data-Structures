/*Cash Register
Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

Currency Unit	Amount
Penny	$0.01 (PENNY)
Nickel	$0.05 (NICKEL)
Dime	$0.1 (DIME)
Quarter	$0.25 (QUARTER)
Dollar	$1 (ONE)
Five Dollars	$5 (FIVE)
Ten Dollars	$10 (TEN)
Twenty Dollars	$20 (TWENTY)
One-hundred Dollars	$100 (ONE HUNDRED)
See below for an example of a cash-in-drawer array:

[
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
]
*/
function checkCashRegister(price, cash, cid) {
  const denomination = [10000, 2000, 1000, 500, 100, 25, 10, 5, 1];

  function transaction(price, cash, cid) {
    let changeNeeded = (cash - price) * 100;
    let moneyProvided = [
      ["ONE HUNDRED", 0], 
      ["TWENTY", 0], 
      ["TEN", 0], 
      ["FIVE", 0], 
      ["ONE", 0], 
      ["QUARTER", 0], 
      ["DIME", 0], 
      ["NICKEL", 0], 
      ["PENNY", 0]
    ];
    let availCash = [...cid].reverse().map(el => [el[0], el[1] * 100]);
    let sumOfCash = availCash.reduce((a, b) => (a + b[1]), 0) / 100;

    if (sumOfCash === changeNeeded / 100) {
      return { status: "CLOSED", change: [...cid] };
    } else {
      for (let i = 0; i < availCash.length; i++) {
        while (denomination[i] <= changeNeeded && availCash[i][1] > 0) {
          moneyProvided[i][1] += denomination[i];
          changeNeeded -= denomination[i];
          availCash[i][1] -= denomination[i];
        }
      }

      let change = moneyProvided
        .map(el => [el[0], el[1] / 100])
        .filter(el => el[1] !== 0);

      let changeTotal = change.reduce((a, b) => (a + b[1]), 0);

      if (changeTotal < changeNeeded) {
        return { status: "INSUFFICIENT_FUNDS", change: [] };
      }
      return { status: "OPEN", change };
    }
  }

  return transaction(price, cash, cid);
}
