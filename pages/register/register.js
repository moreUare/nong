// pages/register/register.js
const app = getApp();
var md5 = require('../../utils/md5');
var urls = require('../../utils/url.js');
var common = require('../../utils/Common.js');



Page({

  /**
   * 页面的初始数据
   */
  data: {
    code: '',

    phoneNumber: "",
    verCodeSms: "",
    password: "",
    passwordAgain: "",

    showModal1: false,
    showModal2: false,

    size1: "32",
    size2: "28",
    fweight1: "bold",
    fweight2: "normal",
    style1: "4rpx solid #fff",
    style2: "none",
    chooseIn: true,
    chooseUp: false,


    //从全局变量获取状态栏高度
    navHeight: app.globalData.navHeight,
  },

  phoneInput: function(e){
    var that = this;
    var value = e.detail.value;
    that.setData({
      phoneNumber: value
    })
  },
  verCodeSmsInput: function(e){
    var that = this;
    var value = e.detail.value;
    that.setData({
      verCodeSms: value
    })
  },
  passwordInput1: function(e){
    var that = this;
    var value = e.detail.value;
    that.setData({
      password: value
    })
  },
  passwordInput2: function(e){
    var that = this;
    var value = e.detail.value;
    that.setData({
      passwordAgain: value
    })
  },

  //注册账号.获取验证码
  sendVerCode: function(){
    let phoneNumber = this.data.phoneNumber;
    let codeType = 1;
    let md5Password =  common.security(phoneNumber+""+codeType);
    wx.request({
      url: urls.wxVerCodeSms.sendVerCodeSms + "{" + phoneNumber + "}/" + "{" + codeType + "}/" + "{" + md5Password + "}",
      success: res => {
        console.log(res)
      } 
    })
  },
  
  //验证 验证码
  //假设验证成功 调用注册接口
  goRegiste: function () {
    if(this.data.password == this.data.passwordAgain){
      wx.login({
        success: res=>{
          wx.request({
            url: 'https://api.weixin.qq.com/sns/jscode2session?appid=wx1cb90d08d6d3c0a0&secret=73a14f7f80de0fe5a66b034f630b1766&js_code=' + res.code + '&grant_type=authorization_code',
            success: res1=>{
              this.setData({
                code: res1.data.openid
              })
              //console.log("opneid=" + this.data.code);
              if(this.data.code){
                var userName = this.data.phoneNumber; //用户名
                var password = this.data.password;    //密码
                var md5Password = common.security("" + userName + password + this.data.code);
                wx.request({
                  url: urls.wxRegister.userRegister + "{" + userName + "}/{" + password + "}/{" + this.data.code + "}/{" + md5Password + "}",
                  success: res=>{
                    console.log("注册结果");
                    console.log(res);
                    //调用成功则进入绑定成功页面
                      if(res.statusCode == 200){
                        wx.navigateTo({
                          url: '../bindSuccss/bindSuccss',
                        })
                      }
                  }
                })
              }
            }
          })
        }
      })
    
    }else{
      console.log("do nothing")
    }

  
  },






  //登录账号
  signIn: function(event){
    this.setData({
      size1: 32,
      size2: 28,
      fweight1: "bold",
      fweight2: "normal",
      style1: "4rpx solid #fff",
      style2: "none",
      chooseIn: true,
      chooseUp: false
    })
  },
  goSignIn: function(){
    this.setData({
      size1: 32,
      size2: 28,
      fweight1: "bold",
      fweight2: "normal",
      style1: "4rpx solid #fff",
      style2: "none",
      chooseIn: true,
      chooseUp: false
    })
  },
  //注册账号
  signUp: function(){
    this.setData({
      size1: 28,
      size2: 32,
      fweight1: "normal",
      fweight2: "bold",
      style1: "none",
      style2: "4rpx solid #fff",
      chooseIn: false,
      chooseUp: true
    })
  },
  goSignUp: function(event){
    this.setData({
      size1: 28,
      size2: 32,
      fweight1: "normal",
      fweight2: "bold",
      style1: "none",
      style2: "4rpx solid #fff",
      chooseIn: false,
      chooseUp: true
    })
  },

  //忘记密码
  goFPassword: function(){
    wx.navigateTo({
      url: '../ForgetPassword/ForgetPassword',
    })
  },
  
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})