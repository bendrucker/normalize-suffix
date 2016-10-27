'use strict'

var test = require('tape')
var normalize = require('./')

test(function (t) {
  t.deepEqual(normalize('_', {foo: 'bar', baz: 'qux'}), {
    foo: 'bar',
    baz: 'qux'
  }, 'noop')

  t.deepEqual(normalize('_id', {foo_id: 'bar'}), {
    foo: {
      id: 'bar'
    }
  }, 'simple')

  t.deepEqual(normalize('_id')({foo_id: 'bar'}), {
    foo: {
      id: 'bar'
    }
  }, 'partial')

  t.deepEqual(normalize('_id', {foo_id: 'bar', foo: {bar: 'baz'}}), {
    foo: {
      id: 'bar',
      bar: 'baz'
    }
  }, 'merge')

  t.deepEqual(normalize('_id', {foo: {bar: 'baz'}, foo_id: 'bar'}), {
    foo: {
      id: 'bar',
      bar: 'baz'
    }
  }, 'merge reversed key order')

  t.deepEqual(normalize('_id', {foo_id: 'bar', foo: 'baz'}), {
    foo_id: 'bar',
    foo: 'baz'
  }, 'skip')

  t.end()
})
