"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.searchValue = searchValue;

var _request = _interopRequireDefault(require('../utils/request.js'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function searchValue(data) {
  return (0, _request["default"])('/s', 'GET', data);
}