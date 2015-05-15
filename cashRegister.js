/* cashRegister.js

Design a cash register drawer function
that accepts purchase price as the first argument,
payment as the second argument,
 and cash-in-drawer (cid) as the third argument.

cid is a 2d array listing available currency.

Return the string "Insufficient Funds"
if cash-in-drawer is less than the change due.
Return the string "Closed"
if cash-in-drawer is equal to the change due.

Otherwise, return change in coin and bills,
sorted in highest to lowest order.

var exampleCid = [
  ['PENNY', 1.01],
  ['NICKEL', 2.05],
  ['DIME', 3.10],
  ['QUARTER', 4.25],
  ['ONE', 90.00],
  ['FIVE', 55.00],
  ['TEN', 20.00],
  ['TWENTY', 60.00],
  ['ONE HUNDRED', 100.00]
];


*/

var multipliers = [
  ['ONE HUNDRED', 100],
  ['TWENTY', 20],
  ['TEN', 10],
  ['FIVE', 5],
  ['ONE', 1],
  ['QUARTER', 0.25],
  ['DIME', 0.1],
  ['NICKEL', 0.05],
  ['PENNY', 0.01]
];

function round(amount) {
  return Math.round(amount * 1000) / 1000;
}

function makeChange(amount, cid) {
  amount = round(amount);
  return multipliers.map(function (mult) {
    var key = mult[0],
        m = mult[1],
        amt = Math.floor(amount/m) * m,
        cidAmt = cid.filter(function (pair) { return pair[0] === key; })[0][1];
    // make sure there is enough of this denomination in the drawer
    if (amt > cidAmt) {
      amt = cidAmt;
    }
    amount = round(amount - amt);
    return [key, amt];
  }).filter(function (pair) {
    // filter out zero amounts
    return pair[1];
  }).sort(function (a, b) {
    // sort from highest amount to lowest
    return -1 * (a[1] - b[1]);
  });
}

function total(arr) {
  return arr.reduce(function (prev, cur) {
    return prev + cur[1];
  }, 0);
}

function drawer(price, cash, cid) {
  var totCid = total(cid),
      due = cash - price;
  if (totCid < due) {
    return 'Insufficient Funds';
  }
  if (totCid === due) {
    return 'Closed';
  }
  return makeChange(due, cid);
}

module.exports = drawer;
