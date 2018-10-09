/*
 * @Author: yanghongxuan
 * @Date: 2018-05-13 11:37:57
 * @功能:   全局过滤器
 * @最后修改时间: 2018-05-13 11:37:57
 */
let DateFilters = value => { // yyyy-MM-dd HH:mm:ss"
  let date = new Date(value)
  let y = date.getFullYear()
  let MM = date.getMonth() + 1
  MM = MM < 10 ? ('0' + MM) : MM
  let d = date.getDate()
  d = d < 10 ? ('0' + d) : d
  let h = date.getHours()
  h = h < 10 ? ('0' + h) : h
  let m = date.getMinutes()
  m = m < 10 ? ('0' + m) : m
  let s = date.getSeconds()
  s = s < 10 ? ('0' + s) : s
  return y + '-' + MM + '-' + d + ' ' + h + ':' + m + ':' + s
}
let DateFilters1 = value => { // yyyy-MM-dd HH:mm
  let date = new Date(value)
  let y = date.getFullYear()
  let MM = date.getMonth() + 1
  MM = MM < 10 ? ('0' + MM) : MM
  let d = date.getDate()
  d = d < 10 ? ('0' + d) : d
  let h = date.getHours()
  h = h < 10 ? ('0' + h) : h
  let m = date.getMinutes()
  m = m < 10 ? ('0' + m) : m
  return y + '-' + MM + '-' + d + ' ' + h + ':' + m
}
let DateFilters2 = value => { // yyyy-MM-dd
  let date = new Date(value)
  let y = date.getFullYear()
  let MM = date.getMonth() + 1
  MM = MM < 10 ? ('0' + MM) : MM
  let d = date.getDate()
  d = d < 10 ? ('0' + d) : d
  return y + '-' + MM + '-' + d
}
let DateFilters3 = value => { // yyyy-MM-dd
  let date = new Date(value)
  let y = date.getFullYear()
  let MM = date.getMonth() + 1
  MM = MM < 10 ? ('0' + MM) : MM
  let d = date.getDate()
  d = d < 10 ? ('0' + d) : d
  return y + '年' + MM + '月' + d + '日'
}
let openType = value => { // 公开方式 过滤器
  let arr = ''
  arr = {
    '1': '公开',
    '2': '申请',
    '3': '私有'
  }[value]
  return arr
}
let cacheStatus = value => { // 缓存开启 过滤器
  let arr = ''
  arr = {
    '0': '停用',
    '1': '启用',
    '': '---',
    undefined: '无'
  }[value]
  return arr
}
let ownType = value => { // 分类 过滤器
  let arr = ''
  arr = {
    '1': '标准服务',
    '2': '注册应用',
    '': '---',
    undefined: '无'
  }[value]
  return arr
}
let rail = value => { // --- 过滤器 有值传回 无值‘---’
  if (value) {
    return value
  } else {
    return '无'
  }
}
let AuditStatus = value => { // 审核状态 过滤器
  let arr = ''
  arr = {
    '1': '审核中',
    '2': '驳回',
    '3': '通过',
    '': '---',
    undefined: '无'
  }[value]
  return arr
}

let AuthType = value => { // 认证方式 1应用认证  2自然人认证 3法人认证 4工作人员认证  2_1 3_1 3_4_14 2 3 4 可能的 返回值
  let arr = ''
  arr = {
    '2_1': '自然人认证，应用认证',
    '3_1': '法人认证，应用认证',
    '4_1': '工作人员认证，应用认证',
    '1': '应用认证',
    '2': '自然人认证',
    '3': '法人认证',
    '4': '工作人员认证'
  }[value]
  return arr
}
let CheckSign = value => { // 安全链路 过滤器
  let arr = ''
  arr = {
    false: '不开启',
    true: '开启',
    '': '---',
    undefined: '无'
  }[value]
  return arr
}
let ReqMethod = value => { // 请求方式 过滤器
  let arr = ''
  arr = {
    1: 'get',
    2: 'post',
    3: 'put',
    4: 'delete',
    '': '---',
    undefined: '无'
  }[value]
  return arr
}
/* eslint-disable */
let getURLParameters = (url) => { // 获取url参数 json
  return (url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce((a, v) => {
    return a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1), a
  }, {})
}
/* eslint-disable */
let getUrlParam = (name) => { // 获取单个
  var result = window.location.search.match(new RegExp("[\?\&]" + name + "=([^\&]+)", "i"));
    if (result == null || result.length < 1) {
        return "";
    }
    return result[1];
}
export default {
  DateFilters,
  DateFilters1,
  DateFilters2,
  DateFilters3,
  openType,
  cacheStatus,
  ownType,
  rail,
  AuthType,
  CheckSign,
  ReqMethod,
  AuditStatus,
  getURLParameters,
  getUrlParam
}
