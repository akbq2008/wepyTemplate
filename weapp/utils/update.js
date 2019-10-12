"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = checkUpdateVersion;
var lang = wx.getStorageSync('lang') ? wx.getStorageSync('lang') : 'zh';
var isZh = lang === 'zh' || lang === 'zh_CN';

function checkUpdateVersion() {
  //创建 UpdateManager 实例
  var updateManager = wx.getUpdateManager(); //检测版本更新

  updateManager.onCheckForUpdate(function (res) {
    // 请求完新版本信息的回调
    if (res.hasUpdate) {
      //监听小程序有版本更新事件
      updateManager.onUpdateReady(function () {
        wx.showModal({
          title: isZh ? '更新提示' : 'Update Info',
          content: isZh ? '新版本已经准备好，是否重启应用？' : 'New version is available, restart now?',
          success: function success(res) {
            if (res.confirm) {
              // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
              updateManager.applyUpdate();
            }
          }
        });
      });
      updateManager.onUpdateFailed(function () {
        // 新版本下载失败
        wx.showModal({
          title: isZh ? '已经有新版本咯~' : 'New version is available',
          content: isZh ? '请您删除当前小程序，到微信 “发现-小程序” 页，重新搜索打开呦~' : 'Please delete current version and find new version in \'Discover - Mini Programs\' '
        });
      });
    }
  });
}