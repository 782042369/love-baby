/*
 * @Author: yanghongxuan
 * @Date: 2018-04-24 14:26:32
 * @功能: 国家政务
 * @修改: aaron
 * @最后修改时间: 2018-04-24 14:26:32
 */

import request from '@/utils/request'

export function getList(params) {
  return request({
    url: 'portal/queryTheme',
    method: 'post',
    params
  })
}
// 流程 图
export function liucheng(params) {
  return request({
    url: 'search/rest/taskGeneralBasicRestServer/getTaskHandlePicture',
    method: 'get',
    params
  })
}
//  受理条件 依据
export function yiju(params) {
  return request({
    url: 'https://apiserver.jijiankang.cn/api-rest/product/v9/detail?productId=0e7870d7653248c8ad6bffc5d36bee2d',
    method: 'get',
    params
  })
}
