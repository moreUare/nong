/*****************************/
/**
 * url
 */

var baseUrl = 'http://49.234.123.71/WoAiNongService.svc/';

//wx_code微信登录
var wxLogin = {
  "sOCKET_USERLOGIN_WX": baseUrl + "UserLogin_WX/"
}

//wx获取验证码
var wxVerCodeSms = {
  "sendVerCodeSms": baseUrl + "SendVerCodeSms/",
  "verifyCodeSms": baseUrl + "VerifyCodeSms/"
}

module.exports = {
  baseUrl: baseUrl,
  wxLogin: wxLogin,
  wxVerCodeSms: wxVerCodeSms
}