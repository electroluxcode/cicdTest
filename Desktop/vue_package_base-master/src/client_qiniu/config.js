/*
��ţ������
*/
const qiniu = require('qiniu')

// �����ϴ�ƾ֤
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
