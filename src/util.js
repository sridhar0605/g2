/**
 * @fileOverview The util method based on the lodash.
 * @author dxq613@gmail.com
 * @see https://github.com/lodash/lodash
 */

function _mix(dist, obj) {
  for (const k in obj) {
    if (obj.hasOwnProperty(k) && k !== 'constructor' && obj[k] !== undefined) {
      dist[k] = obj[k];
    }
  }
}

const PRECISION = 0.00001; // 常量，据的精度，小于这个精度认为是0

const util = {
  each: require('lodash/each'),
  isNull: require('lodash/isNull'),
  isObject: require('lodash/isObject'),
  isNumber: require('lodash/isNumber'),
  isString: require('lodash/isString'),
  lowerFirst: require('lodash/lowerFirst'),
  upperFirst: require('lodash/upperFirst'),
  isNil: require('lodash/isNil'),
  isArray: require('lodash/isArray'),
  isDate: require('lodash/isDate'),
  toArray: require('lodash/toArray'),
  template: require('lodash/template'),
  indexOf: require('lodash/indexOf'),
  isFunction: require('lodash/isFunction'),
  assign: require('lodash/assign'),
  fixedBase(v, base) {
    const str = base.toString();
    const index = str.indexOf('.');
    if (index === -1) {
      return Math.round(v);
    }
    let length = str.substr(index + 1).length;
    if (length > 20) {
      length = 20;
    }
    return parseFloat(v.toFixed(length));
  },
  mix(dist, obj1, obj2, obj3) {
    if (obj1) {
      _mix(dist, obj1);
    }

    if (obj2) {
      _mix(dist, obj2);
    }

    if (obj3) {
      _mix(dist, obj3);
    }
    return dist;
  },
  equal(a, b) {
    return Math.abs((a - b)) < PRECISION;
  }
};

module.exports = util;