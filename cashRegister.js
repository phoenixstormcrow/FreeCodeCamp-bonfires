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
*/

var multipliers = [
  'ONE HUNDRED', 100
  'TWENTY', 20,
  'TEN', 10,
  'FIVE', 5,
  'ONE', 1,
  'QUARTER', 0.25,
  'DIME', 0.1,
  'NICKEL', 0.05,
  'PENNY', 0.01,
];

function makeChange(amount) {

}

function drawer(price, cash, cid) {
  var change;
  // Here is your change, ma'am.
  return change;
}

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

drawer(19.50, 20.00, exampleCid);
