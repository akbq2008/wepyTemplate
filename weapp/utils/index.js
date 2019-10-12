"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseTime = parseTime;
exports.checkLogin = checkLogin;
exports.wxLogin = wxLogin;
exports.wxGetUserInfo = wxGetUserInfo;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function parseTime(time, cFormat) {
  if (arguments.length === 0) {
    return null;
  }

  var format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}';
  var date;

  if (_typeof(time) === 'object') {
    date = time;
  } else {
    if (('' + time).length === 10) time = parseInt(time) * 1000;
    date = new Date(time);
  }

  var formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  };
  var time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, function (result, key) {
    var value = formatObj[key];
    if (key === 'a') return ['一', '二', '三', '四', '五', '六', '日'][value - 1];

    if (result.length > 0 && value < 10) {
      value = '0' + value;
    }

    return value || 0;
  });
  return time_str;
}

function checkLogin() {
  return new Promise(function (resolve, reject) {
    if (wx.getStorageSync('token')) {
      resolve();
    } else {
      reject(new Error());
    }
  });
}

function wxLogin() {
  return new Promise(function (resolve, reject) {
    wx.login({
      success: function success(res) {
        if (res.code) {
          resolve(res);
        } else {
          reject(res);
        }
      },
      fail: function fail(err) {
        reject(err);
      }
    });
  });
}

function wxGetUserInfo() {
  return new Promise(function (resolve, reject) {
    wx.getUserInfo({
      withCredentials: true,
      success: function success(res) {
        resolve(res);
      },
      fail: function fail(err) {
        reject(err);
      }
    });
  });
}