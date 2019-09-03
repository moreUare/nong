var util = require('./util.js');
var md5 = require('./md5.js')
////////////////////////getDate'
var getDate = () => {
  var time = util.myTime(new Date());
  return time;
}


///////////////////生成SecurityStr
const staffId = "^wangchenjiangengcheng$";
var security = (par) => {
  let temp = getDate() + staffId;
  console.log(md5(temp + par))
  //md5转换
  return md5(temp + par);
}

////////////////////验证手机号码
var checkPhoneNum = (phoneNumber) => {
  let str = /^1\d{10}$/;        //正则表达式 
  if (str.test(phoneNumber)) {
    return true
  } else {
    return false
  }
}


module.exports = {
  getDate: getDate,
  security: security,
  checkPhoneNum: checkPhoneNum
}