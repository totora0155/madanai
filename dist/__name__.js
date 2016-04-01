/*!
 * Copyright 2016, nju33
 * Released under the MIT License
 * https://github.com/totora0155/__name__.js
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.__name__ = factory());
}(this, function () { 'use strict';

  function __name__() {
    return Promise.resolve('Madanai');
  };

  return __name__;

}));