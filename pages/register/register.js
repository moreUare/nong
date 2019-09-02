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
  goRegiste: function(){
    wx.navigateTo({
      url: '../bindSuccss/bindSuccss',
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