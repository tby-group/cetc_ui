import request from '@/utils/request'

export function add(data) {
  return request({
    url: '/api-project/projectMonthCommit/add',
    method: 'post',
    data
  })
}

export function findAll(id) {
  return request({
    url: '/api-project/projectMonthCommit/findAll/' + id,
    method: 'get'
  })
}
