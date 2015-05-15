/* friendlyDateRanges.js

Implement a way of converting two dates
into a more friendly date range
that could be presented to a user.

It must not show any redundant information in the date range.

For example, if the year and month are the same
then only the day range should be displayed.

Secondly, if the starting year is the current year,
and the ending year can be inferred by the reader,
the year should be omitted.

Input date is formatted as YYYY-MM-DD

*/

var months = [
  null,
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
],
daySuffixes = [
  'th',
  'st',
  'nd',
  'rd',
  'th',
  'th',
  'th',
  'th',
  'th',
  'th'
];

function format(arr) {
  var year = arr[0],
    month = arr[1],
    day = arr[2];

  console.log(year, month, day);
  return (month ? months[month] + ' ' : '')
    + day + daySuffixes[day % 10]
    + (year ? ', ' + year : '');
}

function friendly(range) {
  var parsed = range.map(function (date) {
    return date.split('-').map(function (str) {
      return parseInt(str, 10);
    });
  }),
  start = parsed[0],
  end = parsed[1],
  currentYear = (new Date()).getFullYear();

  // same dates
  if (range[0] === range[1]) return [format(start)];

  // start year is current year and next year inferrable
  if (start[0] === currentYear &&
      end[0] === start[0] + 1 &&
      end[1] < start[1]) {
    start[0] = null;
    end[0] = null;
  }

  // compare years:
  if (start[0] === end[0]) {
    start[0] = null;
    if (end[0] === currentYear) {
      end[0] = null;
    }
  }

  // compare months
  console.log(start, end);
  if (start[1] === end[1] && start[0] === end[0]) {
    end[1] = null;
  }

  return [format(start), format(end)];
}

//friendly(['2015-07-01', '2015-07-04']);
module.exports = friendly;
