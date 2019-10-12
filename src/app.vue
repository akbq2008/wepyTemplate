<style lang="sass">
</style>

<script>
import wepy from '@wepy/core'
import eventHub from './common/eventHub'
import checkUpdateVersion from '@/utils/update'
wepy.app({
  hooks: {
    // App 级别 hook，对整个 App 生效
    // 同时存在 Page hook 和 App hook 时，优先执行 Page hook，返回值再交由 App hook 处
    'before-setData': function (dirty) {
      console.log('setData dirty: ', dirty)
      return dirty
    }
  },
  globalData: {
    userInfo: null
  },

  onLaunch () {

    eventHub.$on('app-launch', (...args) => {
      console.log('app-launch event emitted, the params are:')
      console.log(args)
    })
  },
  created () {
    checkUpdateVersion();
  },
  methods: {
  }
})
</script>
<config>
{
    "pages": [
        "pages/index", 
        "pages/user"
    ], 
    "window": {
        "backgroundTextStyle": "light", 
        "navigationBarBackgroundColor": "#fff", 
        "navigationBarTitleText": "WeChat", 
        "navigationBarTextStyle": "black"
    }, 
    "tabBar": {
        "color": "#7A7E83", 
        "selectedColor": "#1296db", 
        "borderStyle": "black", 
        "backgroundColor": "#ffffff", 
        "list": [
            {
                "pagePath": "pages/index", 
                "iconPath": "static/images/home.png", 
                "selectedIconPath": "static/images/home_active.png", 
                "text": "首页"
            }, 
            {
                "pagePath": "pages/user", 
                "iconPath": "static/images/user.png", 
                "selectedIconPath": "static/images/user_active.png", 
                "text": "尾页"
            }
        ]
    }
}
</config>
