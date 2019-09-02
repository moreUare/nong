//index.js
//获取应用实例
const app = getApp()
var md5 = require('../../utils/md5');
var urls = require('../../utils/url.js');
var common = require('../../utils/Common.js');

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),

    code: '',     //openid

    securityStr: ""

  },
  //事件处理函数

  authorize: function(){
    wx.getUserInfo({
      success: function(res){
        // console.log(res);
      }
    });
    //跳转登录界面
    wx.navigateTo({
      url: '../register/register',
    });
    //
    wx.login({
      success: res=>{
        console.log("code = " + res.code);
        wx.request({
          url: 'https://api.weixin.qq.com/sns/jscode2session?appid=wx1cb90d08d6d3c0a0&secret=73a14f7f80de0fe5a66b034f630b1766&js_code=' + res.code + '&grant_type=authorization_code',
          success: res=>{
            console.log('openid=' + res.data.openid);
            this.setData({
              code: res.data.openid
            });
            var md5Str = common.security(res.data.openid)  //md5编码
            this.setData({
              securityStr: md5Str
            });
          console.log('security=' + this.data.securityStr);
          //调用微信登录接口
            wx.request({            //  {wx_code}/{securityStr}
              url: urls.wxLogin.sOCKET_USERLOGIN_WX + "{" + this.data.code + "}/" + "{" + this.data.securityStr + "}",
              success: res => {
                console.log("UserInfo_Result的值:");
                console.log(res);      //返回值 userInfo_Result
              }
            })
          }
        }) 
        /**/
      }
    });
   

    

    
    


    // wx.request({
    //   url: '',
    // })

  },




  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
