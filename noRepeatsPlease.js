/* noRepeatsPlease.js

Return the number of total permutations
of the provided string that don't have
repeated consecutive letters.

For example, 'aab' should return 2
because it has 6 total permutations
but only 2 of them don't have the same letter
(in this case 'a') repeating.

*/

var permutations = require('heaps-algorithm');

function permAlone(str) {
  var perms = permutations(str.split('')),
      noReps = perms.filter(function (perm) {
        return !perm.some(function (val, idx, arr) {
          return val === arr[idx + 1];
        });
      });
  return noReps.length;
}

module.exports = permAlone;
