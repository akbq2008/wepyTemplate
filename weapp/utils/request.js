"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = request;

var path = require('../vendor.js')(5);

var baseURL = require('index.js');

console.log(baseURL, "env");

function request(url) {
  var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "GET";
  var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  return new Promise(function (resolve, reject) {
    wx.showLoading({
      title: "拼命加载中..."
    });
    wx.request({
      url: 'https://www.baidu.com' + url,
      method: method,
      data: data,
      header: {
        'content-type': 'application/json',
        'Authorization': 'Bearer ' + wx.getStorageSync('token')
      },
      success: function success(res) {
        if (res.statusCode < 200 || res.statusCode > 300) {
          return reject(res.data || {});
        } else if (res.data.code === 409) {
          // 授权过期
          wx.removeStorageSync("token");
          wx.removeStorageSync("userInfo");
          wx.redirectTo({
            url: "/pages/login/main"
          });
        }

        wx.hideLoading();
        return resolve(res.data || {});
      },
      fail: function fail(err) {
        wx.hideLoading();
        reject(err);
        console.log('failed' + err);
      },
      complete: function complete(res) {
        wx.hideLoading();
      }
    });
  });
}