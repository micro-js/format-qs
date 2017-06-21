/**
 * Imports
 */

var formatQs = require('..')
var test = require('tape')

/**
 * Tests
 */

test('should work', function (t) {
  t.equal(formatQs({a: 1, b: 2}), 'a=1&b=2')
  t.end()
})
