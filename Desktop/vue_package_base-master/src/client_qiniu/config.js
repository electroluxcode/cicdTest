/*
七牛云配置
*/
const qiniu = require('qiniu')

// 创建上传凭证
const accessKey = 'cHIz5yG-kt4SdeTLEb7KpybqePfQLuhrTPkKvJLt'
const secretKey = 'gGNtPiiYcpUNodCc0fJ7thfrX3xv48MhoX1Nuldg'
const mac = new qiniu.auth.digest.Mac(accessKey, secretKey)
const options = {
  scope: 'electrovue',
  expires: 7200
}
const putPolicy = new qiniu.rs.PutPolicy(options)
const uploadToken = putPolicy.uploadToken(mac)

module.exports = {
  uploadToken
}
