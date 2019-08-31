// pages/register/register.js
const app = getApp();




Page({

  /**
   * 页面的初始数据
   */
  data: {
    showModal1: true,
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