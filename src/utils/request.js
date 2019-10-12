// const path = require('path');
// const baseURL = require(path.resolve(__dirname, '../../config/dev'));
// console.log(baseURL, "env");
const baseURL = process.env.NODE_ENV === 'production' ? 'http://www.baidu.com' : 'http://www.baidu.com'
export default function request (url, method = "GET", data = {}) {
    return new Promise((resolve, reject) => {
        wx.showLoading({
            title: "拼命加载中..."
        });
        wx.request({
            url: baseURL + url,
            method: method,
            data: data,
            header: {
                'content-type': 'application/json',
                'Authorization': 'Bearer ' + wx.getStorageSync('token')
            },
            success: res => {
                if (res.statusCode < 200 || res.statusCode > 300) {
                    return reject(res.data || {});
                } else if (res.data.code === 409) {
                    // 授权过期
                    wx.removeStorageSync("token");
                    wx.removeStorageSync("userInfo");
                    wx.redirectTo({
                        url: "/pages/login/main"
                    })
                }
                wx.hideLoading()
                return resolve(res.data || {});
            },
            fail: function (err) {
                wx.hideLoading()
                reject(err)
                console.log('failed' + err)
            },
            complete: res => {
                wx.hideLoading()
            }
        });
    })
}
