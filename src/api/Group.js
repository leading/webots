import Vue from 'vue'

const urlPrefix = 'http://qunmiao.wemiyun.com'
const urlPort = ':80'
const urlDict = {
  // 微信群列表
  getGroups: '/wx/groups',
  // 微信群成员
  getMembers: '/wx/groups/members'
}
const methodDict = {
  get: 'GET',
  post: 'POST',
  put: 'PUT',
  delete: 'DELETE'
}

export default {
  getGroups ({ uin, access_token, offset, limit }) {
    return new Promise((resolve, reject) => {
      Vue.http({
        url: urlPrefix + urlPort + urlDict.getGroups,
        method: methodDict.get,
        params: {
          access_token: access_token,
          uin: uin,
          offset: offset,
          limit: limit
        }
      }).then(response => {
        if (response.status === 200 || response.status === 204 || response.status === 201) {
          resolve(response.body)
        }
      }, response => {
        reject(response.body.message)
      })
    })
  },
  getMembers ({ access_token, uin, group_id, offset, limit }) {
    return new Promise((resolve, reject) => {
      Vue.http({
        url: urlPrefix + urlPort + urlDict.getMembers,
        method: methodDict.get,
        params: {
          access_token: access_token,
          uin: uin,
          group_id: group_id,
          offset: offset,
          limit: limit
        }
      }).then(response => {
        if (response.status === 200 || response.status === 204 || response.status === 201) {
          resolve(response.body)
        }
      }, response => {
        reject(response.body.message)
      })
    })
  }
}
