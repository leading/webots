import Vue from 'vue'

const urlPrefix = 'http://neituiyun.com'
const urlPort = ':1000'
const urlDict = {
  // 群消息
  getMessages: '/wx/msgs'
}
const methodDict = {
  get: 'GET',
  post: 'POST',
  put: 'PUT',
  delete: 'DELETE'
}

export default {
  getMessages ({ uin, receiver_name }) {
    return new Promise((resolve, reject) => {
      Vue.http({
        url: urlPrefix + urlPort + urlDict.getMessages,
        method: methodDict.get,
        params: {
          uin: uin,
          receiver_name: receiver_name
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