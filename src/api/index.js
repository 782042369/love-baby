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
    url: 'search/rest/taskGeneralBasicRestServer/getTaskAcceptCondition',
    method: 'get',
    params
  })
}
//  受理条件 依据
export function setGist(params) {
  return request({
    url: 'search/rest/taskGeneralBasicRestServer/getTaskByLaw',
    method: 'get',
    params
  })
}

// 申请材料 列表页
export function datalist(data) {
  return request({
    contentType: 'application/json',
    url: 'search/rest/taskGeneralMaterialcatalogueRestServer/getTaskGeneralMaterialcatalogue',
    // url: 'https://www.easy-mock.com/mock/5a65b22907c2c26fa621b830/example/demo',
    method: 'post',
    data
  })
}
// 申请材料 详情页
export function metailDetail(params) {
  return request({
    url: 'search/rest/taskGeneralMaterialcatalogueRestServer/getTaskGeneralMaterialcatalogueByRowGuid',
    method: 'get',
    params
  })
}

/* 收费情况 */
export function charge(params) {
  return request({
    url: 'search/rest/taskGeneralFeeProjectRestServer/getTaskGeneralFeeProject',
    method: 'get',
    params
  })
}
export function detail(data) {
  return request({
    contentType: 'application/json',
    url: 'https://www.easy-mock.com/mock/5a65b22907c2c26fa621b830/example/http:demo',
    method: 'post',
    data
  })
}
/* 我的办件 */
export function handleList(data) {
  return request({
    contentType: 'application/json',
    url: '/search/rest/taskAcceptanceInfoRestServer/getTaskAcceptanceInfoByApplyerPageCode',
    // url: 'https://www.easy-mock.com/mock/59a8ca664006183e48ef8048/example/handleList',
    method: 'post',
    data
  })
}
/* 我的办件 详情页 */
export function handleDetail(params) {
  return request({
    url: '/search/rest/taskAcceptanceInfoRestServer/getTaskAcceptanceInfoByProjectNo',
    method: 'get',
    params
  })
}
/* 我的办件 办件结果 */
export function handleResult(params) {
  return request({
    contentType: 'application/json',
    url: '/search/rest/taskAcceptanceResultInfoRestServer/getTaskAcceptanceResultInfoByProjectNo',
    method: 'get',
    params
  })
}
/* 我的办件 办件结果 */
export function handlePhoto(params) {
  return request({
    url: 'search/rest/taskAcceptanceResultInfoRestServer/getAcceptancePicture',
    method: 'get',
    params
  })
}

/* 办事指南 */
export function getGuideInfo(params) {
  return request({
    url: 'search/rest/taskGeneralBasicRestServer/getTaskGeneralBasicRest',
    method: 'get',
    params
  })
}
/* 常见问题 */
export function problem(data) {
  return request({
    contentType: 'application/json',
    url: 'search/rest/taskGeneralQuestionsRestServer/getTaskQuestion',
    method: 'post',
    data
  })
}
/* 提交评价 */
export function subAppraise(params) {
  return request({
    url: 'https://www.easy-mock.com/mock/59a8ca664006183e48ef8048/example/subAppraise',
    method: 'post',
    params
  })
}
// tanqq MOCK
export function problemUsually(params) {
  return request({
    url: 'https://www.easy-mock.com/mock/5b20b61c2d33d841d1fbbf58/tanqq/thing/problemUsually',
    method: 'get',
    params
  })
}
// 咨询方式
export function consWay(params) {
  return request({
    url: 'https://www.easy-mock.com/mock/59a8ca664006183e48ef8048/example/consWay',
    method: 'get',
    params
  })
}
