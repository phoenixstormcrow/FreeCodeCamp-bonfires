/* friendlyDateRanges.js tests */

var test = require('tape'),
    friendly = require('../friendlyDateRanges');

test('tests', function (t) {
  t.deepEqual(friendly(['2022-09-05', '2023-09-04']), ['September 5th, 2022','September 4th, 2023']);
  t.deepEqual(friendly(['2017-01-01', '2017-01-01']), ['January 1st, 2017'], 'since we do not duplicate only return once');
  t.deepEqual(friendly(['2016-03-01', '2016-05-05']), ['March 1st','May 5th, 2016']);
  t.deepEqual(friendly(['2015-12-01', '2017-02-03']), ['December 1st, 2015','February 3rd, 2017']);
  t.deepEqual(friendly(['2015-12-01', '2016-02-03']), ['December 1st','February 3rd'], 'one month apart can be inferred it is the next year');
  t.deepEqual(friendly(['2015-07-01', '2015-07-04']), ['July 1st','4th'], 'ending month should be omitted since it is already mentioned');
  t.end();
});
