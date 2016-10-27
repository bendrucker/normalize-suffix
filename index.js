'use strict'

const partial = require('ap').partial
const endsWith = require('ends-with')
const isObject = require('is-obj')
const hasOwn = Object.prototype.hasOwnProperty

module.exports = function normalize (suffix, data) {
  if (arguments.length < 2) {
    return partial(normalize, suffix)
  }

  return Object.keys(data).reduce(function (acc, key) {
    const value = data[key]

    if (hasOwn.call(acc, key)) {
      Object.assign(acc[key], value)
      return acc
    }

    if (!endsWith(key, suffix)) {
      return Object.assign(acc, {[key]: value})
    }

    const targetKey = key.slice(0, -1 * suffix.length)

    if (hasOwn.call(data, targetKey)) {
      if (!isObject(data[targetKey])) {
        return Object.assign(acc, {[key]: value})
      }
    }

    if (!hasOwn.call(acc, targetKey)) {
      acc[targetKey] = {}
    }

    acc[targetKey][suffix.slice(1)] = value

    return acc
  }, {})
}
